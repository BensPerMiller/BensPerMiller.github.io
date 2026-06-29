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
      { x: 700, width: 100, height: 350, speedX: -2.05},
      { x: 400, width: 100, height: 300, speedX: -2.2 },
      { x: 800, width: 100, height: 150, speedX: -2.1 },
      { x: 200, width: 115, height: 200, speedX: -2.3},
      { x: 500, width: 100, height: 215, speedX: -2.4},
      { x: 1000, width: 120, height: 175, speedX: -2.3},
      { x: 600, width: 115, height: 215, speedX: -2.2},
      { x: 1300, width: 100, height: 314, speedX: -2.3},
      { x: 1200, width: 200, height: 285, speedX: -2.4},
      { x: 1400, width: 135, height: 275, speedX: -2.25},
      { x: 1100, width: 100, height: 295, speedX: -2.35},
      { x: 900, width: 90, height: 280, speedX: -2.27},
      { x: 100, width: 75, height: 165, speedX: -2.3},
      { x: 300, width: 110, height: 311, speedX: -2.265},
      { x: 450, width: 100, height: 200, speedX: -2.1},
      { x: 650, width: 120, height: 300, speedX: -2.2},
      
      
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 175, width: 50, height: 150, speedX: -3 },
      { x: 375, width: 50, height: 150, speedX: -3 },
      { x: 575, width: 50, height: 150, speedX: -3 },
      { x: 775, width: 50, height: 150, speedX: -3 },
      { x: 975, width: 50, height: 150, speedX: -3 },
      { x: 1175, width: 50, height: 150, speedX: -3 },
      { x: 1375, width: 50, height: 150, speedX: -3 },
      { x: 1575, width: 50, height: 150, speedX: -3 },
      { x: 1775, width: 50, height: 150, speedX: -3 },
      { x: 1975, width: 50, height: 150, speedX: -3 },
      { x: 2175, width: 50, height: 150, speedX: -3 },
      { x: 2375, width: 50, height: 150, speedX: -3 },
      { x: 2575, width: 50, height: 150, speedX: -3 },
      { x: 2775, width: 50, height: 150, speedX: -3 },
      
      
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

      { x: 100000, width: 1000, height: 2000, speedX: -2.5}
      
    ],
  },
};
