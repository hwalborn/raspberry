
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
        debugger
    })
    return marker
  }
}
