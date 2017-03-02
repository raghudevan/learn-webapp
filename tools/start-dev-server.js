import { chalkError, chalkSuccess, chalkWarning, chalkProcessing } from './custom-chalk';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev.js';

import express from 'express';
import historyApiFallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';

const bundler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(bundler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    quiet: false,
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: true,
        chunkModules: false
    }
});

let app = express();

app.listen(3000, (err) => {
    if(err) {
        console.log(chalkError(err));
        return;
    }

    app.use(bodyParser.json());
    app.use(historyApiFallback());
    app.use(middleware);
    app.use(webpackHotMiddleware(bundler));
    console.log(chalkSuccess.bold('Started server on http://localhost:3000'));
});