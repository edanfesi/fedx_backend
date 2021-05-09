const express = require('express');
const cors = require('cors');

const routes = require('./app/routes');

const app = express();
app.use(cors());

const { PORT } = process.env;

app.get('/', (_, res) => {
    res.send({
        status: 'OK',
        message: 'Welcome to the Fedx Backend'
    });
});

app.use('/api/fedx', routes);

app.listen(PORT || 8000);

module.exports = app;