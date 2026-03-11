import { defineConfig } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import 'dotenv/config';

export default defineConfig({
  driver: PostgreSqlDriver,

  dbName: process.env.POSTGRESQL_DATABASE,
  host: process.env.POSTGRESQL_HOST,
  port: Number(process.env.POSTGRESQL_PORT) || 5432,
  user: process.env.POSTGRESQL_USERNAME,
  password: process.env.POSTGRESQL_PASSWORD,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
});
