const { MAX_SIZE, ERRORS } = require('./constants');

class Stack {
  constructor(options = {}) {
    const { maxSize = MAX_SIZE } = options;

    this.maxSize = maxSize;
    
    this.store = [];
  }

  push(value) {
    if (value === void 0) {
      throw ERRORS.VALUE_REQUIRED();
    }

    if (this.maxSize && this.store.length === this.maxSize) {
      throw ERRORS.OVERFLOW();
    }

    this.store.push(value);
  }

  pop() {
    return this.store.pop();
  }
}

module.exports = Stack;
