exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str1) {
    return function(str2) {
      return str1 + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(val) {
      return function() {
        return fn(val);
      };
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments : function() {
    var args = [].slice.call(arguments);

    return args.reduce(function(sum, val) {
      return sum + val;
    }, 0);
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments, 1);

    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var length = fn.length;
    var allArgs = [].slice.call(arguments, 1);
    var fulfilled = allArgs.length;

    var partial = function() {
      var args = [].slice.call(arguments);
      allArgs = allArgs.concat(args);

      fulfilled += args.length;

      if( fulfilled !== length ) {
        return partial;
      }

      return fn.apply(null, allArgs);
    };

    return partial;
  },

  curryIt : function(fn) {
    var length = fn.length;
    var fulfilled = [];

    var partial = function(val) {
      fulfilled.push(val);
      if( fulfilled.length === length ) {
        return fn.apply(null, fulfilled);
      }

      return partial;
    };

    return partial;
  }
};
