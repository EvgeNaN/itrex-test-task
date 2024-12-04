const { MAX_SIZE, ERRORS } = require('./constants');

class Stack {
  constructor(options = {}) {
    const { maxSize = MAX_SIZE } = options;

    this.maxSize = maxSize;
    
    this.list = [];
  }

  push(value) {
    if (value === void 0) {
      throw ERRORS.VALUE_REQUIRED();
    }

    if (this.maxSize && this.list.length === this.maxSize) {
      throw ERRORS.OVERFLOW();
    }

    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }
}

module.exports = Stack;
