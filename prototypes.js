Function.prototype.inherits = function(parent) {
  function Surrogate () {}
// console.log(this);
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject (speed) {
  this.speed = speed;
}

MovingObject.prototype.mySpeed = function () {
  console.log("I go " + this.speed + " fast");
};

function Ship (speed) {
  MovingObject.call(this, speed); // *************************
}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.crash = function () {
  console.log("I go boom");
};

var dude = new MovingObject(50);
var ship = new Ship(200000000);
var asteroid = new Asteroid();

dude.mySpeed();
ship.mySpeed();
// asteroid.mySpeed();
// asteroid.crash();
// ship.crash();
console.log(ship.__proto__);
