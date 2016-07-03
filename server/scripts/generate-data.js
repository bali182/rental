import {Rentable, User} from '../src/model/models';
import {randomRentable, randomUser} from './generators';
import {json, nok, ok, lf, error, warn, success} from './utils'

const quantites = {
  User: [3, 10, 100],
  Rentable: [10, 100, 1000]
}

const quantity = (table, args) => {
  const q = (args.quantity || args.q) || '';
  const data = quantites[table] || [0, 0, 0];

  switch (q.toLowerCase()) {
    case 'few': return data[0];
    case 'plenty': return data[1];
    case 'many': return data[2];
    default: return data[0];
  }
}

const createMany = (factory, amount) => new Array(amount).fill(null).map(_ => factory());

function createUsers(args) {
  return Promise.all(
    createMany(randomUser, quantity('User', args))
      .map(data => new User(data))
      .map(user => user.save())
  );
}

function createRentables(args) {
  return Promise.all(
    createMany(randomRentable, quantity('Rentable', args))
      .map(data => new Rentable(data))
      .map(rentable => rentable.save())
  );
}

function addStatus(promise, table, args) {
  return promise.then(e => {
    success(`  ${ok} ${quantity(table, args)} records saved to table "${table}"`)
    return e;
  }).catch(e => error(`  ${nok} error saving records to ${table}: ${e.message}`));
}

function createData(args) {
  warn('creating random data...');
  return Promise.all([
    addStatus(createUsers(args), 'User', args),
    addStatus(createRentables(args), 'Rentable', args)
  ]);
}


module.exports = createData;