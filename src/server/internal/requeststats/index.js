
function RequestStats(cache, requestmonitor) {

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

  return Object.freeze({
    getStatistics,
    recalculate
  });
}

RequestStats.deps = ['cache', 'requestmonitor'];

module.exports = RequestStats;
