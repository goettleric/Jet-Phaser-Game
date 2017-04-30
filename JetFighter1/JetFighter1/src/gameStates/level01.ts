module JetFighter.Client {

    export class Level01 extends Phaser.State {

        
        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: Player;
        enemy: EnemyFighterType1;
        bullet: PlayerBullet;
        enemies: Phaser.Group;
        bullets: Phaser.Group;
        fireDelayTimer: number;
        scoreString:string;
        scoreText;
        stateText;

        create() {
            
            this.physics.startSystem(Phaser.Physics.ARCADE);
            //Background seting
            
            this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
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
            this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.createEnemy, this);
            this.game.debug.text("Use Right and Left arrow keys to move the plane", 0, this.world.height, "red");

            //Create the label to display the players score
            this.scoreString = "Score: ";
            this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });

            //Create text to display when changing state...etc/game over/next level/
            this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center'});
            this.stateText.anchor.setTo(0.5, 0.5);
            this.stateText.visible = false;
        }

        update() {
            //Scroll the background down
            this.background.tilePosition.y += 1;
            //Only allow collions check and fire if player exists.
            if (this.player.alive) {
                //Player fire button
                if (this.game.input.keyboard.downDuration(Phaser.Keyboard.SPACEBAR, 1)) {
                    this.shootBullet();
                }
                //Player enemy1 collision checking
                this.game.physics.arcade.overlap(this.player, this.enemy, this.planeCollision, null, this);
                this.game.physics.arcade.overlap(this.bullets, this.enemies, this.enemyHit, null, this);
            } else {
                //Change the state text when player dies and show
                this.stateText.text = "Game Over \n Click to restart";
                this.stateText.visible = true;

                //Add click event call the startOver function
                this.game.input.onTap.addOnce(this.startOver, this);
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
            player.play('explode', 10, false, true);
            player.kill();
            enemy.play('blowUp', 9, false, true);
        }

        //Create a bullet add it to the bullets group and play audio for firing.
        shootBullet() {
            this.bullet = new PlayerBullet(this.game, this.player.x + 20, this.player.y - 340);
            this.bullets.add(this.bullet);
            this.add.audio('gunShot', 10, false).play();
        }

        //Start the game over at level 01 and clear the world;
        startOver() {
            this.game.state.start('Level01', true, false);
            this.stateText.visible = false;
        }
    }
   

}