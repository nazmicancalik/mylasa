let express = require('express');
const app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){

});

http.listen(3001);