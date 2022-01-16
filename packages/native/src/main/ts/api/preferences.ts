import axios from 'axios'

export function preferences(baseUrl: string, token: string) {
  function forOrganizationAction(data: {
    templateVariable: { 'organization.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'organization.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}/preferences`,
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

  function forUserAction(data: { queryParameter: { include: string[] } }) {
    return axios['get'](`${baseUrl}/preferences`, {
      headers: {
        'Travis-API-Version': '3',
        Authorization: `${token}`,
      },
      // @ts-ignore
      data: data?.acceptedParameter,
      // @ts-ignore
      params: data?.queryParameter,
    })
  }

  return {
    preferences: {
      forOrganizationAction,
      forUserAction,
    },
  }
}
