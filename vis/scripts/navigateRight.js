//shift to next camera
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