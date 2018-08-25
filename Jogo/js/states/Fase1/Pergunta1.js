var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.Pergunta1 = {

    init: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.cursors = this.game.input.keyboard.createCursorKeys();


    },

    preload: function () {

        //Carregar imagens
        this.load.image('pergunta1','assets/images/fase1/pergunta1.jpg');

        this.load.spritesheet('resposta1','assets/images/fase1/resposta1.png',160,147,2,0,0);
        this.load.spritesheet('resposta2','assets/images/fase1/resposta2.png',160,124,2,0,0 );
        this.load.spritesheet('resposta3','assets/images/fase1/resposta3.png',160,130,2,0,0 );

    },

    create: function () {

        this.fase = this.add.sprite(95,0,'pergunta1');
        this.fase.scale.setTo(0.5);

        this.resposta1 = this.add.sprite(120,250,'resposta1');
        this.resposta1.scale.setTo(0.85);
        this.resposta1.animations.add('mouseUp1',[1],2,false);
        this.resposta1.animations.add('mouseOver1',[0],2,false);
        this.resposta1.inputEnabled = true;
        this.resposta1.events.onInputDown.add(this.respostaErrada,this);

        this.resposta2 = this.add.sprite(305,255,'resposta2');
        this.resposta2.scale.setTo(1);
        this.resposta2.animations.add('mouseUp2',[1],2,false);
        this.resposta2.animations.add('mouseOver2',[0],2,false);
        this.resposta2.inputEnabled = true;
        this.resposta2.events.onInputDown.add(this.respostaCerta, this);

        this.resposta3 = this.add.sprite(520,250,'resposta3');
        this.resposta3.scale.setTo(1);
        this.resposta3.animations.add('mouseUp3',[1],2,false);
        this.resposta3.animations.add('mouseOver3',[0],2,false);
        this.resposta3.inputEnabled = true;
        this.resposta3.events.onInputDown.add(this.respostaErrada,this);

    },

    update: function () {

        if(this.resposta1.input.pointerOver()){
            this.resposta1.play('mouseUp1');
        }
        else{
            this.resposta1.play('mouseOver1');
        }

        if(this.resposta2.input.pointerOver()){
            this.resposta2.play('mouseUp2');
        }
        else{
            this.resposta2.play('mouseOver2');
        }

        if(this.resposta3.input.pointerOver()){
            this.resposta3.play('mouseUp3');
        }
        else{
            this.resposta3.play('mouseOver3');
        }


    },

    respostaErrada:function(){

        game.state.start('RespostaErrada1');

    },

    respostaCerta: function () {

        game.state.start('RespostaCerta1');

    }


}