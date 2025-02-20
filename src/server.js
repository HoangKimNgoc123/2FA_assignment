require('dotenv').config();
const express = require('express');
const app = express();
const webRouter = require('./routes/web.js');
const configViewEngine = require('./config/viewEngine.js');
//
const port = process.env.PORT
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app);

app.use('/', webRouter);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})