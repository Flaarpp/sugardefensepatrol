let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [ Menu, Play ]
  
}
  let game = new Phaser.Game(config);
  // reserve keyboard vars
  let keyF, keyR, keyLEFT, keyRIGHT;
  // set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Name = Ian Ellis, Title = Sugar Defense Patrol, Date = 6/7/21, Time to Complete = 8 Hours
//Points Breakdown: 60 = Aesthetic Overhaul, 5 = Moving Rocket