import axios from 'axios'

export function builds(baseUrl: string, token: string) {
  function forCurrentUserAction(data: {
    queryParameter: {
      include: string[]
      limit: number
      offset: number
      sort_by: string[]
    }
  }) {
    return axios['get'](`${baseUrl}/builds`, {
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

  function findAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          queryParameter: {
            'branch.name': string[]
            'build.created_by': undefined[]
            'build.event_type': string[]
            'build.previous_state': string[]
            'build.state': string[]
            created_by: undefined[]
            event_type: string[]
            include: string[]
            limit: number
            offset: number
            previous_state: string[]
            sort_by: string[]
            state: string[]
          }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          queryParameter: {
            'branch.name': string[]
            'build.created_by': undefined[]
            'build.event_type': string[]
            'build.previous_state': string[]
            'build.state': string[]
            created_by: undefined[]
            event_type: string[]
            include: string[]
            limit: number
            offset: number
            previous_state: string[]
            sort_by: string[]
            state: string[]
          }
        }
      | {
          templateVariable: { 'repository.id': string }
          queryParameter: {
            'branch.name': string[]
            'build.created_by': undefined[]
            'build.event_type': string[]
            'build.previous_state': string[]
            'build.state': string[]
            created_by: undefined[]
            event_type: string[]
            include: string[]
            limit: number
            offset: number
            previous_state: string[]
            sort_by: string[]
            state: string[]
          }
        }
      | {
          templateVariable: { 'repository.slug': string }
          queryParameter: {
            'branch.name': string[]
            'build.created_by': undefined[]
            'build.event_type': string[]
            'build.previous_state': string[]
            'build.state': string[]
            created_by: undefined[]
            event_type: string[]
            include: string[]
            limit: number
            offset: number
            previous_state: string[]
            sort_by: string[]
            state: string[]
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/builds`,
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
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/builds`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/builds`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/builds`,
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
    builds: {
      forCurrentUserAction,
      findAction,
    },
  }
}
