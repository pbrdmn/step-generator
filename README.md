# step-generator
Generate a sequence of numbers

[![Build Status](https://travis-ci.org/dustykeyboard/step-generator.svg?branch=master)](https://travis-ci.org/dustykeyboard/step-generator)

## Installation

```
$> npm install --save step-generator
```

## Test

```
$> npm test
```

## Usage

Generate a sequence of stepping numbers.

```
const stepGenerator = require('step-generator')

const evenGenerator = stepGenerator({ start: 2, step: 2 })

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
