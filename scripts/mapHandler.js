var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
    var UbicacionPorttoBelho = {lat: -26.8331812 ,  lng: -65.1615083};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: UbicacionPorttoBelho
    });

    google.maps.event.addListener(map, 'click', function (event) {
        //addMarker(event.latLng, map);
    });

    addMarker(UbicacionPorttoBelho, map);
}

function addMarker(location, map) {
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);