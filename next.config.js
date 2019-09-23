const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withCSS(
  withSass(
    withImages({
      env: {
        MONGODB_URI: process.env.MONGODB_URI,
        CLOUDINARY_URL: process.env.CLOUDINARY_URL
      }
    })
  )
);
