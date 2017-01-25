'use strict';

import { assert } from 'chai';

export default function () {

	this.Before(function () {
		this.context.cache = this.container.get('cache');
	});

	this.Given(/^There's no such key as "([^"]*)"$/, function (key, callback) {
		this.context.cache.remove(key);
		callback();
	});

	this.Given(/^I set cache key "([^"]*)" to "([^"]*)"$/, function (key, value, callback) {
		this.context.cache.set(key, value).then(() => {
			callback();
		}, callback);
	});

	this.Given(/^I increment cache key "([^"]*)" by "([^"]*)"$/, function (cacheKey, addedValue, callback) {
		callback(null, 'pending');
	});

	this.When(/^I request the key "([^"]*)"$/, function (testKey, callback) {
		this.context.cache.get(testKey).then((cacheResponse) => {
				this.context.cacheResponse = cacheResponse;
				callback();
			},
			(cacheError) => {
				this.context.cacheError = cacheError;
				callback();
			}
		);
	});

	this.Then(/^I get a null response$/, function () {
		assert.strictEqual(this.context.cacheError, undefined, "Error getting cache key");
		assert.strictEqual(this.context.cacheResponse, null, "Response not null");
	});

	this.Then(/^I get a "([^"]*)" response$/, function (response) {
		assert.isUndefined(this.context.cacheError, "Error getting cache key");
		assert.strictEqual(parseInt(this.context.cacheResponse, 10), parseInt(response, 10), "Cache value does not match");
	});

	this.Then(/^I get an error response$/, function (callback) {
		callback(null, 'pending');
	});

}
