'use strict';

module.exports = function generateGameId () {
    const chars = "BCDFGHJKLMNPQRSTVWXYZ0123456789";
    let id = "";
    for (let i=0; i<5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};