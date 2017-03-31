/////The details that print out when you click on a wifi marker

class ShowDetails {
  static renderDetails($target, wifidetail){
    $target.html(`
       <h1>Name: ${wifidetail.location}</h1>
       <h3>Details: ${wifidetail.deets}</h3>
       <p>Environment: ${wifidetail.env}</p>
       <p>Service Provider: ${wifidetail.provider}</p>
    `)
  }
}
