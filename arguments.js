function sum() {
  var total = 0;
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(arg) {
    total += arg;
  });
  return total;
}
// console.log(sum(1,2,3,4));

Function.prototype.myBind = function () {
  var args = Array.prototype.slice.call(arguments, 1);
  var context = arguments[0];
  // args = args.slice(1);
  var fn = this;
  return function () {
    var newargs = Array.prototype.slice.call(arguments);
    args = args.concat(newargs);
    return fn.apply(context, args);
  };
};

var curriedSum = function (numArgs) {
  var numbers = [];

  function _curriedSum(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      var total = 0;
      numbers.forEach(function(num) {
        total += num;
      });
      return total;

    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
  var args = [];
  var that = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function product() {
  var nums = Array.prototype.slice.call(arguments);
  var total = 1;
  nums.forEach(function (num) {
    total = total * num;
  });
  return total;
}

// var multStuff = product.curry(5);
// console.log(multStuff(2)(2)(3)(3)(10));

// var addStuff = curriedSum(4);
// console.log(addStuff(5)(30)(20)(1)); // => 56

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, sound2) {
  console.log(this.name + " says " + sound + "!" + sound2);
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast, 'bark')("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
