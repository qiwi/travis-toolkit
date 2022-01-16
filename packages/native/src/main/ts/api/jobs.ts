import axios from 'axios'

export function jobs(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'build.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'build.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/build/${data.templateVariable['build.id']}/jobs`,
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

  function forCurrentUserAction(data: {
    queryParameter: {
      active: any
      created_by: any
      include: string[]
      'job.active': any
      'job.created_by': any
      'job.state': string[]
      limit: number
      offset: number
      sort_by: string[]
      state: string[]
    }
  }) {
    return axios['get'](`${baseUrl}/jobs`, {
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
    jobs: {
      findAction,
      forCurrentUserAction,
    },
  }
}
