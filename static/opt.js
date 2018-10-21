function plot(){
    var num_trains = $('#name').val();
    var maxcap_trains = $('#name2').val();
    console.log("asdas");
    var trace1 = [{
    x : ['Churchgate', 'Marine Lines', 'Charni Road', 'Grant Road', 'Mumbai Central', 'Mahalaxmi', 'Lower Parel', 'Elphinstone Road', 'Dadar', 'Matunga Road', 'Mahim', 'Bandra', 'Khar Road', 'Santacruz', 'Vile Parle', 'Andheri', 'Jogeshwari', 'Goregaon', 'Malad', 'Kandivali', 'Borivali', 'Dahisar', 'Mira Road', 'Bhayandar', 'Naigaon', 'Vasai', 'Nalasopara', 'Virar'],
    //x : ['54265','73470','84799','95811','126222','131714','130955','143690','143465',"134251","125651","117766","115382","112796","107990","99974","98079","94483","86356","81551","61546","62206","56715","48514","44109","30148","20168"], 
    //y : [10, 15, 22, 24, 28, 31, 30, 40, 43, 47, 49, 49, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 47, 42, 36, 27],
    y : optim(num_trains,maxcap_trains),
    type: 'bar'
    }];
    Plotly.newPlot('myDiv', trace1);
}

function optim(num_trains,maxcap_trains){
    var populations = [54265,73470,84799,95811,126222,131714,130955,143690,143465,134251,125651,117766,115382,112796,107990,99974,98079,94483,86356,81551,61546,62206,56715,48514,44109,30148,20168];
    var n_trains = [];
    while (populations.length!=0){
        var p = [];
        for(var i=0;i<populations.length;i++){
            populations[i] = populations[i] - maxcap_trains;
            if(populations[i] >= 0){
                p.push(i);
            }
        }
        if(p.length>=2){
            n_trains.push([p[0],p[p.length-1]]);
        }
        n = populations.length;
        for(var i=0;i<n;i++){
            var found = 0;
            for(var j=0;j<p.length;j++){
                if(p[j]==i){
                    found = 1;
                    break;
                }
            }
            if(found!=1){
                populations.pop(i-1);
            }
        }
    }
    var ans = [];
    for(var i=0;i<28;i++){
        ans[i] = 0;
    }
    console.log(n_trains);
    for(var i=0;i<n_trains.length;i++){
        for(var j=n_trains[i][0];j<=n_trains[i][1];j++){
            ans[j]++;
        }
    }
    for(var i=0;i<ans.length;i++)
    {
        if(ans[i]>num_trains){
            ans[i] = num_trains;
        }
    }
    ans[27] = ans[26];
    console.log(ans);
    return ans;
}



$("#formoid").submit(function(event) {

    /* stop form from submitting normally */
    event.preventDefault();

    /* get the action attribute from the <form action=""> element */
    var $form = $( this ),
        url = $form.attr( 'action' );

    /* Send the data using post with element id name and name2*/
    var posting = $.post( url, { name: $('#name').val(), name2: $('#name2').val() } );

    /* Alerts the results */
    posting.done(function( data ) {
      alert('success');
    });
  });