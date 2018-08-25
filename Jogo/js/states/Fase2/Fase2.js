var vidas = 3;

//Criando um name sapce
var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.Fase2 = {

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
        this.game.world.setBounds(0,0,2500,500);

    },

    preload: function () {

        //Carregar imagens
        this.load.image('fase2','assets/images/fase2/fase2.jpg');
        this.load.image('chao','assets/images/chao.png');
        this.load.image('deadOut','assets/images/deadOutBounds.png');
        this.load.image('limite','assets/images/limite.png');
        this.load.image('goal','assets/images/goal.png');
        this.load.image('tiger','assets/images/tiger.png');

        //Carregar spritesheets os dois ultimos parametros são a margem e a calha
        this.load.spritesheet('player','assets/images/player_spritesheet.png',75,100,22,0,0);
        this.load.spritesheet('puma','assets/images/puma_spritesheet2.jpg',130,65,8,0,0);
        this.load.spritesheet('snake','assets/images/snake_spritesheet.png',59,57,8,0,0);
        this.load.spritesheet('bat','assets/images/bat_spritesheet2.png',100,100,11,0,0);
        this.load.spritesheet('scorpion','assets/images/scorpion_spritesheet.png',99,62,8,0,0);
        this.load.spritesheet('wolf','assets/images/wolf_spritesheet.png',137,84,6,0,0);

        //Carregar o arquivo json com as configurações
        this.load.text('level2','assets/data/level2.json');

    },

    create: function () {

        //Parse do arquivo json
        this.levelData2 = JSON.parse(this.game.cache.getText('level2'));

        //Chamando o metodo createGameSet
        this.createGameSet();

        //Criando o player
        this.player = new AprendendoJogo.Player(this.game,this.levelData2,this.cursors);
        //Adicionando o sprite no jogo
        this.game.add.existing(this.player);

        //Iniciando nossos sprites no canvas
        this.createEnemies();

    },

    update: function () {

        //Player colidindo com a chão
        this.game.physics.arcade.collide(this.player,this.grounds);
        this.game.physics.arcade.overlap(this.player,this.fincos,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.puma,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.puma2,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.snake,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.bat,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.scorpion,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.wolf,this.killPlayer,null,this);
        this.game.physics.arcade.overlap(this.player,this.goal,this.win,null,this);

        this.game.physics.arcade.collide(this.puma,this.grounds);
        this.game.physics.arcade.collide(this.puma,this.limites);
        this.game.physics.arcade.collide(this.puma2,this.grounds);
        this.game.physics.arcade.collide(this.puma2,this.limites);
        this.game.physics.arcade.collide(this.snake,this.grounds);
        this.game.physics.arcade.collide(this.snake,this.limites);
        this.game.physics.arcade.collide(this.bat,this.grounds);
        this.game.physics.arcade.collide(this.bat,this.limites);
        this.game.physics.arcade.collide(this.scorpion,this.grounds);
        this.game.physics.arcade.collide(this.scorpion,this.limites);
        this.game.physics.arcade.collide(this.wolf,this.grounds);
        this.game.physics.arcade.collide(this.wolf,this.limites);

        this.enemyBounce(this.puma,1);
        this.enemyBounce(this.puma2,1);
        this.enemyBounce(this.snake,1);
        this.enemyBounce(this.bat,0.8);
        this.enemyBounce(this.scorpion,0.8);
        this.enemyBounce(this.wolf,0.6);

    },

    createGameSet: function () {

        this.grounds = this.add.group();
        this.grounds.enableBody = true;
        this.ground;
        this.levelData2.groundData.forEach(function (element) {
            this.ground = this.grounds.create(element.x,element.y,'chao');
            this.ground.scale.setTo(element.z,element.w);
            this.game.physics.arcade.enable(this.ground);
            this.ground.body.allowGravity = false;
            this.ground.body.immovable = true;
        },this);

        this.limites = this.add.group();
        this.limites.enableBody = true;
        this.limite;
        this.levelData2.limiteData.forEach(function (element) {
            this.limite = this.limites.create(element.x,element.y,'limite');
            this.game.physics.arcade.enable(this.limite);
            this.limite.body.allowGravity = false;
            this.limite.body.immovable = true;
        },this);

        this.fincos = this.add.group();
        this.fincos.enableBody = true;
        this.finco;
        this.levelData2.fincoData.forEach(function (element) {
            this.finco = this.fincos.create(element.x,element.y,'deadOut');
            this.finco.scale.setTo(element.z,element.w);
            this.game.physics.arcade.enable(this.finco);
            this.finco.body.allowGravity = false;
            this.finco.body.immovable = true;
        },this);

        this.goal = this.add.sprite(2480,0,'goal');
        this.game.physics.arcade.enable(this.goal);
        this.goal.body.allowGravity = false;
        this.goal.body.immovable = true;

        this.fase = this.add.sprite(0,0,'fase2');
        this.tigerSleep = this.add.sprite(1535,235,'tiger');

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
    //   this.game.debug.body(this.puma);
    //   this.game.debug.body(this.puma2);
    //   this.game.debug.body(this.snake);
    //   this.game.debug.body(this.bat);
    //   this.game.debug.body(this.scorpion);
    //   this.game.debug.body(this.wolf);
    // },

    //Criando inimigos
    createEnemies: function(){

        this.puma = this.add.sprite(400,430,'puma');
        this.puma.anchor.setTo(0.5);
        this.puma.animations.add('walk',[0,1,2,3,4,5,6,7],6,true);
        this.puma.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.puma);
        this.puma.enableBody = true;
        this.puma.body.setSize(85,43,30,20);
        this.puma.body.velocity.x = 200;
        this.puma.body.bounce.set(1,0);

        this.puma2 = this.add.sprite(1000,100,'puma');
        this.puma2.anchor.setTo(0.5);
        this.puma2.animations.add('walk',[0,1,2,3,4,5,6,7],6,true);
        this.puma2.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.puma2);
        this.puma2.enableBody = true;
        this.puma2.body.setSize(85,43,30,20);
        this.puma2.body.velocity.x = 200;
        this.puma2.body.bounce.set(1,0);

        this.snake = this.add.sprite(1300,340,'snake');
        this.snake.anchor.setTo(0.5);
        this.snake.animations.add('walk',[0,1,2,3,4,5,6,7],6,true);
        this.snake.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.snake);
        this.snake.enableBody = true;
        this.snake.body.setSize(35,47,20,5);
        this.snake.body.velocity.x = 100;
        this.snake.body.bounce.set(1,0);

        this.bat = this.add.sprite(2000,130,'bat');
        this.bat.anchor.setTo(0.5);
        this.bat.animations.add('walk',[0,1,2,3,4,5,6,7,11,12,13,14],6,true);
        this.bat.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.bat);
        this.bat.body.allowGravity = false;
        this.bat.enableBody = true;
        this.bat.body.setSize(40,40,30,30);
        this.bat.body.velocity.x = 150;
        this.bat.body.bounce.set(1,0);

        this.scorpion = this.add.sprite(600,200,'scorpion');
        this.scorpion.anchor.setTo(0.5);
        this.scorpion.animations.add('walk',[0,1,2,3,4,5,6],6,true);
        this.scorpion.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.scorpion);
        this.scorpion.enableBody = true;
        this.scorpion.body.setSize(80,50,10,10);
        this.scorpion.body.velocity.x = 150;
        this.scorpion.body.bounce.set(1,0);

        this.wolf = this.add.sprite(50,160,'wolf');
        this.wolf.anchor.setTo(0.5);
        this.wolf.animations.add('walk',[0,1,2,3,4,5],6,true);
        this.wolf.animations.play('walk',7,true);
        this.game.physics.arcade.enable(this.wolf);
        this.wolf.enableBody = true;
        this.wolf.body.setSize(100,70,25,10);
        this.wolf.body.velocity.x = 80;
        this.wolf.body.bounce.set(1,0);
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
            game.state.start('Fase2');
            vidas -= 1;
        }
        else{
            game.state.start('GameOver');
            vidas = 3;
        }
    },

    win: function () {

        game.state.start('Pergunta2');

    }


}