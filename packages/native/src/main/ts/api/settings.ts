import axios from 'axios'

export function settings(baseUrl: string, token: string) {
  function forRepositoryAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.id': string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.slug': string }
          queryParameter: { include: string[] }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/settings`,
        {
          headers: {
            'Travis-API-Version': 3,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/settings`,
        {
          headers: {
            'Travis-API-Version': 3,
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
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/settings`,
        {
          headers: {
            'Travis-API-Version': 3,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/settings`,
        {
          headers: {
            'Travis-API-Version': 3,
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
    settings: {
      forRepositoryAction,
    },
  }
}
