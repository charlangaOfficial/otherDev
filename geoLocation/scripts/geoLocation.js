

function setKml(map) {
  var ctaLayer = new google.maps.KmlLayer({
      //url: 'https://u52347762.dl.dropboxusercontent.com/u/52347762/Finca%20La%20Mariana%204X4%20Completa.kmz',
      //url: 'https://u52347762.dl.dropboxusercontent.com/u/52347762/Finca%20La%20Mariana%204X4%20Completa.kml',
      url: 'https://u52347762.dl.dropboxusercontent.com/u/52347762/la-mariana-4x4-completa.gpx',
      suppressInfoWindows: false,
      map: map,
      preserveViewport: true
  });
}


function setLocationMarker(navigator, map) {
  var pos,
  locationMarker,
  image = {
    url: 'img/location.png'
  }

  navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      locationMarker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image
      });

      map.setCenter(pos);
  });

  console.log('Geting user\'s location');
}


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 9.8337423, lng: -84.6346307},
    zoom: 16,
    mapTypeId: 'satellite'
  });

  setKml(map);

  if (navigator.geolocation) {
    setLocationMarker(navigator, map);
  } else {
    // Browser doesn't support Geolocation
  }
}