module JetFighter.Client {

    export class Boss01 extends Phaser.State {

        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: Player;
        exhaust: JetFlame;
        boss: Boss;
        bullet: PlayerBullet;
        bullets: Phaser.Group;
        loaderText: Phaser.Text;
        enemyBullet: EnemyBullet;
        enemyBullets: Phaser.Group;
        enemies: Phaser.Group;
        missile: Missile;
        bulletDelay: number;
        scoreString: string;
        bossHealthString: string;
        scoreText;
        bossHealthText;
        stateText;
        overallScore: number;
        x: number;
        y: number;

        init(score, x, y) {
            //Set the player score from the previous level and player x and y position.
            this.overallScore = score;
            this.x = x;
            this.y = y;
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Boss...",
                { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);
        }
        create() {

            this.physics.startSystem(Phaser.Physics.ARCADE);
            //Background seting
            this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');

            //Create Enemy Group
            this.enemies = this.game.add.group();
            this.enemies.enableBody = true;
            this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
            
            //Create Enemy Bullet Group
            this.enemyBullets = this.game.add.group();
            this.enemyBullets.enableBody = true;
            this.enemyBullets.physicsType = Phaser.Physics.ARCADE;
            this.enemyBullets.game.physics.arcade.checkCollision.down = true;
            //Create Player Ship
            this.player = new Player(this.game, this.x, this.y);
            this.player.anchor.setTo(0, 5);
            this.player.playerScore = this.overallScore;
            this.player.missileCount = 2;
            //Create the Player Jet Exhaust
            this.exhaust = new JetFlame(this.game, this.world.centerX, this.world.centerY * 2.5);
            this.exhaust.anchor.setTo(-0.7, 8.1);
            //Create Player Bullet Group
            this.bullets = this.game.add.group();
            this.bullets.enableBody = true;
            this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
            this.bulletDelay = 0;
            //Spawn boss
            this.boss = new Boss(this.game, this.world.randomX, this.world.y -80);
            this.enemies.add(this.boss);
            //Create the label to display the players score
            this.scoreString = "Score: ";
            this.bossHealthString = "Boss Health:"
            this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
            this.bossHealthText = this.game.add.text(this.game.width -300, 10, this.bossHealthString + this.boss.health, { font: '34px Impact', fill: '#fff' });
            //Create text to display when changing state...etc/game over/next level/
            this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
            this.stateText.anchor.setTo(0.5, 0.5);
            this.stateText.visible = false;
        }

        update() {
            //Scroll the background down
            this.background.tilePosition.y += 1;
            this.exhaust.position = this.player.position;
            this.exhaust.play("burn", 10, true, false);
            //Only allow collions check and fire if player exists.
            if (this.player.alive) {
                //Player fire button
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                    this.shootBullet();
                }

                if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
                    this.fireMissile();
                }
                //Player enemy1 collision checking
                this.game.physics.arcade.overlap(this.player, this.boss, this.planeCollision, null, this);
                this.game.physics.arcade.collide(this.player, this.enemyBullets, this.playerHit, null, this);
                this.game.physics.arcade.overlap(this.bullets, this.boss, this.enemyHit, null, this);
                this.game.physics.arcade.collide(this.missile, this.boss, this.missileHit, null, this);
            } else {
                //Change the state text when player dies and show
                this.stateText.text = "Game Over \n Click to restart";
                this.stateText.visible = true;
                this.game.paused = true;
                this.enterName();
                //Add click event call the startOver function
                this.game.input.onTap.addOnce(this.startOver, this);
            }
            //if enemies are alive allow them to fire
            if (this.enemies.length > 0) {

                this.enemies.forEach(function () {
                    if (this.game.time.now > this.boss.fireDelay) {
                        this.enemyBullet = new EnemyBullet(this.game, this.boss.x + 20, this.boss.y + 20);
                        this.enemyBullet = new EnemyBullet(this.game, this.boss.x - 20, this.boss.y + 20);
                        this.enemyBullets.add(this.enemyBullet);
                        this.add.audio('gunShot', 5, false).play();
                        this.boss.fireDelay = this.game.time.now + this.boss.fireRate;
                    }
                }, this, true);
                
            }

            if (this.boss.world.y > 1400) {
                this.boss.y = -80
                this.boss.x = this.world.randomX;
                console.log(this.boss.x, this.boss.y);
            }

        }

        missileHit(missile, boss) {
            this.missile.play('blowUp', 9, false, true);
            this.boss.health = this.boss.health - this.missile.missileDamage;

            if (this.boss.health <= 0) {
                this.player.playerScore += this.boss.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                this.boss.play('blowUp', 9, false, true);
                this.bossHealthText.text = "Dead";

            }
        }
        //Check to see if bullets or missiles hit enemies
        enemyHit(bullets, boss) {
            this.bullet.kill();
            
            this.boss.health = this.boss.health - this.bullet.bulletDamage;
            this.bossHealthText.text = this.bossHealthString + this.boss.health;
            this.add.audio('enemyExplosion', 5, false).play();
            
            if (this.boss.health <= 0) {
                this.player.playerScore += this.boss.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                this.boss.play('blowUp', 9, false, true);
                this.bossHealthText.text = "Dead";
                this.game.state.start('Level07', false, true, this.player.playerScore, this.player.x, this.player.y);
            }

        }
        playerHit(player, enemyBullet) {
            player.play('explode', 10, false, true);
            this.exhaust.kill();
            player.kill();
            enemyBullet.kill()
        }
        //Check to see if player hits enemies
        planeCollision(player, enemies) {
            player.play('explode', 10, false, true);
            this.exhaust.kill();
            player.kill();
            
        }

        //Create a bullet add it to the bullets group and play audio for firing.
        shootBullet() {
            if (this.game.time.now > this.bulletDelay) {
                this.bullet = new PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                this.bullets.add(this.bullet);
                this.add.audio('gunShot', 5, false).play();
                this.bulletDelay = this.game.time.now + 300;
            }

        }

        fireMissile() {
            if (this.player.missileCount > 0 && this.game.time.now > this.bulletDelay) {
                this.missile = new Missile(this.game, this.player.x + 20, this.player.y - 340, 200);
                this.player.missileCount -= 1;
                this.bulletDelay = this.game.time.now + 500;
            }
        
        }
        enterName() {
            //prompt user for their name to enter it in for high score page.
            //Check to see if local storage is defined.
            if (typeof (Storage) !== "undefined") {
                //Prompt the user for name and storage in variable for storage.
                this.player.playerName = window.prompt("Enter Your Name.", "player");
                var playerTable = (<HTMLTableElement>document.getElementById("playerScores"));
                var nodelist = document.getElementsByTagName("tr").length;
                var newRow = playerTable.insertRow(nodelist);
                //Create new Cells to store the player information
                var newPlayerCell = newRow.insertCell(0);
                var newScoreCell = newRow.insertCell(1);
                //Create the text nodes that will be placed in each corresponding cell
                var newPlayer = document.createTextNode(this.player.playerName);
                var newScore = document.createTextNode("" + this.player.playerScore);
                //Append the cells to the corresponding rows
                newPlayerCell.appendChild(newPlayer);
                newScoreCell.appendChild(newScore);
                //Store the player info on the user's web storage.
                localStorage.setItem("player", this.player.playerName);
                localStorage.setItem("score", this.scoreText);
            } else {
                window.prompt("Sorry, local storage is not enabled.");
            }
        }
        //Start the game over at level 01 and clear the world;
        startOver() {
            //Unpause the game and restart at the first level, clearing the world.
            this.game.paused = false;
            this.game.state.start('Level01', true, false);
            this.stateText.visible = false;
        }
    }

}