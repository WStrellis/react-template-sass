module.exports = {
  plugins: [require("autoprefixer"), require("cssnano")],
  sourceMap: process.env.NODE_ENV === "development",
};
