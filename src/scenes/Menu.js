class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
      let menuConfig = {
        fontFamily: 'Arial',
        fontSize: '20px',
        backgroundColor: '#ff6961',
        color: '#000',
        align: 'right',
        padding: {
          top: 4,
          bottom: 6,
        },
        fixedWidth: 0
      }

      

      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
      borderPadding, 'SUGAR PATROL', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use <-- --> arrows to move & (F) to Fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#89cff0';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <-- for Novice or --> for Expert', menuConfig).setOrigin(0.5);
       // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }

  }