var Stations = [
    ['Churchgate', '0', '0',2], 
    ['Marine Lines', '1.3', '0.91',1], 
    ['Charni Road', '2.21', '1.38',1], 
    ['Grant Road', '3.59', '0.89',1], 
    ['Mumbai Central', '4.48', '1.47',2], 
    ['Mahalaxmi', '5.95', '1.72',1], 
    ['Lower Parel', '7.67', '1.31',1], 
    ['Elphinstone Road', '8.98', '1.19',1], 
    ['Dadar', '10.17', '1.58',2], 
    ['Matunga Road', '11.75', '1.18',1], 
    ['Mahim', '12.93', '1.73',1], 
    ['Bandra', '14.66', '1.63',2], 
    ['Khar Road', '16.29', '1.32',1], 
    ['Santacruz', '17.61', '2.06',1], 
    ['Vile Parle', '19.67', '2.16',1], 
    ['Andheri', '21.83', '1.69',2], 
    ['Jogeshwari', '23.52', '3.38',1], 
    ['Goregaon', '26.9', '2.42',1], 
    ['Malad', '29.32', '1.9',1], 
    ['Kandivali', '31.22', '2.76',1], 
    ['Borivali', '33.98', '2.36',2], 
    ['Dahisar', '36.34', '3.42',1], 
    ['Mira Road', '39.76', '3.35',1], 
    ['Bhayandar', '43.11', '4.68',2], 
    ['Naigaon', '47.79', '3.99',1], 
    ['Vasai', '51.78', '4.07',2], 
    ['Nalasopara', '55.85', '4.13',1], 
    ['Virar', '59.98', '8.44',2]
]
function mock_data(){
    add_train(0,7,3);
    add_train(3,15,3);
    add_train(2,10,4);
    add_train(4,18,4);
    add_train(20,7,1);
    add_train(28,5,1);
    add_train(20,5,2);
    add_train(28,4,2);
}

class Train {                
    constructor(start,dest,type){
        this.start = start;
        this.dest = dest
        this.type = type;
        this.y = scry - Stations[this.start][1]*35;  
        this.x = 0 ;
        this.dir = 0;
        this.stop = 0;
        if(this.type==4 || this.type==1){
            this.Stations = Stations;
        }
        else{
            this.Stations = FastStations;
        }
    }

    show() {
        if(this.type==1){
            this.x = scrx+50;
        }
        if(this.type==2){
            this.x = scrx+100;
        }
        if(this.type==3){
            this.x = scrx-200;
        }
        if(this.type==4){
            this.x = scrx-250;
        }
        stroke(50);
        fill(100);
        var r = 10; 
        if (this.dir < 0){
            if(this.y > (scry - this.Stations[this.dest][1]*35)){           
                ellipse(this.x,this.y,r,r); 
            }
        }else {
            if(this.y < (scry - this.Stations[this.dest][1]*35)){
                ellipse(this.x,this.y,r,r);
            }        
        }                       
    }
    
    move() {
        if(this.type==1){
            this.dir = 1;
        }
        if(this.type==2){
            this.dir = 1;
        }
        if(this.type==3){
            this.dir = -1;
        }
        if(this.type==4){
            this.dir = -1;
        }
        //console.log(this.dir);
        //console.log((scry - Stations[this.dest][1]*35));
        //console.log(this.y);
        if(this.stop>0){
            this.stop = this.stop-1;
        }else{
            if (this.dir < 0){
                if(this.y > (scry - this.Stations[this.dest][1]*35))
                {   
                    this.y = this.y + 10*this.dir;
                    for(var i=0;i<this.Stations.length;i++)
                    {
                        //console.log(scry - Stations[i][1]*35+35,this.y,scry - Stations[i][1]*35-35);
                        if(scry - this.Stations[i][1]*35+5 > this.y && this.y> scry - this.Stations[i][1]*35-5)
                        {
                            //console.log("STOP");
                            M.toast({html:"Train reached "+this.Stations[i][0]});
                            this.stop = 25;
                        }
                    }
                }
                else{
                    M.toast({html:"Train reached Destination:"+this.Stations[this.dest][0],classes:'red'});
                    Trains = arrayRemove(Trains, this);
                }
            }else {
                if(this.y < (scry - this.Stations[this.dest][1]*35))
                {
                    this.y = this.y + 10*this.dir;
                    for(var i=0;i<this.Stations.length;i++)
                    {
                        //console.log(scry - Stations[i][1]*35+35,this.y,scry - Stations[i][1]*35-35);
                        if(scry - this.Stations[i][1]*35+5 > this.y && this.y > scry - this.Stations[i][1]*35-5)
                        {
                            //console.log("STOP");
                            M.toast({html:"Train reached "+this.Stations[i][0]});
                            this.stop = 25;
                        }
                    }
                }
                else{
                    M.toast({html:"Train reached Destination:"+this.Stations[this.dest][0],classes:'red'});
                    Trains = arrayRemove(Trains, this);
                }            
            }
        }
    }
}

function arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
 
 }

/*
function mouseClicked() {
    if (value === 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
*/