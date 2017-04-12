'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);



http.listen(8080, () => {
    console.log('Server running on port 8080');
});