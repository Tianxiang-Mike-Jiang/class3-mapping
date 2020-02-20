// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-74.0014762,40.7505189]
var initialZoom = 15


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/dark-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// make a single marker in central park
 new mapboxgl.Marker()
   .setLngLat([-73.974087,40.770718])
   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('I am in Central Park'))
   .addTo(map);


// iterate over each object in apartmentData
apartmentData.forEach(function(apartmentEntry) {

  new mapboxgl.Marker()
    .setLngLat([apartmentEntry.longitude, apartmentEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`Want to learn more about${apartmentEntry.apartmentName}, please visit ${apartmentEntry.Website}.`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#newport').on('click', function() {
  map.flyTo({
    center: [-74.0478106,40.7238993],
    zoom: initialZoom
  })
})

$('lic').on('click', function() {

  var longislandcitypoint = [-73.9535595,40.7460247]

  map.flyTo({
    center: longislandcitypoint,
    zoom: initialZoom
  })
})

$('#bk').on('click', function() {
  var brooklynpoint = [-74.0435347,40.6265653]

  map.flyTo({
    center: brooklynpoint,
    zoom: initialZoom
  })
})

$('#nyc').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom
  })
})
