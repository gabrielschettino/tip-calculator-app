var tip = 0.05;

function resetdata(){
    tip = 0.05;
    
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
    
    console.log(totalperson);
    console.log(tipamountperson);

    
}

