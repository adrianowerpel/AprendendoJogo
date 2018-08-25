var game = new Phaser.Game(800,400,Phaser.AUTO);

game.state.add('Introducao',AprendendoJogo.Introducao);
game.state.add('TecladoFase1',AprendendoJogo.TecladoFase1);
game.state.add('Fase1',AprendendoJogo.Fase1);
game.state.add('GameOver',AprendendoJogo.GameOver);
game.state.add('Pergunta1',AprendendoJogo.Pergunta1);
game.state.add('RespostaErrada1',AprendendoJogo.RespostaErrada1);
game.state.add('RespostaCerta1',AprendendoJogo.RespostaCerta1);

game.state.add('Fase2',AprendendoJogo.Fase2);
game.state.add('Pergunta2',AprendendoJogo.Pergunta2);
game.state.add('RespostaCerta2',AprendendoJogo.RespostaCerta2);
game.state.add('RespostaErrada2',AprendendoJogo.RespostaErrada2);

game.state.add('Fase3',AprendendoJogo.Fase3);
game.state.add('Barco',AprendendoJogo.Barco);
game.state.add('Final',AprendendoJogo.Final);

game.state.start('Introducao');