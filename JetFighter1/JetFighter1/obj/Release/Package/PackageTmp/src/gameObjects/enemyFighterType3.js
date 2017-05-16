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
