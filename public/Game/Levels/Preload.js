var CardGame = CardGame || {};

CardGame.Preload = {
    preload: function() {

        //Data
        this.load.text('CardData','../Data/Levels.json');

        //loading Bar
        this.loading = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'loadingBar');
        this.loading.anchor.setTo(0.5);

        //sprites
        this.load.image('CatOneCardOne','../assets/Cards/CategoryOne/All.png');
        this.load.image('CatOneCardTwo','../assets/Cards/CategoryOne/Peace.png');
        this.load.image('CatOneCardThree','../assets/Cards/CategoryOne/Friends.png');
        this.load.image('CatOneCardFour','../assets/Cards/CategoryOne/Fallout.png');
        this.load.image('button','../assets/General/Button.png');
        this.load.image('startButton','../assets/General/Start.png');

        //Background
        this.load.image('background','../assets/UI/Background.jpg');

        //Stipes
        this.load.image('stripes','../assets/UI/Stripes.png');

        //Sounds
        this.load.audio('right','../assets/Audio/Correct.wav');
        this.load.audio('wrong','../assets/Audio/Wrong.wav');
        this.load.audio('button','../assets/Audio/buttonClick.wav');
        this.load.audio('Main','../assets/Audio/Main.wav');

    },

    create: function() {
        this.state.start('Menu');
    }
}