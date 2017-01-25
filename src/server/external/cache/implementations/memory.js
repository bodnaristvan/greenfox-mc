'use strict'

module.exports = function() {

	const cache = {}

	const get = async (key) => cache[key] || null

	return Object.freeze({
		get
	});
}
