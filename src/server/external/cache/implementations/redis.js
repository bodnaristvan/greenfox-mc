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

	const increment = async (key, amount) => {
		return await redis.incrby(key, parseInt(amount, 10))
	}

	return Object.freeze({
		get,
		set,
		remove,
		increment
	});
}
