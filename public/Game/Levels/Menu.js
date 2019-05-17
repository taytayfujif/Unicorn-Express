var CardGame = CardGame || {};

CardGame.Menu = {
    create: function() {

        this.background = this.add.tileSprite(0,0,this.game.world.width,this.game.world.height,'background');
        this.background.autoScroll(30,0); //automatically scrolls the tile sprite

        this.textStyle3 = {font:'30px Arial', fill:'#6B70FF'}; //sets style of the text

        var text = this.game.add.text(this.game.world.centerX,this.game.world.centerY,'Ready To Test Yourself?',this.textStyle3);
        text.anchor.setTo(0.5);

        this.button = this.game.add.sprite(this.game.world.centerX,text.bottom+50,'startButton');

        this.button.inputEnabled = true;
        this.button.events.onInputDown.add(this.startGame,this);
        this.button.anchor.setTo(0.5);
    },
    startGame: function() {
        this.state.start('GameState');
    }
}