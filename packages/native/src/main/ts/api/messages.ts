import axios from 'axios'

export function messages(baseUrl: string, token: string) {
  function forRequestAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'request.id': string
          }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'request.id': string
          }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { 'repository.id': string; 'request.id': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { 'repository.slug': string; 'request.id': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'request.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/request/${data.templateVariable['request.id']}/messages`,
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
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/request/${data.templateVariable['request.id']}/messages`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/request/${data.templateVariable['request.id']}/messages`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/request/${data.templateVariable['request.id']}/messages`,
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
    messages: {
      forRequestAction,
    },
  }
}
