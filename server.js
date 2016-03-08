require('marko/node-require').install();

require('lasso').configure({
    plugins: [
        'lasso-marko'
    ]
});

var express = require('express');
var app = express();

app.use(require('lasso/middleware').serveStatic()); // lasso provides express middleware

app.get('/', require('./src/pages/home'));

app.listen(8080, function (err) {
    if(err){
        console.log('Oops! there is an error: \n ', err);    
    }
    console.log('listening on port 8080');
});