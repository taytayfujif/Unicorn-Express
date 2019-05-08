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
            })
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

    showQuestion(questionItem,imageQuestion) {
        var questionTitleElement = this.addQuestionTitle(questionItem.question,imageQuestion);
        this.addButtonsChoice(questionItem.choices,questionItem.answer,questionTitleElement);
    }
    addQuestionTitle (textContent,imageQuestion) {
        var questionTitleElement = this.game.add.text(0,0,textContent, {
            font: "24pt Audiowide", 
            fill: "#000000", 
            wordWrap: true,  
            wordWrapWidth:800,
            align: "left", 
            backgroundColor: '#ffffff' 
        });
        questionTitleElement.alignTo(imageQuestion,Phaser.BOTTOM_CENTER);
        return questionTitleElement;
    }

    addButtonsChoice (choicesText,answerIndex,questionTitleElement) {
        var groupButtons = this.game.add.group();
        var previousGroup;
        for(var index=0;index<choicesText.length;index++){
            var isRightAnswer = (index===answerIndex);
            var group = this.addChoiceGroup(choicesText[index],isRightAnswer);
            if(previousGroup){
                group.alignTo(previousGroup, Phaser.BOTTOM_LEFT, 0);
            }
            previousGroup = group;
            groupButtons.add(group);
        }
        groupButtons.alignTo(questionTitleElement, Phaser.BOTTOM_CENTER, 0);
    }

    addChoiceGroup (title,isRightAnswer){
        var button = this.game.add.button(0,0, 'button', this.onButtonChoiceClicked, {context:this,isRightAnswer:isRightAnswer}, 2, 1, 0);
        button.scale.set(0.5);
        var text = this.game.add.text(0,0,title, {font: "12pt Audiowide", fill: "#000000", wordWrap: false,  align: "left", backgroundColor: '#ffffff' });
        text.alignTo(button, Phaser.RIGHT_CENTER, 0);
        var group = this.game.add.group();
        group.add(button);
        group.add(text);
        return group;
    }
    onButtonChoiceClicked() {
        var context = this.context;
        if(this.isRightAnswer){
            context.score++;            
            context.marioWinSound.play();
        }else{
            context.marioLoseSound.play();
            context.remainingLives--;
        }
        if(context.remainingLives>0){
            context.game.state.start('answer',true,false,context.categoryIndexSelected,context.currentQuestionIndex,this.isRightAnswer,context.remainingLives,context.score);
        }else{
            var isWin = false
            context.game.state.start('endgame',true,false,isWin);
        }
    }

    listQuestionsByCategory (categoryIndex){
        return this.data.categories[categoryIndex].questions;
    }
    
    getQuestionItem (categoryIndex,questionIndex){
        return this.listQuestionsByCategory(categoryIndex)[questionIndex];
    }
   showImageQuestion (categoryIndex,questionIndex){
        var key = ['image_question',categoryIndex,questionIndex].join('_');
        var image_question = this.game.add.image(0,0, key);
        var scale = 1;
        if(image_question.height > QuizGame.Constants.maxHeightImageQuestion){
            scale = QuizGame.Constants.maxHeightImageQuestion/image_question.height;      
        }
        image_question.scale.set(scale);
        image_question.alignIn(this.rectCanvas,Phaser.TOP_CENTER);
        return image_question;
    }

    showLives (lives){
        var group = this.game.add.group();
        var previous;
        for(var index=0;index<lives;index++){
            var heart = this.game.add.sprite(0,0, 'heart');
            if(previous){
                heart.alignTo(previous, Phaser.RIGHT_CENTER, 0);
            }
            previous = heart;
            group.add(heart);
        }
        group.alignIn(this.rectCanvas,Phaser.TOP_RIGHT)
        return group;
    }
    showScore (score,total){
        var style = { 
            font: "20pt Audiowide", fill: "#7C00F8", wordWrap: false,  align: "right", backgroundColor: '#ffffff'
        };
        var textContent = 'Score : '+score+'/'+total;
        var textEl = this.game.add.text(0,0,textContent, style);
        textEl.alignTo(this.livesGroups,Phaser.BOTTOM_RIGHT);
    }
    showExitButton (){
        var button = this.game.add.button(0,0, 'exitButton', this.onButtonExitClicked, this, 2, 1, 0);        
        button.alignIn(this.rectCanvas,Phaser.BOTTOM_RIGHT);
    }
    onButtonChoiceClicked() {
        this.game.state.start('intro');
    }
}