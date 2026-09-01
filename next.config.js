/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/news",
        destination: "https://recho.dev/notebook/news",
        permanent: true,
      },
      {
        source: "/news/:slug",
        destination: "https://recho.dev/notebook/news/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
