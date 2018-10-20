var cnv;

function setup() {
  var cnv = createCanvas(windowWidth-400, 3.5*windowHeight);
  cnv.parent('sim-env');
  //background(255, 0, 200);
  scrx = width/2 -100 ;
  scry = height - 150;
  frameRate(1);
  
}
var hh=0,mm=0,ss=0;
var x = 100;
var stop = 0;
var fr=0;
function draw(){
    background(220);
    createMap();
    time();
    frameRate(frame_rate*60);
    if(sim==1){
        ss++;
        if(ss>=60){
            mm++;
            ss = 0;
        }
        if(mm>=60){
            hh++;
            mm = 0;
        }
    }
    for(var i=0;i<Trains.length;i++)
    {
        //console.log(Trains[i]);
        Trains[i].show();
        if(sim==1){
            //Trains[i].more_info();
            Trains[i].move();
        }
    }
}


    


var sim = 0;
var first = 0;
function toggle_sim(){
    if (first==0){
        if(sim==0){
            mock_data();
            sim=1;
        }else{
            sim = 0;
        }
        first = 1;
    }else{
        if(sim==0){
            sim=1;
        }else{
            sim = 0;
        }
    }
    //console.log("hii");
}

function time(){
    textSize(35);
    textFont(font);
    textAlign(CENTER, CENTER);   
    text(hh+" : "+mm+" : "+ss, scrx  , scry - height + 205 );
}

//NON Sim JS
var frame_rate = 1/60;

function showValue(newValue) {
    document.getElementById('range').innerHTML=newValue;
    frame_rate = newValue/60;
}



$('body').on('click', '.btn', function(e){
	e.preventDefault();
	if ( $(this).hasClass('play') ) {
		$(this).removeClass('play');
		$(this).addClass('pause');
	} else {
		$(this).removeClass('pause');
		$(this).addClass('play');
	}
});
