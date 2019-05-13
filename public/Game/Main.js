var CardGame = CardGame || {};

CardGame.game = new Phaser.Game('100%','100%',Phaser.AUTO,'game');

CardGame.game.state.add('BootState', CardGame.Boot);
CardGame.game.state.add('PreloadState', CardGame.Preload);
CardGame.game.state.add('GameState', CardGame.Game);
CardGame.game.state.add('Menu',CardGame.Menu)
CardGame.game.state.start('BootState');