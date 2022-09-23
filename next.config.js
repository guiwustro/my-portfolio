module.exports = {
  i18n: {
    locales: ["default", "en", "fr"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
