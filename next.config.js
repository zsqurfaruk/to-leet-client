const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.LoaderOptionsPlugin({ options: { worker: { worker: false } } }));
    return config;
  },
};

module.exports = nextConfig;
