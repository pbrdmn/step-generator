const stepGenerator = require('./')

describe('step-generator', () => {
  it('starts at 1, increments by 1', () => {
    const gen = stepGenerator()
    expect(gen.next().value).toBe(1)
    expect(gen.next().value).toBe(2)
  })
  
  it('starts at start', () => {
    const gen = stepGenerator(5)
    expect(gen.next().value).toBe(5)
    expect(gen.next().value).toBe(6)
  })

  it('increments by step', () => {
    const gen = stepGenerator(0, 10)
    expect(gen.next().value).toBe(0)
    expect(gen.next().value).toBe(10)
  })
})

