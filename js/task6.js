function inputValue(from, to){
    $(to).val($(from).html());
}
function EventAdd(elemToChange, elemWithValue){
    $(elemWithValue).change(function(){
        $(elemToChange).html($(elemWithValue).val());
        localStorage.setItem(elemToChange, $(elemWithValue).val());
    });
}
function buttonclick(button, elem){
    $(button).click(function(){
        localStorage.removeItem(elem);
    });
}
function inputAll(){
    EventAdd(".contacts1", "#contacts1-input");
    EventAdd("#updiv1", "#updiv1-input");
    EventAdd("#seconddiv", "#seconddiv-input");
    EventAdd("#fourthdiv", "#fourthdiv-input");
    EventAdd("#downdiv1", "#downdiv1-input");
    buttonclick("#contacts1-button", ".contacts1");
    buttonclick("#updiv1-button", "#updiv1");
    buttonclick("#seconddiv-button", "#seconddiv");
    buttonclick("#fourthdiv-button", "#fourthdiv");
    buttonclick("#downdiv1-button", "#downdiv1");
}
function readlocalstorage(elem){
    if(localStorage.getItem(elem)){
        $(elem).html(localStorage.getItem(elem));
    }
}
function setshtml(){
    readlocalstorage(".contacts1");
    readlocalstorage("#downdiv1");
    readlocalstorage("#seconddiv");
    readlocalstorage("#fourthdiv");
    readlocalstorage("#updiv1");
    inputValue(".contacts1", "#contacts1-input");
    inputValue("#updiv1", "#updiv1-input");
    inputValue("#seconddiv", "#seconddiv-input");
    inputValue("#fourthdiv", "#fourthdiv-input");
    inputValue("#downdiv1", "#downdiv1-input");
    inputAll();
}

(function main6(){
document.addEventListener("DOMContentLoaded", setshtml); 
})();
