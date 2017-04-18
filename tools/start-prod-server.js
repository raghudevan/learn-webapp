import { chalkError, chalkSuccess, chalkWarning, chalkProcessing } from './custom-chalk';

import express from 'express';
import historyApiFallback from 'connect-history-api-fallback';
import bodyParser from 'body-parser';


let app = express();
let PORT = 3001;

app.listen(PORT, (err) => {
    if(err) {
        console.log(chalkError(err));
        return;
    }

    app.use(express.static('dist'));
    app.use(bodyParser.json());
    app.use(historyApiFallback());
    console.log(chalkSuccess.bold(`Started server on http://localhost:${PORT}`));
});