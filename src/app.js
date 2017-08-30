var express = require('express');
var index = require('./routers/index');
var app = express();


app.get('/', function (req, res) {
    res.send('The service is working!');
})
app.use('/', index);

app.use('/api', require('./routers/api'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})
