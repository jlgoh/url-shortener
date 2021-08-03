import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const dbPool = require('./queries');
require('./routes/shorten')(app, dbPool);

app.listen(PORT, () => {
    console.info(`URL Shortener Service running on ${PORT}.`);
});
