exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var i = start;

    console.log(i);

    var interval = setInterval(function() {
      console.log(++i);

      if( i === end ) {
        clearInterval(interval);
      }
    }, 100);

    return {
      cancel: function() {
        clearInterval(interval);
      }
    };
  }
};
