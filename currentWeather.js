// TODO 1:  Add the Mapbox code
// mapboxgl.accessToken = 'YOUR MAP BOX API KEY';
// creating a new map instance
let temperature;
let weatherSummary;
let humidity;
let pressure;
let dewPoint;
let uvIndex;
let latitude;
let longitude;
mapboxgl.accessToken = 'pk.eyJ1Ijoia29vaWFua2VlbiIsImEiOiJjazA5eTFkaXAwNzdlM2hveG0wNDk5aGJjIn0.ElykEdxdbcigpogTIjHiGA';


// TODO 2: This function get executed when Get Current Location button is clicked.
//         Add code here for geolocation api request. Use 'getCurrentPosition'
//        Remeber to change the function name

function getCurrentLocation()
{
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
//   TODO 3 :  Add the callback function for the geolocation api.
//    What should happen when the location is available?
}
function showPosition(position) {
  latitude=position.coords.latitude;
  longitude=position.coords.longitude;
  map = new mapboxgl.Map
  ({
  container: 'mapArea', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [longitude, latitude], // starting position [lng, lat]
  zoom: 9 // starting zoom
  });
  let marker = new mapboxgl.Marker({ "color": "#FF8C00" }).setLngLat([longitude,latitude]);
  marker.addTo(map);
}


//  TODO 4 : This function get executed when Get current Weather button is clicked.
//  Use DarkSky api to request current weather for the current location.
//  Check whether a valid current location coordinates are available before making a api request.
//  If the coordinates are not available display a suitable error message as an alert.

function functionNameButton2()
{
  let today = new Date();
  let time = Math.round((new Date()).getTime() / 1000);
  if(longitude==undefined || latitude == undefined)
  {alert("please identify your current location!")}
  else{let script = document.createElement("script");
  script.src = "https://api.darksky.net/forecast/71daee3a3d22bcadbc57765b1290aaa0/"+latitude+","+longitude+","+time+"?exclude=minutely,hourly,daily&units=si&callback=getWeather";
  document.body.appendChild(script);}

}

//  TODO 5:  callback function for DarkSky API.
//  Extract the weather information and display as a table.(include units)
// javscript code for modifing the HTML table is :
//    let outputTableRef = document.getElementById('table-weather'); // create a reference to outputTableRef
//    let rowHTML="";
//    rowHTML+='<tr><th>'+'property name+'</th><td>'+property value+'</td></tr>';

function getWeather(result)
{
temperature = result.currently.apparentTemperature;
humidity = result.currently.humidity;
weatherSummary = result.currently.summary;
pressure = result.currently.pressure;
dewPoint = result.currently.dewPoint;
uvIndex = result.currently.uvIndex;
console.log(pressure);

let outputTableRef = document.getElementById('table-weather');
let rowHTML=""
rowHTML+='<tr><th>'+'Summary'+'</th><td>'+weatherSummary+'</td></tr>';
rowHTML+='<tr><th>'+'Current Temperature'+'</th><td>'+temperature+'℃'+'</td></tr>';
rowHTML+='<tr><th>'+'Pressure'+'</th><td>'+pressure+'Pa'+'</td></tr>';
outputTableRef.innerHTML=rowHTML;
}
