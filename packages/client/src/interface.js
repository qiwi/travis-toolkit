// @flow

export type IClientOpts = {
  token: string,
  dst?: ?string,
  version?: ?string
}

export interface IClient {
  constructor(IClientOpts): IClient,
  opts: IClientOpts
}
