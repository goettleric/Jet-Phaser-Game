module JetFighter.Client {

    export class Boss extends Phaser.Sprite {

        health: number;
        pointValue: number;
        fireRate: number;
        fireDelay: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "jetfighter", "bose1");
            this.anchor.setTo(0.5);
            //Animations
            this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = false;
            this.body.setCircle(0);
            this.health = 2000;

            this.pointValue = 5000;
            this.fireRate = 1000;
            this.fireDelay = 0;
            

        }

        update() {
            //Reset bullets out of bounds.

            
            this.body.velocity.y = 100;

        }

    }

}