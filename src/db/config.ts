import { Sequelize, Options } from 'sequelize';
import settings from './settings';
import { EnvTypes } from './types';

const env = (process.env.NODE_ENV as EnvTypes) || 'development';

const userName = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_URL as string;
const options = settings[env] as Options;

export const sequelizeConnection = new Sequelize(
  database,
  userName,
  password,
  options
);
