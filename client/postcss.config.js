const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    
    //Remove all content of purgecss in case of need build tailwind css
    purgecss({
      content: ["./src/**/*.js", "./public/index.html"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
    // ...
  ],
};
