import axios from 'axios'

export function betaFeature(baseUrl: string, token: string) {
  function updateAction(data: {
    templateVariable: { 'user.id': string; 'beta_feature.id': string }
    acceptedParameter: {
      'beta_feature.id': number
      'beta_feature.enabled': boolean
    }
  }) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'user.id' in data.templateVariable &&
      'beta_feature.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/user/${data.templateVariable['user.id']}/beta_feature/${data.templateVariable['beta_feature.id']}`,
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

  function deleteAction(data: {
    templateVariable: { 'user.id': string; 'beta_feature.id': string }
  }) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'user.id' in data.templateVariable &&
      'beta_feature.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/user/${data.templateVariable['user.id']}/beta_feature/${data.templateVariable['beta_feature.id']}`,
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
    betaFeature: {
      updateAction,
      deleteAction,
    },
  }
}
