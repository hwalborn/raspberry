class ShowDetails {
  static renderDetails($target,wifidetail){
    $target.html(`
       <h1>name: ${wifidetail.location}</h1>
       <h3>details: ${wifidetail.deets}</h3>
       <p>enviroment: ${wifidetail.env}</p><br>
       <p>serviceprovider: ${wifidetail.provider}</p>
      `)
  }

}
