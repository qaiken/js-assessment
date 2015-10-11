exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(sum, item) {
      return sum + item;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.reduce(function(result, currItem) {
      if( currItem !== item ) {
        result.push(currItem);
      }
      return result;
    }, []);
  },

  removeWithoutCopy : function(arr, item) {
    var i;

    while( (i = arr.indexOf(item)) !== -1 ) {
      arr.splice(i, 1);
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.reduce(function(count, currItem) {
      if( currItem === item) {
        ++count;
      }
      return count;
    }, 0);
  },

  duplicates : function(arr) {
    var cache = {};
    var result = [];

    arr.forEach(function(item) {
      var count = cache[item];
      cache[item] = ++count || 1;

      if( count === 2 ) {
        result.push(item);
      }
    });

    return result;
  },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce(function(result, item, i) {
      if( item === target ) {
        result.push(i);
      }
      return result;
    }, []);
  }
};
