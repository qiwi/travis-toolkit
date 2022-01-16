import axios from 'axios'

export function buildPermissions(baseUrl: string, token: string) {
  function findForOrganizationAction(data: {
    templateVariable: { 'organization.id': string }
    queryParameter: { include: string[]; limit: number; offset: number }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'organization.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}/build_permissions`,
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

  function updateForOrganizationAction(data: {
    templateVariable: { 'organization.id': string }
    acceptedParameter: {
      'build_permissions.user_ids': any
      'build_permissions.permission': any
    }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'organization.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/org/${data.templateVariable['organization.id']}/build_permissions`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }
  }

  function findForRepoAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { 'repository.id': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        }
      | {
          templateVariable: { 'repository.slug': string }
          queryParameter: { include: string[]; limit: number; offset: number }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/build_permissions`,
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
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/build_permissions`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/build_permissions`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/build_permissions`,
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

  function updateForRepoAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          acceptedParameter: {
            'build_permissions.user_ids': any
            'build_permissions.permission': any
          }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          acceptedParameter: {
            'build_permissions.user_ids': any
            'build_permissions.permission': any
          }
        }
      | {
          templateVariable: { 'repository.id': string }
          acceptedParameter: {
            'build_permissions.user_ids': any
            'build_permissions.permission': any
          }
        }
      | {
          templateVariable: { 'repository.slug': string }
          acceptedParameter: {
            'build_permissions.user_ids': any
            'build_permissions.permission': any
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/build_permissions`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
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
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/build_permissions`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 1 &&
      'repository.id' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/build_permissions`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }

    if (
      Object.keys(data.templateVariable).length === 1 &&
      'repository.slug' in data.templateVariable
    ) {
      return axios['patch'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/build_permissions`,
        // @ts-ignore
        data?.acceptedParameter,
        {
          headers: {
            'Travis-API-Version': '3',
            Authorization: `${token}`,
          },
          // @ts-ignore
          params: data?.queryParameter,
        },
      )
    }
  }

  return {
    buildPermissions: {
      findForOrganizationAction,
      updateForOrganizationAction,
      findForRepoAction,
      updateForRepoAction,
    },
  }
}
