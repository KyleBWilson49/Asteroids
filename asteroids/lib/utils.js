(function () {
  Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVect = function (length) {
    var x = ((Math.random() * 2) - 1 )* length;
    var y = ((Math.random() * 2) - 1 )* length;
    return [x, y];
  };
})();
