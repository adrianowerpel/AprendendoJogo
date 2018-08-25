var AprendendoJogo = AprendendoJogo || {};

AprendendoJogo.Player = function (game,data,cursors) {

    Phaser.Sprite.call(this,game,data.player.x,data.player.y,'player',3);

    this.data = data;
    this.cursors = cursors;

    this.anchor.setTo(0.5);
    this.scale.setTo(0.6);
    this.animations.add('walking',[0,1,2,3,4,5],6,true);
    this.animations.add('run',[6,7,8,9,10,11],6,true);
    this.animations.add('idle',[18,19,20,21,20,19,18],6,true);
    this.animations.add('jump',[12,13,14,15,16,17],6,true);
    game.physics.arcade.enable(this);
    this.customParams = {};

    this.body.collideWorldBounds = true;
    this.body.setSize(40,90, 20,10 );

    game.camera.follow(this);
};

AprendendoJogo.Player.prototype = Object.create(Phaser.Sprite.prototype);
AprendendoJogo.Player.prototype.constructor = AprendendoJogo.Player;

AprendendoJogo.Player.prototype.update = function () {

    this.body.velocity.x = 0;

    this.s = game.input.keyboard.addKey(Phaser.Keyboard.S);

    if(this.cursors.right.isDown)
    {
        if(this.s.isDown){

            if(!this.body.touching.down){
                this.body.velocity.x = this.data.player.RUNNING_SPEED;
                this.scale.setTo(0.6);
                this.play('jump');
            }
            else {
                this.body.velocity.x = this.data.player.RUNNING_SPEED;
                this.scale.setTo(0.6);
                this.play('run');
            }
        }
        else if(!this.body.touching.down){
            this.body.velocity.x = this.data.player.WALKING_SPEED;
            this.scale.setTo(0.6);
            this.play('jump');
        }
        else {
            this.body.velocity.x = this.data.player.WALKING_SPEED;
            this.scale.setTo(0.6);
            this.play('walking');
        }

    }
    else if(this.cursors.left.isDown)
    {
        if(this.s.isDown){
            if(!this.body.touching.down){
                this.body.velocity.x = -this.data.player.RUNNING_SPEED;
                this.scale.setTo(-0.6, 0.6);
                this.play('jump');
            }
            else {
                this.body.velocity.x = -this.data.player.RUNNING_SPEED;
                this.scale.setTo(-0.6, 0.6);
                this.play('run');
            }
        }
        else if(!this.body.touching.down){
            this.body.velocity.x = -this.data.player.WALKING_SPEED;
            this.scale.setTo(-0.6, 0.6);
            this.play('jump');
        }
        else {
            this.body.velocity.x = -this.data.player.WALKING_SPEED;
            this.scale.setTo(-0.6, 0.6);
            this.play('walking');
        }
    }
    else if(!this.body.touching.down){
        this.play('jump');
    }
    else
    {
        this.play('idle');
    }


    if((this.cursors.up.isDown) && this.body.touching.down)
    {
        this.body.velocity.y = -this.data.player.JUMPING_SPEED;
    }
};