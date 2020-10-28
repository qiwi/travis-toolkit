import axios from 'axios'

export function envVar(baseUrl: string, token: string) {
  function findAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'env_var.id': string
          }
          queryParameter: {
            'env_var.id': string
            include: string[]
            'repository.id': number
          }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'env_var.id': string
          }
          queryParameter: {
            'env_var.id': string
            include: string[]
            'repository.id': number
          }
        }
      | {
          templateVariable: { 'repository.id': string; 'env_var.id': string }
          queryParameter: {
            'env_var.id': string
            include: string[]
            'repository.id': number
          }
        }
      | {
          templateVariable: { 'repository.slug': string; 'env_var.id': string }
          queryParameter: {
            'env_var.id': string
            include: string[]
            'repository.id': number
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'env_var.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/env_var/${data.templateVariable['env_var.id']}`,
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

  function updateAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'env_var.id': string
          }
          acceptedParameter: {
            'env_var.name': string
            'env_var.value': string
            'env_var.public': boolean
            'env_var.branch': any
          }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'env_var.id': string
          }
          acceptedParameter: {
            'env_var.name': string
            'env_var.value': string
            'env_var.public': boolean
            'env_var.branch': any
          }
        }
      | {
          templateVariable: { 'repository.id': string; 'env_var.id': string }
          acceptedParameter: {
            'env_var.name': string
            'env_var.value': string
            'env_var.public': boolean
            'env_var.branch': any
          }
        }
      | {
          templateVariable: { 'repository.slug': string; 'env_var.id': string }
          acceptedParameter: {
            'env_var.name': string
            'env_var.value': string
            'env_var.public': boolean
            'env_var.branch': any
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'env_var.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/env_var/${data.templateVariable['env_var.id']}`,
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

  function deleteAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'env_var.id': string
          }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'env_var.id': string
          }
        }
      | {
          templateVariable: { 'repository.id': string; 'env_var.id': string }
        }
      | {
          templateVariable: { 'repository.slug': string; 'env_var.id': string }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'env_var.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/env_var/${data.templateVariable['env_var.id']}`,
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
      'env_var.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/env_var/${data.templateVariable['env_var.id']}`,
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
    envVar: {
      findAction,
      updateAction,
      deleteAction,
    },
  }
}
