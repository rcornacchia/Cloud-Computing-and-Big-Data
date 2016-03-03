var map;

function initBigMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    disableDefaultUI: true,
    zoom: 4
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
    });
  } else {
    // Browser doesn't support Geolocation
  }
}

function displayTweets(tweets) {
    tweets.forEach(function(location) {
        var position_options = {
          lat: location.lat,
          lng: location.lon
        };

        var marker = new google.maps.Marker({
          position: position_options,
          map: map
        });
    });
}