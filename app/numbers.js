exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    var i = binary.length - bit;
    return +binary[i];
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binaryStr = num.toString(2);
    var binaryArr = binaryStr.split('');

    while( binaryArr.length !== 8 ) {
      binaryArr.unshift('0');
    }

    return binaryArr.join('');
  },

  multiply: function(a, b) {
    var num = (a * b) + '';

    return +num.replace(/\.\d+(0{10,}\d*)/, function(match, group, offset, str) {
      return num.replace(group, '');
    });
  }
};
