module JetFighter.Client {

    export class EnemyFighterType2 extends Phaser.Sprite {

        pointValue: number;
        fireRate: number;
        fireDelay: number;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'jetfighter', 'enemy2');
            this.anchor.setTo(0.5);
            //Animations
            this.animations.add('blowUp', ['explosion', 'explosion1', 'explosion2'], 3, false);
            // Physics
            game.add.existing(this);
            game.physics.enable(this);
            game.physics.arcade.enable(this);

            this.body.collideWorldBounds = false;
            this.body.setCircle(20);

            //Point Value for the enemy if killed
            this.pointValue = 200;
            this.fireRate = 1500;
            this.fireDelay = 0;
        }

        update() {
            this.body.velocity.y = 100;
            this.outOfBoundsKill;
        }

    }

}