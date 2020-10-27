export type TParameter = {
  name: string
  type: string
}

export type TTableParametersTypes = {
  templateVariable?: TParameter[]
  acceptedParameter?: TParameter[]
  queryParameter?: TParameter[]
}

export type TTableParametersType = keyof TTableParametersTypes

export type TActionTableItem = {
  httpMethod: string
  template: string
} & { input: TTableParametersTypes }

export type TParsedAction = Record<string, TActionTableItem[]>

export type TParsedPage = {
  title: string
  actions: TParsedAction[]
}
