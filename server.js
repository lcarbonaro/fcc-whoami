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

    // console.log(req.ip);  gives ::ffff:10.240.0.200
    var reqIP = req.ip;
    var ipArr = reqIP.split(':');
    var ip = ipArr[ ipArr.length - 1 ];
    
    // console.log(req.headers['accept-language']);  gives  en-US,en;q=0.8
    var lang = req.headers['accept-language'].split(',')[0];
    
    // console.log(req.headers['user-agent']);  gives  Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) etc.
    var os = req.headers['user-agent'].split('(')[1].split(')')[0];
    
    var o = {
        "ipaddress": ip,
        "language": lang,
        "software": os
    };

    res.send(o);
});
