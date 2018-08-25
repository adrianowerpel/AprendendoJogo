var vidas = 3;

//Criando um name sapce
var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.Fase3 = {

    init: function () {

        //Mostrar todos os elementos do canvas
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //Alinhar o canvas na tela
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //Iniciando o motos de física do jogo
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000;

        //Habilitando a entrada por teclado
        this.cursors = this.game.input.keyboard.createCursorKeys();

        //Setando os limites da fase
        this.game.world.setBounds(0,0,1280,400);

    },

    preload: function () {

        //Carregar imagens
        this.load.image('fase3','assets/images/fase3/fase3.jpg');
        this.load.image('chao','assets/images/chao.png');
        this.load.image('goal','assets/images/goal.png');
        this.load.image('boat','assets/images/boat.png');

        //Carregar spritesheets os dois ultimos parametros são a margem e a calha
        this.load.spritesheet('player','assets/images/player_spritesheet.png',75,100,22,0,0);
        this.load.spritesheet('eagle','assets/images/eagle_spritesheet.png',160,160,10,0,0);
        this.load.spritesheet('crab','assets/images/crab_spritesheet.png',131,129,24,0,0);
        this.load.spritesheet('puma','assets/images/puma_spritesheet2.jpg',130,65,8,0,0);
        this.load.spritesheet('bird','assets/images/bird_sprites.png',100,117,5,0,0 );

        //Carregar o arquivo json com as configurações
        this.load.text('level3','assets/data/level3.json');

    },

    create: function () {

        //Parse do arquivo json
        this.levelData3 = JSON.parse(this.game.cache.getText('level3'));

        //Chamando o metodo createGameSet
        this.createGameSet();

        //Criando o player
        this.player = new AprendendoJogo.PlayerFinal(this.game,this.levelData3,this.cursors);
        //Adicionando o sprite no jogo
        this.game.add.existing(this.player);

        //Iniciando nossos sprites no canvas
        this.shootingTimer = this.game.time.events.loop(Phaser.Timer.SECOND*5,this.createEnemies,this);
        this.createEnemies();

    },

    update: function () {

        //Player colidindo com a chão
        this.game.physics.arcade.collide(this.player,this.grounds);
        this.game.physics.arcade.overlap(this.player,this.eagle,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.crab,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.puma,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.bird,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.boat,this.win,null,this);
    },

    createGameSet: function () {

        this.grounds = this.add.group();
        this.grounds.enableBody = true;
        this.ground;
        this.levelData3.groundData.forEach(function (element) {
            this.ground = this.grounds.create(element.x,element.y,'chao');
            this.ground.scale.setTo(element.z,element.w);
            this.game.physics.arcade.enable(this.ground);
            this.ground.body.allowGravity = false;
            this.ground.body.immovable = true;
        },this);

        this.fase = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'fase3');
        this.fase.autoScroll(-170,0);

        this.boat = this.add.sprite(800,130,'boat');
        this.boat.scale.setTo(-1,1);
        this.game.physics.arcade.enable(this.boat);
        this.boat.body.velocity.x = -20;
        this.boat.body.allowGravity = false;
        this.boat.body.immovable = true;

        var style = {
            font: 'bold 18pt Cooper Black',
            fill: '#D0171B',
            align: 'center'
        }

        this.text = this.game.add.text(10,10,'',style);
        this.text.setText('Vidas: '+vidas);
        this.text.visible = true;
        this.text.fixedToCamera = true;

    },

    //Função para verificar o tamanho do Body dos Sprites
    // render: function () {
    //   this.game.debug.body(this.player);
    //   this.game.debug.body(this.boat);
    //   this.game.debug.body(this.eagle);
    //   this.game.debug.body(this.crab);
    //   this.game.debug.body(this.puma);
    //   this.game.debug.body(this.bird);
    // },

    //Criando inimigos
    createEnemies: function(){

        this.eagle = 1;
        this.crab = 1;
        this.puma = 1;
        this.bird = 1;

        this.number = Math.floor(Math.random() * 4) + 1;

        if(this.number == 1) {

            this.y = Math.floor(Math.random() * 90) + 70;

            this.eagle = this.add.sprite(1000, this.y, 'eagle');
            this.eagle.anchor.setTo(0.5);
            this.eagle.animations.add('fly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6, true);
            this.eagle.animations.play('fly', 10, true);
            this.game.physics.arcade.enable(this.eagle);
            this.eagle.body.velocity.x = -400;
            this.eagle.body.allowGravity = false;
            this.eagle.body.immovable = true;
            this.eagle.body.setSize(100, 40, 30, 70);
        }

        if(this.number == 2) {

            this.y = Math.floor(Math.random() * 160) + 170;

            this.crab = this.add.sprite(1000, this.y, 'crab');
            this.crab.scale.setTo(0.5);
            this.crab.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 6, true);
            this.crab.animations.play('run', 24, true);
            this.game.physics.arcade.enable(this.crab);
            this.crab.body.velocity.x = -300;
            this.crab.body.allowGravity = false;
            this.crab.body.immovable = true;
            this.crab.body.setSize(100, 80, 10, 40);
        }

        if(this.number == 3) {

            this.y = Math.floor(Math.random() * 160) + 170;

            this.puma = this.add.sprite(1000, this.y, 'puma');
            this.puma.scale.setTo(-1, 1);
            this.puma.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7], 6, true);
            this.puma.animations.play('walk', 7, true);
            this.game.physics.arcade.enable(this.puma);
            this.puma.body.velocity.x = -400;
            this.puma.body.allowGravity = false;
            this.puma.body.immovable = true;
            this.puma.body.setSize(85, 43, 30, 20);
        }

        if(this.number == 4) {

            this.y = Math.floor(Math.random() * 90) + 70;

            this.bird = this.add.sprite(1000, this.y, 'bird');
            this.bird.scale.setTo(-0.6, 0.6);
            this.bird.animations.add('fly', [0, 1, 2, 3, 4, 3, 2, 1], 6, true);
            this.bird.animations.play('fly', 10, true);
            this.game.physics.arcade.enable(this.bird);
            this.bird.body.allowGravity = false;
            this.bird.enableBody = true;
            this.bird.body.setSize(80, 80, 10, 20);
            this.bird.body.velocity.x = -300;
        }
    },

    killPlayer: function(){

        if(vidas > 1) {
            game.state.start('Fase3');
            vidas -= 1;
        }
        else{
            game.state.start('GameOver');
            vidas = 3;
        }
    },

    win: function () {

        game.state.start('Final');

    }


}