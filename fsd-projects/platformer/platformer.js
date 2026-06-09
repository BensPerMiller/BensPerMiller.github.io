$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(25, 700, 75, 15, "indigo")
createPlatform(200, 720, 200, 15, "teal")
createPlatform(550, 600, 75, 15, "gold")
createPlatform(750, 470, 20, 500, 'silver')
createPlatform(900, 350, 20, 50, "darkblue")
createFakePlatform(890, 0, 30, 1000, "darkblue")
createPlatform(1050, 250, 20, 100, "violet")
createPlatform(1200, 180, 200, 20, "green")
createPlatform(750, 220, 10, 10, "lightblue")
createPlatform(300, 150, 300, 20, "blue")


    // TODO 3 - Create Collectables
createCollectable("database", 580, 550, 0)
createCollectable("database", 1200, 150, 0)
createCollectable("database", 1350, 150, 0)
createCollectable("database", 570, 100, 0)
createCollectable("database", 300, 100, 0)


    
    // TODO 4 - Create Cannons
createCannon("right", 800, 0)
createCannon("left", 684, 0)
createCannon("top", 500, 2000)
createCannon("right", 450, 1200)
createCannon("top", 1050, 1000)
createCannon("left", 300, 1400)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
