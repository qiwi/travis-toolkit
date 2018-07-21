// @flow

import Client from './client'
import type {IClient, IClientOpts} from './interface'

export {default as context} from './context'

export function createClient (opts: IClientOpts): IClient {
  return new Client(opts)
}

export default createClient
