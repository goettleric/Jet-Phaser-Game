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
        var GameEngine = (function (_super) {
            __extends(GameEngine, _super);
            function GameEngine() {
                var _this = _super.call(this, 1024, 800, Phaser.AUTO, 'content', null) || this;
                _this.state.add('Boot', Client.Boot, false);
                _this.state.add('Preloader', Client.Preloader, false);
                _this.state.add('MainMenu', Client.MainMenu, false);
                _this.state.add('Level01', Client.Level01, false);
                _this.state.add('Level02', Client.Level02, false);
                _this.state.add('Level03', Client.Level03, false);
                _this.state.add('Level04', Client.Level04, false);
                _this.state.add('Level05', Client.Level05, false);
                _this.state.add('Level06', Client.Level06, false);
                _this.state.add('Boss01', Client.Boss01, false);
                _this.state.start('Boot');
                return _this;
            }
            return GameEngine;
        }(Phaser.Game));
        Client.GameEngine = GameEngine;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
window.onload = function () {
    new JetFighter.Client.GameEngine();
};
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Boss = (function (_super) {
            __extends(Boss, _super);
            function Boss(game, x, y) {
                var _this = _super.call(this, game, x, y, "jetfighter", "bose1") || this;
                _this.anchor.setTo(0.5);
                _this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(0);
                _this.health = 2000;
                _this.pointValue = 5000;
                _this.fireRate = 1000;
                _this.fireDelay = 0;
                return _this;
            }
            Boss.prototype.update = function () {
                this.body.velocity.y = 100;
            };
            return Boss;
        }(Phaser.Sprite));
        Client.Boss = Boss;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var EnemyBullet = (function (_super) {
            __extends(EnemyBullet, _super);
            function EnemyBullet(game, x, y) {
                var _this = _super.call(this, game, x, y, "jetfighter", "enemyBullet") || this;
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(5);
                return _this;
            }
            EnemyBullet.prototype.update = function () {
                this.body.velocity.y = 600;
                this.outOfBoundsKill;
            };
            return EnemyBullet;
        }(Phaser.Sprite));
        Client.EnemyBullet = EnemyBullet;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var EnemyFighterType1 = (function (_super) {
            __extends(EnemyFighterType1, _super);
            function EnemyFighterType1(game, x, y) {
                var _this = _super.call(this, game, x, y, 'jetfighter', 'enemy1') || this;
                _this.anchor.setTo(0.5);
                _this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(20);
                _this.pointValue = 100;
                _this.fireRate = 2000;
                _this.fireDelay = 0;
                return _this;
            }
            EnemyFighterType1.prototype.update = function () {
                this.body.velocity.y = 70;
                this.outOfBoundsKill;
            };
            return EnemyFighterType1;
        }(Phaser.Sprite));
        Client.EnemyFighterType1 = EnemyFighterType1;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var EnemyFighterType2 = (function (_super) {
            __extends(EnemyFighterType2, _super);
            function EnemyFighterType2(game, x, y) {
                var _this = _super.call(this, game, x, y, 'jetfighter', 'enemy2') || this;
                _this.anchor.setTo(0.5);
                _this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(20);
                _this.pointValue = 200;
                _this.fireRate = 1500;
                _this.fireDelay = 0;
                return _this;
            }
            EnemyFighterType2.prototype.update = function () {
                this.body.velocity.y = 100;
                this.outOfBoundsKill;
            };
            return EnemyFighterType2;
        }(Phaser.Sprite));
        Client.EnemyFighterType2 = EnemyFighterType2;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var EnemyFighterType3 = (function (_super) {
            __extends(EnemyFighterType3, _super);
            function EnemyFighterType3(game, x, y) {
                var _this = _super.call(this, game, x, y, 'jetfighter', 'enemy3') || this;
                _this.anchor.setTo(0.5);
                _this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(20);
                _this.pointValue = 500;
                _this.fireRate = 1100;
                _this.fireDelay = 0;
                return _this;
            }
            EnemyFighterType3.prototype.update = function () {
                this.body.velocity.y = 140;
                this.outOfBoundsKill;
            };
            return EnemyFighterType3;
        }(Phaser.Sprite));
        Client.EnemyFighterType3 = EnemyFighterType3;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var EnemyFighterType4 = (function (_super) {
            __extends(EnemyFighterType4, _super);
            function EnemyFighterType4(game, x, y) {
                var _this = _super.call(this, game, x, y, 'jetfighter', 'enemy4') || this;
                _this.anchor.setTo(0.5);
                _this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(20);
                _this.pointValue = 500;
                _this.fireRate = 1000;
                _this.fireDelay = 0;
                return _this;
            }
            EnemyFighterType4.prototype.update = function () {
                this.body.velocity.y = 180;
                this.outOfBoundsKill;
            };
            return EnemyFighterType4;
        }(Phaser.Sprite));
        Client.EnemyFighterType4 = EnemyFighterType4;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var JetFlame = (function (_super) {
            __extends(JetFlame, _super);
            function JetFlame(game, x, y) {
                var _this = _super.call(this, game, x, y, "jetfighter", "jetFlame1") || this;
                game.add.existing(_this);
                _this.animations.add("burn", ["jetFlame2", "jetFlame3", "jetFlame4"], .2, true);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(5);
                return _this;
            }
            return JetFlame;
        }(Phaser.Sprite));
        Client.JetFlame = JetFlame;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Missile = (function (_super) {
            __extends(Missile, _super);
            function Missile(game, x, y, damage) {
                var _this = _super.call(this, game, x, y, "jetfighter", "missile") || this;
                game.add.existing(_this);
                _this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(5);
                _this.missileDamage = 200;
                return _this;
            }
            Missile.prototype.update = function () {
                this.body.velocity.y = -1000;
                this.outOfBoundsKill;
            };
            return Missile;
        }(Phaser.Sprite));
        Client.Missile = Missile;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player(game, x, y) {
                var _this = _super.call(this, game, x, y, 'jetfighter', 'jet1') || this;
                _this.anchor.setTo(0.5);
                _this.animations.add('bankright', ['jetRight2', 'jetRight3'], .5, false);
                _this.animations.add('bankleft', ['jetLeft2', 'jetLeft3'], .5, false);
                _this.animations.add('straight', ['jet1'], 0.1, false);
                _this.animations.add('explode', ['explosion2'], .5, false);
                game.add.existing(_this);
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = true;
                _this.body.setCircle(20);
                _this.playerScore = 0;
                _this.missileCount = 0;
                return _this;
            }
            Player.prototype.update = function () {
                if (this.alive) {
                    this.body.velocity.x = 0;
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                        this.body.velocity.x = -250;
                        this.animations.play('bankleft');
                    }
                    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                        this.body.velocity.x = 250;
                        this.animations.play('bankright');
                    }
                    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                        this.body.velocity.y = 250;
                    }
                    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                        this.body.velocity.y = -250;
                    }
                    else {
                        this.body.velocity.setTo(0, 0);
                        this.animations.play('straight');
                        this.game.input.keyboard.clearCaptures();
                    }
                }
            };
            return Player;
        }(Phaser.Sprite));
        Client.Player = Player;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var PlayerBullet = (function (_super) {
            __extends(PlayerBullet, _super);
            function PlayerBullet(game, x, y, damage) {
                var _this = _super.call(this, game, x, y, "jetfighter", "playerBullet") || this;
                game.add.existing(_this);
                game.physics.enable(_this);
                game.physics.arcade.enable(_this);
                _this.body.collideWorldBounds = false;
                _this.body.setCircle(5);
                _this.bulletDamage = 100;
                return _this;
            }
            PlayerBullet.prototype.update = function () {
                this.body.velocity.y = -600;
                this.outOfBoundsKill;
            };
            return PlayerBullet;
        }(Phaser.Sprite));
        Client.PlayerBullet = PlayerBullet;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Boot.prototype.preload = function () {
            };
            Boot.prototype.create = function () {
                this.stage.setBackgroundColor(0xFFFFFF);
                this.input.maxPointers = 1;
                this.stage.disableVisibilityChange = true;
                if (this.game.device.desktop) {
                    this.scale.pageAlignHorizontally = true;
                }
                else {
                    this.scale.minWidth = 480;
                    this.scale.minHeight = 260;
                    this.scale.maxWidth = 1024;
                    this.scale.maxHeight = 768;
                    this.scale.forceLandscape = true;
                    this.scale.pageAlignHorizontally = true;
                    this.scale.refresh();
                }
                this.game.state.start('Preloader', true, false);
            };
            return Boot;
        }(Phaser.State));
        Client.Boot = Boot;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
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
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Level01 = (function (_super) {
            __extends(Level01, _super);
            function Level01() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level01.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.enemies = this.game.add.group();
                this.enemies.enableBody = true;
                this.enemies.physicsBodyType = Phaser.Physics.ARCADE;
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "1", { font: '34px Impact', fill: '#fff' });
                this.player = new Client.Player(this.game, this.world.centerX, this.world.centerY * 2.5);
                this.player.anchor.setTo(0, 5);
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
            Level01.prototype.update = function () {
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
            Level01.prototype.createEnemy = function () {
                this.enemy = new Client.EnemyFighterType1(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level01.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore >= 100) {
                    this.game.state.start("Level02", true, false, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level01.prototype.planeCollision = function (player, enemy) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                enemy.play('blowUp', 9, false, true);
            };
            Level01.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level01.prototype.enterName = function () {
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
            Level01.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level01;
        }(Phaser.State));
        Client.Level01 = Level01;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
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
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "2", { font: '34px Impact', fill: '#fff' });
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
                if (this.player.playerScore > 500) {
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
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Level03 = (function (_super) {
            __extends(Level03, _super);
            function Level03() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level03.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Level 2...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Level03.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "03", { font: '34px Impact', fill: '#fff' });
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
            Level03.prototype.update = function () {
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
            Level03.prototype.createEnemy = function () {
                this.enemy = new Client.EnemyFighterType3(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level03.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore > 800) {
                    this.game.state.start('Level04', false, true, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level03.prototype.planeCollision = function (player, enemy) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                enemy.play('blowUp', 9, false, true);
            };
            Level03.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level03.prototype.enterName = function () {
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
            Level03.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level03;
        }(Client.Level02));
        Client.Level03 = Level03;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Level04 = (function (_super) {
            __extends(Level04, _super);
            function Level04() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level04.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Level 2...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Level04.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "04", { font: '34px Impact', fill: '#fff' });
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
                this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.createEnemy1, this);
                this.game.time.events.loop(Phaser.Timer.SECOND * 15, this.createEnemy2, this);
                this.game.time.events.loop(Phaser.Timer.SECOND * 20, this.createEnemy3, this);
                this.scoreString = "Score: ";
                this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
                this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
                this.stateText.anchor.setTo(0.5, 0.5);
                this.stateText.visible = false;
            };
            Level04.prototype.update = function () {
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
            Level04.prototype.createEnemy1 = function () {
                this.enemy = new Client.EnemyFighterType1(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level04.prototype.createEnemy2 = function () {
                this.enemy = new Client.EnemyFighterType2(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level04.prototype.createEnemy3 = function () {
                this.enemy = new Client.EnemyFighterType3(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level04.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore > 2000) {
                    this.game.state.start('Level05', false, true, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level04.prototype.planeCollision = function (player, enemies) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                this.enemy.play('blowUp', 9, false, true);
            };
            Level04.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level04.prototype.enterName = function () {
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
            Level04.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level04;
        }(Client.Level03));
        Client.Level04 = Level04;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Level05 = (function (_super) {
            __extends(Level05, _super);
            function Level05() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level05.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Level 2...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Level05.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "05", { font: '34px Impact', fill: '#fff' });
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
                this.exhaust = new Client.JetFlame(this.game, this.world.centerX, this.world.centerY * 2.5);
                this.exhaust.anchor.setTo(-0.7, 8.1);
                this.bullets = this.game.add.group();
                this.bullets.enableBody = true;
                this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
                this.bulletDelay = 0;
                this.game.time.events.loop(Phaser.Timer.SECOND * 4, this.createEnemy4, this);
                this.scoreString = "Score: ";
                this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
                this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
                this.stateText.anchor.setTo(0.5, 0.5);
                this.stateText.visible = false;
            };
            Level05.prototype.update = function () {
                this.background.tilePosition.y += 1;
                this.exhaust.position = this.player.position;
                this.exhaust.play("burn", 10, true, false);
                if (this.player.alive) {
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                        this.shootBullet();
                    }
                    this.game.physics.arcade.overlap(this.player, this.enemies, this.planeCollision, null, this);
                    this.game.physics.arcade.collide(this.bullets, this.enemies, this.enemyHit, null, this);
                    this.game.physics.arcade.collide(this.enemyBullets, this.player, this.playerHit, null, this);
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
                        if (this.game.time.now > this.enemy.fireRate) {
                            this.enemyBullet = new Client.EnemyBullet(this.game, this.enemy.x, this.enemy.y);
                            this.enemyBullets.add(this.enemyBullet);
                            this.add.audio('gunShot', 5, false).play();
                            this.enemy.fireRate = this.game.time.now + this.enemy.fireRate;
                        }
                    }, this, true);
                }
            };
            Level05.prototype.createEnemy4 = function () {
                this.enemy = new Client.EnemyFighterType4(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level05.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore > 4000) {
                    this.game.state.start('Level06', false, true, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level05.prototype.playerHit = function (enemyBullets, player) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                enemyBullets.kill();
            };
            Level05.prototype.planeCollision = function (player, enemies) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                this.enemy.play('blowUp', 9, false, true);
            };
            Level05.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level05.prototype.enterName = function () {
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
                    localStorage.setItem("score", "" + this.player.playerScore.toString);
                }
                else {
                    window.prompt("Sorry, local storage is not enabled.");
                }
            };
            Level05.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level05;
        }(Client.Level04));
        Client.Level05 = Level05;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Level06 = (function (_super) {
            __extends(Level06, _super);
            function Level06() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level06.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Level 2...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Level06.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "06", { font: '34px Impact', fill: '#fff' });
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
                this.exhaust = new Client.JetFlame(this.game, this.world.centerX, this.world.centerY * 2.5);
                this.exhaust.anchor.setTo(-0.7, 8.1);
                this.bullets = this.game.add.group();
                this.bullets.enableBody = true;
                this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
                this.bulletDelay = 0;
                this.game.time.events.loop(Phaser.Timer.SECOND * 4, this.createEnemy4, this);
                this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.createEnemy1, this);
                this.scoreString = "Score: ";
                this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
                this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
                this.stateText.anchor.setTo(0.5, 0.5);
                this.stateText.visible = false;
            };
            Level06.prototype.update = function () {
                this.background.tilePosition.y += 1;
                this.exhaust.position = this.player.position;
                this.exhaust.play("burn", 10, true, false);
                if (this.player.alive) {
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                        this.shootBullet();
                    }
                    this.game.physics.arcade.overlap(this.player, this.enemies, this.planeCollision, null, this);
                    this.game.physics.arcade.collide(this.bullets, this.enemies, this.enemyHit, null, this);
                    this.game.physics.arcade.collide(this.player, this.enemyBullets, this.playerHit, null, this);
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
                        if (this.game.time.now > this.enemy.fireRate) {
                            this.enemyBullet = new Client.EnemyBullet(this.game, this.enemy.x, this.enemy.y);
                            this.enemyBullets.add(this.enemyBullet);
                            this.add.audio('gunShot', 5, false).play();
                            this.enemy.fireRate = this.game.time.now + this.enemy.fireRate;
                        }
                    }, this, true);
                }
            };
            Level06.prototype.createEnemy1 = function () {
                this.enemy = new Client.EnemyFighterType1(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level06.prototype.createEnemy4 = function () {
                this.enemy = new Client.EnemyFighterType4(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level06.prototype.enemyFire = function () {
                if (this.game.time.now > this.enemy.fireRate) {
                    this.enemyBullet = new Client.EnemyBullet(this.game, this.enemy.x, this.enemy.y);
                    this.enemyBullets.add(this.enemyBullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.enemy.fireRate = this.game.time.now + this.enemy.fireRate;
                }
            };
            Level06.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore > 6000) {
                    this.game.state.start('Boss01', false, true, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level06.prototype.playerHit = function (player, enemyBullet) {
                this.player.play('explode', 10, false, true);
                this.exhaust.kill();
                this.player.kill();
                enemyBullet.kill();
            };
            Level06.prototype.planeCollision = function (player, enemies) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                this.enemy.play('blowUp', 9, false, true);
            };
            Level06.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level06.prototype.enterName = function () {
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
            Level06.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level06;
        }(Client.Level05));
        Client.Level06 = Level06;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Level07 = (function (_super) {
            __extends(Level07, _super);
            function Level07() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Level07.prototype.init = function (score, x, y) {
                this.overallScore = score;
                this.x = x;
                this.y = y;
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Level 2...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
            };
            Level07.prototype.create = function () {
                this.physics.startSystem(Phaser.Physics.ARCADE);
                this.background = this.game.add.tileSprite(0, 0, 1300, 900, 'water');
                this.levelString = "Level:";
                this.levelText = this.game.add.text(this.game.width - 150, 10, this.levelString + "07", { font: '34px Impact', fill: '#fff' });
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
                this.exhaust = new Client.JetFlame(this.game, this.world.centerX, this.world.centerY * 2.5);
                this.exhaust.anchor.setTo(-0.7, 8.1);
                this.bullets = this.game.add.group();
                this.bullets.enableBody = true;
                this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
                this.bulletDelay = 0;
                this.game.time.events.loop(Phaser.Timer.SECOND * 4, this.createEnemy4, this);
                this.game.time.events.loop(Phaser.Timer.SECOND * 10, this.createEnemy1, this);
                this.game.time.events.loop(Phaser.Timer.SECOND * 15, this.createEnemy2, this);
                this.game.time.events.loop(Phaser.Timer.SECOND * 20, this.createEnemy3, this);
                this.scoreString = "Score: ";
                this.scoreText = this.game.add.text(10, 10, this.scoreString + this.player.playerScore, { font: '34px Impact', fill: '#fff' });
                this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '60px Impact', fill: '#fff', textalign: 'center' });
                this.stateText.anchor.setTo(0.5, 0.5);
                this.stateText.visible = false;
            };
            Level07.prototype.update = function () {
                this.background.tilePosition.y += 1;
                this.exhaust.position = this.player.position;
                this.exhaust.play("burn", 10, true, false);
                if (this.player.alive) {
                    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                        this.shootBullet();
                    }
                    this.game.physics.arcade.overlap(this.player, this.enemies, this.planeCollision, null, this);
                    this.game.physics.arcade.collide(this.bullets, this.enemies, this.enemyHit, null, this);
                    this.game.physics.arcade.collide(this.player, this.enemyBullets, this.playerHit, null, this);
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
                        if (this.game.time.now > this.enemy.fireRate) {
                            this.enemyBullet = new Client.EnemyBullet(this.game, this.enemy.x, this.enemy.y);
                            this.enemyBullets.add(this.enemyBullet);
                            this.add.audio('gunShot', 5, false).play();
                            this.enemy.fireRate = this.game.time.now + this.enemy.fireRate;
                        }
                    }, this, true);
                }
            };
            Level07.prototype.createEnemy1 = function () {
                this.enemy = new Client.EnemyFighterType1(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level07.prototype.createEnemy2 = function () {
                this.enemy = new Client.EnemyFighterType2(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level07.prototype.createEnemy3 = function () {
                this.enemy = new Client.EnemyFighterType3(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level07.prototype.createEnemy4 = function () {
                this.enemy = new Client.EnemyFighterType4(this.game, this.world.randomX, this.world.y - 40);
                this.enemies.add(this.enemy);
            };
            Level07.prototype.enemyFire = function () {
                if (this.game.time.now > this.enemy.fireRate) {
                    this.enemyBullet = new Client.EnemyBullet(this.game, this.enemy.x, this.enemy.y);
                    this.enemyBullets.add(this.enemyBullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.enemy.fireRate = this.game.time.now + this.enemy.fireRate;
                }
            };
            Level07.prototype.enemyHit = function (bullets, enemies) {
                enemies.play('blowUp', 9, false, true);
                this.add.audio('enemyExplosion', 5, false).play();
                bullets.kill();
                this.player.playerScore += this.enemy.pointValue;
                this.scoreText.text = this.scoreString + this.player.playerScore;
                if (this.player.playerScore > 20000) {
                    this.game.state.start('Level08', false, true, this.player.playerScore, this.player.x, this.player.y);
                }
            };
            Level07.prototype.playerHit = function (player, enemyBullet) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                enemyBullet.kill();
            };
            Level07.prototype.planeCollision = function (player, enemies) {
                player.play('explode', 10, false, true);
                this.exhaust.kill();
                player.kill();
                this.enemy.play('blowUp', 9, false, true);
            };
            Level07.prototype.shootBullet = function () {
                if (this.game.time.now > this.bulletDelay) {
                    this.bullet = new Client.PlayerBullet(this.game, this.player.x + 20, this.player.y - 340, 100);
                    this.bullets.add(this.bullet);
                    this.add.audio('gunShot', 5, false).play();
                    this.bulletDelay = this.game.time.now + 300;
                }
            };
            Level07.prototype.enterName = function () {
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
            Level07.prototype.startOver = function () {
                this.game.paused = false;
                this.game.state.start('Level01', true, false);
                this.stateText.visible = false;
            };
            return Level07;
        }(Client.Level06));
        Client.Level07 = Level07;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var MainMenu = (function (_super) {
            __extends(MainMenu, _super);
            function MainMenu() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MainMenu.prototype.create = function () {
                this.background = this.add.sprite(0, 0, 'titlepage');
                this.background.alpha = 0;
                this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
                this.logo.anchor.setTo(0.5);
                this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
                this.add.tween(this.logo).to({ y: 400 }, 2000, Phaser.Easing.Elastic.Out, true, 500);
                this.game.debug.text("Click to start the game", this.world.width / 2.9, this.world.height - 100, "red");
                this.input.onDown.addOnce(this.fadeOut, this);
            };
            MainMenu.prototype.fadeOut = function () {
                this.add.audio('click', 10, false).play();
                this.add.tween(this.background).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);
                var tween = this.add.tween(this.logo).to({ y: 1200 }, 4000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startGame, this);
            };
            MainMenu.prototype.startGame = function () {
                this.game.state.start('Level01', true, false);
            };
            return MainMenu;
        }(Phaser.State));
        Client.MainMenu = MainMenu;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
var JetFighter;
(function (JetFighter) {
    var Client;
    (function (Client) {
        var Preloader = (function (_super) {
            __extends(Preloader, _super);
            function Preloader() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Preloader.prototype.preload = function () {
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
                this.load.image('titlepage', './assets/ui/titlePage.png');
                this.load.image('logo', './assets/ui/gameLogo.png');
                this.load.audio('click', './assets/sounds/aircraft009.mp3', true);
                this.load.audio('gunShot', './assets/sounds/gunFire.mp3', true);
                this.load.audio('enemyExplosion', './assets/sounds/Explosion.mp3', true);
                this.load.image('water', 'assets/pics/water.png');
                this.load.atlas('jetfighter', './assets/sprites/jetfighter.png', './assets/sprites/jetfighter.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
            };
            Preloader.prototype.create = function () {
                var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startMainMenu, this);
            };
            Preloader.prototype.startMainMenu = function () {
                this.game.state.start('MainMenu', true, false);
            };
            return Preloader;
        }(Phaser.State));
        Client.Preloader = Preloader;
    })(Client = JetFighter.Client || (JetFighter.Client = {}));
})(JetFighter || (JetFighter = {}));
//# sourceMappingURL=game.js.map