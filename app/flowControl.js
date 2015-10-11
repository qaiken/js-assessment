exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {

    if( typeof num !== 'number' || num === undefined ) {
      return false;
    }

    if( num % 3 === 0 && num % 5 === 0 ) {
      return 'fizzbuzz';
    }

    if( num % 3 === 0 ) {
      return 'fizz';
    }

    if( num % 5 === 0 ) {
      return 'buzz';
    }

    return num;

  }
};
