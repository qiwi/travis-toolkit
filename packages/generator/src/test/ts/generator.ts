import { generateInputType, generateFunction, generateFunctionBody } from '../../main/ts/index'

describe('generator', () => {
  describe('generateInputType', () => {
    it('', () => {
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
templateVariable: { login: string },queryParameter: { include: string[] },
}
`,
      )
    })
    it('', () => {
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
templateVariable: { userId: string, beta_featureId: string },
}
`,
      )
    })
  })
  describe('generateFunctionBody', () => {
    it('', () => {
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
      return axios[GET]( \`\${baseUrl}/owner/github_id/\${data.templateVariable.github_id}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        data: data.templateVariable.acceptedParameter,
        params: data.templateVariable.queryParameter,
      })
    }
`,
      )
    })
    it('', () => {
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
      return axios[GET]( \`\${baseUrl}/owner/github_id/\${data.templateVariable.github_id}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        data: data.templateVariable.acceptedParameter,
        params: data.templateVariable.queryParameter,
      })
    }
`,
      )
    })
  })
  describe('generateFunction', () => {
    it('active', () => {
      const res = generateFunction({
        forOwner: [
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
function forOwner (data: 
{
templateVariable: { github_id: string },queryParameter: { include: string[] },
}
 | 
{
templateVariable: { provider: string, login: string },queryParameter: { include: string[] },
}
 | 
{
templateVariable: { login: string },queryParameter: { include: string[] },
}
){
          
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'github_id' in data.templateVariable
    ) {
      return axios[GET]( \`\${baseUrl}/owner/github_id/\${data.templateVariable.github_id}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        data: data.templateVariable.acceptedParameter,
        params: data.templateVariable.queryParameter,
      })
    }


    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
'login' in data.templateVariable
    ) {
      return axios[GET]( \`\${baseUrl}/owner/github_id/\${data.templateVariable.github_id}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        data: data.templateVariable.acceptedParameter,
        params: data.templateVariable.queryParameter,
      })
    }


    if (
      Object.keys(data.templateVariable).length === 1 &&
      'login' in data.templateVariable
    ) {
      return axios[GET]( \`\${baseUrl}/owner/github_id/\${data.templateVariable.github_id}/active\`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: \`\${token}\`
        },
        data: data.templateVariable.acceptedParameter,
        params: data.templateVariable.queryParameter,
      })
    }

        }
`,
      )
    })
  })
})
