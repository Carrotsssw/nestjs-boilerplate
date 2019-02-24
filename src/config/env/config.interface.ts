interface IOptions {
  dbName: string;
}

interface IMongo {
  mongoConnectionUri: string;
  options: IOptions;
}

interface IDB {
  mongo: IMongo;
}

interface IHttp {
  domain: string;
  port: number;
  rootUrl(): string;
}

export interface IConfig {
  nodeEnv: string;
  db: IDB;
  http: IHttp;
}