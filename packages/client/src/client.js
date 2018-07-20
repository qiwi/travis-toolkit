// @flow

import type {IClient, IClientOpts} from './interface'

export default class Client implements IClient {
  opts: IClientOpts
  constructor(opts: IClientOpts): IClient {
    this.opts = opts

    return this
  }
}
