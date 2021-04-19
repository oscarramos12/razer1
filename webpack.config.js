const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin}= require("clean-webpack-plugin");
module.exports={
    entry:"./src/index.js",
    output: {
        filename:"[name].[contenthash].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    mode:'production',
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader'
                }
              },
              {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: "babel-loader"
              },
              
           
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
      },

    


    plugins:[new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new CleanWebpackPlugin() ]
};