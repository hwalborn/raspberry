var hotspotArray, lat, long, latLong, marker
// var $target = $('#details')
var showHotspots = () => {

  WifiApi.getJSON()
  .then((locations) => {
    hotspotArray = locations["data"]
  }).then(navigator.geolocation.getCurrentPosition(success))
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
      var x = new wifiHotspot(hotspot[13], hotspot[8], hotspot[19], hotspot[22])

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
showHotspots()
///// ZIPCODE//////
var zipCode = () => {
  let zip = document.getElementById('zip').value
  let geocoder = new google.maps.Geocoder
  geocoder.geocode({address: zip}, (results, status) => {
    if(status === "OK"){
      lat = results[0].geometry.location.lat()
      long = results[0].geometry.location.lng()
      latLong = {lat: lat, lng: long}
      initGoogleMap()
    }else{
      alert("YOU ARE WRONG!")
    }
  })

}
