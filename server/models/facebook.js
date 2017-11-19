const FB = require('fb')

function testAPI() {
    FB.api('/me', function(response) {
        console.log(JSON.stringify(response));
    });
  }