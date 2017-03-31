/////Iterate over the array of wifi hotspots gathered from
/////NYC Open Data and display the ones that are closest to
/////current location in map

class wifiHotspot {
  constructor(location, deets, env, provider){
    this.location = location
    this.deets = deets
    this.env = env
    this.provider = provider
  }

  ////Add method to make each instance a marker, and add the
  ////Event Listener so that on click, it shows details
   marker(lat, long, map, icon){
    marker = new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map,
      icon: icon,
      animation: google.maps.Animation.DROP
    })

    ////Call the ShowDetails view and render the details
    google.maps.event.addListener(marker, 'click', () => {
      ShowDetails.renderDetails($('#details'), this)
    })
    return marker
  }

  ////Iterate over the entire hotspot array and find each hotspot
  ////that is close to current location on google map. Make each hotspot
  ////that is close an instance of the wifiHotspot Class
  static display(hotspotArray,map){
    let pinColor = "0c0"
    let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor)
    hotspotArray.forEach((hotspot) => {
      if((parseFloat(hotspot[15]) < lat + 0.01 && parseFloat(hotspot[15]) > lat - 0.01) && (parseFloat(hotspot[16]) < long + 0.01 && parseFloat(hotspot[16]) > long - 0.01)){
        var wifi = new wifiHotspot(hotspot[13], hotspot[8], hotspot[19], hotspot[22])
        wifi.marker(parseFloat(hotspot[15]), parseFloat(hotspot[16]), map, pinImage)
      }
    })
  }
}
