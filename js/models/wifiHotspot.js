class wifiHotspot {
  constructor(location, deets, env, provider){
    this.location = location
    this.deets = deets
    this.env = env
    this.provider = provider
  }

   marker(lat, long, map, icon){
    marker = new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map,
      icon: icon
    })
    google.maps.event.addListener(marker, 'click', () => {
      ShowDetails.renderDetails($('#details'), this)
    })
    return marker
  }

  static display(hotspotArray, map){
    let pinColor = "0c0"
    let pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor)
    let list = ''
    let $target = $('#list')
    hotspotArray.forEach((hotspot) => {
      if((parseFloat(hotspot[15]) < lat + 0.01 && parseFloat(hotspot[15]) > lat - 0.01) && (parseFloat(hotspot[16]) < long + 0.01 && parseFloat(hotspot[16]) > long - 0.01)){
        var wifi = new wifiHotspot(hotspot[13], hotspot[8], hotspot[19], hotspot[22])
        wifi.marker(parseFloat(hotspot[15]), parseFloat(hotspot[16]), map, pinImage)
      }
    })
  }
}
