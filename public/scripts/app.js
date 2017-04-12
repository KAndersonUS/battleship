(function(){
  'use strict';
  var app = angular.module('BattleshipApp', []);
  app.controller('MainCtrl', ['Board', function(Board){
    this.Message = "Battleship";
    this.Board = new Board();
    console.log(this.Board);
  }]);
  app.factory('Board', ['Piece', function(Piece){
    var Board = function(){
      this.Spaces = [];
      this.Init = function(){
        var row;
        for(var i = 0; i < Rows; i++){
          row = [];
          for(var k = 0; k < Columns; k++){
            row.push(new Piece(i,k));
          }
          this.Spaces.push(row);
        }
      };
      this.Init();
    },
    Rows = 10, Columns = 10;
    return Board;
  }]);
  app.factory('Piece', [function(){
    var Piece = function(x, y){
      this.X = x;
      this.Y = y;
    };
    return Piece;
  }]);
})();
