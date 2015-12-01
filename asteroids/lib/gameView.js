(function() {
  var GameView = window.Asteroids.GameView = function (ctx) {
    this.ctx = ctx;
    this.game = new Asteroids.Game();
  };

  GameView.prototype.start = function () {
    var that = this;
    setInterval(function () {
      that.game.moveObjects();
      that.game.draw(that.ctx);
    }, 20);
  };
})();
