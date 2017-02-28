'use strict'

import _ from 'lodash';
import validate from '../../../lib/validate';
import VError from 'verror';

function MemoryCache () {
  let cache = {};

  async function get(key, defaultValue) {
    const result = _.get(cache, key, defaultValue);
    return Promise.resolve(parseInt(result));
  }

  async function increment(key, amount) {
    validate.string(
      key,
      new VError(`[Cache] You have to use string as a key, got "${key}" (${typeof key})`)
    );
    validate.number(
      amount,
      new VError(
        `[Cache] Can not increment key "${key}" with not a number value: ${amount}`
      )
    );
    _.set(cache, key, await get(key, 0) + amount);
  }

  async function flushAll() {
    cache = {};
  }

  return Object.freeze({
    get: get,
    increment,
    flushAll
  });
}

module.exports = MemoryCache;
