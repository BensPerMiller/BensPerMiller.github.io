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
    instances: [{ x: 400, width: 100, height: 300, speedX: -2 }, { x: 800, width: 100, height: 150, speedX: -2}],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 700, width: 65, height: 165, speedX: 0 }, { x: 100, width: 50, height: 150, speedX: 0 }, { x: 300, width: 55, height: 155, speedX: 0}, { x: 500, width: 60, height: 160, speedX: 0}, { x: 900, width: 70, height: 170, speedX: 0}, { x: 1100, width: 75, height: 175, speedX: 0}, { x: 1300, width: 80, height: 180, speedX: 0}],
  },
};
