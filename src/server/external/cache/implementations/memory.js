'use strict'

module.exports = function() {

	const cache = {}

	const get = async (key) => cache[key] || null

	const set = async (key, value) => {
		cache[key] = value
		return value
	}

	const remove = async (key) => {
		delete cache[key]
	}

	return Object.freeze({
		get,
		set,
		remove
	});
}
