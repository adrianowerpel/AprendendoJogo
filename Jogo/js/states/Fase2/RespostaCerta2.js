var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.RespostaCerta2 = {

    init: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);


    },

    preload: function () {

        //Carregar imagens
        this.load.image('resposta','assets/images/fase2/respostaCerta.jpg');
        this.load.image('enter','assets/images/fase2/continuar.png');

    },

    create: function () {

        this.fase = this.add.sprite(120,0,'resposta');
        this.fase.scale.setTo(0.42);

        this.press = this.add.sprite(250,350,'enter');
        this.press.scale.setTo(0.3);

        this.game.time.events.loop(Phaser.Timer.SECOND,this.Enter,this);
    },

    update: function () {

        if(this.enter.isDown) {
            this.touchEnter();
        }

    },

    Enter:function(){

        if(this.press.alpha == 0)
        {
            this.press.alpha = 1;
        }
        else
        {
            this.press.alpha = 0;
        }
    },

    touchEnter: function () {

        game.state.start('Barco');

    }


}