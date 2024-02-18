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
    aframe.classList.remove("aframeTransition");
    aframe.style.filter = "brightness(0%)";
  }
  function fadeIn() {
    this.classList.add("aframeTransition");
    this.style.filter = "brightness(100%)";
  }