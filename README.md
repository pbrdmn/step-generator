# step-generator
Generate a sequence of numbers

## Installation

`npm install --save step-generator` or `yarn add step-generator`

## Test

`npm test` or `yarn test`

## Usage

Generate a sequence of stepping numbers.

```
const stepGenerator = require('step-generator')

const evenGenerator = stepGenerator(2, 2)

const evens = [
    evenGenerator.next().value,
    evenGenerator.next().value,
    evenGenerator.next().value,
    evenGenerator.next().value,
]

console.log(evens)
```

Output
> `[2, 4, 6, 8]`
