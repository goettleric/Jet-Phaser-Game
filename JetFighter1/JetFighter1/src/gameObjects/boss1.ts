module JetFighter.Client {

    export class Boss1 extends Phaser.Sprite {

    health: number;
    pointValue: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "jetfighter", "boss1");
            
            //Animations
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = false;
            this.body.setCircle(20);
            this.health = 100;

            this.pointValue = 5000;
            
        }

        update() {
            //Reset bullets out of bounds.
            this.body.velocity.y = -600;
            this.outOfBoundsKill;
        }

    }

}