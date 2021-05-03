import { promises as fs } from 'fs'

import { getActions, getLinks } from './parser'
import {
  TActionTableItem,
  TParameter,
  TParsedAction,
  TParsedPage,
  TTableParametersTypes,
} from './types'
import { unCapitalize } from './utils'

export function generateInputType(input: TTableParametersTypes): string {
  function aggregate(templateName: string, template: string) {
    return `${template ? `${templateName}: { ${template} },` : ''}`
  }

  function getParameter(vars?: TParameter[]) {
    return `${
      vars
        ? vars
            .map(({ name, type }) => {
              return `'${name}': ${formatType(type)}`
            })
            .join(', ')
        : ''
    }`
  }

  const templateVariable = `${
    input.templateVariable
      ? input.templateVariable
          .map(({ name }) => {
            return `'${name}': string`
          })
          .join(', ')
      : ''
  }`
  const acceptedParameter = getParameter(input.acceptedParameter)
  const queryParameter = getParameter(input.queryParameter)

  return `
{
${[
  aggregate('templateVariable', templateVariable),
  aggregate('acceptedParameter', acceptedParameter),
  aggregate('queryParameter', queryParameter),
]
  .filter((el) => {
    return el.length > 0
  })
  .join('')}
}
`
}

export function generateUrl(template: string) {
  return template.replace(/{.*?}/g, (str: string) => {
    const parsed = str.slice(1, -1)
    return `\${data.templateVariable['${parsed}']}`
  })
}

function generateGetAndDeleteBody(method: string, template: string) {
  return `return axios['${method}']( \`\${baseUrl}${generateUrl(template)}\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    `
}

function generatePostAndPathBody(method: string, template: string) {
  return `return axios['${method}']( \`\${baseUrl}${generateUrl(template)}\`,
  // @ts-ignore
  data?.acceptedParameter,
  {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        params: data?.queryParameter,
      })
    `
}

export function generateFunctionBody(methodInfo: TActionTableItem): string {
  const condition = methodInfo.input.templateVariable

  return `
 ${
   condition
     ? `   if (
      Object.keys(data.templateVariable).length === ${
        methodInfo.input.templateVariable?.length
      } &&
      ${methodInfo.input.templateVariable
        ?.map((parameter) => `'${parameter.name}' in data.templateVariable`)
        .join(' &&\n')}
    ) { `
     : ''
 }

  ${
    methodInfo.httpMethod.toLowerCase() === 'get' ||
    methodInfo.httpMethod.toLowerCase() === 'delete'
      ? generateGetAndDeleteBody(
          methodInfo.httpMethod.toLowerCase(),
          methodInfo.template,
        )
      : generatePostAndPathBody(
          methodInfo.httpMethod.toLowerCase(),
          methodInfo.template,
        )
  }
${condition ? '}' : ''}
`
}

export function generateFunction(action: TParsedAction): string {
  return Object.entries(action)
    .map(([name, actionTableItem]) => {
      return `
function ${name} (data: ${actionTableItem
        .map((data) => generateInputType(data.input))
        .join(' | ')}){
          ${actionTableItem
            .map((data) => generateFunctionBody(data))
            .join('\n')}
        }
`
    })
    .join('')
}

export function formatType(type: string) {
  const typeMap = {
    String: 'string',
    Integer: 'number',
    Unknown: 'any',
    Boolean: 'boolean',
  }

  const arrayPrefix =
    type[0] === '[' && type[type.length - 1] === ']' ? '[]' : ''
  if (arrayPrefix) {
    type = type.slice(1, -1)
  }

  // @ts-ignore
  return `${typeMap[type]}${arrayPrefix}`
}

export function generate({ title, actions }: TParsedPage) {
  return `
import axios from 'axios'

export function ${unCapitalize(title)} (baseUrl: string, token: string) {
  ${actions.map(generateFunction).join('\n')}
  return {
    ${title}: {
      ${actions.map((el) => Object.keys(el)).join(',\n')}
    }
  }
}
`
}

export async function generates(
  path: string,
  baseUrl: string,
  cookie?: string,
) {
  const links = await getLinks(baseUrl, cookie)
  const res = await Promise.all(links.map((str) => getActions(str, '')))

  await Promise.all(
    res.map(({ title, actions }) => {
      fs.writeFile(`${path}/${title}.ts`, generate({ title, actions }))
    }),
  )
}
