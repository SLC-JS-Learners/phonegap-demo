var customCamera = {

	takeShot: function() {
		alert('takeShot called');
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

function capturePhoto(){
	navigator.camera.getPicture(photoTaken, error,
		{
			sourceType: 1,
			quality: 60
		});
}

function photoTaken(data) {
	cameraPic.src = data;
	alert('Photo taken: ' + cameraPic.src);
}


function error(msg) {
	alert('Error: ' + msg);
}