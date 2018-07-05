import randomID from '../src/index'

describe('randomID', () => {
  test('must be uniq on 100k iterations', () => {
    const arrOfRandoms = Array.from({ length: 1e5 }, () => randomID())
    const uniqRandoms = new Set([...arrOfRandoms])
    expect(uniqRandoms.size).toBe(1e5)
  })
})
