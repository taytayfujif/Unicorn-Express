var CardGame = CardGame || {};

CardGame.Game = {
    create: function() {
        //Phase 1: Sprites And There logic

            //Dummy
        this.category = parseInt(document.querySelector('#specialId').innerHTML);
        this.score = 0;

            //Data
        this.cardData = JSON.parse(this.game.cache.getText('CardData'));
        console.log(this.cardData);

            //Main Music
        this.music = this.game.add.audio('Main');
        this.music.loop = true;
        this.music.play();

            //background
        this.background = this.add.tileSprite(0,0,this.game.world.width,this.game.world.height,'background');
        this.background.autoScroll(30,0); //automatically scrolls the tile sprite

            //stripes
        this.stripes = this.add.tileSprite(0,0,this.game.world.width, this.game.world.height*0.1,'stripes');
        this.stripes.autoScroll(-30,0);

        this.stripes2 = this.add.tileSprite(0,this.game.world.height,this.game.world.width, this.game.world.height*0.1,'stripes');
        this.stripes2.anchor.setTo(0,1);
        this.stripes2.autoScroll(30,0);
        
            //Cards and Group
        this.cardGroup = this.game.add.group();
        this.cardGroup.alpha = 0;

                //filters the cards for the current category
        this.cardQuestions = this.cardData.questions.filter( element => element.category == this.category);
        console.log(this.cardQuestions);

            //Text Style
        this.textStyle = {font:'21px Arial', fill:'#FCFCFC'}; //sets style of the text
        this.textStyle2 = {font:'28px Arial', fill:'#FCFCFC'}; //sets style of the text
        this.textStyle3 = {font:'30px Arial', fill:'#6B70FF'}; //sets style of the text
        this.textStyle4 = {font:'35px Arial', fill:'#FF7676'}; //sets style of the text

            //audio
        this.correctSound = this.game.add.audio('right');
        this.wrongSound = this.game.add.audio('wrong');
        this.buttonSound = this.game.add.audio('button');

        //Phase 2, Initialization of Game Logic

        this.question = 0; //question Index

        this.maxQuestions = this.cardQuestions.length;

        this.initQuestionAndCards(); //Calls the cards and gives them parameters

        this.diableUI = false; //disables the UI
        

        //Phase 3 : Initializing Timer

        this.decrease = 0;

        this.game.time.events.loop(Phaser.Timer.SECOND*2, () => {
            this.decrease += 12.5;
        });
    },

    //custom logic

    initQuestionAndCards: function() {

        this.diableUI = true;

        if(this.question < this.maxQuestions) {

            question = this.game.add.text(this.game.world.centerX,this.game.world.height*0.05,this.cardQuestions[this.question].question,this.textStyle);
            question.anchor.setTo(0.5);

            this.cardGroup.add(question);

            this.cardQuestions[this.question].choices.forEach((element,key) => {
                
                let card,text;

                switch(key) {

                    case 0:

                        card = this.add.sprite(225, 176,'CatOneCardOne');
                        text = this.game.add.text(225,176,element,this.textStyle2);
                        card.customParams = {number: key};
                        break;

                    case 1:

                        card = this.add.sprite(575, 176,'CatOneCardOne');
                        text = this.game.add.text(575, 176,element,this.textStyle2);
                        card.customParams = {number: key};
                        break;

                    case 2:

                        card = this.add.sprite(225, 424,'CatOneCardOne');
                        text = this.game.add.text(225, 424,element,this.textStyle2);
                        card.customParams = {number: key};
                        break;

                    case 3:

                        card = this.add.sprite(575, 424,'CatOneCardOne');
                        text = this.game.add.text(575, 424,element,this.textStyle2);
                        card.customParams = {number: key};
                        break;

                }

                card.inputEnabled = true;
                card.events.onInputDown.add(this.checkAnswer,this);
                card.anchor.setTo(0.5);

                text.anchor.setTo(0.5);

                this.cardGroup.add(card);
                this.cardGroup.add(text);

                const cardAppear = this.game.add.tween(this.cardGroup);

                cardAppear.to({alpha:1},700,'Linear',true);

                cardAppear.onComplete.add(() => {
                    this.diableUI = false;
                    // this.game.time.events.add(Phaser.Timer.SECOND * 1, this.checkAnswer,this); //custom Data
                });

            });

        } else {
            this.gameOver();
        }
    },

    checkAnswer: function(sprite,event) {
        if(!this.diableUI) {
            console.log(sprite);

            if(sprite.customParams.number == this.cardQuestions[this.question].answer) {
                console.log('your correct!');
                this.score += 500;
                this.correctSound.play();
                this.showExplanationCorrect();
            }
            else {
                console.log('your Wrong');
                this.score -= 500;
                this.wrongSound.play();
                this.showExplanation();
            }
        }
    },
    showExplanation: function() {

        const cardDisappear = this.game.add.tween(this.cardGroup);

        //explanation text
        let explanation = this.game.add.text(this.game.world.centerX,this.game.world.height *0.95,this.cardQuestions[this.question].explanation,this.textStyle);

        explanation.anchor.setTo(0.5);
        explanation.alpha = 0;

        cardDisappear.to({alpha:0},1000,'Linear',true);

        cardDisappear.onComplete.add(() => { //after cards disappear

            this.cardGroup.removeAll(true);

            const textAppear = this.game.add.tween(explanation);

            textAppear.to({alpha:1},1000,'Linear',true);

            textAppear.onComplete.add(() => { //after text appears

                var button = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'button');
                button.anchor.setTo(0.5);

                button.inputEnabled = true;
                button.events.onInputDown.add(() => {

                    button.destroy();

                    
                    const textDisappear = this.game.add.tween(explanation).to({alpha:0},1000,'Linear',true);
                    
                    textDisappear.onComplete.add(() => { //after text Disappears

                        this.diableUI = false;
                        
                        this.question++; //incrememnts what question it is on

                        this.initQuestionAndCards();
                    });

                });

            });

        });
    },

    showExplanationCorrect: function() {

        this.diableUI = true; //disables UI When Showing Explanation

        const cardDisappear = this.game.add.tween(this.cardGroup);

        //explanation text
        let explanation = this.game.add.text(this.game.world.centerX,this.game.world.height * 0.95,this.cardQuestions[this.question].explanation,this.textStyle);

        explanation.anchor.setTo(0.5);
        explanation.alpha = 0;

        cardDisappear.to({alpha:0},1000,'Linear',true);

        cardDisappear.onComplete.add(() => { //after cards disappear

            this.cardGroup.removeAll(true);

            console.log(this.cardGroup);
            
            const textAppear = this.game.add.tween(explanation);

            textAppear.to({alpha:1},2000,'Linear',true);

            textAppear.onComplete.add(() => { //after text appears
                
                const textDisappear = this.game.add.tween(explanation).to({alpha:0},1000,'Linear',true);

                textDisappear.onComplete.add(() => { //after text Disappears

                    this.diableUI = false;
                    
                    this.question++; //incrememnts what question it is on

                    this.initQuestionAndCards();
                });
            
            });

        });

    },
    gameOver: function() {

        this.score = this.score < 0 ? 0 : Math.round(this.score * (this.score/this.decrease));

        const gameOverText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,'Final Score',this.textStyle3);
        gameOverText.anchor.setTo(0.5);

        const finalScore = this.game.add.text(this.game.world.centerX,gameOverText.bottom + 10,this.score,this.textStyle4);
        finalScore.anchor.setTo(0.5);

        var button = this.game.add.sprite(this.game.world.centerX,finalScore.bottom+50,'button');
        button.anchor.setTo(0.5);

        button.inputEnabled = true;
        button.events.onInputDown.add(() => {
            this.music.stop();
            this.state.start('Menu');
        });

    }
}