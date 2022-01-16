import axios from 'axios'

export function organizations(baseUrl: string, token: string) {
  function forCurrentUserAction(data: {
    queryParameter: {
      include: string[]
      limit: number
      offset: number
      'organization.role': any
      role: any
      sort_by: string[]
    }
  }) {
    return axios['get'](`${baseUrl}/orgs`, {
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
    organizations: {
      forCurrentUserAction,
    },
  }
}
