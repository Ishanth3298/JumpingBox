var canvas1;
var music;
var redBlock, greenBlock, blueBlock, yellowBlock;
var box1;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas1 = createCanvas(800,600);

    //create 4 different surfaces
    redBlock = createSprite(110, 600, 180, 100);
    redBlock.shapeColor = "red";
    greenBlock = createSprite(310, 600, 180, 100);
    greenBlock.shapeColor = "green";
    blueBlock = createSprite(510, 600, 180, 100);
    blueBlock.shapeColor = "blue";
    yellowBlock = createSprite(710, 600, 180, 100);
    yellowBlock.shapeColor = "yellow";

    //edges
    Edges = createEdgeSprites();

    //create box1 sprite
    box1 = createSprite(400, 300, 40, 40);
    box1.velocityX = random(-7,7);
    box1.velocityY = random(-7,7);
}

function draw() {
    background("white");

    //create edgeSprite
    box1.bounceOff(Edges);
    music.play();


    //add condition to check if box1 touching surface and make it box1]
    if (box1.isTouching(redBlock) && box1.bounceOff(redBlock)) {
        box1.shapeColor = "red";
    }
    if (box1.isTouching(yellowBlock)) {
        box1.shapeColor = "yellow";
        box1.bounceOff(yellowBlock)
    }
    if (box1.isTouching(blueBlock)) {
        box1.shapeColor = "blue";
        box1.bounceOff(blueBlock);
    }
    if (box1.isTouching(greenBlock)) {
        box1.shapeColor = "green";
        box1.velocityX = 0;
        box1.velocityY = 0;
    }
    drawSprites();
}
