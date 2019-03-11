window.onload = function() {
    function clock() {
        var now = new Date();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();

        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if(hour==0){
            hour=12;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        //12 hour format
        var twentyFourHour = now.getHours();
        var ampm = ' PM';
        if(twentyFourHour < 12) {
            ampm = ' AM';
        }
        var wish= 'Good Morning';
        if(ampm == ' AM'){
            wish ='Good Morning';
        }
        else if(ampm == ' PM' && hour<4)
        {
            wish = 'Good Afternoon';
        }
        else if(ampm == ' PM' && hour<9)
        {
            wish = 'Good Evening';
        }
        else {
            wish = 'Good Night';
        }
        //For Date
        var date=now.getDate();
        var month=now.getMonth();
        var year=now.getFullYear();

        var months = ['Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        document.getElementById('dayWish').innerHTML = wish ;
        document.getElementById('currentTime').innerHTML = hour+':'+min+':'+sec + ampm ;

        document.getElementById('currentDate').innerHTML = date+" "+months[month]+" "+year;

        setTimeout(clock, 1000);
    }
    clock();
}
