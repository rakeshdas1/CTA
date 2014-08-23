$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng( 41.87,-87.62 );  /
    if ( navigator.geolocation ) {
        function success(pos) {
            
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  
        }
        
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        
        var marker = new google.maps.Marker({
            position: latlng,
            map: map  
        });
    }
});