import index, {createClient} from '../src'
import Client from '../src/client'

describe('index', () => {
  it('properly exposes public api', () => {
    expect(index).toEqual(expect.any(Function))
    expect(index).toEqual(createClient)
  })

  it('`createClient` factory produces a new client instance', () => {
    const opts = {token: 'foo'}
    const client = createClient(opts)

    expect(client).toBeInstanceOf(Client)
  })
})
