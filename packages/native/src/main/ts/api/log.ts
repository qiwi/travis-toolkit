import axios from 'axios'

export function log(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'job.id': string }
    queryParameter: { include: string[]; 'log.token': any }
  }) {
    return axios['get'](
      `${baseUrl}/job/${data.templateVariable['job.id']}/log`,
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

  function findLogTxtAction(data: {
    templateVariable: { 'job.id': string }
    queryParameter: { include: string[]; 'log.token': any }
  }) {
    return axios['get'](
      `${baseUrl}/job/${data.templateVariable['job.id']}/log.txt`,
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

  function deleteAction(data: { templateVariable: { 'job.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'job.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/job/${data.templateVariable['job.id']}/log`,
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
    log: {
      findAction,
      findLogTxtAction,
      deleteAction,
    },
  }
}
