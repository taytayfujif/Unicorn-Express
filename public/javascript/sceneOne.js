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
        this.load.image('card1','../assets/GameOne/Cards/One/Pride.png'); //card one
        this.load.image('card2','../assets/GameOne/Cards/One/Tax.png'); //card two
        this.load.image('card3','../assets/GameOne/Cards/One/Peace.png'); //card three
        this.load.image('card4','../assets/GameOne/Cards/One/All.png'); //card four

        this.load.audio('audioFiles',[
            
        ]);
    }

    create() { //loads in the images and stuff for game

        this.score = 0;

        this.time.addEvent({ 
            delay: 1000, 
            callback: () => {
                this.timerText.text -= 1
            }, 
            callbackScope: this,
            repeat: 9
        })

        this.sendData = function(obtainedScore) {
            dataBase.collection('users').doc(auth.currentUser.uid).update({
                score: obtainedScore
            }).then(() => {
                console.log("low key it worked! Check the score");
            })
        }

        this.background = this.add.image(400,300,'background');
        this.cardOne = this.add.sprite(225,176,'card1'); //card one
        this.cardTwo = this.add.sprite(575,176,'card2'); //card two
        this.cardTwo = this.add.sprite(225,424,'card3'); //card two
        this.cardTwo = this.add.sprite(575,424,'card4'); //card two

        this.ScenerioText = this.make.text({
            x:105,
            y:10,
            boundsAlignH: "center", 
            boundsAlignV: "middle",
            text: 'What are the Benefits of Owning a Home?',
            style: {
                font: '20px monospace',
                fill: '#000000'
            }
        });

        this.timerText = this.make.text({
            x: 10,
            y:10,
            boundsAlignH: "center", 
            boundsAlignV: "middle",
            text: 10,
            style: {
                font: '15px monospace',
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
            this.score -= 500;

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