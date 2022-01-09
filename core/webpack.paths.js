'use strict';

const path = require('path');
const fs = require('fs');

const moduleFileExtensions = ['js', 'ts', 'tsx', 'json', 'jsx'];

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

const buildPath = process.env.BUILD_PATH || 'build';

module.exports = {
  appBuild: resolveApp(buildPath),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appSrc: resolveApp('src'),
};
