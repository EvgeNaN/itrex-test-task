const { NO_TTL, CLEAN_INTERVAL, ERRORS } = require('./constants');

class KeyValue {
  get now() {
    return new Date().getTime();
  }

  constructor() {
    this.store = {};

    setInterval(this.clean.bind(this), CLEAN_INTERVAL);
  }

  add(key, value, ttl = NO_TTL) {
    if (typeof key !== 'string' || key.length === 0) {
      throw ERRORS.KEY_INVALID();
    }
    
    if (ttl < 0 || !Number.isInteger(ttl)) {
      throw ERRORS.TTL_INVALID();
    }

    if (this.isExists(key)) {
      throw ERRORS.KEY_EXISTS();
    }

    const item = {
      value,
    };

    if (ttl !== NO_TTL) {
      item.expiresAt = this.now + ttl;
    }
    
    this.store[key] = item;
  }

  get(key) {
    return this.isExists(key) ? this.store[key].value : null;
  }

  delete(key) {
    delete this.store[key];
  }

  isExists(key) {
    const item = this.store[key];
    
    return !!item && (!item.expiresAt || item.expiresAt > this.now);
  }

  clean() {
    Object.keys(this.store).forEach(key => {
      if (this.isExists(key)) {
        return;
      }

      this.delete(key);
    });
  }
}

module.exports = KeyValue;
