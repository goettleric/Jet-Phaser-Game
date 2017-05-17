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
