const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withSaas = require("@zeit/next-sass");
const withVideos = require("next-videos");
const withOptimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
require("dotenv").config();

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,

    JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,

    STRIPE_PUBLIC_KEY_TEST: process.env.STRIPE_PUBLIC_KEY_TEST,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,

    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
  }
};

module.exports = withPlugins(
  [
    [withCss],
    [withSaas],
    [withVideos],
    [withBundleAnalyzer],
    [
      withOptimizedImages,
      {
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 75
        },
        optipng: {
          optimizationLevel: 3
        },
        webp: {
          preset: "default",
          quality: 75
        }
      }
    ]
  ],
  nextConfig
);
