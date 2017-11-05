'use strict'

const f = require('../lib/mapped.js').f

function g () {
  console.log('in g()')
}

// set breakpoint before f(),
// press F10 (step over) when the debugger stops there to see delay
f()
g()

console.log('finish')
