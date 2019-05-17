var CardGame = CardGame || {};

CardGame.Boot = {
    init: function() {
        /* Auto Adjusting Starts Here */
        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //keep aspect ratio when windows change

        // this.scale.pageAlignHorizonally = true; //centers Horizonally
        // this.scale.pageAlignVertically = true; //centers Vertically

        /* auto adusting ends here */
    },
    preload: function() {
        this.load.image('loadingBar','../assets/UI/Loading.png');
    },
    create: function() {
        this.state.start('PreloadState');
    }
}