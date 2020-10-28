function noboldText(){
document.getElementById('seconddiv').style.fontWeight = 'normal'
localStorage.setItem("font", 'normal');
}
function boldText(){
document.getElementById('seconddiv').style.fontWeight = 'bold'
localStorage.setItem("font", 'bold');     
}

function takeFont(){
var font = localStorage.getItem("font");
    $("#seconddiv").changeFontTo(font);
}

jQuery.fn.changeFontTo = function(font){
this.css("font-weight", font);
};


(function mainboldText(){
document.addEventListener("DOMContentLoaded", takeFont);})();