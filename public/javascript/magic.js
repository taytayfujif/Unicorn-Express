// var config = {
//     type: Phaser.AUTO,
//     width: 800, //width of the window
//     height: 600, //height of window
//     physics: {  
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 200 } //physics of the game
//         }
//     },
//     scene: {
//         preload: preload, //loads the scene
//         create: create //
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.setBaseURL('http://127.0.0.1:5500/public/html/game.html');

//     this.load.image('image', '../../images/background.jpg');
// }

// function create ()
// {
//     this.add.image(400, 300, 'image');
// }