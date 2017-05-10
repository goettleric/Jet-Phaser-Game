module JetFighter.Client {

    export class Level03 extends Level02 {
        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: Player;
        enemy: EnemyFighterType3;
        bullet: PlayerBullet;
        enemies: Phaser.Group;
        bullets: Phaser.Group;
        fireDelayTimer: number;
        scoreString: string;
        scoreText;
        stateText;
        overallScore: number;
        x: number;
        y: number;

        init(score, x, y) {
            //Set the player score from the previous level and player x and y position.
            this.overallScore = score;
            this.x = x;
            this.y = y;
        }
        create() {

            this.physics.startSystem(Phaser.Physics.ARCADE);
            //Background seting

            this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
            //Create Enemy Group
            this.enemies = this.game.add.group();
            this.enemies.enableBody = true;
            this.enemies.physicsBodyType = Phaser.Physics.ARCADE;


            //Create Player Ship
            this.player = new Player(this.game, this.x, this.y);
            this.player.anchor.setTo(0, 5);
            this.player.playerScore = this.overallScore;

            //Create Player Bullet Group
            this.bullets = this.game.add.group();
            this.bullets.enableBody = true;
            this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
            this.bulletDelay = 0;
            //Spawn Enemy Ships
            this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.createEnemy, this);

            //Create the label to display the players score
            this.scoreString = "Score: ";
            this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });

            //Create text to display when changing state...etc/game over/next level/
            this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
            this.stateText.anchor.setTo(0.5, 0.5);
            this.stateText.visible = false;
        }


        update() {
            //Scroll the background down
            this.background.tilePosition.y += 1;
            //Only allow collions check and fire if player exists.
            if (this.player.alive) {
                //Player fire button
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                    this.shootBullet();
                }
                //Player enemy1 collision checking
                this.game.physics.arcade.overlap(this.player, this.enemies, this.planeCollision, null, this);
                this.game.physics.arcade.overlap(this.bullets, this.enemies, this.enemyHit, null, this);
            } else {
                //Change the state text when player dies and show
                this.stateText.text = "Game Over \n Click to restart";
                this.stateText.visible = true;
                this.game.paused = true;
                this.enterName();
                //Add click event call the startOver function
                this.game.input.onTap.addOnce(this.startOver, this);
            }
        }

        //Enemy Spawn rate for level two.  Add each enemy to the enemies group.
        createEnemy() {
            this.enemy = new EnemyFighterType3(this.game, this.world.randomX, this.world.y - 40);
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

            if (this.player.playerScore > 800) {
                this.game.state.start('Level04', false, true, this.player.playerScore, this.player.x, this.player.y);
            }

        }

        //Check to see if player hits enemies
        planeCollision(player, enemy) {
            player.play('explode', 10, false, true);
            player.kill();
            enemy.play('blowUp', 9, false, true);
        }

        //Create a bullet add it to the bullets group and play audio for firing.
        shootBullet() {
            if (this.game.time.now > this.bulletDelay) {
                this.bullet = new PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                this.bullets.add(this.bullet);
                this.add.audio('gunShot', 10, false).play();
                this.bulletDelay = this.game.time.now + 300;
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