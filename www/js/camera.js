var camera = {

	takeShot: function() {navigator.camera.getPicture(onSuccess, onFail, {
		quality        : 50,
		destinationType: Camera.DestinationType.FILE_URI
	})},

	onSuccess: function(imageURI) {
		var image = document.getElementById('myImage');
		image.src = imageURI;
	},

	onFail: function(message) {
		alert('Failed because: ' + message);
	}

};