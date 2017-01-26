'use strict'

import atoint from '../executors/atoint'
import incrementBy from '../executors/incrementby';

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

	const increment = async (key, amount) => {
		const origValue = await get(key) || 0
		const newVal = incrementBy(atoint(origValue), atoint(amount))
		return set(key, newVal)
	}

	return Object.freeze({
		get,
		set,
		remove,
		increment
	});
}
