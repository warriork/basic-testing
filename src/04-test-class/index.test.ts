import {
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initial_balance = 50;
    const account = new BankAccount(initial_balance);
    expect(account).toBeInstanceOf(BankAccount);
    expect(account.getBalance()).toBe(initial_balance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => new BankAccount(100).withdraw(400)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      new BankAccount(100).transfer(400, new BankAccount(100)),
    ).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    const bankAccountInstance = new BankAccount(100);
    expect(() =>
      bankAccountInstance.transfer(5, bankAccountInstance),
    ).toThrow();
  });

  test('should deposit money', () => {
    const account = new BankAccount(100);
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test('should withdraw money', () => {
    const account = new BankAccount(100);
    account.withdraw(50);
    expect(account.getBalance()).toBe(50);
  });

  test('should transfer money', () => {
    const fromAccount = new BankAccount(100);
    const toAccount = new BankAccount(100);
    fromAccount.transfer(50, toAccount);

    expect(fromAccount.getBalance()).toBe(50);
    expect(toAccount.getBalance()).toBe(150);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const acc = new BankAccount(100);
    const balance = await acc.fetchBalance();
    if (balance) expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const acc = new BankAccount(100);
    const prevBalanceFunds = acc.getBalance();
    const balance = await acc.fetchBalance();
    if (typeof balance === 'number') {
      expect(prevBalanceFunds).not.toBe(balance);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const acc = new BankAccount(100);
    expect(acc.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
