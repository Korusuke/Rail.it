var Stations = [
    ['Churchgate', '0', '0'], 
    ['Marine Lines', '1.3', '0.91'], 
    ['Charni Road', '2.21', '1.38'], 
    ['Grant Road', '3.59', '0.89'], 
    ['Mumbai Central', '4.48', '1.47'], 
    ['Mahalaxmi', '5.95', '1.72'], 
    ['Lower Parel', '7.67', '1.31'], 
    ['Elphinstone Road', '8.98', '1.19'], 
    ['Dadar', '10.17', '1.58'], 
    ['Matunga Road', '11.75', '1.18'], 
    ['Mahim', '12.93', '1.73'], 
    ['Bandra', '14.66', '1.63'], 
    ['Khar Road', '16.29', '1.32'], 
    ['Santacruz', '17.61', '2.06'], 
    ['Vile Parle', '19.67', '2.16'], 
    ['Andheri', '21.83', '1.69'], 
    ['Jogeshwari', '23.52', '3.38'], 
    ['Goregaon', '26.9', '2.42'], 
    ['Malad', '29.32', '1.9'], 
    ['Kandivali', '31.22', '2.76'], 
    ['Borivali', '33.98', '2.36'], 
    ['Dahisar', '36.34', '3.42'], 
    ['Mira Road', '39.76', '3.35'], 
    ['Bhayandar', '43.11', '4.68'], 
    ['Naigaon', '47.79', '3.99'], 
    ['Vasai', '51.78', '4.07'], 
    ['Nalasopara', '55.85', '4.13'], 
    ['Virar', '59.98', '8.44']
]

function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = loadFont("/static/OpenSans-Regular.ttf");
}

function createMap(){
    
    textSize(18);
    textFont(font);
    textAlign(CENTER, CENTER);

    for(var i=Stations.length-1;i>0;i--)
    {
		//console.log(Stations[i]);
        st = new Station(Stations[i][0], scry - Stations[i][1]*35 );
        st.show();
        //console.log(Stations[i][0]+" "+Stations[i][1]);
        line(scrx + 50 ,scry - Stations[i][1]*35, scrx + 50, scry - Stations[i-1][1]*35);
        //line(scrx + 100,scry - Stations[i][1]*35, scrx + 100, scry - Stations[i-1][1]*35);
        //line(scrx - 250,scry - Stations[i][1]*35, scrx - 250,scry - Stations[i-1][1]*35);
        line(scrx - 200,scry - Stations[i][1]*35, scrx - 200,scry - Stations[i-1][1]*35);
        text(Stations[i][0], scrx - 75 , scry - Stations[i][1]*35 );
    }

    
    st = new Station(Stations[0][0],scry - Stations[0][1]*35);
    st.show();
    text(Stations[0][0], scrx - 75 , scry - Stations[0][1]*35 );

    
}

class Station {                
    constructor(name,y){
        this.name = name;
        this.y = y;                        
    }

    show() {
        var x = scrx;
        var r = 8.5;        
        stroke(255);
        strokeWeight(4);
        ellipse(x+50,this.y,r,r);
        //ellipse(x+100,this.y,r,r);
        ellipse(x-200,this.y,r,r);
        //ellipse(x-250,this.y,r,r);                            
    }        
}
