import { EnvTypes } from './types';

export default {
  [EnvTypes.development]: {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000
    }
  },
  [EnvTypes.test]: {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000
    }
  },
  [EnvTypes.production]: {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000
    }
  }
};
