'use strict'

const f = require('../lib/mapped.js').f

function g () {
  console.log('before loop')
  // increase n to see longer delay
  var s = 0, n = 100
  for (var i = 0; i < n; i++) s += i
  console.log('after loop')
  return s
}

// set breakpoint before f(),
// press F10 (step over) when the debugger stops there to see delay
f()
g()

console.log('finish')
