const WebSocket = require('ws');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to the server');

    rl.on('line', (input) => {
        ws.send(input);
    });
});

ws.on('message', (message) => {
    const messageString = message.toString();
    console.log('received message:', messageString);
});

ws.on('error', (error) => {
    console.error('error:', error);
});

rl.on('close', () => {
    ws.close();
    console.log('disconnected from the server');
});
