var hotspotArray, lat, long, latLong, marker

var showHotspots = () => {
  $.get('https://data.cityofnewyork.us/api/views/jd4g-ks2z/rows.json?accessType=DOWNLOAD')
  .then((locations) => {
    hotspotArray = locations["data"]
  }).then(navigator.geolocation.getCurrentPosition(success))
}

class wifiHotspot {
  constructor(location, deets){
    this.location = location
    this.deets = deets
  }
   marker(lat, long, map, icon){
    marker = new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map,
      icon: icon
    })
    google.maps.event.addListener(marker, 'click', () => {
      alert(this.location)
    })
    return marker
  }
}



/////Google Map Stuff//////
var initGoogleMap = () => {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(lat,long),
    mapTypeId: 'terrain'
  })

  new google.maps.Marker({
    position: latLong,
    map: map
  });

  var pinColor = "0c0";
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor)

  hotspotArray.forEach((hotspot) => {
    if((parseFloat(hotspot[15]) < lat + 0.01 && parseFloat(hotspot[15]) > lat - 0.01) && (parseFloat(hotspot[16]) < long + 0.01 && parseFloat(hotspot[16]) > long - 0.01)){
      var x = new wifiHotspot(hotspot[13], hotspot[8])
      x.marker(parseFloat(hotspot[15]), parseFloat(hotspot[16]), map, pinImage)
    }
  })
}

//////Geolocation Stuff/////
var success = (position) => {
  lat = position.coords.latitude
  long = position.coords.longitude
  latLong = {lat: lat, lng: long}
  initGoogleMap()
}
navigator.geolocation.getCurrentPosition(success)
showHotspots()
