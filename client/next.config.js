module.exports = {
  env: {
    BACKEND_ENDPOINT: "http://65.2.150.236:5000",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        port: "",
      },
    ],
  },
};
