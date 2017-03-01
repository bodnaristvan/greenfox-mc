'use strict';

import { expect } from 'chai';

export default function () {

    this.Given('the cache is not empty', async function () {
        const cache = this.container.get('cache');
        await cache.increment('totalIncomingRequests', 1);
    })

    this.Given('I add a request to the store', async function () {
        const query = `mutation Mutation($url: String!) {
            registerRequest(url: $url) {
                message
            }
        }`;
        const store = this.container.get('store');
        const schema = await store.getSchema('Request');
        await schema.query(query, { url: 'test' });
    })

    this.When('I call the recalculate service', async function () {
        const recalcService = this.container.get('recalculaterequests');
        await recalcService.recalculateRequests();
    });

    this.Then('I see "$value" request in the cache', async function (value) {
        const cache = this.container.get('cache');
        const requestCount = await cache.get('totalIncomingRequests');
        expect(requestCount).to.eql(parseInt(value))
    });
}
