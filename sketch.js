var gameState = 4;

var score=0;
var life = 3;
var reward=[]

function preload(){
 bg1 = loadImage("bt21.png");
 bg2 = loadImage("gamebg2.jpg");
 bg3 = loadImage("gamebg3.jpg");
 bg5 = loadImage("gamebg.jpg");
 playImage = loadImage("play-removebg-preview.png");
 tataImage = loadImage("tata.png");
 rewardImage = loadImage("army_bomb-removebg-preview.png");
 bg4 = loadImage("gameover.png")
 bImage = loadImage("block2-removebg-preview.png");
 bImage2 = loadImage("blocks3-removebg-preview.png");
 bImage3 = loadImage("blocks1-removebg-preview.png");
 vanImage = loadImage("Van.png");
 okImage = loadImage("ok-removebg-preview.png");
 bg6 = loadImage("Untitled.png");
 bg7 = loadImage("Winning.jpg");
 e1= loadImage("obstacle 1.png");
 e2= loadImage("obstacle 2.png");
 e3= loadImage("obstacle3.png");
}

function setup() {
  createCanvas(1500, 700);
  play = createSprite(400,600,100,40);
  play.addImage(playImage);
  block1 = createSprite(140,540,200,20);
  block1.addImage(bImage);
  block1.scale = 0.4;
  block1.debug= true;
  block1.setCollider("rectangle",0,0,400,100);
  block2 = createSprite(455,480,130,20);
  block2.addImage(bImage);
  block2.scale = 0.2;
  block2.setCollider("rectangle",0,0,400,100);
  block3 = createSprite(715,500,200,20);
  block3.addImage(bImage);
  block3.scale = 0.5;
  block3.setCollider("rectangle",0,0,500,100);
  block4 = createSprite(1035,560,130,20);
  block4.addImage(bImage);
  block4.scale = 0.3;
  block4.setCollider("rectangle",0,0,400,100);
  block5 = createSprite(1330,445,200,20);
  block5.addImage(bImage);
  block5.scale = 0.4;
  block5.setCollider("rectangle",0,0,400,100);

  tata = createSprite(150,400,30,100);
  tata.addImage(tataImage);
  tata.scale = 0.27;
  tata.setCollider("circle", 0,0,180);

  block6 = createSprite(150,530,200,20);
  block6.addImage(bImage2);
  block6.scale = 0.4;
  block6.setCollider("rectangle",0,0,400,100);
  block7 = createSprite(455,480,80,20);
  block7.addImage(bImage2);
  block7.scale = 0.3;
  block7.setCollider("rectangle",0,0,400,100);
  block8 = createSprite(715,525,200,20);
  block8.addImage(bImage2);
  block8.scale = 0.5;
  block8.setCollider("rectangle",0,0,400,100);
  block9 = createSprite(1035,560,150,20);
  block9.addImage(bImage2);
  block9.scale = 0.6;
  block9.setCollider("rectangle",0,0,400,100);
  block10 = createSprite(1330,470,200,20);
  block10.addImage(bImage2);
  block10.scale = 0.3;
  block10.setCollider("rectangle",0,0,400,100);

  block11 = createSprite(150,530,200,20);
  block11.addImage(bImage3);
  block11.scale = 0.4;
  block11.setCollider("rectangle",0,0,400,100);
  block12 = createSprite(455,480,80,20);
  block12.addImage(bImage3);
  block12.scale = 0.3;
  block12.setCollider("rectangle",0,0,400,100);
  block13 = createSprite(715,525,200,20);
  block13.addImage(bImage3);
  block13.scale = 0.4;
  block13.setCollider("rectangle",0,0,400,100);
  block14 = createSprite(1035,560,150,20);
  block14.addImage(bImage3);
  block14.scale = 0.3;
  block14.setCollider("rectangle",0,0,400,100);
  block15 = createSprite(1330,470,200,20);
  block15.addImage(bImage3);
  block15.scale = 0.6;
  block15.setCollider("rectangle",0,0,400,100);

  tata2 = createSprite(150,400,30,100);
  tata2.addImage(tataImage);
  tata2.scale = 0.27;
  tata2.debug = false;
  tata2.setCollider("circle", 0,0,180);

  tata3 = createSprite(150,400,30,100);
  tata3.addImage(tataImage);
  tata3.scale = 0.27;
  tata3.debug = false;
  tata3.setCollider("circle", 0,0,180);

  van = createSprite(1330,400,200,20);
  van.addImage(vanImage);
  van.scale = 0.7;
  van.debug = false;
  van.setCollider("circle", 0,0,170);

  ok = createSprite(700,600,100,40);
  ok.addImage(okImage);

  enemy1 = createSprite(770,370,10,10);
  enemy1.addImage(e1);
  enemy1.scale = 0.5;
  enemy1.setCollider("circle",0,0,95);

  enemy2 = createSprite(730,400,10,10);
  enemy2.addImage(e1);
  enemy2.scale = 0.5;
  enemy2.setCollider("circle",0,0,95);

  enemy3 = createSprite(1100,450,10,10);
  enemy3.addImage(e2);
  enemy3.scale = 0.5;
  enemy3.setCollider("circle",0,0,95);
  
  score = 0;

  rewardGroup = new Group();
  for(var x= 200; x<width; x=x+300){
    r = createSprite(x, random(100,350), 50, 50)
    r.addImage(rewardImage);
    r.scale = 0.2;
    rewardGroup.add(r);
  }
  rewardGroup2 = new Group();
  for(var x= 200; x<width; x=x+300){
    r = createSprite(x, random(100,350), 50, 50)
    r.addImage(rewardImage);
    r.scale = 0.2;
    rewardGroup2.add(r);
  }

rewardGroup3 = new Group();
  for(var x= 200; x<width; x=x+300){
    r = createSprite(x, random(100,350), 50, 50)
    r.addImage(rewardImage);
    r.scale = 0.2;
    rewardGroup3.add(r);
  }
}

function draw() {
  background(255);
  
   
  if (gameState===0){
     background(bg1)
     ok.visible= false;
     block1.visible = false;
     block2.visible = false;
     block3.visible = false;
     block4.visible = false;
     block5.visible = false;
     block6.visible = false;
     block7.visible = false;
     block8.visible = false;
     block9.visible = false;
     block10.visible = false;
     block11.visible = false;
     block12.visible = false;
     block13.visible = false;
     block14.visible = false;
     block15.visible = false;
     tata.visible = false;
     tata2.visible = false;
     tata3.visible = false;
     van.visible = false;
     rewardGroup.setVisibleEach(false);
     rewardGroup2.setVisibleEach(false);
     rewardGroup3.setVisibleEach(false);
     if (mousePressedOver(play)){
       gameState = 1;
     }
    }
  
    if (gameState===1){
      background(bg6)
      play.visible = false;
      ok.visible = true;
      block1.visible = false;
      block2.visible = false;
      block3.visible = false;
      block4.visible = false;
      block5.visible = false;
      block6.visible = false;
      block7.visible = false;
      block8.visible = false;
      block9.visible = false;
      block10.visible = false;
      block11.visible = false;
      block12.visible = false;
      block13.visible = false;
      block14.visible = false;
      block15.visible = false;
      tata.visible = false;
      tata2.visible = false;
      tata3.visible = false;
      van.visible = false;
      rewardGroup.setVisibleEach(false);
      rewardGroup2.setVisibleEach(false);
      rewardGroup3.setVisibleEach(false);
      if (mousePressedOver(ok)){
        gameState = 2;
      }
     }
   
  if (gameState===2){
    background(bg2);
    play.visible=false;
    ok.visible=false;
     block1.visible = true;
     block2.visible = true;
     block3.visible = true;
     block4.visible = true;
     block5.visible = true;
     block6.visible = false;
     block7.visible = false;
     block8.visible = false;
     block9.visible = false;
     block10.visible = false;
     block11.visible = false;
     block12.visible = false;
     block13.visible = false;
     block14.visible = false;
     block15.visible = false;
     tata.visible = true;
     tata2.visible = false;
     tata3.visible = false;
     van.visible = false;
     rewardGroup.setVisibleEach(true);
     rewardGroup2.setVisibleEach(false);
     rewardGroup3.setVisibleEach(false);
     textSize(20);
  stroke(3);
  fill("black")
  text("Score: "+ score, camera.position.x,50);
  text("Life: "+ life, camera.position.x,70);
    if(keyDown("Space")){
      tata.velocityY = -18;
      if(keyDown("RIGHT_ARROW")){
       tata.x+=5;
      }
      if(keyDown("LEFT_ARROW")){
        tata.x-=5;
       }
    }
    if(keyDown("RIGHT_ARROW")){
      tata.x+=5;
     }
     if(keyDown("LEFT_ARROW")){
       tata.x-=5;
      }
      tata.velocityY+=1;
      for(var i=0; i<rewardGroup.length; i++){
       if( rewardGroup[i].isTouching(tata)){
         rewardGroup[i].destroy();
         score+= 3;
       }
      }
      tata.collide(block1);
      tata.collide(block2);
      tata.collide(block3);
      tata.collide(block4);
      tata.collide(block5);
    if(tata.x>width){
      gameState = 3;
    }
    if(tata.y>height-50 && life>0){ 
     life-=1;
     tata.x= 150;
     tata.y= 400;
     tata.setVelocity(0,0);
    }
    else if(tata.y>height-50 && life===0){
      gameState = "end";
    }
    if(tata.isTouching(enemy1) && life>0){ 
      life-=1;
      tata.x= 150;
      tata.y= 400;
      tata.setVelocity(0,0);
     }
     else if(tata.isTouching(enemy1) && life===0){
       gameState = "end";
     }
  }
  if(gameState===3){
    background(bg3);
    play.visible=false;
    ok.visible=false;
    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = true;
     block7.visible = true;
     block8.visible = true;
     block9.visible = true;
     block10.visible = true;
     block11.visible = false;
     block12.visible = false;
     block13.visible = false;
     block14.visible = false;
     block15.visible = false;
    tata.visible = false;
    tata2.visible = true;
    tata3.visible = false;
    van.visible = false;
    rewardGroup.setVisibleEach(false);
    rewardGroup2.setVisibleEach(true);
    rewardGroup3.setVisibleEach(false);
    textSize(20);
  stroke(3);
  fill("black")
  text("Score: "+ score, camera.position.x,50);
  text("Life: "+ life, camera.position.x,70);
    tata2.collide(block6);
      tata2.collide(block7);
      tata2.collide(block8);
      tata2.collide(block9);
      tata2.collide(block10);

   if(keyDown("Space")){
     tata2.velocityY = -18;
     if(keyDown("RIGHT_ARROW")){
      tata2.x+=5;
     }
     if(keyDown("LEFT_ARROW")){
       tata2.x-=5;
      }
   }
   if(keyDown("RIGHT_ARROW")){
     tata2.x+=5;
    }
    if(keyDown("LEFT_ARROW")){
      tata2.x-=5;
     }
     tata2.velocityY+=1;
     for(var i=0; i<rewardGroup2.length; i++){
      if( rewardGroup2[i].isTouching(tata2)){
        rewardGroup2[i].destroy();
        score+= 3;
      }
     }
     if(tata2.x>width){
      gameState = 4;
    }
    if(tata2.y>height-50 && life>0){ 
      life-=1;
      tata2.x= 150;
      tata2.y= 400;
      tata2.setVelocity(0,0);
     }
     else if(tata2.y>height-50 && life===0){
       gameState = "end";
     }
  }

  if (gameState===4){
    background(bg5);
    play.visible=false;
    ok.visible=false;
     block1.visible = false;
     block2.visible = false;
     block3.visible = false;
     block4.visible = false;
     block5.visible = false;
     block6.visible = false;
     block7.visible = false;
     block8.visible = false;
     block9.visible = false;
     block10.visible = false;
     block11.visible = true;
     block12.visible = true;
     block13.visible = true;
     block14.visible = true;
     block15.visible = true;
     tata.visible = false;
     tata2.visible = false;
     tata3.visible = true;
     van.visible = true;
     rewardGroup.setVisibleEach(false);
     rewardGroup2.setVisibleEach(false);
     rewardGroup3.setVisibleEach(true);
     textSize(20);
  stroke(3);
  fill("black")
  text("Score: "+ score, camera.position.x,50);
  text("Life: "+ life, camera.position.x,70);
    if(keyDown("Space")){
      tata3.velocityY = -18;
      if(keyDown("RIGHT_ARROW")){
       tata3.x+=5;
      }
      if(keyDown("LEFT_ARROW")){
        tata3.x-=5;
       }
    }
    if(keyDown("RIGHT_ARROW")){
      tata3.x+=5;
     }
     if(keyDown("LEFT_ARROW")){
       tata3.x-=5;
      }
      tata3.velocityY+=1;
      for(var i=0; i<rewardGroup3.length; i++){
       if( rewardGroup3[i].isTouching(tata3)){
         rewardGroup3[i].destroy();
         score+= 3;
       }
      }
      tata3.collide(block11);
      tata3.collide(block12);
      tata3.collide(block13);
      tata3.collide(block14);
      tata3.collide(block15);
      van.collide(block15);

      if(tata3.isTouching(van)){
        gameState = "won";
      }
    
      if(tata3.y>height-50 && life>0){ 
        life-=1;
        tata3.x= 150;
        tata3.y= 400;
        tata3.setVelocity(0,0);
       }
       else if(tata3.y>height-50 && life===0){
         gameState = "end";
       }
  }
  
  if(gameState==="end"){
   background(bg4);
   textSize(60);
  strokeWeight(7);
  fill("white");
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2-250);
  text("Score: "+ score, width/2,height/2-180);
  rewardGroup.destroyEach();
  rewardGroup2.destroyEach();
  rewardGroup3.destroyEach();
  tata.destroy();
  tata2.destroy();
  tata3.destroy();
  van.destroy();
  }
  
  if(gameState==="won"){
    background(bg7);
    textSize(60);
   strokeWeight(7);
   fill("white");
   textAlign(CENTER);
   text("Score: "+ score, width/2,height/2-180);
   rewardGroup.destroyEach();
   rewardGroup2.destroyEach();
   rewardGroup3.destroyEach();
   tata.destroy();
   tata2.destroy();
   tata3.destroy();
   van.destroy();
   
   }

  drawSprites();

  text(mouseX+","+mouseY, mouseX, mouseY)

  
}

