const express = require('express');
const body_parser = require ('body-parser');
const logger = require ('morgan');

const app = express();


app.use(logger('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extend: false}));


module.exports = app;







