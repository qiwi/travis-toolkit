import axios from 'axios'

export function broadcasts(baseUrl: string, token: string) {
  function forCurrentUserAction(data: {
    queryParameter: {
      active: boolean[]
      'broadcast.active': boolean[]
      include: string[]
    }
  }) {
    return axios['get'](`${baseUrl}/broadcasts`, {
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
    broadcasts: {
      forCurrentUserAction,
    },
  }
}
