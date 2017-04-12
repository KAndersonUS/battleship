'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));



http.listen(8080, () => {
    console.log('Server running on port 8080');
});