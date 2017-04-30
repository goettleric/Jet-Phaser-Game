module JetFighter.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        enemy: EnemyFighterType1;
        bullet: PlayerBullet;
        enemies: Phaser.Group;
        bullets: Phaser.Group;
        fireDelayTimer: number;
        scoreString:string;
        scoreText;

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

            //Create the label to display the players score
            this.scoreString = "Score: ";
            this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
        }

        update() {
            //Only allow collions check and fire if player exists.
            if (this.player.alive) {
                //Player fire button
                if (this.game.input.keyboard.downDuration(Phaser.Keyboard.SPACEBAR, 1)) {
                    this.shootBullet();
                }
                //Player enemy1 collision checking
                this.game.physics.arcade.overlap(this.player, this.enemy, this.planeCollision, null, this);
                this.game.physics.arcade.overlap(this.bullets, this.enemies, this.enemyHit, null, this);
            }
           
            
        }

        //Enemy Spawn rate for level one.  Add each enemy to the enemies group.
        createEnemy() {
            this.enemy = new EnemyFighterType1(this.game, this.world.randomX, this.world.y - 200);
            this.enemies.add(this.enemy);

        }

        //Fire delay timer to only allow one shoot per fight button press.
        fireDelayTiming() {
            this.fireDelayTimer = setTimeout(fireDelay => this.shootBullet(), 250);
        }

        //Check to see if bullets hit enemies
        enemyHit(bullets, enemies) {
            
            enemies.play('blowUp', 9, false, true);
            bullets.kill();
            this.player.playerScore += this.enemy.pointValue;
            this.scoreText.text = this.scoreString + this.player.playerScore;
        }

        //Check to see if player hits enemies
        planeCollision(player, enemy) {
            this.player.kill();
            this.enemy.kill();
        }

        //Creat a bullet add it to the bullets group and play audio for firing.
        shootBullet() {
            this.bullet = new PlayerBullet(this.game, this.player.x + 20, this.player.y - 340);
            this.bullets.add(this.bullet);
            this.add.audio('gunShot', 10, false).play();
        }
       
    }
   

}