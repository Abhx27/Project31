var ground,columms1,columms2,columms3,columms4,columms5;
function setup() {
  createCanvas(480,800);
   groundSprite = createSprite(240,795,480,10);
  groundSprite.shapeColor=color(178, 178, 178)

columms1Sprite = createSprite(80, 655, 10,267);
columms1Sprite.shapeColor=color(255,255,255)

columms2Sprite = createSprite(160, 655, 10,267);
columms2Sprite.shapeColor=color(255,255,255)

columms3Sprite = createSprite(240, 655, 10,267);
columms3Sprite.shapeColor=color(255,255,255)

columms4Sprite = createSprite(320, 655, 10,267);
columms4Sprite.shapeColor=color(255,255,255)

columms5Sprite = createSprite(400, 655, 10,267);
columms5Sprite.shapeColor=color(255,255,255)

plinkos = new Plinko(40,10)

}
var particles = [];
var plinkos = [];

function draw() {
  background(0,0,0);  
  drawSprites();
}
//250,795,267,5