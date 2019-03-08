class sceneOne extends Phaser.Scene {
    constructor() {
        super({key:"sceneOne"})
    }

    preload() {
        this.load.image('card1','../images/cards/fluttershy.png');
    }

    create() { //loads in the images and stuff for game
        this.image = this.add.image(400,300,'card1');
        //this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); //gets key 'A' When clicked

        this.input.on('pointerdown',function(event) {
            this.image.x = event.x;
            this.image.y = event.y;
        },this)
        
    }

    update(delta) { //game loop
        // if(this.key_A.isDown)
        //     this.image.x-=4;
    }
}