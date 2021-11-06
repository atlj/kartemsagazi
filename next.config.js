/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ["res.cloudinary.com", "media.giphy.com"],
    },
});
