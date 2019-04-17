//800 x 600
class sceneOne extends Phaser.Scene {
    constructor() {
        super({key:"sceneOnew"})
    }

    preload() {
        console.log(this)


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

        this.score = 0; //the score that is kept when the user does something
        this.scenerio = 0; // the scenerios in the scene
        this.background = this.add.image(400,300,'background'); //makes the background of the game

        this.cards = {
            questionOne: {
                question: "What are the Benefits of owning a Home?",
                choices: [
                    {card: this.add.sprite(225,176,'card1'),correct: false}, //card one
                    {card: this.add.sprite(575,176,'card2'), correct: false}, //card two
                    {card: this.add.sprite(225,424,'card3'), correct: false}, //card thre
                    {card: this.add.sprite(575,424,'card4'), correct: true} //card four 
                ]
            }
        }


        //loads all the cards in the game 

        this.ScenerioText = this.make.text({ //One of the Scenario text for the 
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


        /* timer stuff */
        this.timerText = this.make.text({ //timer text 
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

        this.questionOne = this.add.group([this.cardOne,this.cardTwo,this.cardThree,this.cardFour],"questionOne");
        console.log(this.questionOne);

        this.time.addEvent({  //adds the time event 
            delay: 1000, 
            callback: () => {
                this.timerText.text -= 1
            }, 
            callbackScope: this,
            repeat: 9
        });
        /* timer stuff end */

        /* Methods */

        this.sendData = function(obtainedScore) { //sends and updates thee score when the game is over
            dataBase.collection('users').doc(auth.currentUser.uid).update({
                score: obtainedScore
            }).then(() => {
                console.log("low key it worked! Check the score");
            })
        }
    }

    update(delta) { //game loop

    }

    render() {
        
    }
}