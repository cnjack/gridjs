// demo for gridjs
var url = "./demo.jpg";
var stage = document.createElement('canvas');
document.getElementsByTagName('body')[0].appendChild(stage);
gridjs.open(url, function(im) {
	im.grayscale().show(stage);
});