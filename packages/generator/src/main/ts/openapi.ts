import { OpenAPIV3 } from 'openapi-types'

import { getActions, getLinks } from './parser'
import { TParameter, TParsedPage } from './types'
import { normalizeName } from './utils'

export function formatType(type: string) {
  const typeMap = {
    String: 'string',
    Integer: 'number',
    Unknown: 'string',
    Boolean: 'boolean',
  }

  const arrayPrefix =
    type[0] === '[' && type[type.length - 1] === ']' ? '[]' : ''
  if (arrayPrefix) {
    type = type.slice(1, -1)
  }

  // @ts-ignore
  return typeMap[type] || 'string'
}

function getParameters(input?: TParameter[]) {
  return (
    input?.map((value) => ({
      name: normalizeName(value.name),
      in: 'path',
      required: true,
      schema: {
        type: 'string',
      },
    })) || []
  )
}

function getQuery(input?: TParameter[]) {
  return (
    input?.map((value) => ({
      name: normalizeName(value.name),
      in: 'query',
      required: true,
      schema: {
        type: 'string',
      },
    })) || []
  )
}

function getBody(input?: TParameter[]) {
  if (!input) return {}
  return {
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: input.reduce((acc, el) => {
              return { ...acc, [el.name]: { type: formatType(el.type) } }
            }, {}),
          },
        },
      },
    },
  }
}

export function generateOpenapi(data: TParsedPage[]): OpenAPIV3.Document {
  return {
    openapi: '3.0.0',
    info: {
      title: 'travis-ci api',
      version: '1.0.0',
    },
    paths: data
      .flatMap((el) => el.actions) // TParsedPage[] => TParsedAction[]
      .flatMap((el) => Object.values(el).flat()) // TParsedAction[] => TActionTableItem[]
      .map(({ httpMethod, template, input }) => ({
        [normalizeName(template)]: {
          [httpMethod.toLowerCase()]: {
            responses: {
              default: {
                description: '',
              },
            },
            parameters: [
              ...getParameters(input.templateVariable),
              ...getQuery(input.queryParameter),
            ],
            ...getBody(input.acceptedParameter),
          },
        },
      }))
      .reduce((acc, el) => {
        return { ...acc, ...el }
      }, {}),
  }
}

export async function parseAndGenerateOpenapi(
  baseUrl: string,
  cookie?: string,
) {
  const links = await getLinks(baseUrl, cookie)
  const res = await Promise.all(links.map((str) => getActions(str, '')))

  return generateOpenapi(res)
}
