﻿module JetFighter.Client {

    export class EnemyBullet extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "jetfighter", "enemyBullet");
            
            game.add.existing(this);
            // Physics
            game.physics.enable(this);
            game.physics.arcade.enable(this);
            this.body.collideWorldBounds = false;
            this.body.setCircle(5);

        }

        update() {
            //Reset bullets out of bounds.
            this.body.velocity.y = 600;
            this.outOfBoundsKill;
        }

    }

}