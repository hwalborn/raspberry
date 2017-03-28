var hotspotArray
var showHotspots = () => {
  $.get('https://data.cityofnewyork.us/api/views/jd4g-ks2z/rows.json?accessType=DOWNLOAD', (response) =>{
    return response["data"]
  }).done((locations) => {
    hotspotArray =  locations["data"]
  })
}

showHotspots()

class wifiHotspot {
   marker(lat, long, map){
    return new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map
    })
  }
}

var success = (position) => {
  var lat = position.coords.latitude
  var long = position.coords.longitude
  var latLong = {lat: lat, lng: long}

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(lat,long),
    mapTypeId: 'terrain'
  })

  new google.maps.Marker({
      position: latLong,
      map: map
  });

  hotspotArray.forEach((hotspot) => {
    if((parseFloat(hotspot[15]) < lat + 0.01 && parseFloat(hotspot[15]) > lat - 0.01) && (parseFloat(hotspot[16]) < long + 0.01 && parseFloat(hotspot[16]) > long - 0.01)){
      var x = new wifiHotspot
      x.marker(parseFloat(hotspot[15]), parseFloat(hotspot[16]), map)
    }
  })

}

navigator.geolocation.getCurrentPosition(success)
