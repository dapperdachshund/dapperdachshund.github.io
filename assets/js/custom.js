/*------------------------------
 * Copyright 2016 Themejumbo
 * http://www.themejumbo.com
 *
 * Billboard theme v1.2
------------------------------*/

$(document).ready(function() {

	/*------------------------------
		VEGAS BACKGROUND
	------------------------------*/
	var background = _.sample([
		'pine.jpg',
		'baby.jpg',
		'bed.jpg',
		'chair.jpg',
		'1.jpg',
		'2.jpg',
		'3.jpg',
		'4.jpg',
		'5.jpg',
		'6.jpg',
		'7.jpg',
		'8.jpg',
		'9.jpg',
		'10.jpg',
		'11.jpg',
		'12.jpg',
		'13.jpg',
		'14.jpg',
		'15.jpg',
		'16.jpg',
		'17.jpg',
		'18.jpg',
		'19.jpg',
		'20.jpg',
		'21.jpg',
		'22.jpg',
		'23.jpg',
		'24.jpg',
		'25.jpg',
		'26.jpg',
		'27.jpg',
		'28.jpg',
		'29.jpg',
		'30.jpg',
		'31.jpg'
	]);
	$.vegas({src:'assets/images/kepler/' + background});
	$.vegas('overlay', {src:'assets/images/overlays/05.png'});

	/*------------------------------
		CIRCLE COUNTDOWN
	------------------------------*/
	$("#countdown").TimeCircles({
		"animation": "ticks",
		"bg_width": 0.2,
		"fg_width": 0.017,
		"time": {
			"Days": {
				"text": "Days",
				"color": "#FFF",
				"show": true
			},
			"Hours": {
				"text": "Hours",
				"color": "#FFF",
				"show": true
			},
			"Minutes": {
				"text": "Minutes",
				"color": "#FFF",
				"show": true
			},
			"Seconds": {
				"text": "Seconds",
				"color": "#FFF",
				"show": true
			}
		}
	});

	/*------------------------------
		GOOGLE MAP
	------------------------------*/

	var mapInfoContact = {
		'lat' : 43.651071,
		'lng' : -79.378764,
		'zoom' : 16
	};

	/*------------------------------
		GOOGLE MAP - CONTACT
	------------------------------*/
	var map;

	// GOOGLE MAP INIT
	function initialize($) {
		var mapOptions = {
			mapAddress: "Address, City, Country",
			zoom: mapInfoContact.zoom,
			center: mapInfoContact,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: true,
			scrollwheel: false,
			streetViewControl: false,
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			}
		}

		map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

		var marker = new google.maps.Marker({
			position: mapInfoContact,
			map: map,
			title: mapOptions.mapAddress
		});

	}

	if($("#map-canvas").length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	$("#contact").on("shown.bs.modal", function () {
		google.maps.event.trigger(map, "resize");
		map.setCenter(mapInfoContact);
	});
});

/*------------------------------
	CIRCLE COUNTDOWN - RESIZE
------------------------------*/
$(window).resize(function() {
	$("#countdown").TimeCircles().rebuild();
});
