'use strict';

export default function () {

	this.Given(/^There's no such key as "([^"]*)"$/, function (key, callback) {
		callback(null, 'pending');
	});

	this.Given(/^I set cache key "([^"]*)" to "([^"]*)"$/, function (key, value, callback) {
		callback(null, 'pending');
	});

	this.When(/^I request the key "([^"]*)"$/, function (testKey, callback) {
		callback(null, 'pending');
	});

	this.Then(/^I get a null response$/, function (callback) {
		callback(null, 'pending');
	});

	this.Then(/^I get a "([^"]*)" response$/, function (response, callback) {
		callback(null, 'pending');
	});

}
