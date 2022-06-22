
var rotationSpeed = 0.001;
var myBox = document.getElementById('myBox');

function spin(){
	myBox.object3D.rotation.x += rotationSpeed;
	myBox.object3D.rotation.y += rotationSpeed;
	myBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);


myBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.01;
	console.log('entered');
});

myBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
});




/*
 * click-events can use a fuse (default on mobile). So the event only fires, if the cursor is on the object for a specified time. 
 */

 var growspeed = 1.2;

 function grow(){
 	myBox.object3D.scale.x *= growspeed;
 	myBox.object3D.scale.y *= growspeed;
 	myBox.object3D.scale.z *= growspeed;
 	//console.log(myOtherBox.object3D.scale);
 }

 myBox.addEventListener('click', function(){ // uses a fuse
 	grow();
 	console.log('grew');
 });