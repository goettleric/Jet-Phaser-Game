module JetFighter.Client {

    export class EnemyFighterType1 extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'jetfighter', 'enemy1');
            this.anchor.setTo(0.5);
            //Animations
            this.animations.add('blowUp',['explosion','explosion1','explosion2'], 3, false);
             // Physics
            game.add.existing(this);
            game.physics.enable(this);
            game.physics.arcade.enable(this);

            this.body.collideWorldBounds = false;
            this.body.setCircle(20);
        }

        update() {
            this.body.velocity.y = 70;
            this.outOfBoundsKill;
        }

    }

}