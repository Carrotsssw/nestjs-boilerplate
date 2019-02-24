import { IConfig } from './config.interface';

export const ConfigEnv: IConfig = {
  nodeEnv: 'dev',
  db: {
    mongo: {
      mongoConnectionUri: 'mongodb://localhost',
      options: {
        dbName: 'my-db',
      },
    },
  },
  http: {
    domain: 'localhost',
    port: 8007,
    rootUrl() {
      return `http://${this.domain}:${this.port}`;
    }
  }
};