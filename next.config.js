module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // this will override the experiments
    config.experiments.topLevelAwait = true;
    // config.experiments.topLevelAwait = true
    return config;
  },
}
