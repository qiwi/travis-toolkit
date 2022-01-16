import axios from 'axios'

export function requests(baseUrl: string, token: string) {
  function findAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { 'repository.id': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { 'repository.slug': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/requests`,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/requests`,
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
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/requests`,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/requests`,
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

  function createAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          acceptedParameter: {
            'request.merge_mode': any
            'request.config': undefined
            'request.configs': any
            'request.message': string
            'request.branch': string
            'request.sha': any
            'request.token': undefined
          }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          acceptedParameter: {
            'request.merge_mode': any
            'request.config': undefined
            'request.configs': any
            'request.message': string
            'request.branch': string
            'request.sha': any
            'request.token': undefined
          }
        }
      | {
          templateVariable: { 'repository.id': string }
          acceptedParameter: {
            'request.merge_mode': any
            'request.config': undefined
            'request.configs': any
            'request.message': string
            'request.branch': string
            'request.sha': any
            'request.token': undefined
          }
        }
      | {
          templateVariable: { 'repository.slug': string }
          acceptedParameter: {
            'request.merge_mode': any
            'request.config': undefined
            'request.configs': any
            'request.message': string
            'request.branch': string
            'request.sha': any
            'request.token': undefined
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/requests`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
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
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/requests`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 1 &&
      'repository.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/requests`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 1 &&
      'repository.slug' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/requests`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }
  }

  return {
    requests: {
      findAction,
      createAction,
    },
  }
}
