var quad = require('./')
var test = require('tape')

test('creates the indices for a quad mesh (two triangles)', function(t) {
    t.deepEqual(quad({ type: 'array' }), [0, 1, 2, 0, 2, 3], 'clockwise array')
    t.deepEqual(quad({ clockwise: false, type: 'array' }), [0, 1, 2, 2, 1, 3], 'counter-clockwise')
    t.deepEqual(quad({ count: 2, type: 'array' }), 
      [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7], 
      'counter-clockwise')
    t.deepEqual(quad(), 
      new Uint16Array([0, 1, 2, 0, 2, 3]), 
      'default uint16')
    t.deepEqual(quad({ type: 'uint8' }), 
      new Uint8Array([0, 1, 2, 0, 2, 3]), 
      'dtype uint8')
    t.deepEqual(quad({ type: 'uint8_clamped' }), 
      new Uint8ClampedArray([0, 1, 2, 0, 2, 3]), 
      'dtype uint8_clamped')
    t.deepEqual(quad(2), 
      new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]), 
      'accepts number')
    t.end()
})