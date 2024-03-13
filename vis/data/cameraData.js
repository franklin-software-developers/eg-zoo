//keeps track of camera location. Because value must be int and not string, must be store separately
    /*ADD ANIMALS HERE:
      just create an object with the template below and your camera will be automatically added
        {"name": "AnimalNameGoesHere",
        "position": [x, y, z],
        "rotation": [x, y, z],
        "position": [x, y, z],
        "rotation": [x, y, z],
        },
    only changes rotation for x and y. Z makes camera slanted
    only changes rotation for x and y. Z makes camera slanted
    */
   
//avoid y values > 180 or < -180. That will rotate camera too far and result in upside down cameras. 
export let animals =[
    {"name": "Savannah - Entrance",
     "position": [20, 3, -11],
     "rotation": [0, 0, 0]
    },
    {"name": "Savannah - Event Lawn",
     "position": [-50, 3, -30],
     "rotation": [280, 0, 0]
    },
    {"name": "Savannah - Giraffe Feeding",
      "position": [60, 4, -50],
      "rotation": [82, 0, 0]
    },
]