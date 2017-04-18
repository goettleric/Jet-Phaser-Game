﻿module JetFighter.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        enemy: EnemyFighterType1;
        bullet: PlayerBullet;
        enemies: Phaser.Group;
        bullets: Phaser.Group;
        
        

        create() {
            
            this.physics.startSystem(Phaser.Physics.ARCADE);
            //Background seting
            this.background = this.add.sprite(0, 0, 'jetfighter', 'background');

            //Create Enemy Group
            this.enemies = this.game.add.group();
            this.enemies.enableBody = true;
            this.enemies.physicsBodyType = Phaser.Physics.ARCADE;

            //Create Player Ship
            this.player = new Player(this.game, this.world.centerX, this.world.centerY * 2.5);
            this.player.anchor.setTo(0, 5);

            //Create Player Bullet Group
            this.bullets = this.game.add.group();
            this.bullets.enableBody = true;
            this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
            
            //Spawn Enemy Ships
            this.game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createEnemy, this);
            this.game.debug.text("Use Right and Left arrow keys to move the plane", 0, this.world.height, "red");
        }

        update() {

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.shootBullet();
            }
            //Player enemy1 collision checking
            this.game.physics.arcade.overlap(this.player, this.enemies, this.planeCollision, null, this);
            
        }

        createEnemy() {
            this.enemy = new EnemyFighterType1(this.game, this.world.randomX, this.world.y - 200);
            this.enemies.add(this.enemy);

        }

        planeCollision(player, enemy) {
            enemy.kill();
            player.kill();
        }

        shootBullet() {
                this.bullet = new PlayerBullet(this.game, this.player.x +20, this.player.y -340);
                this.bullets.add(this.bullet);
                this.add.audio('miniGun', 1, false).play();
           
            
            
            
        }
     }

}