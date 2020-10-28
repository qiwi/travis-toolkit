import axios from 'axios'

export function betaMigration_request(baseUrl: string, token: string) {
  function proxyCreateAction(data: {
    templateVariable: { 'user.id': string }
    acceptedParameter: { 'beta_migration_request.organizations': any }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'user.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/user/${data.templateVariable['user.id']}/beta_migration_request`,
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
    betaMigration_request: {
      proxyCreateAction,
    },
  }
}
