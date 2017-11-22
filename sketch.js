var mic;
var capture;

function preload() {
  vangogh = loadImage('./assets/vangogh.png');
}

function setup() {
  frameRate(10);
  createCanvas(500, 500);
  background(200);
  mic = new p5.AudioIn();
  mic.start();
  capture = createCapture(VIDEO);
  //capture.size(width,height);
  capture.hide();
}

function draw() {
  image(vangogh, 0, 0, 500, 500);

  textFont('Gill Sans');
  fill(255);
  textSize(15);
  text('Press any key to read about the painter', 250, 30, 200, 300);



  if (keyIsPressed == true) {


    fill(255);
    textSize(12);
    text('Vincent Willem van Gogh (1853 – 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art', 30, 220, 200, 300);



  } else {
    fill(255);
    textSize(20);
    text('Stand still and let the painter make a portrait of you', 30, 220, 200, 300);
    text('Do not make noise that would distract him and ruin his work', 30, 310, 180, 300);
    var myImg = capture.loadPixels();

    for (var i = 0; i < 100; i++) {
      var x = random(width);
      var y = random(height);


      var vol = mic.getLevel();
      var d = map(vol, 0.03, 1, 1, 100);

      noStroke();

      var col = myImg.get(x, y);
      fill(col);

      ellipse(x / 2 + 250, y / 4 * 3.5 + 90, d, d * 2);
    }


  }
}