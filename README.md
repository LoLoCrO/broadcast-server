# Brodcast Server
WebSocket sample for [Broadcast Server](https://roadmap.sh/projects/broadcast-server) on [roadmap.sh](https://roadmap.sh/)/

## Usage
After cloning the repo and running `yarn add` (or `npm i` if you don't use yarn) open the terminal in the repo and run:
```bash
node broadcast-server.js
```
Which will prompt you to input a command that is either `start` to start the broadcast server or `connect` to start a client connected to the broadcast server.
In the current terminal tab input `start` and open two more terminal tabs (or how many you like) in the project and run again:
```bash
node broadcast-server.js
``` 
but input `connect` as command.
After you have connected to the server you can type messages in client tabs that will propagate to server and then other clients, which will be visible in the terminal tabs.
