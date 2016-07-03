import r from 'rethinkdb'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import meow from 'meow'
import {json, nok, lf, fatalError} from './utils'
import thinky from '../src/model/db';

const {input, flags} = meow();

const inputAliases = {
  'g': 'generate-data',
  'r': 'remove-data'
};

const resolveModule = key => {
  for (let alias in inputAliases) {
    const value = inputAliases[alias];
    if (key === alias) {
      return value;
    }
    if (key === value) {
      return value;
    }
  }
  return null;
};

input
  .map(task => [task, resolveModule(task)])
  .map(([task, moduleName]) => moduleName ? require(`./${moduleName}`) : fatalError(`${nok} task ${task} does not exist`))
  .reduce((chain, fn, i) => {
    let next = chain.then(_ => fn(flags));
    if (i !== input.length - 1) {
      next = next.then(_ => lf())
    }
    return next;
  }, Promise.resolve()).then(e => thinky.r.getPoolMaster().drain());
