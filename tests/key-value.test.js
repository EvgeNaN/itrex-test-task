const { ERRORS } = require('../services/key-value/constants');

const KeyValue = require('../services/key-value');

const sleep = async ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

describe('KeyValue tests', () => {
  let keyValue;

  beforeEach(() => {
    keyValue = new KeyValue();
  });

  afterEach(() => {
    keyValue.destroy();

    keyValue = null;
  });

  it('Should return value', () => {
    keyValue.add('sampleKey', 'sampleValue');

    expect(keyValue.get('sampleKey')).toBe('sampleValue');
  });

  it('Value can be changed', () => {
    keyValue.add('sampleKey', 'sampleValue1');
    keyValue.add('sampleKey', 'sampleValue2');

    expect(keyValue.get('sampleKey')).toBe('sampleValue2');
  });

  it('TTL should work', async () => {
    keyValue.add('sampleKey', 'sampleValue', 1000);

    await sleep(300);

    expect(keyValue.get('sampleKey')).toBe('sampleValue');
    
    await sleep(800);

    expect(keyValue.get('sampleKey')).toBeNull();
  });

  it('TTL can be added to existing key', async () => {
    keyValue.add('sampleKey', 'sampleValue1');
    keyValue.add('sampleKey', 'sampleValue2', 500);
    
    await sleep(100);

    expect(keyValue.get('sampleKey')).toBe('sampleValue2');

    await sleep(500);

    expect(keyValue.get('sampleKey')).toBeNull();
  });

  it('Item can be removed', () => {
    keyValue.add('sampleKey', 'sampleValue');

    expect(keyValue.get('sampleKey')).toBe('sampleValue');

    keyValue.delete('sampleKey');

    expect(keyValue.get('sampleKey')).toBeNull();
  });

  it('Should throw exception if key is not a string', () => {
    try {
      keyValue.add(1, 2);

      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(ERRORS.KEY_INVALID().message);
    }
  });

  it('Should throw exception if key is empty a string', () => {
    try {
      keyValue.add('', 2);

      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(ERRORS.KEY_INVALID().message);
    }
  });

  it('Should throw exception if TTL is not a number', () => {
    try {
      keyValue.add('key', 2, '100');

      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(ERRORS.TTL_INVALID().message);
    }
  });

  it('Should throw exception if TTL is negative', () => {
    try {
      keyValue.add('key', 2, -1);

      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(ERRORS.TTL_INVALID().message);
    }
  });
});
