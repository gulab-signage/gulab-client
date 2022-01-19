import AppEnv from '../env/AppEnv';
import NodeEnv from '../env/NodeEnv';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Indicates whether the app is running on localhost, stage or production
      APP_ENV: AppEnv;
      // Last git commit version used for build
      COMMIT_SHA_SHORT: string;
      // Used for dev or prod build, different from APP_ENV
      NODE_ENV: NodeEnv;
      // Sentry connection string
      SENTRY_DSN: string;
    }
  }
}
