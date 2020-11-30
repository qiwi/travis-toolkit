import axios from 'axios'

export function setting(baseUrl: string, token: string) {
  function findAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'setting.name': string
          }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'setting.name': string
          }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.id': string; 'setting.name': string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: {
            'repository.slug': string
            'setting.name': string
          }
          queryParameter: { include: string[] }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'setting.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/setting/${data.templateVariable['setting.name']}`,
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
      'setting.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/setting/${data.templateVariable['setting.name']}`,
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
      'setting.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/setting/${data.templateVariable['setting.name']}`,
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
      'setting.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/setting/${data.templateVariable['setting.name']}`,
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
            'setting.name': string
          }
          acceptedParameter: { 'setting.value': undefined }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'setting.name': string
          }
          acceptedParameter: { 'setting.value': undefined }
        }
      | {
          templateVariable: { 'repository.id': string; 'setting.name': string }
          acceptedParameter: { 'setting.value': undefined }
        }
      | {
          templateVariable: {
            'repository.slug': string
            'setting.name': string
          }
          acceptedParameter: { 'setting.value': undefined }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'setting.name' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/setting/${data.templateVariable['setting.name']}`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': 3,
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.slug' in data.templateVariable &&
      'setting.name' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/setting/${data.templateVariable['setting.name']}`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': 3,
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 2 &&
      'repository.id' in data.templateVariable &&
      'setting.name' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/setting/${data.templateVariable['setting.name']}`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': 3,
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 2 &&
      'repository.slug' in data.templateVariable &&
      'setting.name' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/setting/${data.templateVariable['setting.name']}`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': 3,
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }
  }

  return {
    setting: {
      findAction,
      updateAction,
    },
  }
}
