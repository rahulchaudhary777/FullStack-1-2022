var bgImage, bg;
var marioImage, mario;
var ground, space, jumpSound;
var brickImage, bricksGroup;
var coinImage, coinGroup, coinSound;
var score = 0;

function preload() {
    bgImage = loadImage("images/bgnew.jpg");

    marioImage = loadAnimation(
      "images/mar1.png",
      "images/mar2.png",
      "images/mar3.png",
      "images/mar4.png",
      "images/mar5.png",
      "images/mar6.png",
      "images/mar7.png"
    );

    jumpSound = loadSound("sounds/jump.mp3")

    brickImage = loadImage("images/brick.png")
    coinSound = loadSound("sounds/coinSound.mp3")

    coinImage = loadAnimation(
      "images/con1.png",
      "images/con2.png",
      "images/con3.png",
      "images/con4.png",
      "images/con5.png",
      "images/con6.png"
    );
    
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(600, 300);
  bg.addImage(bgImage)
  bg.scale = 0.5

  mario = createSprite(200, 520, 20, 50);
  mario.addAnimation("running", marioImage)
  mario.scale = 0.2

  ground = createSprite(100, 580, 400, 10);

  space = createSprite(100, -30, 400, 10);

  bricksGroup = new Group();
  coinGroup = new Group();

}

function draw() {
    drawSprites();

    bg.velocityX = -5;
    if(bg.x < 100){
        bg.x = bg.width/4;
    }

    //make mario up
    if(keyDown("space")){
        mario.velocityY = -10;
        jumpSound.play()
        
    }

    // make mario down
    mario.velocityY += 0.5;

    mario.collide(ground);
    ground.visible = false

    mario.collide(space);
    space.visible = false;

    genrateBricks()
    genrateCoins();

    for(let i=0; i<bricksGroup.length;i++){
      var index = bricksGroup.get(i);

      if(index.isTouching(mario)){
        mario.collide(index);
    }
  }

  for (let i = 0; i < coinGroup.length; i++) {
    var temp = coinGroup.get(i);

    if (temp.isTouching(mario)) {
      coinSound.play()
      score += 1;
      console.log(score)
      temp.destroy()
    }
  }

  if(mario.x < 200) mario.x = 200;
}

function genrateBricks(){
  if(frameCount % 70 == 0){
    var brick = createSprite(1200, 120, 40, 10)
    brick.y = random(100,450)
    brick.addImage(brickImage)
    brick.scale = 0.5
    brick.velocityX = -5

    brick.lifetime = 250
    bricksGroup.add(brick)
  }
}

function genrateCoins() {
  if (frameCount % 70 == 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = random(80, 480);
    coin.addAnimation("coinCollect",coinImage)
    coin.scale = 0.08;
    coin.velocityX = -5;

    coin.lifetime = 250;
    coinGroup.add(coin);
  }
}