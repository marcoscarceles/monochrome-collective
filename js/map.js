function initialize() {

var myLatlng = new google.maps.LatLng(51.535362, -0.139036);
var mapOptions = {
  zoom: 15,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

//var myLatlng_e = new google.maps.LatLng(51.535318,-0.138922);
var myLatlng_e = new google.maps.LatLng(51.535362, -0.139036);
var marker_e = new google.maps.Marker({
    position: myLatlng_e,
    map: map,
    title: ''
});
var contentString_e = '<h4>Monochrome Collective Pop Up Store</h4><p>26 Camden High Street<br/>Camden<br/>London<br/>NW1 0JH</p>';
var infowindow_e = new google.maps.InfoWindow({ content: contentString_e });
							        
google.maps.event.addListener(marker_e, 'click', function() {
  infowindow_e.close();
  infowindow_e.open(map,marker_e);
});

}
$(function() {
  initialize();
});
				