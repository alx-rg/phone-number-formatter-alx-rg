
const index = require('../src/index.js');

describe ('numFormat Function returns numbers accurately', function () {

  test('2342342345', () => {
    expect(index.numFormat(2342342345)).toBe('(234)-234-2345');
  })

  test('234 234 2345 With Spaces', () => {
    expect(index.numFormat('234 234 2345')).toBe('(234)-234-2345');
  })

  test('555 456-9809 With Dash and Spaces', () => {
    expect(index.numFormat('555 456-9809')).toBe('(555)-456-9809');
  })

  test('688-777-8376 With Dashes', () => {
    expect(index.numFormat('688-777-8376')).toBe('(688)-777-8376');
  })

  test('phone:773-222-2222 (with text)', () => {
    expect(index.numFormat('phone:773-222-2222')).toBe('(773)-222-2222');
  })

  test('area code-4343-123 (Too few numbers)', () => {
    expect(index.numFormat('area code-4343-123')).toBe('Too few numbers - Please supply 10 digits');
  })

  test('area code(555222)-4343-123 (Too many numbers)', () => {
    expect(index.numFormat('area code(555222)-4343-123 ')).toBe('Too many numbers - Please supply 10 digits');
  })

})

// npm run test
// npx jest --coverage
