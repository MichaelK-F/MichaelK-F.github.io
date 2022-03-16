"use strict";

// Define an Effect class for handling interaction with OpenGL and drawing to a quad.
function Effect(gl,xres,yres)
{
    this.mGLContext = gl;
    this.mQuadVBO = null;
    this.mProgram = null;
    this.mTexture = null;

    var vertices = new Float32Array([ -1., -1.,   1., -1.,    -1.,  1.,     1., -1.,    1.,  1.,    -1.,  1.]);
    
    this.mQuadVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.mQuadVBO);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
}

// This method creates the XOR texture and binds it to the GL context associated with the Effect.
Effect.prototype.BindXORTexture = function()
{
	var textureCanvas = document.createElement('canvas');
	textureCanvas.width = 256;
	textureCanvas.height = 256;
	var ctx = textureCanvas.getContext("2d");
	var idata = ctx.getImageData(0, 0, 256, 256);
	var i = 0;
	for( var x = 0 ; x < 256 ; ++x ) {
		for( var y = 0 ; y < 256 ; ++y ) {
			idata.data[i++]=( x ^ y );
			idata.data[i++]=( x ^ y );
			idata.data[i++]=( x ^ y );
			idata.data[i++]=( 255 );
		}
	}
    
	ctx.putImageData( idata, 0, 0 );		

	var gl = this.mGLContext;
	var texture = gl.createTexture();
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas); // This is the important line!
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);
	this.mTexture = texture;
}

// Compiles GLSL code and sends it to the GPU.
Effect.prototype.NewShader = function(shaderCode)
{
    var gl = this.mGLContext;

    var tmpProgram = gl.createProgram();

    var vs = gl.createShader(gl.VERTEX_SHADER);
    var fs = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vs, "attribute vec2 pos;void main(){gl_Position=vec4(pos.x,pos.y,0.0,1.0);}");
    gl.shaderSource(fs, shaderCode);

    gl.compileShader(vs);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS))
    {
        var infoLog = gl.getShaderInfoLog(vs);
        gl.deleteProgram( tmpProgram );
        return "VS ERROR: " + infoLog;;
    }

    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS))
    {
        var infoLog = gl.getShaderInfoLog(fs);
        gl.deleteProgram( tmpProgram );
        return "FS ERROR: " + infoLog;
    }

    gl.attachShader(tmpProgram, vs);
    gl.attachShader(tmpProgram, fs);

    gl.deleteShader(vs);
    gl.deleteShader(fs);

    gl.linkProgram(tmpProgram);

    if( this.mProgram != null )
        gl.deleteProgram( this.mProgram );

    this.mProgram = tmpProgram;
}

// Resize the effect window.
Effect.prototype.SetSize = function(xres,yres)
{
    this.mXres = xres;
    this.mYres = yres;
}

// Draws a single quad using the fragment shader we specified by calling NewShader.
Effect.prototype.Paint = function(time)
{
    var gl = this.mGLContext;

    gl.viewport( 0, 0, this.mXres, this.mYres );

    gl.useProgram(this.mProgram);

    var l1 = gl.getAttribLocation(this.mProgram, "pos");
    var l2 = gl.getUniformLocation(this.mProgram, "time");
    var l3 = gl.getUniformLocation(this.mProgram, "resolution");

    var t0 = gl.getUniformLocation(this.mProgram, "tex0");

    gl.bindBuffer(gl.ARRAY_BUFFER, this.mQuadVBO);
    if( l2!=null ) gl.uniform1f(l2, time);
    if( l3!=null ) gl.uniform2f(l3, this.mXres, this.mYres);

    gl.vertexAttribPointer(l1, 2, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(l1);

    if( t0!=null ) { gl.uniform1i(t0, 0 ); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.mTexture); }

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.disableVertexAttribArray(l1);
}

// Request animation frame browser-specific bindings and fallback.
if ( !window.requestAnimationFrame ) {
	window.requestAnimationFrame = ( function() {
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback, element ) {
			window.setTimeout( callback, 1000 / 60 );
		};
	} )();
}

// Create the canvas element, compile the shader code, and bind the XOR texture to the context.
document.write("<canvas id='x'></canvas>");
var glCanvas = document.getElementById("x");
var glContext = glCanvas.getContext("experimental-webgl");	
var effect = new Effect( glContext, glCanvas.width, glCanvas.height );
effect.NewShader( document.getElementById( 'effectShader' ).textContent );
effect.BindXORTexture();

// Specify a canvas scale and handle window resize.
var scaleDown = 2;
function onWindowResize() {
	glCanvas.width = window.innerWidth / scaleDown;
	glCanvas.height = window.innerHeight / scaleDown;
	glCanvas.style.width = window.innerWidth + 'px';
	glCanvas.style.height = window.innerHeight + 'px';
	glContext.viewport( 0, 0, glCanvas.width, glCanvas.height );
	effect.SetSize( glCanvas.width, glCanvas.height );
}
onWindowResize();
window.addEventListener( 'resize', onWindowResize, false );

// Main loop.
var t0 = (new Date()).getTime();	
function animate() {
    effect.Paint( ((new Date()).getTime()-t0)/1000 );
	requestAnimationFrame( animate );
}
animate();
