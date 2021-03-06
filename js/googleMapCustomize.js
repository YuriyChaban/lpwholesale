$(document).ready(function() {
	google.maps.event.addDomListener(window, 'load', init);
	var map;
	function init() {
		var mapOptions = {
			center: new google.maps.LatLng(42.099977,-87.844482),
			zoom: 13,
			zoomControl: true,
			disableDoubleClickZoom: true,
			mapTypeControl: true,
			scaleControl: true,
			scrollwheel: true,
			panControl: true,
			streetViewControl: true,
			draggable : true,
			overviewMapControl: true,
			overviewMapControlOptions: {
				opened: true,
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#e9e9e9"
				},
				{
					"lightness": 17
				}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 20
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 17
				}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 18
				}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 21
				}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#dedede"
				},
				{
					"lightness": 21
				}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#333333"
				},
				{
					"lightness": 40
				}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
				{
					"visibility": "off"
				}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
				{
					"color": "#f2f2f2"
				},
				{
					"lightness": 19
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 20
				}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
				]
			}
			]
		}
		var mapElement = document.getElementById('mapWrapper');
		var map = new google.maps.Map(mapElement, mapOptions);

		var locations = [
		['Licensed Products Wholesale', 'undefined', 'undefined', 'undefined', 'undefined', 42.11759199999999, -87.911945, 'https://mapbuildr.com/assets/img/markers/default.png']
		];
		for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
			if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
			if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
			marker = new google.maps.Marker({
				icon: "images/location-colore.png",
				position: new google.maps.LatLng(locations[i][5], locations[i][6]),
				map: map,
				title: locations[i][0],
				desc: description,
				tel: telephone,
				email: email,
				web: web
			});
			link = '';     }

		}
	});