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