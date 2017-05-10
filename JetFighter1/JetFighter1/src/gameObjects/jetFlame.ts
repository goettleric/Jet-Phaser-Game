module JetFighter.Client {

    export class JetFlame extends Phaser.Sprite {


        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "jetfighter", "jetFlame1");

            //Animations
            game.add.existing(this);
            this.animations.add("burn", ["jetFlame2", "jetFlame3", "jetFlame4"],.2, true);
            // Physics
            game.physics.enable(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = false;
            this.body.setCircle(5);
        }

    }

}