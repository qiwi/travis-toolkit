import axios from 'axios'

export function cron(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'cron.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'cron.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/cron/${data.templateVariable['cron.id']}`,
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

  function deleteAction(data: { templateVariable: { 'cron.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'cron.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/cron/${data.templateVariable['cron.id']}`,
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

  function forBranchAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'branch.name': string
          }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'branch.name': string
          }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.id': string; 'branch.name': string }
          queryParameter: { include: string[] }
        }
      | {
          templateVariable: { 'repository.slug': string; 'branch.name': string }
          queryParameter: { include: string[] }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/branch/${data.templateVariable['branch.name']}/cron`,
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
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.slug' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/branch/${data.templateVariable['branch.name']}/cron`,
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
      'repository.id' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/branch/${data.templateVariable['branch.name']}/cron`,
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
      'repository.slug' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/branch/${data.templateVariable['branch.name']}/cron`,
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

  function createAction(
    data:
      | {
          templateVariable: {
            provider: string
            'repository.id': string
            'branch.name': string
          }
          acceptedParameter: {
            'cron.interval': string
            'cron.dont_run_if_recent_build_exists': boolean
          }
        }
      | {
          templateVariable: {
            provider: string
            'repository.slug': string
            'branch.name': string
          }
          acceptedParameter: {
            'cron.interval': string
            'cron.dont_run_if_recent_build_exists': boolean
          }
        }
      | {
          templateVariable: { 'repository.id': string; 'branch.name': string }
          acceptedParameter: {
            'cron.interval': string
            'cron.dont_run_if_recent_build_exists': boolean
          }
        }
      | {
          templateVariable: { 'repository.slug': string; 'branch.name': string }
          acceptedParameter: {
            'cron.interval': string
            'cron.dont_run_if_recent_build_exists': boolean
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/branch/${data.templateVariable['branch.name']}/cron`,
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
      Object.keys(data.templateVariable).length === 3 &&
      'provider' in data.templateVariable &&
      'repository.slug' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/branch/${data.templateVariable['branch.name']}/cron`,
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
      'repository.id' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/branch/${data.templateVariable['branch.name']}/cron`,
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
      'repository.slug' in data.templateVariable &&
      'branch.name' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/branch/${data.templateVariable['branch.name']}/cron`,
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
    cron: {
      findAction,
      deleteAction,
      forBranchAction,
      createAction,
    },
  }
}
