import { TActionTableItem, TParsedAction, TTableParametersTypes } from './types'
import { normalizeName } from './utils'

export function generateInputType(input: TTableParametersTypes): string {
  function aggregate(templateName: string, template: string) {
    return `${template ? `${templateName}: { ${template} },` : ''}`
  }

  const templateVariable = `${
    input.templateVariable
      ? input.templateVariable
          .map(({ name }) => {
            return `${normalizeName(name)}: string`
          })
          .join(', ')
      : ''
  }`

  const acceptedParameter = `${
    input.acceptedParameter
      ? input.acceptedParameter
          .map(({ name, type }) => {
            return `${name}: ${formatType(type)}`
          })
          .join(', ')
      : ''
  }`

  const queryParameter = `${
    input.queryParameter
      ? input.queryParameter
          .map(({ name, type }) => {
            return `${name}: ${formatType(type)}`
          })
          .join(', ')
      : ''
  }`

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
  return template.replace(/{.*?}/g, (str: string)=> {
    const parsed = str.slice(1,-1)
    return `\${data.templateVariable.${parsed}}`
  })
}

export function generateFunctionBody(methodInfo: TActionTableItem): string {

  return (
`
    if (
      Object.keys(data.templateVariable).length === ${methodInfo.input.templateVariable?.length} &&
      ${methodInfo.input.templateVariable?.map((parameter)=>`'${parameter.name}' in data.templateVariable`)
      .join(' &&\n')}
    ) {
      return axios[${methodInfo.httpMethod}]( \`\${baseUrl}/owner/github_id/\${data.templateVariable.github_id}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        data: data.templateVariable.acceptedParameter,
        params: data.templateVariable.queryParameter,
      })
    }
`
  )
}

export function generateFunction(action: TParsedAction): string {
  return Object.entries(action)
    .map(([name, actionTableItem]) => {
      return `
function ${name} (data: ${actionTableItem
        .map((data) => generateInputType(data.input))
        .join(' | ')}){
          ${actionTableItem.map(data => generateFunctionBody(data)).join('\n')}
        }
`
    })
    .join('')
}

// export function generateType(action: TParsedAction): string {
//   Object.keys(action).map(([key, value])=>{})
//   return action.toString()
// }

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
