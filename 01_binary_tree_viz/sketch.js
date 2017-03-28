// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// Binary tree
var tree;

function preload() {
  img = loadImage("assets/venice.jpg");
}

function setup() {
  createCanvas(1000, 800);
  frameRate(300);
  imageMode(CENTER);
  noStroke();
  background(255);
  // colorMode(HSB,100)
  img.loadPixels();

  // New tree
  tree = new Tree();

  // Add ten random values


  // // Search the tree for 10
  // var result = tree.search(255);
  // if (result == null) {
  //   console.log('not found');
  // } else {
  //   console.log(result);
  // }
}

function draw(){
    // for (var i = 0; i < img.width; i+=2) {
    //   for (var j = 0; j < img.height; j+=2) {

  // colorMode(HSB,100)
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
    tree.addValue(pix);
    console.log(pix)
//   }
// }

  // Traverse the tree
  tree.traverse();
}
