/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      "918867304291-40nfb87kbhf4vlloh0r95bev44i16qpf.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },
};

module.exports = nextConfig;
