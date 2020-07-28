module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        modules:"commonjs"
      }
    ],
    ["@babel/preset-react"]
  ],
  plugins: []
};
