// @flow

import type {IClient, IClientOpts} from './interface'
import {TRAVIS_COM, V3} from './constant'

export const DEFAULT_OPTS = {
  version: V3,
  dst: TRAVIS_COM
}

export default class Client implements IClient {
  opts: IClientOpts
  constructor (opts: IClientOpts): IClient {
    this.opts = this.constructor.processOpts(opts)

    return this
  }

  static processOpts (opts: IClientOpts): IClientOpts {
    return {...DEFAULT_OPTS, ...opts}
  }
}
