const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.emit('log', 'Connected to bot backend.');
});

app.get('/', (req, res) => {
  res.send('Token Sniper Bot backend is running.');
});

server.listen(4000, () => {
  console.log('Backend server listening on port 4000');
});
