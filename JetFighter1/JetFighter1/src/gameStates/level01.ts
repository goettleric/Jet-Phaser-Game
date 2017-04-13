module JetFighter.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        enemy: EnemyFighterType1;
        

        create() {

            var enemies;

            enemies = this.game.add.group();
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0,0, 'jetfighter','background');
            this.player = new Player(this.game, this.world.centerX, this.world.centerY * 2.5);
            this.player.anchor.setTo(0, 5);
            this.game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.createEnemy, this);
            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

        update() {
            
            
        }

        createEnemy() {
        this.enemy = new EnemyFighterType1(this.game, this.world.randomX, this.world.y - 200);
        };
      
    }

}