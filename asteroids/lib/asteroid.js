(function () {
  var Asteroid = window.Asteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = Asteroids.Util.randomVect(5)

    Asteroids.MovingObject.call(this, options);

  };
  Asteroid.COLOR = '#FF1119';
  Asteroid.RADIUS = 20;

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);


})();
