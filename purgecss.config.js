module.exports = {
  content: ["out/index.html", "pages/**/*.js", "components/**/*.js"],
  css: ["out/_next/static/css/*.css"],
  keyframes: true,
  variables: true,
  safelist: {
    /* purgecss fails to properly handle the escaped colons that sass puts out:
     * https://github.com/FullHuman/purgecss/issues/1086
     *
     * I'm sure these rules include more CSS back in than is necessary, but let's be safe rather than sorry. In particular, they do not include the :grid-offset set of rules
     * */
    greedy: [/grid-col/, /grid-row/],
  },
};
