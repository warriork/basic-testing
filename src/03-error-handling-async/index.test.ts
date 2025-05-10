import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue('value');
    expect(result).toEqual('value');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('error message')).toThrowError('error message');
  });

  test('should throw error with default message if message is not provided', async () => {
    expect(() => throwError()).toThrowError('Oops');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(() => rejectCustomError()).rejects.toThrow(new MyAwesomeError());
  });
});
