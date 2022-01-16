import axios from 'axios'

export function branches(baseUrl: string, token: string) {
  function findAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
          queryParameter: {
            'branch.exists_on_github': boolean[]
            'branch.name': string[]
            exists_on_github: boolean[]
            include: string[]
            limit: number
            name: string[]
            offset: number
            sort_by: string[]
          }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
          queryParameter: {
            'branch.exists_on_github': boolean[]
            'branch.name': string[]
            exists_on_github: boolean[]
            include: string[]
            limit: number
            name: string[]
            offset: number
            sort_by: string[]
          }
        }
      | {
          templateVariable: { 'repository.id': string }
          queryParameter: {
            'branch.exists_on_github': boolean[]
            'branch.name': string[]
            exists_on_github: boolean[]
            include: string[]
            limit: number
            name: string[]
            offset: number
            sort_by: string[]
          }
        }
      | {
          templateVariable: { 'repository.slug': string }
          queryParameter: {
            'branch.exists_on_github': boolean[]
            'branch.name': string[]
            exists_on_github: boolean[]
            include: string[]
            limit: number
            name: string[]
            offset: number
            sort_by: string[]
          }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/branches`,
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
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/branches`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/branches`,
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
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/branches`,
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
    branches: {
      findAction,
    },
  }
}
