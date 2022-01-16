import axios from 'axios'

export function executions(baseUrl: string, token: string) {
  function forOwnerAction(
    data:
      | {
          templateVariable: { github_id: string }
          queryParameter: {
            'executions.from': any
            'executions.page': any
            'executions.per_page': any
            'executions.to': any
            from: any
            include: string[]
            page: any
            per_page: any
            to: any
          }
        }
      | {
          templateVariable: { provider: string; login: string }
          queryParameter: {
            'executions.from': any
            'executions.page': any
            'executions.per_page': any
            'executions.to': any
            from: any
            include: string[]
            page: any
            per_page: any
            to: any
          }
        }
      | {
          templateVariable: { login: string }
          queryParameter: {
            'executions.from': any
            'executions.page': any
            'executions.per_page': any
            'executions.to': any
            from: any
            include: string[]
            page: any
            per_page: any
            to: any
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'github_id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/github_id/${data.templateVariable['github_id']}/executions`,
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
        `${baseUrl}/owner/${data.templateVariable['provider']}/${data.templateVariable['login']}/executions`,
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
        `${baseUrl}/owner/${data.templateVariable['login']}/executions`,
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
    executions: {
      forOwnerAction,
    },
  }
}
