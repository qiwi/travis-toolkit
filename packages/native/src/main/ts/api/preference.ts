import axios from 'axios'

export function preference(baseUrl: string, token: string) {
  function forOrganizationAction(data: {
    templateVariable: { 'organization.id': string; 'preference.name': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'organization.id' in data.templateVariable &&
      'preference.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}/preference/${data.templateVariable['preference.name']}`,
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
            'organization.id': string
            'preference.name': string
          }
          acceptedParameter: { 'preference.value': any }
        }
      | {
          templateVariable: { 'preference.name': string }
          acceptedParameter: { 'preference.value': any }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'organization.id' in data.templateVariable &&
      'preference.name' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}/preference/${data.templateVariable['preference.name']}`,
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
      'preference.name' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/preference/${data.templateVariable['preference.name']}`,
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

  function findAction(data: {
    templateVariable: { 'preference.name': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'preference.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/preference/${data.templateVariable['preference.name']}`,
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
    preference: {
      forOrganizationAction,
      updateAction,
      findAction,
    },
  }
}
