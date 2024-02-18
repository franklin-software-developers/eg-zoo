function updateIndex () {
    console.log(index);
    console.log(animals[index].cameraX + ", " + animals[index].cameraY + ", " + animals[index].cameraZ);
    animalIndexName.innerHTML = animals[index].name;
    camera.object3D.position.set(animals[index].cameraX, animals[index].cameraY, animals[index].cameraZ);
  }