// Pseudoclassical Style ----------
var ForagerBee = function() {
  // call Bee superclass
  // this allows for HoneyMakerBee to inherit all of Grub/Bee properties and methods
  Bee.call(this);

  // Properties
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// Set the Prototype and Constructor -----
// this sets up the prototype relationship between the Subclass instantiation and the original Class (Grub/Bee).
ForagerBee.prototype = Object.create(Bee.prototype);
// since the previous line overwrote our prototype constructor, we must setup our Subclass relationship to its Constructor prototype object.
ForagerBee.prototype.constructor = ForagerBee;


// Methods Begin Here -----
ForagerBee.prototype.forage = function() {
  this.treasureChest.push('treasure');
};