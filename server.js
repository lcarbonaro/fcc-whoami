var express = require('express');
var server = express();

server.listen(process.env.PORT, function() {
    console.log('NodeJS %s server listening at http://%s:%s', process.version, process.env.IP, process.env.PORT);
});


server.get('/', function(req,res){
    //console.log(req.headers);
    res.send('Usage: https://stark-everglades-59365.herokuapp.com/api/whoami');
});

server.get('/api/whoami', function(req, res) {
    
    var reqIP = req.ip;
    var ipArr = reqIP.split(':');
    var ip = ipArr[ ipArr.length - 1 ];
    
    var lang = req.headers['accept-language'].split(',')[0];
    
    var os = req.headers['user-agent'].split('(')[1].split(')')[0];
    
    var o = {
        "ipaddress": ip,
        "language": lang,
        "software": os
    };

    res.send(o);
});
