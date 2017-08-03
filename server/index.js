import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import bodyParser from 'body-parser';
import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';

let app = express();

app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', function (req, res, next) {
    compiler.outputFileSystem.readFile( path.join(compiler.outputPath,'index.html'), function(err, result){
        if (err) {
            return next(err);
        }

        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });
});

app.listen(3000, () => console.log('Running on localhost:3000'));