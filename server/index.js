const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

let referenceResponse;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on("return-response", (data) => {
    console.log(data)
    referenceResponse.send(data)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


app.use(express.json())

app.use("/*", (req, res) => {
  io.emit("new-request", {
    url: req.url,
    method: req.method,
    query: req.query,
    body: req.body
  });

  referenceResponse = res;
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
