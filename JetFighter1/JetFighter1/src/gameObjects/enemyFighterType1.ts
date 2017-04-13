module JetFighter.Client {

    export class EnemyFighterType1 extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'jetfighter', 'enemy1');
            this.anchor.setTo(0.5);
            //Animations
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            this.body.collideWorldBounds = false;
            this.body.setCircle(20);
        }

        update() {
            this.body.velocity.y = 70;
            if (this.inWorld) {

                this.destroy;
            }
        }

    }

}