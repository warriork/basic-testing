import { simpleCalculator } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 2, action: '+' })).toBe(4);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: '-' })).toBe(4);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: '*' })).toBe(12);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: '/' })).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: '^' })).toBe(36);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: '&' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'two', b: 2, action: '-' })).toBeNull();
  });
});
