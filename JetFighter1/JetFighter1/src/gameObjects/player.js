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
