function noboldText(){
document.getElementById('seconddiv').style.fontWeight = 'normal'
localStorage.setItem("font", 'normal');
}
function boldText(){
document.getElementById('seconddiv').style.fontWeight = 'bolder'
localStorage.setItem("font", 'bolder');     
}

function takeFont(){
var font = localStorage.getItem("font");
    $("#seconddiv").changeFontTo(font);
}

jQuery.fn.changeFontTo = function(font){
this.children().css("font-family", font);
};


(function mainboldText(){
document.addEventListener("DOMContentLoaded", takeFont);})();