/////Make it so that all we need is a longitude and latitude
/////to create a new google map and display it on the page
/////with all of the hotspot markers

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
    ////Make new instance of the google map class from
    ////Google Maps API
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(this.lat,this.long),
      mapTypeId: this.maptype
    })

    if(this.maptype === "satellite"){
         map.setTilt(45);
    }

    ////Make marker for your current position
    myMarker = new google.maps.Marker({
      position: this.latLong,
      map: map,
      draggable: true
    });

    ////Change the google map if the current position marker
    ////is dragged
    google.maps.event.addListener(myMarker,'dragend',() => {
      lat = myMarker.position.lat();
      long = myMarker.position.lng();
      new GoogleMap(lat,long,this.hotspotArray,this.maptype)
    })

    ////display the hotspot markers on the current map
    wifiHotspot.display(this.hotspotArray, map)
  }
}
