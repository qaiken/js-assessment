exports = (typeof window === 'undefined') ? global : window;



exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    var xmlhttp = new XMLHttpRequest();

    var getNames = function(data) {
      return data.people.map(function(person) {
        return person.name;
      }).sort();
    };

    return new Promise(function(resolve, reject) {
      xmlhttp.onreadystatechange = function() {
        if ( xmlhttp.readyState === 4 && xmlhttp.status === 200 ) {
          resolve(JSON.parse(xmlhttp.responseText));
        }
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    })
    .then(function(data) {
      return getNames(data);
    });

  }
};
