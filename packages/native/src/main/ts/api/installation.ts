import axios from 'axios'

export function installation(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'installation.github_id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'installation.github_id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/installation/${data.templateVariable['installation.github_id']}`,
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
    installation: {
      findAction,
    },
  }
}
