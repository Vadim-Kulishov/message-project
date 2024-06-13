const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*'
  }
});

const log = console.log;

const registerMessageHandlers = require('./handlers/messageHandlers');
const registerUserHandlers = require('./handlers/userHandlers');

const onConnection = (socket) => {
  log('User connected');
  const { roomId } = socket.handshake.query;
  socket.roomId = roomId;
  socket.join(roomId);
  registerMessageHandlers(io, socket);
  registerUserHandlers(io, socket);
  socket.on('disconnect', () => {
    log('User disconnected');
    socket.leave(roomId);
  });
};

io.on('connection', onConnection);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`);
});
