exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return str.search(/\d/g) !== -1;
  },

  containsRepeatingLetter : function(str) {
    return str.toLowerCase().search(/([a-z])\1+/g) !== -1;
  },

  endsWithVowel : function(str) {
    return str.toLowerCase().search(/[aeiou]$/) !== -1;
  },

  captureThreeNumbers : function(str) {
    var match = str.match(/\d{3}/);
    return match ? match[0] : false;
  },
  matchesPattern : function(str) {
    return str.search(/^\d{3}-\d{3}-\d{4}$/) !== -1;
  },
  isUSD : function(str) {
    return str.search(/^\$(((\d{1,3},)?(\d{3},)+\d{3})|(\d{1,3}))(\.\d{2})?$/) !== -1;
  }
};
