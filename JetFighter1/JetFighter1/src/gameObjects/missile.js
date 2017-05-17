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
