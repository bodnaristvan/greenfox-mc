import container from './container';

const requestStats = container.get('requeststats');

console.log('[Queue process] The queue processing has started');
requestStats.processQueuedMessages();
