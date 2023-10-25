// next config
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    ZESTY_PREVIEW_PASSWORD: process.env.ZESTY_PREVIEW_PASSWORD,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // Dynamic module import because nextjs-sync is ESM
    const zestyNext = await import("@zesty-io/nextjs-sync");
    const data = await zestyNext.fetchRedirects();
    return data;
  },
};
