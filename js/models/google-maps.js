class GoogleMap{
  constructor(lat, long, hotspotArray, maptype){
    this.lat = lat
    this.long = long
    this.maptype = maptype
    this.hotspotArray = hotspotArray
    this.latLong = {lat: lat, lng: long}
    this.initGoogleMap()
  }

  initGoogleMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(this.lat,this.long),

      mapTypeId: this.maptype
    })
    if(this.maptype === "satellite"){
         map.setTilt(45);
    }

    new google.maps.Marker({
      position: this.latLong,
      map: map
    });

    wifiHotspot.display(this.hotspotArray, map)
  }
}
