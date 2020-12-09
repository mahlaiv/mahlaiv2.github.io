
const anim = document.querySelector("#anim");
const orange = document.querySelector("#orange");
const blue = document.querySelector("#blue");
const open_button = document.querySelector("#open-button");
const close_button = document.querySelector("#close-button");
const start_button = document.querySelector("#play");
const stop_button = document.querySelector("#stop");
const reload_button = document.querySelector("#reload");
const text_field = document.querySelector("#text-field");
const events = [];
let firstInitialX = orange.offsetWidth + 70;
let firstInitialY = orange.offsetHeight + 70;
let secondInitialX = orange.offsetWidth + 30;
let secondInitialY = orange.offsetHeight + 30;
let dx = 40;
let dy = 10;
let isActive = false;
let interval;

function controlbuttons(){
    open_button.addEventListener("click", () => {
        localStorage.clear();
        work.setAttribute("style", "display: flex;");
        text_field.innerHTML = "Ви нажали на кнопку Open";
        events.push("Ви нажали на кнопку Open");
        localStorage.setItem(new Date(), "Ви нажали на кнопку Open");
        document.querySelector("#localStor").value = "";
    });
    close_button.addEventListener("click", () => {
        work.setAttribute("style", "display: none;");
        text_field.innerHTML = "Ви нажали на кнопку Close";
        events.push("Ви нажали на кнопку Close");
        localStorage.setItem(new Date(), "Ви нажали на кнопку Close");
        let keys = Object.keys(localStorage),
            values = [],
            i = keys.length;
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        keys.sort();
        keys.forEach((item) => {
            if(events.includes(localStorage.getItem(item)))
            {
                document.querySelector("#localStor").value += `${localStorage.getItem(item)}   -   ${item}\n`;
            }
        });
    });
    start_button.addEventListener("click", () => {
        orange.setAttribute("style", `visibility:visible`);
        blue.setAttribute("style", `visibility:visible`);
        if(!isActive){
            interval = setInterval(draw, 20);
        }
        isActive = true;
        start_button.setAttribute("style", "display: none;");
        stop_button.setAttribute("style", "display: block;");
        text_field.innerHTML = "Ви нажали на кнопку Play";
        events.push("Ви нажали на кнопку Play");
        localStorage.setItem(new Date(), "Ви нажали на кнопку Play");
    });
    stop_button.addEventListener("click", () => {
        start_button.setAttribute("style", "display: block;");
        stop_button.setAttribute("style", "display: none;");
        text_field.innerHTML = "Ви нажали на кнопку Stop";
        events.push("Ви нажали на кнопку Stop");
        localStorage.setItem(new Date(), "Ви нажали на кнопку Stop");
        clearInterval(interval);
        isActive = false;
    });
    reload_button.addEventListener("click", () => {
        reload_button.setAttribute("style", "display: none;");
        start_button.setAttribute("style", "display: block;");
        text_field.innerHTML = "Ви нажали на кнопку Reload";
        localStorage.setItem(new Date(), "Ви нажали на кнопку Reload");
        events.push("Ви нажали на кнопку Reload");
    });
}
function randpos(){
    firstInitialY = Math.floor(Math.random() * Math.floor(anim.offsetHeight-50)+100);
    secondInitialX = Math.floor(Math.random() * Math.floor(anim.offsetWidth-50)+120);
}
function draw() {
    orange.setAttribute("style", `top: ${firstInitialY+100}px; left: ${firstInitialX+100}px`);
    blue.setAttribute("style", `top: ${secondInitialY+100}px; left: ${secondInitialX+100}px`);
    orange.style.display = "block";
    blue.style.display = "block";
    if(firstInitialX + dx > anim.offsetWidth-orange.offsetWidth || firstInitialX + dx < 2) {
        dx = -dx;
        text_field.innerHTML = "Горизонтальний кубик вдарився об стінку";
        events.push("Горизонтальний кубик вдарився об стінку");
        localStorage.setItem(new Date(), "Горизонтальний кубик вдарився об стінку");
    }
    firstInitialX += dx;
    if(secondInitialY + dy > anim.offsetHeight || secondInitialY + dy < 30) {
        dy = -dy;
        text_field.innerHTML = "Вертикальний кубик вдарився об стінку";
        events.push("Вертикальний кубик вдарився об стінку");
        localStorage.setItem(new Date(), "Вертикальний кубик вдарився об стінку");
    }  
    secondInitialY += dy;
  if(Math.abs(firstInitialY - secondInitialY) < orange.clientHeight - 10 + 1 && Math.abs(firstInitialX - secondInitialX) < orange.clientWidth - 10 + 1){
        clearInterval(interval);
        isActive = false;
        randpos();
        reload_button.setAttribute("style", "display: block;");
        start_button.setAttribute("style", "display: none;");
        stop_button.setAttribute("style", "display: none;");
        text_field.innerHTML = "Кубики зіткнулись";
        events.push("Кубики зіткнулись");
        localStorage.setItem(new Date(), "Кубики зіткнулись");
    }
}
(function main(){
    
    controlbuttons();

    randpos();

})();
