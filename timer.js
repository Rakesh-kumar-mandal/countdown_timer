var givenDate = new Date("dec 31, 2021 08:57:38").getTime();

var x = setInterval(function() {
    var current = new Date().getTime();
    var timer = givenDate - current;
    var days = Math.floor(timer / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timer % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((timer % (1000 * 60 * 60))/(1000 * 60));
    var seconds = Math.floor((timer % (1000 * 60))/(1000));
    document.getElementById("d").innerHTML = days ;
    document.getElementById("h").innerHTML = hours ;
    document.getElementById("m").innerHTML = minutes ;
    document.getElementById("s").innerHTML = seconds ;

    if (timer < 0) {
        clearInterval(x);
        document.getElementById("s").innerHTML = "TIME UP!" ;
        document.getElementById("d").innerHTML = '0' ;
        document.getElementById("h").innerHTML = '0' ; 
        document.getElementById("m").innerHTML = '0' ; 
        document.getElementById("s").innerHTML = '0' ; 
    }

}, 1000); 