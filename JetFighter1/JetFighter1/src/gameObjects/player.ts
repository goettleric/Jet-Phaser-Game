module JetFighter.Client {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'jetfighter', 'jet1');
            this.anchor.setTo(0.5);
            this.animations.add('bankright', ['jetRight2', 'jetRight3'], .5, false);
            this.animations.add('bankleft', ['jetLeft2', 'jetLeft3'], .5, false);
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            this.body.collideWorldBounds = true;
            this.body.setCircle(20);
        }

        update() {
            this.body.velocity.x = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -250;
                this.animations.play('bankleft');
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 250;
                this.animations.play('bankright');
                
                
            } else {
                this.animations.frame = 0;
            }
        }

    }

}