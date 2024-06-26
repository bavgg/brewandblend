const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './public/main.mjs',
    header: './public/header.mjs',
    index: './public/index.mjs',
    cart: './public/cart.mjs',
    checkout: './public/checkout.mjs',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};


