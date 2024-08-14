/* Função responsável pelo carregamento 
 dos sprites */
function preloadAssets(scene) {
  console.log(scene);

  /* Cenário */
  scene.load.image("fundo", "fundo.png");
  scene.load.image("plat", "plataforma.png");

  /* Player */
  scene.load.spritesheet("player", "player.png", {
    frameWidth: 32,
    frameHeight: 48,
  });

  /* Coletável */
  scene.load.image("star", "star.png");

  /* Inimigos: bombs */
  scene.load.image("bombs", "bomb.png");
}
