exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName, files, nested) {
    files = files || [];

    data.files.forEach(function(file) {

      if( typeof file === 'object' ) {
        if( nested || data.dir === dirName ) {
          nested = true;
        }
        return this.listFiles(file, dirName, files, nested);
      }

      if( nested || !dirName || dirName === data.dir ) {
        files.push(file);
      }

    }.bind(this));

    return files;
  },

  permute: function(arr, result, results, length) {
    result = result || [];
    results = results || [];
    length = length || arr.length;

    if( result.length === length ) {
      return results.push(result);
    }

    arr.forEach(function(item, i, arr) {
      var currResult = result.slice();
      currResult.push(item);

      var subset = arr.slice();
      subset.splice(i, 1);

      this.permute(subset, currResult, results, length);
    }.bind(this));

    return results;
  },

  fibonacci: function(n, x, y, series) {
    series = series || [1, 1];
    x = x || 1;
    y = y || 1;

    if( n === 1 || series.length === n ) {
      return series[series.length - 1];
    }

    series.push(x + y);

    return this.fibonacci(n, series[series.length - 2], series[series.length - 1], series);
  },

  validParentheses: function(n) {
    var parenStr = '';
    var valids = [];
    var length;

    while(n) {
      parenStr += '()';
      --n;
    }

    length = parenStr.length;

    var buildPermutations = function(str, result, initial) {

      if( result.length === length ) {
        return valids.push(result);
      }

      str.forEach(function(char, i, arr) {

        if( initial && i > 1 ) {
          return;
        }

        var remaining = arr.slice();
        remaining.splice(i, 1);

        var currResult = result.slice();
        currResult.push(char);

        buildPermutations(remaining, currResult)
      });
    };

    buildPermutations(parenStr.split(''), [], true);

    return valids.reduce(function(results, result) {
      var result = result.join('');
      var resultStr = result;

      while( /\(\)/.exec(resultStr) ) {
        resultStr = resultStr.replace(/\(\)/g, '');
      }

      if( !resultStr && results.indexOf(result) === -1 ) {
        results.push(result);
      }

      return results;
    }, []);
  }
};
