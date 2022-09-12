// Pseudoclassical Style ----------
var RetiredForagerBee = function() {
  // call Bee superclass
  // this allows for HoneyMakerBee to inherit all of Grub/Bee/ForagerBee properties and methods
  ForagerBee.call(this);

  // Properties
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// Set the Prototype and Constructor -----
// this sets up the prototype relationship between the Subclass instantiation and the original Class (Grub/Bee/ForagerBee).
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// ^ This destroys the default RetiredForagerBee.prototype.constructor
// So we need to recreate it...

// since the previous line overwrote our prototype constructor, we must setup our Subclass relationship to its Constructor prototype object.
RetiredForagerBee.prototype.constructor = RetiredForagerBee;


// Methods Begin Here -----
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function() {
  this.treasureChest.push('treasure');
};