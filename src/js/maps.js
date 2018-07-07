function init_map() {
  var mapOptions = {
    center: new google.maps.LatLng(43.467736, -80.523015),
    zoom: 15,
    gestureHandling: 'greedy',
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map"), mapOptions);
}
