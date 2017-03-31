////// Taking in zip code from form and making a new
///// GoogleMap instance

class ZipCodeController{
  constructor(hotspotArray){
    this.hotspotArray = hotspotArray
    /////get zip code from form
    this.zip = $('#zip').val()
    /////get geocoder function from Google Maps API
    this.geocoder = new google.maps.Geocoder
    this.changeMap()
  }

  changeMap(){
    /////Reset map to show new map with longitude and latitude
    /////From the zip code
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
