import index, {createClient} from '../src'

describe('index', () => {
  it('properly exposes public api', () => {
    expect(index).toEqual(expect.any(Function))
    expect(index).toEqual(createClient)
  })

  it('`createClient` factory produces a new client instance', () => {
    const client = createClient({})

    expect(client).toBeUndefined()
  })
})
