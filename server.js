const express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/view.html')
});

app.get('/time', function(req, res) {
    res.send(JSON.stringify({
        'time': Date.now()
    }))
});

app.listen(8080);