#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	vec4 sizeFO = vec4(0.1,0.1,0.1,0.1);
	vec2 positionF = vec2(0.5,0.5);
	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	float padding = 0.01;
	vec4 sizeF = sizeFO - vec4(padding*resolution.y/resolution.x,padding,padding,padding);
	
	vec2 minPos = vec2(positionF.x-sizeF.x, positionF.y-sizeF.y);
	vec2 maxPos = vec2(positionF.x+sizeF.x, positionF.y+sizeF.y);
	
	vec2 minPosO = vec2(positionF.x-sizeFO.x, positionF.y-sizeFO.y);
	vec2 maxPosO = vec2(positionF.x+sizeFO.x, positionF.y+sizeFO.y);	
	
	vec4 color;
	if(position.x > minPos.x && position.x < maxPos.x && position.y > minPos.y && position.y < maxPos.y)
	{		
			
		color = vec4(0.0,1.0,1.0,1.0);
	}
	else if(position.x > minPosO.x && position.x < maxPosO.x && position.y > minPosO.y && position.y < maxPosO.y)
	{
		color = vec4(1.0,0.0,0.0,1.0);
	}
	gl_FragColor = color;
}