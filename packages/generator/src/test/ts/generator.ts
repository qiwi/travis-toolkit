import {
  generateInputType,
  generateFunction,
  generateFunctionBody,
} from '../../main/ts/index'

describe('generator', () => {
  describe('generateInputType', () => {
    it('return correct type with templateVariable and queryParameter', () => {
      expect(
        generateInputType({
          templateVariable: [
            {
              name: 'login',
              type: 'Unknown',
            },
          ],
          queryParameter: [
            {
              name: 'include',
              type: '[String]',
            },
          ],
        }),
      ).toBe(
        `
{
templateVariable: { 'login': string },queryParameter: { 'include': string[] },
}
`,
      )
    })
    it('return correct type with templateVariable', () => {
      const res = generateInputType({
        templateVariable: [
          {
            name: 'userId',
            type: 'Integer',
          },
          {
            name: 'beta_featureId',
            type: 'Integer',
          },
        ],
      })
      expect(res).toBe(
        `
{
templateVariable: { 'userId': string, 'beta_featureId': string },
}
`,
      )
    })
  })
  describe('generateFunctionBody', () => {
    it('return correct function body with templateVariable and templateVariable', () => {
      expect(
        generateFunctionBody({
          httpMethod: 'GET',
          template: '/owner/github_id/{github_id}/active',
          input: {
            templateVariable: [
              {
                name: 'github_id',
                type: 'Unknown',
              },
            ],
            queryParameter: [
              {
                name: 'include',
                type: '[String]',
              },
            ],
          },
        }),
      ).toBe(
        `
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'github_id' in data.templateVariable
    ) { 

  return axios['get']( \`\${baseUrl}/owner/github_id/\${data.templateVariable['github_id']}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    
}
`,
      )
    })
    it('return correct function body with templateVariable', () => {
      const res = generateFunctionBody({
        httpMethod: 'GET',
        template: '/owner/{login}/active',
        input: {
          templateVariable: [
            {
              name: 'login',
              type: 'Unknown',
            },
          ],
          queryParameter: [
            {
              name: 'include',
              type: '[String]',
            },
          ],
        },
      })
      expect(res).toBe(
        `
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'login' in data.templateVariable
    ) { 

  return axios['get']( \`\${baseUrl}/owner/\${data.templateVariable['login']}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    
}
`,
      )
    })
  })
  describe('generateFunction', () => {
    it('return correct function with "forOwner" action', () => {
      const res = generateFunction({
        forOwnerAction: [
          {
            httpMethod: 'GET',
            template: '/owner/github_id/{github_id}/active',
            input: {
              templateVariable: [
                {
                  name: 'github_id',
                  type: 'Unknown',
                },
              ],
              queryParameter: [
                {
                  name: 'include',
                  type: '[String]',
                },
              ],
            },
          },
          {
            httpMethod: 'GET',
            template: '/owner/{provider}/{login}/active',
            input: {
              templateVariable: [
                {
                  name: 'provider',
                  type: 'Unknown',
                },
                {
                  name: 'login',
                  type: 'Unknown',
                },
              ],
              queryParameter: [
                {
                  name: 'include',
                  type: '[String]',
                },
              ],
            },
          },
          {
            httpMethod: 'GET',
            template: '/owner/{login}/active',
            input: {
              templateVariable: [
                {
                  name: 'login',
                  type: 'Unknown',
                },
              ],
              queryParameter: [
                {
                  name: 'include',
                  type: '[String]',
                },
              ],
            },
          },
        ],
      })
      expect(res).toBe(
        `
function forOwnerAction (data: 
{
templateVariable: { 'github_id': string },queryParameter: { 'include': string[] },
}
 | 
{
templateVariable: { 'provider': string, 'login': string },queryParameter: { 'include': string[] },
}
 | 
{
templateVariable: { 'login': string },queryParameter: { 'include': string[] },
}
){
          
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'github_id' in data.templateVariable
    ) { 

  return axios['get']( \`\${baseUrl}/owner/github_id/\${data.templateVariable['github_id']}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    
}


    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
'login' in data.templateVariable
    ) { 

  return axios['get']( \`\${baseUrl}/owner/\${data.templateVariable['provider']}/\${data.templateVariable['login']}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    
}


    if (
      Object.keys(data.templateVariable).length === 1 &&
      'login' in data.templateVariable
    ) { 

  return axios['get']( \`\${baseUrl}/owner/\${data.templateVariable['login']}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    
}

        }
`,
      )
    })
  })
})
