const WebSocket = require('ws');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wss = new WebSocket.Server({ port: 8080 });
const clients = [];

wss.on('connection', (ws) => {
  console.log('a new client connected');
  clients.push(ws);

  ws.on('message', (message) => {
    const messageString = message.toString();
    console.log('received message:', messageString);

    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(messageString);
      }
    });
  });

  ws.on('close', () => {
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }

    console.log('client disconnected');
  });
});

rl.on('line', (input) => {
  console.log('Received:', input);
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(input);
    }
  });
});

console.log('Server is running on ws://localhost:8080');
