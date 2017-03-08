import container from './container';
import VError from 'verror';

const requestStats = container.get('requeststats');

requestStats.recalculate().then(()=>{
  console.log('recalculation was successful');
}).catch((error)=>{
  console.log(new VError(error, `[Recalcuate] The recalcuation was unsuccessful`));
});
