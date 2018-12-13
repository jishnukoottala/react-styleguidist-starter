require('dotenv').config()
var path = require('path');
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack');



module.exports = env=>{

    const isProduction = env && env.production !== undefined

const plugins = [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin()
]

    return {
    entry: './src/app.js',
    mode:isProduction?'production':'development',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
        rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        }, {
        test: /\.s?css$/,
        use: [
        'style-loader',
        'css-loader', //translates css into commonJS
        'sass-loader' // compile Sass to CSS using node sass by default
        ]
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '/images/',
               
              }
            }
          }
        ] //end of rules
        },

        devtool:  isProduction?'none':'cheap-module-eval-source-map',

        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
            port:8000,
            hot: true, //enable hot module replacement feature
            },
            plugins:plugins,
            resolve : {

                extensions:['.js'],
                alias:{
                    assets: path.resolve(__dirname, 'src/assets'),
                    containers: path.resolve(__dirname,'src/containers'),
                    config: path.resolve(__dirname,'src/config'),
                    routes:path.resolve(__dirname,'src/routes'),
                    components:path.resolve(__dirname,'src/components'),
                    pages: path.resolve(__dirname, 'src/pages'),
                    
                }
            }
    }
    

   
  }