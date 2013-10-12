// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

// setup

var googlemaps = require('com.moshemarciano.googleMaps');
googlemaps.licenseKey("AIzaSyDLQqvH70TMTTn7u9otzTeKPhEa-peyuv8");

var map = googlemaps.createGoogleMap({
	top: 20
});

map.cameraMoveOnMarkerTap = true;



map.setCamera({
	latitude : 51.43580627441406,
	longitude : -0.14256912469863892,
	zoom : 9
});

var marker = googlemaps.createMarker({
	title : "Hello",
	snippet : "World!",
	userData : 123,
	animated : true,
	tintColor : "green",
	location : {
		latitude : 51.60614700317383,
		longitude : -0.3897615075111389
	}
});

var marker2 = googlemaps.createMarker({
	title : "Marker 2",
	snippet : "Hi!",
	userData : {
		complex : true,
		title : "I dont remenber"
	},
	animated:   true,
	location : {
		latitude : 51.444366455078125,
		longitude : -0.20848709344863892
	},
	tintColor : "blue",
	icon : "marine_red.png" // loaded from your project resources folder
});

var customIcon; 
createCustomIcon("blue");

var marker3 = googlemaps.createMarker({
	title : "Custom",
	snippet : "View",
	animated : true,
	iconView : customIcon, // custom view as a map marker
	location : {
		latitude : 51.69614700317383,
		longitude : -0.2597615075111389
	}
});


map.addMarker(marker);
map.addMarker(marker2);
map.addMarker(marker3);

map.addEventListener('tapMarker', function(e) {
	Ti.API.info("map event : tapMarker =>" + JSON.stringify(e));
	alert("tapped");
});

map.addEventListener('tapInfoWindowOfMarker', function(e) {
	Ti.API.info(e);
}); 


win.add(map);
win.open();




function createCustomIcon(backgroundColor) {

	customIcon = null;

	customIcon = Ti.UI.createView({
		width : 50,
		height : 30
		//borderWidth: 1
		//backgroundColor : backgroundColor,
	});

	customIcon.add(Ti.UI.createLabel({
		color : "black",
		text : "8%",
		//width : 45,
		//height : 30,
		bottom : 0,
		right:0,
		font : {
			fontSize : 14,
			fontWeight : 'bold'
		},
		textAlign : 'center'
	}));
	customIcon.add(Ti.UI.createImageView({
		image: "marine_red.png",
		//borderWidth:1,
		width: 30,
		height:30,
		bottom: 0,
		left:0
	}));
}

