var cnv;

function setup() {
  var cnv = createCanvas(windowWidth-400, 3.5*windowHeight);
  cnv.parent('sim-env');
  //background(255, 0, 200);
  scrx = width/2 -100 ;
  scry = height - 150;
  frameRate(25);
  
}

var x = 100;
var stop = 0;
function draw(){
    background(220);
    createMap();
    createFMap();
    for(var i=0;i<Trains.length;i++)
    {
        //console.log(Trains[i]);
        Trains[i].show();
        Trains[i].move();
    }
}
