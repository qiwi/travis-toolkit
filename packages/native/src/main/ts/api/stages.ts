import axios from 'axios'

export function stages(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'build.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'build.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/build/${data.templateVariable['build.id']}/stages`,
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
    stages: {
      findAction,
    },
  }
}
