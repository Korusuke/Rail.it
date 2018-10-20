var FastStations = [
    ['Churchgate', '0', '0'], 
    ['Mumbai Central', '4.48', '1.47'], 
    ['Dadar', '10.17', '1.58'], 
    ['Bandra', '14.66', '1.63'], 
    ['Andheri', '21.83', '1.69'],  
    ['Borivali', '33.98', '2.36'],  
    ['Bhayandar', '43.11', '4.68'], 
    ['Vasai', '51.78', '4.07'], 
    ['Virar', '59.98', '8.44']
]


function createFMap(){
    
    textSize(18);
    textFont(font);
    textAlign(CENTER, CENTER);

    for(var i=FastStations.length-1;i>0;i--)
    {
		//console.log(FastStations[i]);
        st = new FastStation(FastStations[i][0], scry - FastStations[i][1]*35 );
        st.show();
        //console.log(FastStations[i][0]+" "+FastStations[i][1]);
        //line(scrx + 50 ,scry - FastStations[i][1]*35, scrx + 50, scry - FastStations[i-1][1]*35);
        line(scrx + 100,scry - FastStations[i][1]*35, scrx + 100, scry - FastStations[i-1][1]*35);
        line(scrx - 250,scry - FastStations[i][1]*35, scrx - 250,scry - FastStations[i-1][1]*35);
        //line(scrx - 200,scry - FastStations[i][1]*35, scrx - 200,scry - FastStations[i-1][1]*35);
        //text(FastStations[i][0], scrx - 75 , scry - FastStations[i][1]*35 );
    }
    st = new FastStation(FastStations[0][0],scry - FastStations[0][1]*35);
    st.show();
    //text(FastStations[0][0], scrx - 75 , scry - FastStations[0][1]*35 ); 
}

class FastStation {                
    constructor(name,y){
        this.name = name;
        this.y = y;                        
    }

    show() {
        var x = scrx;
        var r = 8.5;        
        stroke(255);
        strokeWeight(4);
        //ellipse(x+50,this.y,r,r);
        ellipse(x+100,this.y,r,r);
        //ellipse(x-200,this.y,r,r);
        ellipse(x-250,this.y,r,r);                            
    }        
}
