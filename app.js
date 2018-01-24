'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = new express();

app.use(bodyParser.json());

require('./routes/versionRoutes')(app, config);

app.listen(3000, () => {
    /* eslint-disable */
    console.log('Server is up!');
});