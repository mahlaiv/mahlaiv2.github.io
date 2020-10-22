jQuery.fn.changefontsTo = function(fonts) {
    this.children().css("font-family", fonts);
};

function takefonts(){
    var fonts = localStorage.getItem("font-family");
    $("#content").changefontsTo(fonts);
}


function task4(){
    var elem = $("#fonts")
    elem.blur(function(){
        $("#content").changeColorTo(elem.val());
        localStorage.setItem("font-family", elem.val());
    });
}