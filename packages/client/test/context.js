import context from '../src/context'
import axios from 'axios'

describe('context', () => {
  describe('transport', () => {
    it('exposes axios by default', () => {
      expect(context.transport).toBe(axios)
    })

    it('is configurable', () => {
      const transport = {}
      context.transport = transport

      expect(context.transport).toBe(transport)
    })
  })
})
