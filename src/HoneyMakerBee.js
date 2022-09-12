// Pseudoclassical Style ----------
var HoneyMakerBee = function() {
  // call Bee superclass
  // this allows for HoneyMakerBee to inherit all of Grub/Bee properties and methods
  Bee.call(this);

  // Properties
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;


};

// Set the Prototype and Constructor -----
// this sets up the prototype relationship between the Subclass instantiation and the original Class (Grub/Bee).
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// ^ This destroys the default HoneyMakerBee.prototype.constructor
// So we need to recreate it...

// since the previous line overwrote our prototype constructor, we must setup our Subclass relationship to its Constructor prototype object.
HoneyMakerBee.prototype.constructor = HoneyMakerBee;


// Methods Begin Here -----
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
