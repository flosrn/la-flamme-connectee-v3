const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withCSS(
  withSass(
    withImages({
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
        STRIPE_SECRET_KEY_TEST: process.env.STRIPE_SECRET_KEY_TEST
      }
    })
  )
);
