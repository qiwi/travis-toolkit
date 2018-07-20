import Client from '../src/client'

describe('Client', () => {
  describe('constructor', () => {
    it('returns proper instance', () => {
      const opts = {token: 'foo'}
      const client = new Client(opts)

      expect(client.opts).toBe(opts)
    })
  })

  describe('proto', () => {

  })

  describe('static', () => {

  })
})
