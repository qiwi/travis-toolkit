import axios from 'axios'

export function lint(baseUrl: string, token: string) {
  function lintAction() {
    return axios['post'](`${baseUrl}/lint`, {
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
    lint: {
      lintAction,
    },
  }
}
