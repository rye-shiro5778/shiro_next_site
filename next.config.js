/** @type {import('next').NextConfig} */
const path = require("path");
const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  trailingSlash: true,
  handleImages: ["png"],
});
