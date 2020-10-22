function maxValue(){
    var text = $("#text").val();
    var nums = text.split(" ").map(x => +x);
    var max = Math.max(...nums);
    return nums.filter(x => x === max).length;
}

function setCookie(name,value,seconds) {
    var expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var allCookies = document.cookie.split(';');
    for(let i=0; i < allCookies.length; i++) {
        var c = allCookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function saveCookie(){
    var max = maxValue();
    alert(max);
    setCookie("max", max, 1000);
    $("#form").css("visibility", "hidden");
}
function deleteCookie(){
    if(!getCookie("max")){
        $("#form").css("visibility", "visible");
    } else{
        if(confirm("Want to delete cookies?")){
            console.log("test");
            eraseCookie("max");
            $("#form").css("visibility", "visible");
            if(confirm("Cookie is deleted. Do you want to reload the page?")){
                location.reload();
            }
        }
    }
}

(function main(){
 $("#button").click(saveCookie);
    document.addEventListener("DOMContentLoaded", deleteCookie); 
})();