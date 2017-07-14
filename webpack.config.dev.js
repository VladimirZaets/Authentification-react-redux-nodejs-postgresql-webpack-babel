import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './server/index.html',
            inject: true,
            filename: 'index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot-loader','babel-loader'],
                include: path.join(__dirname, 'client'),
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    }
}