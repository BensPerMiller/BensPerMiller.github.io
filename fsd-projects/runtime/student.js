function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x += currentLevel.speed + buildingInstance.speedX;
    if (buildingInstance.x + scenery.building.loopWidth < 0) {
      buildingInstance.x = 1400
    }
  };
  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x += currentLevel.speed + lampInstance.speedX;
    if (lampInstance.x + scenery.lamp.loopWidth < 0) {
      lampInstance.x = 1400
    }
  }
  
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
