const work = document.querySelector("#work");
const canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');
const open_button = document.querySelector("#open-button");
const close_button = document.querySelector("#close-button");
const start_button = document.querySelector("#play");
const stop_button = document.querySelector("#stop");
const reload_button = document.querySelector("#reload");
const text_field = document.querySelector("#text-field");
const events = [];
let side = 15;
let firstInitialX = 15;
let firstInitialY = 15;
let secondInitialX = 15;
let secondInitialY = 15;
let dx = 4;
let dy = 2;
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
    firstInitialY = Math.floor(Math.random() * Math.floor(canvas.height - 2*side)) + 10;
    secondInitialX = Math.floor(Math.random() * Math.floor(canvas.width - 2*side)) + 10;
}
function drawsquare(x, y, color) {
  var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x, y , 10, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawsquare(firstInitialX, firstInitialY, "rgb(135,206,250)");
    drawsquare(secondInitialX, secondInitialY, "rgb(255, 105, 0)");
    if(firstInitialX + dx > canvas.width-side || firstInitialX + dx < 0) {
        dx = -dx;
        text_field.innerHTML = "Горизонтальний кубик вдарився об стінку";
        events.push("Горизонтальний кубик вдарився об стінку");
        localStorage.setItem(new Date(), "Горизонтальний кубик вдарився об стінку");
    }
    firstInitialX += dx;
    if(secondInitialY + dy > canvas.height-side || secondInitialY + dy < 0){
        dy = -dy;
        text_field.innerHTML = "Вертикальний кубик вдарився об стінку";
        events.push("Вертикальний кубик вдарився об стінку");
        localStorage.setItem(new Date(), "Вертикальний кубик вдарився об стінку");
    }  
    secondInitialY += dy;
   if(Math.abs(firstInitialY - secondInitialY) < 9 && Math.abs(firstInitialX - secondInitialX) < 9){
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
