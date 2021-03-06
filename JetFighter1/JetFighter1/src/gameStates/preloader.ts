﻿module JetFighter.Client {

    export class Preloader extends Phaser.State {
        loaderText: Phaser.Text;
        
        preload() {
            
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...",
                { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);

            this.load.image('titlepage', './assets/ui/titlePage.png');
            this.load.image('logo', './assets/ui/gameLogo.png');
            this.load.audio('click', './assets/sounds/aircraft009.mp3', true);
            this.load.audio('gunShot', './assets/sounds/gunFire.mp3', true);
            this.load.audio('enemyExplosion', './assets/sounds/Explosion.mp3', true);
            this.load.image('water', 'assets/pics/water.png');
            this.load.atlas('jetfighter', './assets/sprites/jetfighter.png', './assets/sprites/jetfighter.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        }

        create() {
            var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 2000,
                Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }

    }

}