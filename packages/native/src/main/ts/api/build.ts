import axios from 'axios'

export function build(baseUrl: string, token: string) {
  function findAction(data: {
    templateVariable: { 'build.id': string }
    queryParameter: { include: string[] }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'build.id' in data.templateVariable
    ) {
      return axios['get'](
        `${baseUrl}/build/${data.templateVariable['build.id']}`,
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

  function cancelAction(data: { templateVariable: { 'build.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'build.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/build/${data.templateVariable['build.id']}/cancel`,
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

  function restartAction(data: { templateVariable: { 'build.id': string } }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'build.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/build/${data.templateVariable['build.id']}/restart`,
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

  function priorityAction(data: {
    templateVariable: { 'build.id': string }
    acceptedParameter: { 'build.cancel_all': any }
  }) {
    if (
      Object.keys(data.templateVariable).length === 1 &&
      'build.id' in data.templateVariable
    ) {
      return axios['post'](
        `${baseUrl}/build/${data.templateVariable['build.id']}/priority`,
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
    build: {
      findAction,
      cancelAction,
      restartAction,
      priorityAction,
    },
  }
}
