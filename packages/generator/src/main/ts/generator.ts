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

      return axios['${methodInfo.httpMethod.toLowerCase()}']( \`\${baseUrl}${generateUrl(
    methodInfo.template,
  )}\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
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
