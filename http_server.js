const express = require('express');
const app = express();
const http = require('http');

app.get('/', (req, res) => {
    res.send('Hello from HTTP Server!');
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('HTTP server running on port 3000');
});
