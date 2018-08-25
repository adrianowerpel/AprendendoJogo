var vidas = 3;

//Criando um name sapce
var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.Fase1 = {

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
        this.game.world.setBounds(0,0,1990,400);

    },

    preload: function () {

        //Carregar imagens
        this.load.image('fase1','assets/images/fase1/fase1.png');
        this.load.image('chao','assets/images/chao.png');
        this.load.image('deadOut','assets/images/deadOutBounds.png');
        this.load.image('limite','assets/images/limite.png');
        this.load.image('goal','assets/images/goal.png');

        //Carregar spritesheets os dois ultimos parametros são a margem e a calha
        this.load.spritesheet('player','assets/images/player_spritesheet.png',75,100,22,0,0);
        this.load.spritesheet('tiger','assets/images/tiger_sprite.png',120,45,6,0,0 );
        this.load.spritesheet('javali','assets/images/javali_sprites.png',150,81,6,0,0 );
        this.load.spritesheet('bird','assets/images/bird_sprites.png',100,117,5,0,0 );

        //Carregar o arquivo json com as configurações
        this.load.text('level','assets/data/level.json');

    },

    create: function () {

        //Parse do arquivo json
        this.levelData = JSON.parse(this.game.cache.getText('level'));

        //Chamando o metodo createGameSet
        this.createGameSet();

        //Criando o player
        this.player = new AprendendoJogo.Player(this.game,this.levelData,this.cursors);
        //Adicionando o sprite no jogo
        this.game.add.existing(this.player);

        //Iniciando nossos sprites no canvas
        this.createEnemies();

    },

    update: function () {

        //Player colidindo com a chão
        this.game.physics.arcade.collide(this.player,this.grounds);
        this.game.physics.arcade.overlap(this.player,this.deadOut,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.goal,this.win,null,this);
        this.game.physics.arcade.overlap(this.player,this.tiger,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.tiger2,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.javali,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.bird,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.bird2,this.killPlayer,null,this);

        this.game.physics.arcade.collide(this.tiger,this.grounds);
        this.game.physics.arcade.collide(this.tiger,this.limites);
        this.game.physics.arcade.collide(this.tiger2,this.grounds);
        this.game.physics.arcade.collide(this.tiger2,this.limites);
        this.game.physics.arcade.collide(this.javali,this.grounds);
        this.game.physics.arcade.collide(this.javali,this.limites);
        this.game.physics.arcade.collide(this.bird,this.limites);
        this.game.physics.arcade.collide(this.bird2,this.limites);

        this.enemyBounce(this.tiger,1);
        this.enemyBounce(this.tiger2,1);
        this.enemyBounce(this.javali,0.5);
        this.enemyBounce(this.bird,0.5);
        this.enemyBounce(this.bird2,0.5);

    },

    createGameSet: function () {

        this.grounds = this.add.group();
        this.grounds.enableBody = true;

        this.ground;
        this.levelData.groundData.forEach(function (element) {
            this.ground = this.grounds.create(element.x,element.y,'chao');
            this.ground.scale.setTo(element.z);
            this.game.physics.arcade.enable(this.ground);
            this.ground.body.allowGravity = false;
            this.ground.body.immovable = true;
        },this);

        this.limites = this.add.group();
        this.limites.enableBody = true;
        this.limite;
        this.levelData.limiteData.forEach(function (element) {
            this.limite = this.limites.create(element.x,element.y,'limite');
            this.game.physics.arcade.enable(this.limite);
            this.limite.body.allowGravity = false;
            this.limite.body.immovable = true;
        },this);


        this.deadOut = this.add.sprite(0,399,'deadOut');
        this.game.physics.arcade.enable(this.deadOut);
        this.deadOut.body.allowGravity = false;
        this.deadOut.body.immovable = true;

        this.deadOut = this.add.sprite(0,399,'deadOut');
        this.game.physics.arcade.enable(this.deadOut);
        this.deadOut.body.allowGravity = false;
        this.deadOut.body.immovable = true;

        this.goal = this.add.sprite(1970,0,'goal');
        this.game.physics.arcade.enable(this.goal);
        this.goal.body.allowGravity = false;
        this.goal.body.immovable = true;

        this.fase = this.add.sprite(0,0,'fase1');

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
    //   this.game.debug.body(this.tiger);
    //   this.game.debug.body(this.tiger2);
    //   this.game.debug.body(this.bird);
    //   this.game.debug.body(this.bird2);
    //   this.game.debug.body(this.javali);
    // },

    //Criando inimigos
    createEnemies: function(){

        this.tiger = this.add.sprite(950,300,'tiger');
        this.tiger.anchor.setTo(0.5);
        this.tiger.animations.add('walk',[0,1,2,3,4,5],6,true);
        this.tiger.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.tiger);
        this.tiger.enableBody = true;
        this.tiger.body.setSize(100,35,10,5);
        this.tiger.body.velocity.x = 100;
        this.tiger.body.bounce.set(1,0);

        this.tiger2 = this.add.sprite(250,340,'tiger');
        this.tiger2.anchor.setTo(0.5);
        this.tiger2.animations.add('walk',[0,1,2,3,4,5],6,true);
        this.tiger2.animations.play('walk',5,true);
        this.game.physics.arcade.enable(this.tiger2);
        this.tiger2.enableBody = true;
        this.tiger2.body.setSize(100,35,10,5);
        this.tiger2.body.velocity.x = 50;
        this.tiger2.body.bounce.set(1,0);

        this.javali = this.add.sprite(1750,300,'javali');
        this.javali.anchor.setTo(0.5);
        this.javali.animations.add('walk2',[0,1,2,3,4,5],6,true);
        this.javali.animations.play('walk2',10,true);
        this.game.physics.arcade.enable(this.javali);
        this.javali.enableBody = true;
        this.javali.body.setSize(110,71,30,10);
        this.javali.body.velocity.x = 200;
        this.javali.body.bounce.set(1,0);

        this.bird = this.add.sprite(550,150,'bird');
        this.bird.anchor.setTo(0.5);
        this.bird.animations.add('fly',[0,1,2,3,4,3,2,1],6,true);
        this.bird.animations.play('fly',10,true);
        this.game.physics.arcade.enable(this.bird);
        this.bird.body.allowGravity = false;
        this.bird.enableBody = true;
        this.bird.body.setSize(80,80,10,20);
        this.bird.body.velocity.x = -100;
        this.bird.body.bounce.set(1,0);

        this.bird2 = this.add.sprite(1450,240,'bird');
        this.bird2.anchor.setTo(0.5);
        this.bird2.animations.add('fly',[0,1,2,3,4,3,2,1],6,true);
        this.bird2.animations.play('fly',10,true);
        this.game.physics.arcade.enable(this.bird2);
        this.bird2.body.allowGravity = false;
        this.bird2.enableBody = true;
        this.bird2.body.setSize(80,80,10,20);
        this.bird2.body.velocity.x = 150;
        this.bird2.body.bounce.set(1,0);

    },

    enemyBounce:function(enemy,size){

        if(enemy.body.velocity.x > 0){
            enemy.scale.setTo(size);
        }
        else{
            enemy.scale.setTo(-size,size);
        }
    },


    killPlayer: function(){

        if(vidas > 1) {
            game.state.start('Fase1');
            vidas -= 1;
        }
        else{
            game.state.start('GameOver');
            vidas = 3;
        }
    },

    win: function () {

        game.state.start('Pergunta1');

    }


}