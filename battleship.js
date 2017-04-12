function Ship(length) {
	this.length = length;
	this.isHorizontal = false;	
	this.x = undefined;
	this.y = undefined;
	for(var i =0; i < length; i++) {
		this.hits[i] = false;
	}
}