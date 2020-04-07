const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();

app.use(logger('short'));
app.use(express.static(path.resolve(__dirname,'public')));


app.use('/v1', router);
app.use('/*', (req, res)=>{
   res.status(404).send('Page not found');
})
module.exports = app;
