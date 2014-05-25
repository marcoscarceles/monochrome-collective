function initialize() {
//var myLatlng = new google.maps.LatLng(51.535019, -0.139323);
//var myLatlng = new google.maps.LatLng(51.537144, -0.140750);
var myLatlng = new google.maps.LatLng(51.535362, -0.139036);
var mapOptions = {
  zoom: 15,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

/*
var myLatlng_a = new google.maps.LatLng(51.535346, -0.139817);
var marker_a = new google.maps.Marker({
    position: myLatlng_a,
    map: map,
    title: ''
});
var contentString_a = '<h4>Collective</h4><p>37 Camden High Street<br>London<br>NW1 7JE</p>';
var infowindow_a = new google.maps.InfoWindow({ content: contentString_a });

google.maps.event.addListener(marker_a, 'click', function() {
  infowindow_a.close();
  infowindow_c.close();
  infowindow_e.close();
  infowindow_a.open(map,marker_a);
});
*/

/*
//var myLatlng_c = new google.maps.LatLng(51.536182,-0.140357);
var myLatlng_c = new google.maps.LatLng(51.536098, -0.140170);
var marker_c = new google.maps.Marker({
    position: myLatlng_c,
    map: map,
    title: ''
});
var contentString_c = '<h4>Monochrome Collective Pop Up</h4><p>69 Camden High Street<br/>Camden<br/>London<br/>NW1 7JL</p>';
var infowindow_c = new google.maps.InfoWindow({ content: contentString_c });

google.maps.event.addListener(marker_c, 'click', function() {
  infowindow_a.close();
  infowindow_c.close();
  infowindow_e.close();
  infowindow_c.open(map,marker_c);
});
*/

//var myLatlng_e = new google.maps.LatLng(51.535318,-0.138922);
var myLatlng_e = new google.maps.LatLng(51.535362, -0.139036);
var marker_e = new google.maps.Marker({
    position: myLatlng_e,
    map: map,
    title: ''
});
var contentString_e = '<h4>Monochrome Collective Pop Up</h4><p>26 Camden High Street<br/>Camden<br/>London<br/>NW1 0JH</p>';
var infowindow_e = new google.maps.InfoWindow({ content: contentString_e });
							        
google.maps.event.addListener(marker_e, 'click', function() {
  //infowindow_a.close();
  //infowindow_c.close();
  infowindow_e.close();
  infowindow_e.open(map,marker_e);
});

}
$(function() {
  initialize();
});
				