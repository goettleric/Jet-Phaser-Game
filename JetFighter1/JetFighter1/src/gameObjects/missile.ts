module JetFighter.Client {

    export class Missile extends Phaser.Sprite {

        missileDamage: number;

        constructor(game: Phaser.Game, x: number, y: number, damage: number) {
            super(game, x, y, "jetfighter", "missile");

            //Animations
            game.add.existing(this);
            this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
            // Physics
            game.physics.enable(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = false;
            this.body.setCircle(5);
            this.missileDamage = 200;
        }

        update() {
            //Reset bullets out of bounds.
            this.body.velocity.y = -1000;
            this.outOfBoundsKill;
        }

    }

}