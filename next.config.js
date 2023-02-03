const path = require("path");

module.exports = {
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "node_modules", "@uswds", "uswds", "packages"),
    ],
  },
};
