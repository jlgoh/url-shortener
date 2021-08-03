import bodyParser from 'body-parser';
import express from 'express';

const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const dbPool = require('./queries');
require('./routes/shorten')(app, dbPool);

// Routing for deployment
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like our main.js or css file
    app.use(express.static('../../client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('..', '..', 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.info(`URL Shortener Service running on ${PORT}.`);
});
