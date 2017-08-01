var express = require('express');
var router = express.Router();
var session = require('express-session');
var socket = require('socket.io-client')('http://localhost:5001');
router.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));
/* GET users listing. */
router.get('/', function(routeReq, routeRes, next) {
    socket.emit('chat message', {
        msg :"server",
        name : "server"
    });
    socket.on('disconnect', function(){});
	var arg = routeReq.body;
	routeRes.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
	var data = JSON.stringify(arg);
	routeRes.end(data);
});
module.exports = router;