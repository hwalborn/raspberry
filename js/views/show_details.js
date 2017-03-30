class ShowDetails {
  static renderDetails($target, wifidetail){
    $target.html(`
       <h1>name: ${wifidetail.location}</h1>
       <h3>details: ${wifidetail.deets}</h3>
       <p>environment: ${wifidetail.env}</p><br>
       <p>service provider: ${wifidetail.provider}</p>
    `)
  }
}
