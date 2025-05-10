import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 3, action: Action.Divide, expected: 1 },
  { a: 3, b: 3, action: Action.Divide, expected: 1 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 3, b: 3, action: Action.Subtract, expected: 0 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: null, b: 3, action: Action.Subtract, expected: null },
  { a: null, b: 3, action: 'v', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'correctly calculates $a $action with $b = $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
