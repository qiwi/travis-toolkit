import axios from 'axios'

export function repositories(baseUrl: string, token: string) {
  function forOwnerAction(
    data:
      | {
          templateVariable: { github_id: string }
          queryParameter: {
            active: boolean[]
            active_on_org: boolean[]
            include: string[]
            limit: number
            managed_by_installation: boolean[]
            offset: number
            private: boolean[]
            'repository.active': boolean[]
            'repository.active_on_org': boolean[]
            'repository.managed_by_installation': boolean[]
            'repository.private': boolean[]
            'repository.starred': boolean[]
            sort_by: string[]
            starred: boolean[]
          }
        }
      | {
          templateVariable: { provider: string; login: string }
          queryParameter: {
            active: boolean[]
            active_on_org: boolean[]
            include: string[]
            limit: number
            managed_by_installation: boolean[]
            offset: number
            private: boolean[]
            'repository.active': boolean[]
            'repository.active_on_org': boolean[]
            'repository.managed_by_installation': boolean[]
            'repository.private': boolean[]
            'repository.starred': boolean[]
            sort_by: string[]
            starred: boolean[]
          }
        }
      | {
          templateVariable: { login: string }
          queryParameter: {
            active: boolean[]
            active_on_org: boolean[]
            include: string[]
            limit: number
            managed_by_installation: boolean[]
            offset: number
            private: boolean[]
            'repository.active': boolean[]
            'repository.active_on_org': boolean[]
            'repository.managed_by_installation': boolean[]
            'repository.private': boolean[]
            'repository.starred': boolean[]
            sort_by: string[]
            starred: boolean[]
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'github_id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/github_id/${data.templateVariable['github_id']}/repos`,
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

    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'login' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/${data.templateVariable['provider']}/${data.templateVariable['login']}/repos`,
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

    if (
      Object.keys(data.templateVariable).length === 1 &&
      'login' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/owner/${data.templateVariable['login']}/repos`,
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

  function forCurrentUserAction(data: {
    queryParameter: {
      active: boolean[]
      active_on_org: boolean[]
      include: string[]
      limit: number
      managed_by_installation: boolean[]
      offset: number
      private: boolean[]
      'repository.active': boolean[]
      'repository.active_on_org': boolean[]
      'repository.managed_by_installation': boolean[]
      'repository.private': boolean[]
      'repository.starred': boolean[]
      sort_by: string[]
      starred: boolean[]
    }
  }) {
    return axios['get'](`${baseUrl}/repos`, {
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

  return {
    repositories: {
      forOwnerAction,
      forCurrentUserAction,
    },
  }
}
