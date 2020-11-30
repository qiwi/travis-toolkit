import axios from 'axios'

export function job(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'job.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'job.id' in data.templateVariable
    ) {
      return axios['get'](`${baseUrl}/job/${data.templateVariable['job.id']}`, {
        headers: {
          'Travis-API-Version': 3,
          Authorization: `${token}`,
        },
        // @ts-ignore
        data: data?.acceptedParameter,
        // @ts-ignore
        params: data?.queryParameter,
      })
    }
  }

  function cancelAction(data: { templateVariable: { 'job.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'job.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/job/${data.templateVariable['job.id']}/cancel`,
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

  function restartAction(data: { templateVariable: { 'job.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'job.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/job/${data.templateVariable['job.id']}/restart`,
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

  function debugAction(data: { templateVariable: { 'job.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'job.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/job/${data.templateVariable['job.id']}/debug`,
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
    job: {
      findAction,
      cancelAction,
      restartAction,
      debugAction,
    },
  }
}
