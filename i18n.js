/* eslint-disable @typescript-eslint/no-var-requires */
const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "pt",
  lng: "pt",
  browserLanguageDetection: true,
  otherLanguages: ["en"],
  localeSubpaths,
  localePath: path.resolve("./public/locales"),
});
