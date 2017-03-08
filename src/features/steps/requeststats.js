'use strict';

import { expect } from 'chai';

export default function () {

  this.When('the system recalculate the requests', async function () {
    const monitor = this.container.get('requeststats');
    await monitor.recalculate();
  });

  this.Then('I see "$value" for "$key" in the statistics', async function(value, key) {
    const monitor = this.container.get('requeststats');
    const result = await monitor.getStatistics();
    expect(result[key]).to.eql(parseInt(value));
  });

}
