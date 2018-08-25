var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.GameOver = {

    init: function () {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);


    },

    preload: function () {

        //Carregar imagens
        this.load.image('gameover','assets/images/GameOver.jpg');
    },

    create: function () {

        this.fase = this.add.sprite(120,0,'gameover');
        this.fase.scale.setTo(0.42);
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