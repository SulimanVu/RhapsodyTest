const { ModuleFederationPlugin } = require("webpack").container;

const mfConfig = require("./mf.config");
const dependencies = require("../package.json").dependencies;

const createRemoteEntry = (key, isProd) => {
  const name = mfConfig[key].name;
  const port = mfConfig[key].port;
  const prodUrl = `${name}@/${name}/remoteEntry.js`;
  const localUrl = `${name}@http://localhost:${port}/${name}/remoteEntry.js`;

  return { [mfConfig[key].name]: isProd ? prodUrl : localUrl };
};

module.exports = (isProduction) => {
  return new ModuleFederationPlugin({
    name: `${mfConfig.shell.name}`,
    filename: `${mfConfig.shell.name}/remoteEntry.js`,
    remotes: {
      ...createRemoteEntry("shell", isProduction),
      ...createRemoteEntry("uno", isProduction),
      ...createRemoteEntry("login", isProduction),
    },
    shareScope: "default",
    exposes: {
      "./firebase": "./src/shared/firebase",
      "./ErrorBoundary": "./src/shared/ui/ErrorBoundary",
      "./store": "./src/redux",
      "./storeProvider": "./src/app/provider/storeProvider",
      "./UseAppDispatch": "./src/hooks/UseAppDispatch",
      "./UseAppSelector": "./src/hooks/UseAppSelector",
    },
    shared: [
      {
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
      },
    ],
  });
};
