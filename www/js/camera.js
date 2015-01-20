var customCamera = {

	takeShot: function() {
		console.log('takeShot called')
		navigator.camera.getPicture(onSuccess, onFail, {
			quality        : 50,
			destinationType: Camera.DestinationType.FILE_URI
		})
	},

	onSuccess: function(imageURI) {
		var image = document.getElementById('myImage');
		image.src = imageURI;
		console.log('Success.  image.src: ' + image.src);
	},

	onFail: function(message) {
		console.log('Failed because: ' + message);
	}

};