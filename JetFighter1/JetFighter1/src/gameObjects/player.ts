module JetFighter.Client {

    export class Player extends Phaser.Sprite {

        playerScore: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            //Set the player sprite and anchor point
            super(game, x, y, 'jetfighter', 'jet1');
            this.anchor.setTo(0.5);
            //Animations
            this.animations.add('bankright', ['jetRight2', 'jetRight3'], .5, false);
            this.animations.add('bankleft', ['jetLeft2', 'jetLeft3'], .5, false);
            this.animations.add('straight', ['jet1'], 0.1, false);
            this.animations.add('explode', ['explosion2'], .5, false);
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            this.body.collideWorldBounds = true;
            this.body.setCircle(20);

            this.playerScore = 0;
            
        }

        update() {
            if (this.alive) {
                //Player movement
                this.body.velocity.x = 0;
                //Keyboard Controlls and Animations
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.body.velocity.x = -250;
                    this.animations.play('bankleft');
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.body.velocity.x = 250;
                    this.animations.play('bankright');
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                    this.body.velocity.y = 250;
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                    this.body.velocity.y = -250;
                }

                else {
                    this.body.velocity.setTo(0, 0);
                    this.animations.play('straight');
                    this.game.input.keyboard.clearCaptures();
                }
            }
            

        }

    

    }
}