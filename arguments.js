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
  var args = Array.prototype.slice.call(arguments);
  var context = arguments[0];
  args = args.slice(1);
  var fn = this;
  return function () {
    var newargs = Array.prototype.slice.call(arguments);
    args = args + newargs;
    fn.call(context, args);
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

var multStuff = product.curry(5);
console.log(multStuff(2)(2)(3)(3)(10));

// var addStuff = curriedSum(4);
// console.log(addStuff(5)(30)(20)(1)); // => 56
