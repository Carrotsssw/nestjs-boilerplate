import { IConfig } from './env/config.interface';

const _Env = process.env.NODE_ENV || 'dev';

let _AppConfigEnv: IConfig

try {
  _AppConfigEnv = require(`./env/config.${_Env}`).ConfigEnv;
} catch (error) {
  throw new Error(`Env config could not be found for environment ${_Env}`);
}

export const AppConfigEnv: IConfig = _AppConfigEnv;