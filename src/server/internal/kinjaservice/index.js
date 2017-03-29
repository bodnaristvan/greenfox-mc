'use strict';

function KinjaService(container) {
  const implementation = container.get('config').get(KinjaService.serviceName, 'http');
  return container.getImplementation(KinjaService.serviceName, implementation);
}

KinjaService.type = 'factory';
module.exports = KinjaService;
