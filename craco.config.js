const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@screens": path.resolve(__dirname, "src/screens"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@services": path.resolve(__dirname, "src/services"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@datatypes": path.resolve(__dirname, "src/types"),

      "@fakers": path.resolve(__dirname, "src/fakers"),
    },
  },
};
