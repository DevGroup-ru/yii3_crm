const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const ENV_PROD = ENV === 'production';
const fileLoader = 'file-loader?name=[name]-[hash].[ext]';

const PrintChunksPlugin = function () {
};
PrintChunksPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation, params) {
    compilation.plugin('after-optimize-chunk-assets', function (chunks) {
      console.log('\n\n');

      chunks.map(function (c) {
        if (!(c.name === 'app' || c.name==='vendor')) {
          return;
        }
        const includes = Array.from(
          new Set(
            c.getModules().map(
              function (m) {
                const s = m.request;
                const matches = s && s.match(/node_modules\/([^/]*)\//i);
                const name = matches && matches[1] || s;

                // if (name === 'react-router') {
                //   console.log('\n\n\n', m, '\n\n\n');
                // }
                return `${m.external && '⭐ EXTERNAL️   ' || ' '.repeat(14)}  ${name}`;
              }
            )
          )
        ).sort();
        console.log(`
Chunk ▶️ ${c.name}
Includes:
${includes.join('\n')}\n\n`);
      });
    });
  });
};




module.exports = env => {
  console.log('env', env);
  const ifProd = plugin => ENV_PROD ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);
  return {
    entry: {
      install: './src/index.js',
      // vendor: [
      //
      // ]
    },
    output: {
      path: path.resolve(__dirname, ENV_PROD ? 'dist' : 'dist-dev'),
      filename: (ENV_PROD ? '[name].bundle.min.js' : '[name].bundle.js'),
      chunkFilename: (ENV_PROD ? '[name].bundle.min.js' : '[name].bundle.js'),
      library: 'InstallerModule',
      libraryTarget: 'window'
    },
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif)$/i,
          loaders: ENV_PROD ? [
            fileLoader,
            {
              loader: 'image-webpack-loader',
              options: {
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                pngquant: {
                  quality: '75-90',
                  speed: 4,
                  verbose: true
                },
                mozjpeg: {
                  progressive: true,
                  quality: 75
                },
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                // webp: {
                //   quality: 75
                // }
              }
            }
          ] : [fileLoader]
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: [
            // 'cache-loader',
            fileLoader,
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ]
            }
          }
        },
        {
          // Rules for SCSS files. Loaders run in reverse order
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !ENV_PROD,
              }
            },
            'resolve-url-loader',
            'cache-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !ENV_PROD,
                precision: 8,
              },
            }
          ],
        },
      ]
    },
    externals: {
      'babel-polyfill': '_babelPolyfill',
      'react': 'React',
      'prop-types': 'PropTypes',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouterExport',
      '@material-ui/core': 'MaterialUI',
      'classnames': 'classNames',
      'history': 'RouterHistory',
      'RouterHistory': 'RouterHistory',
      'redux': 'Redux',
      'react-redux': 'ReactRedux',
      'shared-components': 'SharedComponents',
      'redux-form': 'ReduxForm',
      'form-components': 'FormComponents',
      'redux-act': 'ReduxAct',
      'yup': 'yup',
      'redux-form-yup': 'ReduxFormYup',
      'i18next': 'i18next'
    },
    // resolve: {
    //     alias: {
    //         'select2': 'select2/dist/js/select2.full.js',
    //     },
    // },
    stats: {
      colors: true
    },

    devtool: ENV_PROD ? undefined : 'source-map',
    optimization: {
      minimizer: ENV_PROD ? [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: !ENV_PROD
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: { removeAll: true }, zindex: false },
          canPrint: true,
        })
      ] : []
    },
    plugins: removeEmpty([
      new CleanWebpackPlugin([ENV_PROD ? 'dist' : 'dist-dev']),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      new PrintChunksPlugin(),
      new MiniCssExtractPlugin({
        filename: ENV_PROD ? '[name].bundle.min.css' : '[name].bundle.css',
        chunkFilename: ENV_PROD ? '[id].min.css' : '[id].css',
      })
    ])
  };
};