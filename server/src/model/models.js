import {type} from 'thinky';
import thinky from './db';

const {any, array, boolean, buffer, date, number, object, point, string, virtual} = type;

export const User = thinky.createModel('User', object().schema({
  id: string(),
  email: string().email().required(),
  hash: string(),
  salt: string(),
  name: string(),
  phone: string(),
}));

export const PropertyTypes = [
  'beds',
  'baths',
  'price',
  'currency',
  'payments',
  'furnished',
  'pets-allowed',
  'smoking-allowed',
  'preferred-tenants',
];

export const Rentable = thinky.createModel('Rentable', object().schema({
  id: string(),
  creatorId: string(),

  location: object().schema({
    latitude: number().required(),
    longitude: number().required(),
    name: string().required(),
  }),
  properties: array().schema({
    type: string().enum(PropertyTypes).required(),
    value: any().required(),
  }),
}));

Rentable.belongsTo(User, "creator", "creatorId", "id");