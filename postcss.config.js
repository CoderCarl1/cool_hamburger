module.exports = (cfg) => {
  // const dev = cfg.env === 'development',
  const scss = cfg.file.extname === '.scss';

  return {
    map: false,
    parser: scss ? 'postcss-scss' : false,
    plugins: [
      require('postcss-advanced-variables')(),
      require('postcss-map-get')(),
      require('postcss-nested')(),
      require('postcss-preset-env')({ stage: 1 }),
      require('autoprefixer')(),

      //  MINIFIES CSS
      // require('cssnano'),
    ],
  };
};
