
var hotspotArray, lat, long, marker, myMarker
var showHotspots = () => {
  WifiApi.getJSON()
  .then((locations) => {
    $('body').css("background-color", "1C1C1C")
    hotspotArray = locations["data"]
  }).then(navigator.geolocation.getCurrentPosition(success))
}


//////Geolocation Stuff/////
var success = (position) => {
  lat = position.coords.latitude
  long = position.coords.longitude
  $('#loading').remove()
  $('#hidden').show()
  new GoogleMap(lat, long, hotspotArray,"terrain")
}

///// ZIPCODE//////
$(document).on('submit', '#zipcode', (e) => {
  e.preventDefault()
  new ZipCodeController(hotspotArray)
})

$(() => {
  $('#hidden').hide()
  showHotspots()
})
