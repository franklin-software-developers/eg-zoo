//camera transition animation

/*property
  {
  x: ending x,
  y: ending y,
  z: ending z,
  duration: animation duration,
  animation: animation name
  }
 */

function fadeOut() {
  aframe.style.transition="all 0.5s ease-in-out";
  aframe.style.filter = "brightness(0%)";
}

function fadeIn() {
  aframe.style.transition="all 1s ease-in-out";
  aframe.style.filter = "brightness(100%)";
}

export { fadeOut, fadeIn }