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
