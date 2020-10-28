import axios from 'axios'

export function organization(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'organization.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'organization.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}`,
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

  function updateBillingPermissionAction(data: {
    templateVariable: { 'organization.id': string }
    acceptedParameter: { 'organization.billing_admin_only': any }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'organization.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}/update_billing_permission`,
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
    organization: {
      findAction,
      updateBillingPermissionAction,
    },
  }
}
