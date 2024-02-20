//shift to prev camera

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