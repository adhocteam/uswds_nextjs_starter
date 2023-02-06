const path = require("path");

module.exports = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : undefined,
  assetPrefix: process.env.BASE_PATH ? process.env.BASE_PATH : undefined,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "node_modules", "@uswds", "uswds", "packages"),
    ],
  },
};
