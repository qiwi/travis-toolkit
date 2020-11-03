import axios from 'axios'

export function request(baseUrl: string, token: string) {
  function findAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'request.id': string
          }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'request.id': string
          }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.id': string; 'request.id': string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.slug': string; 'request.id': string }
          queryParameter: { include: string[] }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'request.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/request/${data.templateVariable['request.id']}`,
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
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.slug' in data.templateVariable &&
      'request.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/request/${data.templateVariable['request.id']}`,
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
      'repository.id' in data.templateVariable &&
      'request.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/request/${data.templateVariable['request.id']}`,
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
      'repository.slug' in data.templateVariable &&
      'request.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/request/${data.templateVariable['request.id']}`,
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
    request: {
      findAction,
    },
  }
}
