class GoogleMap{
  constructor(lat, long, hotspotArray){
    this.lat = lat
    this.long = long
    this.hotspotArray = hotspotArray
    this.latLong = {lat: lat, lng: long}
    this.initGoogleMap()
  }

  initGoogleMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(this.lat,this.long),
      mapTypeId: 'terrain'
    })

    new google.maps.Marker({
      position: this.latLong,
      map: map
    });

    wifiHotspot.display(this.hotspotArray)

    // var pinColor = "0c0";
    // var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor)
    //
    // this.hotspotArray.forEach((hotspot) => {
    //   if((parseFloat(hotspot[15]) < lat + 0.01 && parseFloat(hotspot[15]) > lat - 0.01) && (parseFloat(hotspot[16]) < long + 0.01 && parseFloat(hotspot[16]) > long - 0.01)){
    //     var wifi = new wifiHotspot(hotspot[13], hotspot[8], hotspot[19], hotspot[22])
    //     wifi.marker(parseFloat(hotspot[15]), parseFloat(hotspot[16]), map, pinImage)
    //   }
    // })
  }
}
