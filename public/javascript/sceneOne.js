//800 x 600
class sceneOne extends Phaser.Scene {
    constructor() {
        super({key:"sceneOnew"})
    }

    preload() {
        console.log(this)
        var choiceOneRect = this.add.graphics();

        // choiceOneText.(0, 100, 800, 100);


        this.load.image('background','../assets/GameOne/Background.png');
        this.load.image('topBox','../assets/GameOne/Opening_Box.png');
        this.load.image('bottomBox','../assets/GameOne/Bottom_Box.png');
        this.load.image('card1','../assets/GameOne/CardOne_SceneOne.png'); //card one
        this.load.image('card2','../assets/GameOne/CardTwo_SceneOne.png'); //card two
    }

    create() { //loads in the images and stuff for game

        this.score = 0;

        this.sendData = function(obtainedScore) {
            dataBase.collection('users').doc(auth.currentUser.uid).update({
                score: obtainedScore
            }).then(() => {
                console.log("low key it worked! Check the score");
            })
        }

        this.background = this.add.image(400,300,'background');
        this.topBox = this.add.sprite(400,46.5,'topBox');
        this.cardOne = this.add.sprite(225,324,'card1'); //card one
        this.cardTwo = this.add.sprite(576,324,'card2'); //card two
        this.bottomBox = this.add.sprite(400,574.5,'bottomBox');

        this.ScenerioText = this.make.text({
            x:0,
            y:0,
            boundsAlignH: "center", 
            boundsAlignV: "middle",
            text: 'Out of the Two houses, choose one!',
            style: {
                font: '20px monospace',
                fill: '#000000'
            }
        });

        //controls

        this.cardOne.setInteractive().on('pointerhover', () => 
        { 
            
        }).on('pointerdown', () => {
            console.log('clicked Option One');
            this.ScenerioText.destroy();
            this.topBox.destroy();
            this.cardOne.destroy();
            this.cardTwo.destroy();
            this.bottomBox.destroy();
            this.score += 500;

            this.sendData(this.score);

            this.ScenerioText = this.make.text({
                x:800/4,
                y:600/2,
                boundsAlignH: "center", 
                boundsAlignV: "middle",
                text: 'Thanks for submitting! You Get 500 Points for that',
                style: {
                    font: '20px monospace',
                    fill: '#000000'
                }
            });
        });

        this.cardTwo.setInteractive().on('pointerhover', () => 
        { 
            
        }).on('pointerdown', () => {
            console.log('clicked Option Two');
            this.ScenerioText.destroy();
            this.topBox.destroy();
            this.cardOne.destroy();
            this.cardTwo.destroy();
            this.bottomBox.destroy();
            this.score += 500;

            this.sendData(this.score);

            this.ScenerioText = this.make.text({
                x:800/4,
                y:600/2,
                boundsAlignH: "center", 
                boundsAlignV: "middle",
                text: 'Thanks for submitting! You Get 500 Points for that',
                style: {
                    font: '20px monospace',
                    fill: '#000000'
                }
            });
        });
    }

    update(delta) { //game loop
        // if(this.key_A.isDown)
        //     this.image.x-=4;
    }

    render() {
        
    }
}