'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// custom functions
const generateGameId = require('./generateGameId');

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('register', (gameId) => {
        if (!gameId) {
            gameId = generateGameId();
        }
        socket.join(gameId);
        socket.gameId = gameId;
        io.to(gameId).emit('playerJoin', socket.id);
    });

    scoket.on('disconnect', () => {
        io.to(gameId).emit('playerLeave', socket.id);
    });

    // when a player has filled their board before the start of the game,
    // this event is used to send the board to the other player
    socket.on('board', (board) => {
        io.to(socket.gameId).emit('board', board)
    });

    socket.on('gameStart', () => {
        io.to(socket.gameId).emit('gameStart');
    });

    socket.on('gameEnd', () => {

    });
});

http.listen(8080, () => {
    console.log('Server running on port 8080');
});