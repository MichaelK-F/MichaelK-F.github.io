var canvas = document.getElementById('c'),
    input = document.getElementById('i'),
    ctx = canvas.getContext('2d'),
    reader = new FileReader(),
    img = new Image();

canvas.width = 300;
canvas.height = 220;

var loadFile = function (event) {
  var file = event.target.files[0];
  img.onload = drawImg;
  img.src = URL.createObjectURL(file);
};

var drawImg = function() {
  canvas.style.background = 'none';
  var f = 220 / img.height,
      w = img.width * f,
      o = (300 - w) / 2;
  
  ctx.drawImage(img, o, 0, w, 220);
}

input.addEventListener('change', loadFile);