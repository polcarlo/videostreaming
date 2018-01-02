let video = document.getElementById('video');
let canvas = document.getElementById('canvasView');

let context = canvas.getContext('2d');

let socket = io();

context.height = 950;
context.width = 1100;

context.height = canvas.height;
context.width = canvas.width;

var videoStreamInfo = function(info){
	$('#videoStreamInfo').text(info)
}

var viewing = function(video, context){
	context.drawImage(video,0,0,context.width,context.height)
   socket.emit('videos',canvas.toDataURL('image/webp'))
}


let Connected = function(videos){
	video.src = window.URL.createObjectURL(videos);
    videoStreamInfo("web camera is connected")
}

let Failed = function(){
	videoStreamInfo('web camera is not connected')
}


$(function(){
	navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozgetUserMedia || navigator.msgGetUserMedia);

	if(navigator.getUserMedia){
	navigator.getUserMedia({ video: true},Connected,Failed);
	}

	setInterval(function(){
	viewing(video,context);
	},1);

})
