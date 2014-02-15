window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

navigator.getUserMedia({audio: true, video: true},function(vid)
{
	document.querySelector("video").src = window.URL.createObjectURL(vid);
	document.getElementById("capturar").onclick = function ()
	{
		var video = document.querySelector("video");
		var canvas = document.getElementById("canvas");
		canvas.getContext("2d").drawImage(video, 0, 0, 320, 240);
	}
}
);