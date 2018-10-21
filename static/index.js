var cnv;

function setup() {
  var cnv = createCanvas(windowWidth-400, 3.5*windowHeight);
  cnv.parent('sim-env');
  //background(255, 0, 200);
  scrx = width/2 -100 ;
  scry = height - 150;
  frameRate(1);
  
}
var hh="06",mm="01",ss="00";
var x = 100;
var stop = 0;
var fr=0;
function draw(){
    background(220);
    createMap();
    time();
    info();
    frameRate(frame_rate*60);
    if(sim==1){
        ss = str(int(ss) + 1);
        if(ss.length<2){
            ss = "0"+ss;
        }
        if(ss>=60){
            mm = str(int(mm) + 1);
            if(mm.length<2){
                mm = "0"+mm;
            }
            ss = "00";
        }
        if(mm>=60){
            hh = str(int(hh) + 1);
            if(hh.length<2){
                hh = "0"+hh;
            }
            mm = "00";
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
            //mock_data();
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
    if(ss==00){ 
    add_c_train(hh+":"+mm); 
    } 
    text(hh+" : "+mm+" : "+ss, scrx+305,scry-height+200);
}//NON Sim JS
var frame_rate = 1/60;

function showValue(newValue) {
    document.getElementById('range').innerHTML=newValue;
    frame_rate = newValue/60;
}

function setTime() {

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
