var Stations = [
    ['Churchgate', '0', '0',2], 
    ['Marine Lines', '1.3', '0.91',2], 
    ['Charni Road', '2.21', '1.38',2], 
    ['Grant Road', '3.59', '0.89',2], 
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
    ['Jogeshwari', '23.52', '3.38',2], 
    ['Goregaon', '26.9', '2.42',2], 
    ['Malad', '29.32', '1.9',2], 
    ['Kandivali', '31.22', '2.76',2], 
    ['Borivali', '33.98', '2.36',2], 
    ['Dahisar', '36.34', '3.42',2], 
    ['Mira Road', '39.76', '3.35',2], 
    ['Bhayandar', '43.11', '4.68',2], 
    ['Naigaon', '47.79', '3.99',2], 
    ['Vasai', '51.78', '4.07',2], 
    ['Nalasopara', '55.85', '4.13',2], 
    ['Virar', '59.98', '8.44',2]
]

Trains = []
function add_train(start,dest,type){
    tr = new Train(start,dest,type);
    Trains.push(tr);
    M.toast({html:"Train Started from "+Stations[start][0]+" to "+Stations[dest][0],classes:'green'});
}

function mock_data(){
    add_train(27,0,1);
    add_train(20,10,2);
    add_train(0,27,4);
    add_train(0,15,3);
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
    }

    show() {
        if(this.type==1){
            this.x = scrx+100;
        }
        if(this.type==2){
            this.x = scrx+50;
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
            if(this.y > (scry - Stations[this.dest][1]*35)){           
                ellipse(this.x,this.y,r,r); 
            }
        }else {
            if(this.y < (scry - Stations[this.dest][1]*35)){
                ellipse(this.x,this.y,r,r);
            }        
        }                       
    }
    
    move() {
        if(this.type==1){
            this.dir = 1/3;
        }
        if(this.type==2){
            this.dir = 1/3;
        }
        if(this.type==3){
            this.dir = -1/3;
        }
        if(this.type==4){
            this.dir = -1/3;
        }
        //console.log(this.dir);
        //console.log((scry - Stations[this.dest][1]*35));
        //console.log(this.y);
        if(this.stop>0){
            this.stop = this.stop-1;
        }else{
            if (this.dir < 0){
                if(this.y > (scry - Stations[this.dest][1]*35))
                {   
                    if(this.type == 1 || this.type == 4){
                        this.y = this.y + this.dir;
                        for(var i=0;i<Stations.length;i++)
                        {
                            //console.log(scry - Stations[i][1]*35+35,this.y,scry - Stations[i][1]*35-35);
                            if(scry - Stations[i][1]*35+1 > this.y && this.y > scry - Stations[i][1]*35-1 && Stations[i][3]==2)
                            {
                                //console.log("STOP");
                                //M.toast({html:"Train reached "+Stations[i][0]});
                                this.y = this.y + 2; q
                                this.stop = 5;
                            }
                        }
                    }else {
                        this.y = this.y + this.dir;
                        for(var i=0;i<Stations.length;i++)
                        {
                            //console.log(scry - Stations[i][1]*35+35,this.y,scry - Stations[i][1]*35-35);
                            if(scry - Stations[i][1]*35+1 > this.y && this.y > scry - Stations[i][1]*35-1)
                            {
                                //console.log("STOP");
                                //M.toast({html:"Train reached "+Stations[i][0]});
                                this.y = this.y + 2;
                                this.stop = 5;
                            }
                        }
                    }
                }
                else{
                    M.toast({html:"Train reached Destination:"+Stations[this.dest][0],classes:'red'});
                    Trains = arrayRemove(Trains, this);
                }
            }else {
                if(this.y < (scry - Stations[this.dest][1]*35))
                {
                    if(this.type == 1 || this.type == 4){
                        this.y = this.y + this.dir;
                        for(var i=0;i<Stations.length;i++)
                        {
                            //console.log(scry - Stations[i][1]*35+35,this.y,scry - Stations[i][1]*35-35);
                            if(scry - Stations[i][1]*35+1 > this.y && this.y > scry - Stations[i][1]*35-1 && Stations[i][3]==2)
                            {
                                //console.log("STOP");
                                //M.toast({html:"Train reached "+Stations[i][0]});
                                this.y = this.y + 2;
                                this.stop = 5;
                            }
                        }
                    }else{
                        this.y = this.y + this.dir;
                        for(var i=0;i<Stations.length;i++)
                        {
                            //console.log(scry - Stations[i][1]*35+35,this.y,scry - Stations[i][1]*35-35);
                            if(scry - Stations[i][1]*35+1 > this.y && this.y > scry - Stations[i][1]*35-1)
                            {
                                //console.log("STOP");
                                //M.toast({html:"Train reached "+Stations[i][0]});
                                this.y = this.y + 2;
                                this.stop = 5;
                            }
                        }
                    }
                }
                else{
                    M.toast({html:"Train reached Destination:"+Stations[this.dest][0],classes:'red'});
                    Trains = arrayRemove(Trains, this);
                }            
            }
        }
    }

    more_info(){
        change_info(this);
    }
}

function change_info(edit_train){
    console.log("div added");
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