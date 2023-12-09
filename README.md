# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

```bash
npm install @tatianabassani/lotide
```

**Require it:**

```javascript
const _ = require('@tatianabassani/lotide');
```

**Call it:**

```javascript
const results = _.tail([1, 2, 3]) // => [2, 3]
```

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an array.
* `tail`: Returns a new array with the elements after the first element of the original array.
* `middle`: Returns the middle element(s) of an array.
* `assertArraysEqual`: Asserts whether two arrays are equal.
* `assertEqual`: Asserts whether two primitive values are equal.
* `assertObjectsEqual`: Asserts whether two objects are equal.
* `countLetters`: Returns an object containing counts of each letter in a given string.
* `countOnly`: Returns an object containing counts of specified items in an array.
* `eqArrays`: Checks whether two arrays are equal.
* `eqObjects`: Checks whether two objects are equal.
* `findKey`: Returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: Returns the first key that corresponds to a given value in an object.
* `flatten`: Flattens a nested array structure.
* `letterPositions`: Returns an object with arrays of the positions of each letter in a given sentence.
* `takeUntil`: Returns a slice of an array until a callback returns a truthy value.
* `without`: Returns a new array with elements from the source array, excluding items specified for removal.