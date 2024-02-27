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
  camera.object3D.position.set(animals[index].cameraX, animals[index].cameraY, animals[index].cameraZ);
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