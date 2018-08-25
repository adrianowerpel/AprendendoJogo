var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.Final = {

    init: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    },

    preload: function () {

        //Carregar imagens
        this.load.image('final','assets/images/fase3/final.jpg');
    },

    create: function () {

        this.fase = this.add.sprite(100,0,'final');
        this.fase.scale.setTo(1);
    },

    update: function () {

        if(this.enter.isDown) {
            this.touchEnter();
        }

    },

    touchEnter: function () {

        game.state.start('Introducao');
    }

}