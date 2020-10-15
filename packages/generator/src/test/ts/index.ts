import { foo } from '../../main/ts'

describe('generator', () => {
  it('getEndpoints ', async () => {
    expect(foo).toBe('bar')
  })
})
