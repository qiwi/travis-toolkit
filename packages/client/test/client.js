import Client, {DEFAULT_OPTS} from '../src/client'

describe('Client', () => {
  describe('constructor', () => {
    it('returns proper instance', () => {
      const opts = {token: 'foo'}
      const client = new Client(opts)

      expect(client.opts).toEqual(expect.objectContaining(opts))
    })
  })

  describe('proto', () => {

  })

  describe('static', () => {
    it('`processOpts` appends defaults', () => {
      const input = {foo: 'bar'}
      const output = Client.processOpts(input)

      expect(output).toEqual({...DEFAULT_OPTS, ...input})
    })
  })
})
