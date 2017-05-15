module JetFighter.Client {

    export class GameEngine extends Phaser.Game {

        constructor() {
            super(1024, 800, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level01', Level01, false);
            this.state.add('Level02', Level02, false);
            this.state.add('Level03', Level03, false);
            this.state.add('Level04', Level04, false);
            this.state.add('Level05', Level05, false);
            this.state.add('Level06', Level06, false);
            this.state.start('Boot');
            
        }
    }
}

window.onload = () => {
    new JetFighter.Client.GameEngine();
};