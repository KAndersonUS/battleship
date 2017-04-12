function Ship(length) {
	this.length = length;
	this.isHorizontal = false;	
	this.x = undefined;
	this.y = undefined;
	for(var i =0; i < length; i++) {
		this.hits[i] = false;
	}
	this.isHit = function(x,y) {
		for(var i = 0; i < length; i++) {
			if(this.isHorizontal) {
				var lx = this.x + i;
				var ly = this.y
			}
			else {
				var ly = this.y + i;
				var lx = this.x
			}
			if(this.x === lx && this.y === ly) {
				this.hits[i] = true;
				return true;
			}

		}
		return false;
	}
	this.isSunk = function() {
		for (var i =0; i < this.length; i++) {
			if(this.hits[i] !== true) {
				return false;
			}
		}
		return true;
	}
}

function Board() {
	this.ships = [];
	this.ships.push(new Ship(5));
	this.ships.push(new Ship(4));
	this.ships.push(new Ship(3));
	this.ships.push(new Ship(3));
	this.ships.push(new Ship(2));

	this.misses = [];
	for(var i = 0; i < 10; i++) {
		this.misses[i] = [];
		for(var j = 0; j < 10; j++) {
			this.misses[i][j] = false;
		}
	}

}