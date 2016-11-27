function telephone(brand, price, color) {
	this.brand = brand; 
	this.price = price;
	this.color = color;
}

telephone.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.brand + ', kolor to ' + this.color + ', a cena to ' + this.price + '.');
}


var iPhone6S = new telephone('Apple', 2250, 'srebrny');
var SamsungGalaxyS6 = new telephone('Samsung', 1550, 'czarny');
var OnePlusOne = new telephone('OnePlus', 1250, 'biały');

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();