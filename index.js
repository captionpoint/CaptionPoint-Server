var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user is connected');

  socket.on('next', function(msg){
    console.log('broadcasting "next" message');
    io.emit('next', msg);
  });

  socket.on('previous', function(msg){
    console.log('broadcasting "previous" message');
    io.emit('previous', msg);
  });

  socket.on('redirect', function(msg){
    console.log('broadcasting "redirect" message');
    io.emit('redirect', msg);
  });

  socket.on('statusUpdate', function(msg){
    console.log('broadcasting "status" message');
    io.emit('statusUpdate', msg);
  });
  socket.on('blackout', function(msg){
    io.emit('blackout', msg);
  });
  socket.on('fullscreen', function(msg){
    io.emit('fullscreen', msg);
  });

  socket.on('disconnect', function(){
    console.log('a user has disconnected');
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/broadcaster', function(req, res){
  res.sendFile(__dirname + '/broadcaster.html');
});

app.get('/client', function(req, res){
  res.sendFile(__dirname + '/client.html');
});

app.use(express.static(__dirname + '/public'));



http.listen(3000, function(){
  console.log('listening on *:3000');
});
