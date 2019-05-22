//800 x 600
class sceneOne extends Phaser.Scene {
    constructor() {
        super({key:"sceneOnew"})
    }

    preload() {
        console.log(this)

        const coords = [
            {x:225,y:176},
            {x:575,y:176},
            {x:225,y:424},
            {x:575,y:424}
        ]

        // choiceOneText.(0, 100, 800, 100);

        this.load.image('background','../assets/GameOne/Background.png');
        this.load.image('topBox','../assets/GameOne/Opening_Box.png'); 
        this.load.image('bottomBox','../assets/GameOne/Bottom_Box.png');
        
        this.load.image('card1','../assets/GameOne/Cards/One/Pride.png'); //card one
        this.load.image('card2','../assets/GameOne/Cards/One/Tax.png'); //card two
        this.load.image('card3','../assets/GameOne/Cards/One/Peace.png'); //card three
        this.load.image('card4','../assets/GameOne/Cards/One/All.png'); //card four
        
        this.load.image('card5','../assets/GameOne/Cards/Two/Police.png');
        this.load.image('card6','../assets/GameOne/Cards/Two/Your.png');
        this.load.image('card7','../assets/GameOne/Cards/Two/Friends.png');
        this.load.image('card8','../assets/GameOne/Cards/Two/Fallout.png');

        this.load.image('card9','../assets/GameOne/Cards/Three/Interest.png');
        this.load.image('card10','../assets/GameOne/Cards/Three/Stocks.png');
        this.load.image('card11','../assets/GameOne/Cards/Three/Peace.png');
        this.load.image('card12','../assets/GameOne/Cards/Three/Assets.png');


        this.load.image('explainBox','../assets/GameOne/Cards/Explaination/box.png');

        this.load.image('button','../assets/General/Button.png');

        this.load.audio('audioFiles',[
            
        ]);

        this.cards = [
            [
                {name: 'card1', x:coords[0].x, y:coords[0].y, correct: false}, //card one
                {name: 'card2', x:coords[1].x, y:coords[1].y, correct: false}, //card two
                {name: 'card3', x:coords[2].x, y:coords[2].y, correct: false}, //card thre
                {name: 'card4', x:coords[3].x, y:coords[3].y, correct: true} //card four 
            ],
            
            [
                {name: 'card5', x:coords[0].x, y:coords[0].y, correct: false}, //card one
                {name: 'card6', x:coords[1].x, y:coords[1].y, correct: false}, //card two
                {name: 'card7', x:coords[2].x, y:coords[2].y, correct: false}, //card thre
                {name: 'card8', x:coords[3].x, y:coords[3].y, correct: false} //card four 
            ],
            [
                {name: 'card9', x:coords[0].x, y:coords[0].y, correct:true},
                {name: 'card10', x:coords[1].x, y:coords[1].y, correct:false},
                {name: 'card11', x:coords[2].x, y:coords[2].y, correct:false},
                {name: 'card12', x:coords[3].x, y:coords[3].y, correct:false},
            ]
            //card: this.add.sprite(575,424,'card8'), correct: true
        ]

        this.intermissions = [
            {}
        ];

        this.questions = [
            "What are the benefits of owning a Home?",
            "What is a 'Safe Place'?",
            "What is Equity?"
        ];

        this.explanations = [
            "Lorem Ipsum",
            "Ipsun Lorum",
            "OOGA BOOGA"
        ];
    }

    create() { //loads in the images and stuff for game

        this.score = 0; //the score that is kept when the user does something
        this.timer = 10;
        this.scenerio = 0; // the scenerios in the scene
        this.background = this.add.image(400,300,'background'); //makes the background of the game
        this.questionHalt = false; //helps stop the while loop

        //loads all the cards in the game
        
        this.cardHolder = this.cards[this.scenerio].map(cardData => {
            this.add.sprite(cardData.x,cardData.y,cardData.name).setInteractive().on('pointerhover', () => 
            { 
                
            }).on('pointerdown', () => {
                
                if(cardData.correct = true) {
                    this.success();
                } else {
                    this.incorrect();
                }

            })
        });

        this.loadCards;

        this.ScenerioText = this.make.text({ //One of the Scenario text for the 
            x:200,
            y:10,
            boundsAlignH: "center", 
            boundsAlignV: "middle",
            text: this.questions[this.scenerio],
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
            text: this.timer,
            style: {
                font: '15px monospace',
                fill: '#000000'
            }
        });

        // this.questionOne = this.add.group([this..cardOne,this.cardTwo,this.cardThree,this.cardFour],"questionOne");

        this.clock = this.time.addEvent({  //adds the time event 
            delay: 1000, 
            callback: () => {
                this.timerText.text -= 1
            }, 
            callbackScope: this,
            repeat: this.timer-1
        });
        /* timer stuff end */

        /* Methods */

        this.sendData = function(obtainedScore) { //sends and updates thee score when the game is over
            dataBase.collection('users').doc(auth.currentUser.uid).update({
                score: obtainedScore
            }).then(() => {
                console.log("low key it worked! Check the score");
            });
        }

        this.success = () => {
            this.scenerio++;
            this.timer = 10;
            this.score += 500;

            console.log(this.score);

            this.cardHolder = [
                this.add.sprite(400,300,'explainBox'),
                this.add.sprite(400,500,'button'),
                this.make.text({ //timer text 
                    x: 200,
                    y:300,
                    boundsAlignH: "center", 
                    boundsAlignV: "middle",
                    text: this.explanations[this.scenerio],
                    style: {
                        font: '38px monospace',
                        fill: '#000000'
                    }
                })
            ]

            this.cardHolder[1].setInteractive().on('pointerhover', () => 
            { 
                
            }).on('pointerdown', () => {
                this.cardHolder[0].destroy();
                this.cardHolder[1].destroy();
                this.cardHolder[2].destroy();

                if(this.scenerio+1 > this.cards.length) {
                    this.cardHolder[0].destroy();
                    this.cardHolder[1].destroy();
                    this.cardHolder[2].destroy();
                    this.gameOver();
                } else {

                    this.cardHolder[0].destroy();
                    this.cardHolder[1].destroy();
                    this.cardHolder[2].destroy();

                    this.cardHolder = this.cards[this.scenerio].map(cardData => {
                        this.add.sprite(cardData.x,cardData.y,cardData.name);
                    });

                    this.timerText.text = this.timer;
                    this.ScenerioText.text = this.questions[this.scenerio];

                    this.clock.destroy();
                    this.clock = this.time.addEvent({  //adds the time event 
                        delay: 1000, 
                        callback: () => {
                            this.timerText.text -= 1
                        }, 
                        callbackScope: this,
                        repeat: this.timer-1
                    });
                    this.questionHalt = false;

                }
                this.questionHalt = false;


            });

            this.questionHalt = true;
        }

        this.incorrect = () => {
            this.scenerio++;
            this.timer = 10;
            this.score -= 500;

            console.log(this.score);

            this.cardHolder = [
                this.add.sprite(400,300,'explainBox'),
                this.add.sprite(400,500,'button'),
                this.make.text({ //timer text 
                    x: 200,
                    y:300,
                    boundsAlignH: "center", 
                    boundsAlignV: "middle",
                    text: this.explanations[this.scenerio],
                    style: {
                        font: '38px monospace',
                        fill: '#000000'
                    }
                })
            ]

            this.cardHolder[1].setInteractive().on('pointerhover', () => 
            { 
                
            }).on('pointerdown', () => {
                if(this.scenerio+1 > this.cards.length) {
                    this.cardHolder[0].destroy();
                    this.cardHolder[1].destroy();
                    this.cardHolder[2].destroy();
                    
                    this.gameOver();
                } else {

                    this.cardHolder[0].destroy();
                    this.cardHolder[1].destroy();
                    this.cardHolder[2].destroy();

                    this.cardHolder = this.cards[this.scenerio].map(cardData => {
                        this.add.sprite(cardData.x,cardData.y,cardData.name);
                    });

                    this.timerText.text = this.timer;
                    this.ScenerioText.text = this.questions[this.scenerio];

                    this.clock.destroy();
                    this.clock = this.time.addEvent({  //adds the time event 
                        delay: 1000, 
                        callback: () => {
                            this.timerText.text -= 1
                        }, 
                        callbackScope: this,
                        repeat: this.timer-1
                    });
                    this.questionHalt = false;

                }

                this.questionHalt = false;

            });

            this.questionHalt = true;
        }

        this.gameOver = () => {
            this.cardHolder = this.add.sprite(400,300,'explainBox');
            this.sendData(this.score);

            this.gameOver = this.make.text({ //One of the Scenario text for the 
                x:100,
                y:300,
                boundsAlignH: "center", 
                boundsAlignV: "middle",
                text: `Great! You got ${this.score} for your final score`,
                style: {
                    font: '15px monospace',
                    fill: '#000000'
                }
            });
        }
    }

    update(delta) { //game loop
        if(parseInt(this.timerText.text) === 0 && this.questionHalt === false) {
            this.scenerio++;
            this.timer = 10;
            this.score -= 500;

            console.log(this.score);

            this.cardHolder = [
                this.add.sprite(400,300,'explainBox'),
                this.add.sprite(400,500,'button')
            ]

            this.cardHolder[1].setInteractive().on('pointerhover', () => 
            { 
                
            }).on('pointerdown', () => {
                if(this.scenerio+1 > this.cards.length) {
                    this.cardHolder[0].destroy();
                    this.cardHolder[1].destroy();
                    this.gameOver();
                } else {

                    this.cardHolder[0].destroy();
                    this.cardHolder[1].destroy();

                    this.cardHolder = this.cards[this.scenerio].map(cardData => {
                        this.add.sprite(cardData.x,cardData.y,cardData.name);
                    });

                    this.timerText.text = this.timer;
                    this.ScenerioText.text = this.questions[this.scenerio];

                    this.clock.destroy();
                    this.clock = this.time.addEvent({  //adds the time event 
                        delay: 1000, 
                        callback: () => {
                            this.timerText.text -= 1
                        }, 
                        callbackScope: this,
                        repeat: this.timer-1
                    });
                    this.questionHalt = false;

                }
            });
            this.questionHalt = true;
        }
    }
    render() {
        
    }
}