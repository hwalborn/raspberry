class WifiApi{
  static getJSON(){
    return $.getJSON('https://data.cityofnewyork.us/api/views/jd4g-ks2z/rows.json?accessType=DOWNLOAD')
  }
}
