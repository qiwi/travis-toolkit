import axios from 'axios'

export function allowance(baseUrl: string, token: string) {
  function forOwnerAction(
    data:
      | {
          templateVariable: { github_id: string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { provider: string; login: string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { login: string }
          queryParameter: { include: string[] }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'github_id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/github_id/${data.templateVariable['github_id']}/allowance`,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          data: data?.acceptedParameter,
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'login' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/${data.templateVariable['provider']}/${data.templateVariable['login']}/allowance`,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          data: data?.acceptedParameter,
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 1 &&
      'login' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/${data.templateVariable['login']}/allowance`,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          data: data?.acceptedParameter,
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }
  }

  return {
    allowance: {
      forOwnerAction,
    },
  }
}
