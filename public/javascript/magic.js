var config = {
    type: Phaser.AUTO, //scaling type
    width: 800, //width of the window
    height: 600, //height of window
    physics: {  
        default: 'arcade', //built in "Arcade" engine
        arcade: {
            gravity: { y: 200 } //physics of the game
        }
    },
    scene: [sceneOne], //loads the scene
};

var game = new Phaser.Game(config);

