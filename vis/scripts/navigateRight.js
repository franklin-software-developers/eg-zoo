let index = 0;
let aframe = document.getElementById("aframe");
aframe.addEventListener("transitionend", fadeIn);
let camera = document.getElementById("head");
let animalIndexName = document.getElementById("navigationIndex");
aframe.classList.add("aframeTransition");

let animals =[
  {"name": "Lion",
   "cameraX": 0,
   "cameraY": 5,
   "cameraZ": 0
  },
  {"name": "Camera 2",
   "cameraX": -90,
   "cameraY": 0,
   "cameraZ": 0,
  },
  {"name": "Camera 3",
   "cameraX": 80,
   "cameraY": 0,
   "cameraZ": 0,
  },
]

//shift to next camera

  function updateIndex () {
    console.log(animals[index].cameraX + ", " + animals[index].cameraY + ", " + animals[index].cameraZ);
    animalIndexName.innerHTML = animals[index].name;
    camera.object3D.position.set(animals[index].cameraX, animals[index].cameraY, animals[index].cameraZ);
  }

  function fadeOut() {
    aframe.style.transition="all 1.5s ease-in-out";
    aframe.style.filter = "brightness(0%)";
  }
  
  function fadeIn() {
    aframe.style.transition="all 1.5s ease-in-out";
    aframe.style.filter = "brightness(100%)";
  }
  
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