var hotspotArray, lat, long, marker
var showHotspots = () => {
  WifiApi.getJSON()
  .then((locations) => {
    hotspotArray = locations["data"]
  }).then(navigator.geolocation.getCurrentPosition(success))
}

//////Geolocation Stuff/////
var success = (position) => {
  lat = position.coords.latitude
  long = position.coords.longitude
  new GoogleMap(lat, long, hotspotArray)
}

///// ZIPCODE//////
$(document).on('submit', '#zipcode', (e) => {
  e.preventDefault()
  new ZipCodeController(hotspotArray)
})
showHotspots()

$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }
});
