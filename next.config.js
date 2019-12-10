const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
const sass = require("@zeit/next-sass");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,

    MONGODB_URI: process.env.MONGODB_URI,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,

    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,

    SENDGRID_USERNAME: process.env.SENDGRID_USERNAME,
    SENDGRID_PASSWORD: process.env.SENDGRID_PASSWORD,

    STRIPE_PUBLIC_KEY_TEST: process.env.STRIPE_PUBLIC_KEY_TEST,
    STRIPE_SECRET_KEY_TEST: process.env.STRIPE_SECRET_KEY_TEST,
    STRIPE_WEBHOOK_SECRET_TEST: process.env.STRIPE_WEBHOOK_SECRET_TEST,

    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET
  }
};

module.exports = withPlugins(
  [
    [css],
    [sass],
    [
      optimizedImages,
      {
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 40
        },
        optipng: {
          optimizationLevel: 5
        }
      }
    ]
  ],
  nextConfig
);
