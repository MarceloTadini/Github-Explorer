const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //__dirname parte deste diretório
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx'], // vai aceitar os dois tipos de arquivos
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx$/, //Verifica se o arquiva termina em .jsx
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/, //Verifica se o arquiva termina em .jsx
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    }
};