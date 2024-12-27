const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the command (start/connect):', (command) => {
    if (command === 'start') {
        console.log("Starting the server...");
        rl.close();
        require('./server.js');
    } else if (command === 'connect') {
        console.log("Connecting to the server...");
        rl.close();
        require('./client.js');
    } else {
        console.log('Invalid command');
        rl.close();
    }
});
