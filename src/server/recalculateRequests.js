import container from './container';

require('dotenv').config()
require("babel-core/register");
require("babel-polyfill");

container.get('recalculaterequests').recalculateRequests()
	.then(() => {
		container.get('cache').get('totalRequestCount').then((res) => {
			console.log('requests:', res);
			process.exit();
		});
	});
