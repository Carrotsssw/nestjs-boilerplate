import { IConfig } from './config.interface';

export const ConfigEnv: IConfig = {
  nodeEnv: 'dev',
  fixedToken: 'token',
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
    port: 5555,
    rootUrl() {
      return `http://${this.domain}:${this.port}`;
    }
  }
};