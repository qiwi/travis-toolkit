import { generateClient } from '../../main/ts'

describe('native', () => {
  it('exported correctly', () => {
    expect(generateClient).toBeDefined()
  })

  it('exposes internal functions', () => {
    const res = generateClient('baseUrl', 'token')
    expect(res.branches.findAction).toBeDefined()
    expect(res.active.forOwnerAction).toBeDefined()
  })
})
