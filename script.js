// var htmlString = ""
// var index = 0
//
// var success = (position) => {
//   var lat = position.coords.latitude
//   var long = position.coords.longitude
//
//   var latLongString = `<p>lat is: ${lat}, long is: ${long}</p>`
//
//   var img = new Image();
//   img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=15&size=300x300&sensor=false"
//
//   document.querySelector('div').innerHTML = latLongString
//   document.querySelector('div').appendChild(img)
// }
//
// navigator.geolocation.getCurrentPosition(success)

// var showRestaurant = () => {
//   $.get('https://data.cityofnewyork.us/api/views/jd4g-ks2z/rows.json?accessType=DOWNLOAD', (response) =>{
//     return response["data"]
//   }).then((locations) => {
//     htmlString += `
//     <h1>${event[index]["dba"]}</h1>
//     <button>Next</button>
//     <p>------------------</p><br>
//     `
//     document.querySelector('div').innerHTML = htmlString
//     index += 1
//   })
// }
//
// showRestaurant()
//
//
// document.querySelector('div').addEventListener('click', showRestaurant)

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });
}
