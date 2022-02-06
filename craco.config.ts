import type { CracoConfig } from '@craco/craco';
import { getLoader, loaderByName } from '@craco/craco';
import path from 'path';
import type { Configuration } from 'webpack';

type GetLoaderResult = {
  isFound: boolean;
  match: Configuration;
};

const packages: string[] = [];
packages.push(path.join(__dirname, './packages/core-ui'));
packages.push(path.join(__dirname, './core/logger'));
packages.push(path.join(__dirname, './core/models'));

const cracoConfig: CracoConfig = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader')) as unknown as GetLoaderResult;
      if (isFound) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const currInclude = match.loader?.include;
        const include = Array.isArray(currInclude) ? currInclude : [currInclude];

        if (match.loader !== undefined) {
          match.loader.include = include.concat(packages);
        }
      }

      return webpackConfig;
    },
  },
};

export default cracoConfig;
