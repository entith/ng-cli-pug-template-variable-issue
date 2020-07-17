module.exports = (config, options, targetOptions) => {
  config.module.rules.push(
    {
      test: /\.pug$/,
      use: [
        { loader: "apply-loader" },
        { loader: "pug-loader" }
      ]
    }
  );
 
  return config;
};

