import { fadeOut, fadeIn } from  "./fade.js";
import { animals } from "../../vis/data/cameraData.js";

let aframe = document.getElementById("aframe");
aframe.addEventListener("transitionend", fadeIn);
let camera = document.getElementById("camera");
let animalIndexName = document.getElementById("navigationIndex");
let index = 0;

let leftNavigationButton = document.getElementById("leftNavigationButton");
let rightNavigationButton = document.getElementById("rightNavigationButton");
leftNavigationButton.addEventListener("click", navigateLeft);
rightNavigationButton.addEventListener("click", navigateRight);

//shows camera name based on current index
function updateIndex () {
  animalIndexName.innerHTML = animals[index].name;
  //yaw is x; rotates left/right
  camera.components["look-controls"].yawObject.rotation.x = degToPi(animals[index].rotation[0]);
  //pitch is y; rotates top/down
  camera.components['look-controls'].pitchObject.rotation.y = degToPi(animals[index].rotation[1]);
  //moves to position
  camera.object3D.position.set(animals[index].position[0], animals[index].position[1], animals[index].position[2]);
}
//moves camera to the next coordinate listed. After last coordinate, camera loops to the first coordinate making it an infinite carousel loop.
function navigateRight() {
  fadeOut()
  if (index < animals.length-1) {
    index++;
    updateIndex();
  } else {
    index = 0;
    updateIndex();
  }
}
////moves camera to the previous coordinate listed. After first coordinate, camera loops to the last coordinate making it an infinite carousel loop.
function navigateLeft() {
  fadeOut();
  if (index > 0) {
    index--;
    updateIndex();
  } else {
    index = animals.length-1;
    updateIndex();
  }
}

function degToPi(degree) {
  return degree*(Math.PI/180);
}

function piToDeg(radian) {
  return radian*(180/Math.PI);
}
//camera.components['look-controls'].pitchObject.rotation.set(degToPi(animals[index].rotation[0]),degToPi(animals[index].rotation[1]),degToPi(animals[index].rotation[2]));
let prevRot = {"x":animals[index].position[0], "y":animals[index].position[1], "z":animals[index].position[2]};
let rotation;

AFRAME.registerComponent('camera-listener', {
  tick: function () {
    cameraSnap()
  }
});
//how far the camera can move before begin snapped back
let limit = 25;
function cameraSnap() {
  //keeps track of x and y current rotation
  let final = [piToDeg(camera.components['look-controls'].pitchObject.rotation.x), piToDeg(camera.components['look-controls'].yawObject.rotation.y)];
  //original camera location
  let inital = {"x":animals[index].rotation[0], "y":animals[index].rotation[1], "z":animals[index].rotation[2]};
  //if camera has been moved too far
  if ((Math.abs((final[1])-(inital.y)) > limit)||(Math.abs((final[0])-(inital.x)) > limit)) {
    camera.components['look-controls'].pitchObject.rotation.x = degToPi(inital.x);
    camera.components['look-controls'].yawObject.rotation.y = degToPi(inital.y);
  }
}
