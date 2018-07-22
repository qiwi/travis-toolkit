// @flow

import Client from './client'
import context from './context'
import type {IClient, IClientOpts} from './interface'

export function createClient (opts: IClientOpts): IClient {
  return new Client(opts)
}
createClient.context = context

export default createClient
export {context}
