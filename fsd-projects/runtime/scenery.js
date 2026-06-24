// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 400, width: 100, height: 300, speedX: -2.2 },
      { x: 800, width: 100, height: 150, speedX: -2.1 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 150, width: 70, height: 170, speedX: -3 },
      
      { x: 150, width: 60, height: 160, speedX: -4 },
      { x: 350, width: 60, height: 160, speedX: -4 },
      { x: 550, width: 60, height: 160, speedX: -4 },
      { x: 750, width: 60, height: 160, speedX: -4 },
      { x: 950, width: 60, height: 160, speedX: -4 },
      { x: 1150, width: 60, height: 160, speedX: -4 },
      { x: 1350, width: 60, height: 160, speedX: -4 },
      { x: 1550, width: 60, height: 160, speedX: -4 },
      { x: 1750, width: 60, height: 160, speedX: -4 },
      { x: 1950, width: 60, height: 160, speedX: -4 },
      { x: 2150, width: 60, height: 160, speedX: -4 },
      { x: 2350, width: 60, height: 160, speedX: -4 },
      { x: 2550, width: 60, height: 160, speedX: -4 },
      { x: 2750, width: 60, height: 160, speedX: -4 },
      
      

      { x: 1300, width: 80, height: 180, speedX: -5 },
      { x: 100, width: 80, height: 180, speedX: -5 },
      { x: 300, width: 80, height: 180, speedX: -5 },
      { x: 500, width: 80, height: 180, speedX: -5 },
      { x: 700, width: 80, height: 180, speedX: -5 },
      { x: 900, width: 80, height: 180, speedX: -5 },
      { x: 1100, width: 80, height: 180, speedX: -5 },
      { x: 1500, width: 80, height: 180, speedX: -5 },
      { x: 1700, width: 80, height: 180, speedX: -5 },
      { x: 1900, width: 80, height: 180, speedX: -5 },
      { x: 2100, width: 80, height: 180, speedX: -5 },
      { x: 2300, width: 80, height: 180, speedX: -5 },
      { x: 2500, width: 80, height: 180, speedX: -5 },
      { x: 2700, width: 80, height: 180, speedX: -5 },
      
    ],
  },
};
