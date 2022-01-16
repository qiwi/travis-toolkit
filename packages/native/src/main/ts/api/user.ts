import axios from 'axios'

export function user(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'user.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'user.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/user/${data.templateVariable['user.id']}`,
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

  function syncAction(data: { templateVariable: { 'user.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'user.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/user/${data.templateVariable['user.id']}/sync`,
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

  function currentAction(data: { queryParameter: { include: string[] } }) {
    return axios['get'](`${baseUrl}/user`, {
      headers: {
        'Travis-API-Version': '3',
        Authorization: `${token}`,
      },
      // @ts-ignore
      data: data?.acceptedParameter,
      // @ts-ignore
      params: data?.queryParameter,
    })
  }

  function updateAction(data: {
    acceptedParameter: { 'user.utm_params': any }
  }) {
    return axios['patch'](
      `${baseUrl}/user`,
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

  function logoutAction(data: { queryParameter: { include: string[] } }) {
    return axios['get'](`${baseUrl}/logout`, {
      headers: {
        'Travis-API-Version': '3',
        Authorization: `${token}`,
      },
      // @ts-ignore
      data: data?.acceptedParameter,
      // @ts-ignore
      params: data?.queryParameter,
    })
  }

  return {
    user: {
      findAction,
      syncAction,
      currentAction,
      updateAction,
      logoutAction,
    },
  }
}
