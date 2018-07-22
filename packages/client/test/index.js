import index, {createClient} from '../src'
import Client from '../src/client'
import context from '../src/context'

describe('index', () => {
  it('properly exposes public api', () => {
    expect(index).toEqual(expect.any(Function))
    expect(index).toBe(createClient)
    expect(index.context).toBe(context)
  })

  it('`createClient` factory produces a new client instance', () => {
    const opts = {token: 'foo'}
    const client = createClient(opts)

    expect(client).toBeInstanceOf(Client)
  })
})
