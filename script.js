var tip = 0.05;

function resetdata(){
    tip = 0.05;
    document.getElementsByClassName("value")[0].innerHTML = '$0.00';
    document.getElementsByClassName("value")[1].innerHTML = '$0.00';

    document.getElementById("billvalue").value = 0;
    document.getElementsByClassName("button cyanize")[0].value = 0;
    document.getElementById("npeople").value = 0;
}

function customtip(){
    tip = document.getElementsByClassName("button cyanize")[0].value / 100;
    calculatetip();
}

function changetip(newtipvalue){
    tip = newtipvalue;
    calculatetip();
}

function calculatetip(){
    var bill = document.getElementById("billvalue").value;
    var npeople = document.getElementById("npeople").value;
    
    var tipamountperson = (bill * tip)/npeople;
    var totalperson = (bill/npeople) + tipamountperson;
    
    document.getElementsByClassName("value")[0].innerHTML = '$' + tipamountperson;
    document.getElementsByClassName("value")[1].innerHTML = '$' + totalperson;
}

