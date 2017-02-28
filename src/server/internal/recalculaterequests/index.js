function RecalculateRequests(cache, store) {

    async function flushCache() {
        return cache.flushAll();
    }

    async function incrementCache(number) {
        return cache.increment('totalRequestCount', number);
    }

    async function getRequestsCount() {
        const requestSchema = await store.getSchema('Request');
        const results = await requestSchema.query(`query { request{ url } }`);
        return Promise.resolve(results.data.request.length);
    }

    async function recalculateRequests() {
        await flushCache();
        const requestCount = await getRequestsCount();
        await incrementCache(requestCount);
    }

    return Object.freeze({
        recalculateRequests
    });
}

RecalculateRequests.deps = ['cache', 'store'];

module.exports = RecalculateRequests;
