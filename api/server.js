const express = require("express");

const server = express();

server.use(express.json());

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'your request was not completed '
    })
})
server.use((err, req, res, next) => {
    res.status(500).json({
        message: 'something went wrong'
    })
})


module.exports = server;
