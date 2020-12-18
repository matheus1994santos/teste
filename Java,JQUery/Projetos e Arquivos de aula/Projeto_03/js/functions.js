window.onload = function(){
	initialize();
	init_map();

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.61637,-48.5923228),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.mapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat, long, icon, content, click){
		var LatLng = {'lat':lat,'lng':long};

		var maker = new google.maps.Marker({
			position:LatLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.infoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		})


	}
}


function init_map(){
	var myOptions = {
		zoom:15,center:new google.maps.LatLng(-27.586811,-48.54557299999999),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
		map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

		marker = new google.maps.Marker({
			map: map,position: new google.maps.LatLng(-27.586811,-48.54557299999999)
		});

		infowindow = new google.maps.InfoWindow({
			content:'<p style="color:black;text-align:left;font-weight:bold;">Meu Mapa</p><p style="color:black;text-align:left;">Rua Rafael Bandeira Florianópolis</p><br>'});
		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map,marker);
		});

		infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);