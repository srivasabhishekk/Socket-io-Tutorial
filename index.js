const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Hey, I'm working!")
})

server.listen(3000, () => {
    console.log('Server listening on port 3000');
})
