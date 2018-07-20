// @flow

import Client from './client'
import type {IClient, IClientOpts} from './interface'

export function createClient (opts: IClientOpts): IClient {
  return new Client(opts)
}

export default createClient
