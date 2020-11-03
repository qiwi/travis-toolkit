import axios from 'axios'

export function emailSubscription(baseUrl: string, token: string) {
  function unsubscribeAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
        }
      | {
          templateVariable: { 'repository.id': string }
        }
      | {
          templateVariable: { 'repository.slug': string }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/email_subscription`,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/email_subscription`,
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
      'repository.id' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/email_subscription`,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['delete'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/email_subscription`,
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

  function resubscribeAction(
    data:
      | {
          templateVariable: { provider: string; 'repository.id': string }
        }
      | {
          templateVariable: { provider: string; 'repository.slug': string }
        }
      | {
          templateVariable: { 'repository.id': string }
        }
      | {
          templateVariable: { 'repository.slug': string }
        },
  ) {
    if (
      Object.keys(data.templateVariable).length === 2 &&
      'provider' in data.templateVariable &&
      'repository.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.id']}/email_subscription`,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['provider']}/${data.templateVariable['repository.slug']}/email_subscription`,
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
      'repository.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['repository.id']}/email_subscription`,
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
      'repository.slug' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/repo/${data.templateVariable['repository.slug']}/email_subscription`,
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
    emailSubscription: {
      unsubscribeAction,
      resubscribeAction,
    },
  }
}
