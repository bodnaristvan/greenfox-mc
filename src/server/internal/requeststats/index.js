
function RequestStats(cache, requestmonitor, queue) {

  async function getStatistics() {
    return {
      totalIncomingRequests: await cache.get('totalIncomingRequests')
    }
  }

  async function recalculate() {
    await cache.flushAll();
    const requests = await requestmonitor.getRequests();
    await Promise.all(
      requests.map(async () => {
        await cache.increment('totalIncomingRequests', 1);
      })
    );
  }

  function processQueuedMessages() {
    queue.consume('add_request_stat', async function () {
        await cache.increment('totalIncomingRequests', 1);
    });
  }

  return Object.freeze({
    getStatistics,
    recalculate,
    processQueuedMessages
  });
}

RequestStats.deps = ['cache', 'requestmonitor', 'queue'];

module.exports = RequestStats;
