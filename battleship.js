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
}