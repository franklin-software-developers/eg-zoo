/*
  Example: move(lion1, {x:100, z:-20, speed:20, animation:"Animation_Armature"});

  ALL PARAMETERS: move(id, {x:0, y:0, z:0, speed:20, ease:"easeOutCubic", animation:"Animation_Armature", animationSpeed:1.25});
  IMPORTANT PARAMETERS: move(lion1, {x:100, z:0, speed:20, animation:"Animation_Armature"});
  Move function parameters:
    id: id of a-entity,
    {
    x: ending x,
    y: ending y,
    z: ending z,
    speed: how many units moved per second,
    ease: animation ease for velocity and acceleration
    animation: animation name for which animation to play,
    animation speed: how fast to play the animation,
    }
*/

export default function move(element, path, property, counter, initalCoord) {
    initalCoord = initalCoord || [element.object3D.position.x, element.object3D.position.y, element.object3D.position.z];
    property.y = property.y || 0;
    property.x = property.x || 0;
    property.z = property.z || 0;
    property.animationSpeed = property.animationSpeed || 1;
    property.ease = property.ease || "easeOutCubic";
    property.speed = property.speed || 20;
    let angle = 0;
    console.log("\n");
    let animation = "clip:"+property.animation+"; loop: 0; timeScale: "+property.animationSpeed;
    console.log("relative: x: "+Math.ceil(property.x) + ", y: " + Math.ceil(property.z));
    console.log("absolute: x: "+Math.ceil(element.object3D.position.x) + ", y: " + Math.ceil(element.object3D.position.z));
    let moveDuration = (Math.sqrt(property.x*property.x+property.z*property.z)/property.speed)*1000;
    //decides whether to subtract or add z position
    let location = "property: position; to: " + (Math.ceil(property.x+element.object3D.position.x)) + " " + Math.ceil(property.y+element.object3D.position.y) + " " + (Math.ceil(property.z+element.object3D.position.z)) + "; dur: " + moveDuration + "; easing: linear; loop: false;";
    let valueX = property.x;
    let valueZ = property.z;
    let trigAng = ((Math.abs(Math.atan((Math.ceil(property.z))/(Math.ceil(property.x)))*(180/Math.PI))));
    //decides what quadrant the giraffe is facing
    if (valueX>0 && valueZ>0) {
      //quadrant 1
      angle = 0 + trigAng;
    } else if ((valueX<0) && (valueZ>0)) {
      //quadrant 2
      angle = 180 - trigAng;
    } else if ((valueX<0) && (valueZ<0)) {
      //quadrant 3
      angle = 180 + trigAng;
    } else if ((valueX>0) && (valueZ<0)) {
      //quadrant 4
      angle = (360 - trigAng);
    } else if (valueZ == 0) {
        if (valueX < 0)
        //directly left
          angle = 180;
        else
        //directly right
          angle = 0;
    } else if (valueX == 0) {
        if (valueZ < 0)
        //directly down
          angle = 270;
        else
        //directly up
          angle = 90;
    } else {
      angle = 0;
      console.log("rotation calculation error");
    }
    let counterAngle = angle-360;
    if (angle >= 181) {
      angle = angle-360;
    }
    console.log("angle: " + (angle)); //element.object3D.rotation.y
    angle = 'property: rotation; to: 0 ' + (90-angle) + ' 0; dur: 1750; easing:'+property.ease+'; loop: false;';
    //sets all the animation
    element.setAttribute('animation-mixer', animation);
    element.setAttribute('animation__2', angle);
    element.setAttribute('animation', location);
    
    setTimeout(function() {
      //plus one because first is already ran
      if (counter+1 < path.length+2) {
        counter++;
        if (counter+1 < path.length+1) {
          move(element, path, path[counter], counter, initalCoord);
        } else {
          move(element, path, {x:(initalCoord[0]-element.object3D.position.x), y:(initalCoord[1]-element.object3D.position.y), z:(initalCoord[2]-element.object3D.position.z), speed:20, animation:"loopWalk"}, counter, initalCoord);
        }
        //else function below is when animation is done
      } else {
        counter = 0;
        //repeat animation in infinite loop
        move(element, path, path[counter], counter, initalCoord);
        console.log("%cAnimation completed!","color:red;");
      }
    }, moveDuration);
}