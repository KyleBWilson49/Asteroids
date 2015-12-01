(function () {
  var Game = window.Asteroids.Game = function () {
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = this.addAsteroids();
  };

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 1; i <= this.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      asteroids.push(new Asteroids.Asteroid({ pos: pos, game: this }));
    }
    return asteroids;
  };

  Game.prototype.randomPosition = function () {
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  };

  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];

    x = ((x + this.DIM_X) % this.DIM_X);
    y = ((y + this.DIM_Y) % this.DIM_Y);

    return [x, y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    var game = this;
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length - 1; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (asteroid) {
    // debugger;
    var idx = this.asteroids.indexOf(asteroid);
    var pos = this.randomPosition();
    this.asteroids[idx] = new Asteroids.Asteroid({ pos: pos, game: this });
  };
})();
