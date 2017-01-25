function CacheService(container) {
	const implementation = container.config.get('cache') || 'redis';
	return container.getImplementation('cache', implementation);
}
CacheService.type = 'factory';
module.exports = CacheService;
