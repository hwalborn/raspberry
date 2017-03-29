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
      alert(`location: ${this.location}, deets: ${this.deets}`)
    })
    return marker
  }
}
