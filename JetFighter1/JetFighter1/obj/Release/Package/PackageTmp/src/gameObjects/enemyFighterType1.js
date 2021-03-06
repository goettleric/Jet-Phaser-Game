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
