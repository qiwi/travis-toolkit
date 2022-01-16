import axios from 'axios'

export function caches(baseUrl: string, token: string) {
  function findAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          queryParameter: {
            branch: string[]
            'caches.branch': string[]
            'caches.match': string[]
            include: string[]
            match: string[]
          }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          queryParameter: {
            branch: string[]
            'caches.branch': string[]
            'caches.match': string[]
            include: string[]
            match: string[]
          }
        }
      | {
          templateVariable: { 'repository.id': string }
          queryParameter: {
            branch: string[]
            'caches.branch': string[]
            'caches.match': string[]
            include: string[]
            match: string[]
          }
        }
      | {
          templateVariable: { 'repository.slug': string }
          queryParameter: {
            branch: string[]
            'caches.branch': string[]
            'caches.match': string[]
            include: string[]
            match: string[]
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/caches`,
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
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/caches`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/caches`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/caches`,
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

  function deleteAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
        }
      | {
          templateVariable: { 'repository.id': string }
        }
      | {
          templateVariable: { 'repository.slug': string }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/caches`,
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
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/caches`,
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
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/caches`,
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
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/caches`,
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
    caches: {
      findAction,
      deleteAction,
    },
  }
}
