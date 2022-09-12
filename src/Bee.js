// Pseudoclassical Style ----------
var Bee = function() {
  // call Grub superclass
  // this allows for Bee to inherit all of Grub properties and methods
  Grub.call(this);

  // Properties
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

// Set the Prototype and Constructor -----
// this sets up the prototype relationship between the Subclass instantiation and the original Class (Grub).
Bee.prototype = Object.create(Grub.prototype);

// ^ This destroys the default Bee.prototype.constructor
// So we need to recreate it...

// since the previous line overwrote our prototype constructor, we must setup our Subclass relationship to its Constructor prototype object.
Bee.prototype.constructor = Bee;