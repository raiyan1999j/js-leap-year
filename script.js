function mypen(){
    var a = parseInt(document.getElementById('num').value);
    var b;
    if(a%4===0 && a%100!==0){b="this is leap year";}
    else if(a%100===0 && a%400===0 && a%4===0){b="this is  leap year";}
    else{b="this is not leap year";}
    document.getElementById('demo').innerHTML=b;
}
function myfun(){
    var a =parseInt(document.getElementById('num').value);
    var b;
    if (a%4===0 && a%100!==0){b="it's dividable by 4 "+"<br>" + "not dividable by 100";}
        else if(a%100===0 && a%4===0 && a%400){b="its dividable by 100" + "<br>" + "and also by 4"+ "<br>" + "also by 400";}
    else{b="its not dividable by 400" + "<br>" + "and not dividable by 4" +"<br>" + "and also not by 100";}
    document.getElementById('demo2').innerHTML=b;
}