var WaterCount=[];
$(document).ready(function(){
    checkCount();
    
    function checkCount(){
        
        var storeData = firebase.database().ref('userData/0');
            
            storeData.on("value",function(snapshot){
                snapshot.forEach(function(childSnapshot){
                var childData = childSnapshot.val();
                var counter = childData.water_count;
                WaterCount.push(counter);
                
                
                });
            });
    }
});
console.info(WaterCount);
function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
            }]
        },
        scales: {
            yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 1,
                        stepValue: 5,
                        max: 10
                    }
                }]
        },
    });
}

$("#renderBtn").click(
    function () {
        console.info(WaterCount);
        // data = [int(WaterCount[0]), int(WaterCount[1]),int(WaterCount[2]), int(WaterCount[3]),int(WaterCount[4]),int(WaterCount[5]),int(WaterCount[7])];
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        // console.info(data);
        renderChart(WaterCount, labels);
    }
);