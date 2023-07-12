const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    return config;
  },
};

module.exports = nextConfig;
