'use strict';

import { assert } from 'chai';

export default function () {

	this.Before(function () {
		// this.context.cache = this.container.get('cache');
	});

	this.Given(/^There's no such key as "([^"]*)"$/, function (key, callback) {
		const cache = this.container.get('cache');
		cache.remove(key);
		callback();
	});

	this.Given(/^I set cache key "([^"]*)" to "([^"]*)"$/, function (key, value, callback) {
		const cache = this.container.get('cache');
		cache.set(key, value).then(() => {
			callback();
		}, callback);
	});

	this.Given(/^I increment cache key "([^"]*)" by "([^"]*)"$/, function (cacheKey, addedValue, callback) {
		const cache = this.container.get('cache');
		cache.increment(cacheKey, addedValue).then(() => {
			callback();
		}, (err) => {
		this.context.cacheError = err;
			callback();
		});
	});

	this.When(/^I request the key "([^"]*)"$/, function (testKey, callback) {
		const cache = this.container.get('cache');
		cache.get(testKey).then((cacheResponse) => {
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
		assert.notInstanceOf(this.context.cacheError, Error, "Error getting cache key");
		assert.strictEqual(this.context.cacheResponse, null, "Response not null");
	});

	this.Then(/^I get a "([^"]*)" response$/, function (response) {
		assert.notInstanceOf(this.context.cacheError, Error, "Error getting cache key");
		assert.strictEqual(parseInt(this.context.cacheResponse, 10), parseInt(response, 10), "Cache value does not match");
	});

	this.Then(/^I get an error response$/, function () {
		assert.instanceOf(this.context.cacheError, Error, 'Error getting error');
	});

}
