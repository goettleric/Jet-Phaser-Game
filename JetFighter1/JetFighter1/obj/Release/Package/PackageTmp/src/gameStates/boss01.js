var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Boss01 = (function (_super) {
            __extends(Boss01, _super);
            function Boss01() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Boss01.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Boss...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Boss01.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.enemies = this.game.add.group();
                this.enemies.enableBody = true;
                this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
                this.enemyBullets = this.game.add.group();
                this.enemyBullets.enableBody = true;
                this.enemyBullets.physicsType = Phaser.Physics.ARCADE;
                this.enemyBullets.game.physics.arcade.checkCollision.down = true;
                this.player = new Client.Player(this.game, this.x, this.y);
                this.player.anchor.setTo(0, 5);
                this.player.playerScore = this.overallScore;
                this.player.missileCount = 2;
                this.exhaust = new Client.JetFlame(this.game, this.world.centerX, this.world.centerY * 2.5);
                this.exhaust.anchor.setTo(-0.7, 8.1);
                this.bullets = this.game.add.group();
                this.bullets.enableBody = true;
                this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
                this.bulletDelay = 0;
                this.boss = new Client.Boss(this.game, this.world.randomX, this.world.y - 80);
                this.enemies.add(this.boss);
                this.scoreString = "Score: ";
                this.bossHealthString = "Boss Health:";
                this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
                this.bossHealthText = this.game.add.text(this.game.width - 300, 10, this.bossHealthString + this.boss.health, { font: '34px Impact', fill: '#fff' });
                this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
                this.stateText.anchor.setTo(0.5, 0.5);
                this.stateText.visible = false;
            };
            Boss01.prototype.update = function () {
                this.background.tilePosition.y += 1;
                this.exhaust.position = this.player.position;
                this.exhaust.play("burn", 10, true, false);
                if (this.player.alive) {
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                        this.shootBullet();
                    }
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
                        this.fireMissile();
                    }
                    this.game.physics.arcade.overlap(this.player, this.boss, this.planeCollision, null, this);
                    this.game.physics.arcade.collide(this.player, this.enemyBullets, this.playerHit, null, this);
                    this.game.physics.arcade.overlap(this.bullets, this.boss, this.enemyHit, null, this);
                    this.game.physics.arcade.collide(this.missile, this.boss, this.missileHit, null, this);
                }
                else {
                    this.stateText.text = "Game Over \n Click to restart";
                    this.stateText.visible = true;
                    this.game.paused = true;
                    this.enterName();
                    this.game.input.onTap.addOnce(this.startOver, this);
                }
                if (this.enemies.length > 0) {
                    this.enemies.forEach(function () {
                        if (this.game.time.now > this.boss.fireDelay) {
                            this.enemyBullet = new Client.EnemyBullet(this.game, this.boss.x + 20, this.boss.y + 20);
                            this.enemyBullet = new Client.EnemyBullet(this.game, this.boss.x - 20, this.boss.y + 20);
                            this.enemyBullets.add(this.enemyBullet);
                            this.add.audio('gunShot', 5, false).play();
                            this.boss.fireDelay = this.game.time.now + this.boss.fireRate;
                        }
                    }, this, true);
                }
                if (this.boss.world.y > 1400) {
                    this.boss.y = -80;
                    this.boss.x = this.world.randomX;
                    console.log(this.boss.x, this.boss.y);
                }
            };
            Boss01.prototype.missileHit = function (missile, boss) {
                this.missile.play('blowUp', 9, false, true);
                this.boss.health = this.boss.health - this.missile.missileDamage;
                if (this.boss.health <= 0) {
                    this.player.playerScore += this.boss.pointValue;
                    this.scoreText.text = this.scoreString + this.player.playerScore;
                    this.boss.play('blowUp', 9, false, true);
                    this.bossHealthText.text = "Dead";
                }
            };
            Boss01.prototype.enemyHit = function (bullets, boss) {
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
            };
            Boss01.prototype.playerHit = function (player, enemyBullet) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                enemyBullet.kill();
            };
            Boss01.prototype.planeCollision = function (player, enemies) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
            };
            Boss01.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Boss01.prototype.fireMissile = function () {
                if (this.player.missileCount > 0 && this.game.time.now > this.bulletDelay) {
                    this.missile = new Client.Missile(this.game, this.player.x + 20, this.player.y - 340, 200);
                    this.player.missileCount -= 1;
                    this.bulletDelay = this.game.time.now + 500;
                }
            };
            Boss01.prototype.enterName = function () {
                if (typeof (Storage) !== "undefined") {
                    this.player.playerName = window.prompt("Enter Your Name.", "player");
                    var playerTable = document.getElementById("playerScores");
                    var nodelist = document.getElementsByTagName("tr").length;
                    var newRow = playerTable.insertRow(nodelist);
                    var newPlayerCell = newRow.insertCell(0);
                    var newScoreCell = newRow.insertCell(1);
                    var newPlayer = document.createTextNode(this.player.playerName);
                    var newScore = document.createTextNode("" + this.player.playerScore);
                    newPlayerCell.appendChild(newPlayer);
                    newScoreCell.appendChild(newScore);
                    localStorage.setItem("player", this.player.playerName);
                    localStorage.setItem("score", this.scoreText);
                }
                else {
                    window.prompt("Sorry, local storage is not enabled.");
                }
            };
            Boss01.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Boss01;
        }(Phaser.State));
        Client.Boss01 = Boss01;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
