var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user is connected');

  socket.on('caption message', function(msg){
    console.log('broadcasting message');
    io.emit('caption message', msg);
  });

  socket.on('disconnect', function(){
    console.log('a user has disconnected');
  });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/server', function(req, res){
  res.sendFile(__dirname + '/server.html');
});

app.get('/client', function(req, res){
  res.sendFile(__dirname + '/client.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
