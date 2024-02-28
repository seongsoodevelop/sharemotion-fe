const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@lib": path.resolve(__dirname, "src/lib/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@locales": path.resolve(__dirname, "src/locales/"),
    },
  },
};
