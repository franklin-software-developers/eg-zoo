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
  //notifies tick cameraSnap function that the position has indeed moved. Rotation cannot be directly changed here because cameraSnap will instantly overwrite it, making it absolete
  cameraMoved = true;
  //updates to new camera position
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

AFRAME.registerComponent('camera-listener', {
  tick: function () {
    //constant checking of boundaries and adjust camera as need be
    cameraSnap()
  }
});
//camera change hasn't happened by default
let cameraMoved = false;
//how far the camera can move before being snapped back
let limit = 15;
function cameraSnap() {
  //keeps track of x and y current rotation
  let final = [piToDeg(camera.components['look-controls'].pitchObject.rotation.x), piToDeg(camera.components['look-controls'].yawObject.rotation.y)];
  //original camera location from cameraData.js
  let inital = {"x":animals[index].rotation[1], "y":animals[index].rotation[0], "z":animals[index].rotation[2]};
  //how far to move camera from edge when redirecting after reaching a limit
  let gravitationalPull = 0;
  //too far left
  if (final[0] > inital.x+limit) {
    camera.components['look-controls'].pitchObject.rotation.x = degToPi(inital.x+limit-gravitationalPull);
  }
  //too far right
  if (final[0] < inital.x-limit) {
    camera.components['look-controls'].pitchObject.rotation.x = degToPi(inital.x-limit+gravitationalPull);
  }
  //too far top
  if (final[1] > inital.y+limit) {
    camera.components['look-controls'].yawObject.rotation.y = degToPi(inital.y+limit-gravitationalPull);
  }
  //too far down
  if (final[1] < inital.y-limit) {
    camera.components['look-controls'].yawObject.rotation.y = degToPi(inital.y-limit+gravitationalPull);
  }
  //if this is a different camera position
  if (cameraMoved == true) {
    //snaps to inital rotation stated by cameraData.js
    camera.components['look-controls'].pitchObject.rotation.x = degToPi(inital.x);
    camera.components['look-controls'].yawObject.rotation.y = degToPi(inital.y);
    //updates false so it only redirect once
    cameraMoved = false;
  }
}
