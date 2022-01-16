import axios from 'axios'

export function betaMigration_requests(baseUrl: string, token: string) {
  function proxyFindAction(data: {
    templateVariable: { 'user.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'user.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/user/${data.templateVariable['user.id']}/beta_migration_requests`,
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
    betaMigration_requests: {
      proxyFindAction,
    },
  }
}
