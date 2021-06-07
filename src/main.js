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

//Name = Ian Ellis, Project Title = Sugar Patrol, Hours = 5-7 Hours 
//Points Breakdown: 60 = Redesign Artwork/Sound/UI, 5 = Controllable Rocket, Total = 65 
//Source for Sounds = https://www.leshylabs.com/apps/sfMaker/
  