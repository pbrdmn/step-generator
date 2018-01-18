function* stepGenerator(start = 1, step = 1) {
  let value = start
  while (true) {
    yield value
    value += step
  }
}

module.exports = stepGenerator
