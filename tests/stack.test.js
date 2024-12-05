const { ERRORS } = require('../services/stack/constants');

const Stack = require('../services/stack');

describe('Stack tests', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = null;
  });

  it('Should return top value', () => {
    stack.push('Hello');
    stack.push('World');

    expect(stack.pop()).toBe('World');

    stack.push('Again');

    expect(stack.pop()).toBe('Again');
    expect(stack.pop()).toBe('Hello');
    expect(stack.pop()).toBeUndefined();
  });

  it('Should throw exception if no value provided', () => {
    try {
      stack.push();

      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(ERRORS.VALUE_REQUIRED().message);
    }
  });

  it('Should throw exception if overflow', () => {
    stack = new Stack({
      maxSize: 2,
    });

    stack.push(1);
    stack.push(2);

    try {
      stack.push(3);

      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(ERRORS.OVERFLOW().message);
    }
  });
});
