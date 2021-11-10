import fill from './index'

test('one two three one two three one', () => {
  expect(fill([
    'one',
    'two',
    'three',
  ], 7)).toEqual([
    'one',
    'two',
    'three',
    'one',
    'two',
    'three',
    'one',
  ])
})