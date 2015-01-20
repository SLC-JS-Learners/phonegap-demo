var customCamera = {

	takeShot: function() {
		alert('takeShot called')
		navigator.camera.getPicture(onSuccess, onFail, {
			quality        : 50,
			destinationType: Camera.DestinationType.FILE_URI
		})
	},

	onSuccess: function(imageURI) {
		var image = document.getElementById('myImage');
		image.src = imageURI;
		alert('Success.  image.src: ' + image.src);
	},

	onFail: function(message) {
		alert('Failed because: ' + message);
	}

};