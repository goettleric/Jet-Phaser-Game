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
        var Level02 = (function (_super) {
            __extends(Level02, _super);
            function Level02() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level02.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Level 2...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Level02.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "2", { font: '34px Impact', fill: '#fff' });
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.enemies = this.game.add.group();
                this.enemies.enableBody = true;
                this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
                this.player = new Client.Player(this.game, this.x, this.y);
                this.player.anchor.setTo(0, 5);
                this.player.playerScore = this.overallScore;
                this.exhaust = new Client.JetFlame(this.game, this.world.centerX, this.world.centerY * 2.5);
                this.exhaust.anchor.setTo(-0.7, 8.1);
                this.bullets = this.game.add.group();
                this.bullets.enableBody = true;
                this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
                this.bulletDelay = 0;
                this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.createEnemy, this);
                this.scoreString = "Score: ";
                this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
                this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
                this.stateText.anchor.setTo(0.5, 0.5);
                this.stateText.visible = false;
            };
            Level02.prototype.update = function () {
                this.background.tilePosition.y += 1;
                this.exhaust.position = this.player.position;
                this.exhaust.play("burn", 10, true, false);
                if (this.player.alive) {
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                        this.shootBullet();
                    }
                    this.game.physics.arcade.overlap(this.player, this.enemies, this.planeCollision, null, this);
                    this.game.physics.arcade.overlap(this.bullets, this.enemies, this.enemyHit, null, this);
                }
                else {
                    this.stateText.text = "Game Over \n Click to restart";
                    this.stateText.visible = true;
                    this.game.paused = true;
                    this.enterName();
                    this.game.input.onTap.addOnce(this.startOver, this);
                }
            };
            Level02.prototype.createEnemy = function () {
                this.enemy = new Client.EnemyFighterType2(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level02.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore > 2000) {
                    this.game.state.start('Level03', false, true, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level02.prototype.planeCollision = function (player, enemy) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                enemy.play('blowUp', 9, false, true);
            };
            Level02.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level02.prototype.enterName = function () {
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
            Level02.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level02;
        }(Client.Level01));
        Client.Level02 = Level02;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
