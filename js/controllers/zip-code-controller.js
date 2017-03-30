class ZipCodeController{
  constructor(hotspotArray){
    this.hotspotArray = hotspotArray
    this.zip = $('#zip').val()
    this.geocoder = new google.maps.Geocoder
    this.changeMap()
  }

  changeMap(){
    this.geocoder.geocode({address: this.zip}, (results, status) => {
      if(status === "OK"){
        lat = results[0].geometry.location.lat()
        long = results[0].geometry.location.lng()
        new GoogleMap(lat, long, hotspotArray,"satellite")
      }else{
        alert("YOU ARE WRONG!")
      }
    })
  }
}
