module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./out/index.html",
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ["html", "body"],
          /* purgecss fails to properly handle the escaped colons that sass puts out:
           * https://github.com/FullHuman/purgecss/issues/1086
           *
           * I'm sure these rules include more CSS back in than is necessary,
           * but let's be safe rather than sorry. In particular, they do not
           * include the :grid-offset set of rules.
           *
           * I'd really like to find a better solution here
           * */
          greedy: [/grid-col/, /grid-row/],
        },
      },
    ],
  ],
};
