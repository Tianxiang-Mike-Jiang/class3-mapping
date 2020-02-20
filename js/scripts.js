// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWppYW5nMTEwIiwiYSI6ImNrNnR2bnZmNTAzZ3Azb3Izd3ExOW9obmUifQ.1gPI_5WBiSt3GwqrGk_S8g';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-74.0014762,40.7505189]
var initialZoom = 13


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


// iterate over each object in apartmentData
apartmentData.forEach(function(apartmentEntry) {

  new mapboxgl.Marker()
    .setLngLat([apartmentEntry.longitude, apartmentEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25}) // add popups
     .setHTML(`Want to learn more about <b>${apartmentEntry.apartmentName}</b>, Please visit <a href="${apartmentEntry.Website}">${apartmentEntry.Website}</a>`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#newport').on('click', function() {
  map.flyTo({
    center: [-74.0478106,40.7238993],
    zoom: initialZoom
  })
})

$('#lic').on('click', function() {


  map.flyTo({
    center: [-73.9468553,40.748523],
    zoom: initialZoom
  })
})

$('#bk').on('click', function() {
  var brooklynpoint = [-73.9854956,40.6869778]

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
