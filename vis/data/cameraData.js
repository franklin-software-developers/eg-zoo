//keeps track of camera location. To add more, just copy object and change the value accordingly
   
//avoid y values > 180 or < -180. That will rotate camera too far and result in upside down cameras. 
export let animals =[
    {"name": "Savannah - Entrance", //text that's displayed on screen at the bottom
     "position": [0, 3, 0], //position of camera
     "rotation": [0, 0, 0], //starting angle of camera
     "limit":3 //how far the camera can move before being snapped back. 5 is default is unspecified
    },
    {"name": "Savannah - Event Lawn",
     "position": [-50, 3, -30],
     "rotation": [180, 0, 0],
     "limit":20
    },
    {"name": "Savannah - Giraffe Feeding",
      "position": [70, 4, -60],
      "rotation": [80, 0, 0],
      "limit":30
    },
]

