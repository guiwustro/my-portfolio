/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require("next-images");

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  i18n: {
    locales: ["default", "en"],
    defaultLocale: "default",
    localeDetection: true,
  },
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
