exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var amount = amount - 1;
    return str.replace(new RegExp('(((\\w)\\3{' + amount + '})\\3+)', 'g'), function(matches, sub1, sub2) {
      return sub2;
    });
  },
  wordWrap: function(str, cols) {
    var spaceIndex;
    var colCount = 0;
    str = str.split('');

    str.forEach(function(char, i) {
      if( char === ' ' ) {
        spaceIndex = i;
      }

      if( spaceIndex !== undefined && colCount === cols + 1 ) {
        str.splice(spaceIndex, 1, '\n');
        colCount = 0;
      } else {
        ++colCount;
      }
    });

    str.splice(spaceIndex, 1, '\n');

    return str.join('');
  },
  reverseString: function(str) {
    return str.split('').reduceRight(function(result, char) {
      return result + char;
    }, '');
  }
};
