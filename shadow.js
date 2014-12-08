function init()
{
						canvas = document.getElementById("mycanvas");
						gl = canvas.getContext("experimental-webgl");
						
						gl.viewport(0, 0, canvas.width, canvas.height);
						gl.clearColor(0, 0.5, 0, 1);
						gl.clear(gl.COLOR_BUFFER_BIT);
}