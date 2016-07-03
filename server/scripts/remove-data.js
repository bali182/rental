import {Rentable, User} from '../src/model/models';
import {randomRentable, randomUser} from './generators';
import {json, nok, ok, lf, error, warn, success} from './utils'

function addStatus(promise, table, args) {
  return promise.then(e => {
    success(`  ${ok} ${e.deleted} records deleted from table "${table}"`)
    return e;
  }).catch(e => error(`  ${nok} error deleting records from ${table}: ${e.message}`));
}

function removeData(args) {
  warn('removing all data...');
  return Promise.all(
    [Rentable, User]
      .map(Doc => [Doc.getTableName(), Doc.delete().execute()])
      .map(([table, promise]) => addStatus(promise, table, args))
  );
}

module.exports = removeData;