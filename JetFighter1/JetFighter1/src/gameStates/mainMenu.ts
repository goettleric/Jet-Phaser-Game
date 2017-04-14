﻿module JetFighter.Client {

    export class MainMenu extends Phaser.State {
        
        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5);

            this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo).to({ y: 400 }, 2000, Phaser.Easing.Elastic.Out, true, 500);

            this.game.debug.text("Click to start the game", this.world.width/2.9, this.world.height -100, "red");

            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() {
            this.add.audio('click', 1, false).play();
            this.add.tween(this.background).to({ alpha: 0 }, 4000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 1200 }, 4000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Level01', true, false);
        }

    }

}