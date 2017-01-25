'use strict'

module.exports = function() {

	const redis = new require('ioredis')();

	const get = async (key) => redis.get(key)

	const set = async (key, value) => {
		redis.set(key, value)
		return value
	}

	const remove = async (key) => {
		redis.del(key)
	}

	return Object.freeze({
		get,
		set,
		remove
	});
}
