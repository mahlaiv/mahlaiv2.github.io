//exercise 1
const firstblock = document.getElementsByClassName("contacts1")[0];
const secondblock = document.getElementById("updiv1");
const thirdblock = document.getElementById("updiv3");
const fourthblock = document.getElementById("seconddiv");
const fifthblock = document.getElementById("fourthdiv");
const sixthblock = document.getElementById("downdiv");
const seventhblock = document.getElementsByClassName("contacts")[0];

const delay = 5000;

let blocks = [firstblock, secondblock, thirdblock, fourthblock, fifthblock, sixthblock, seventhblock];
let blocksHtml = [];

for(let i = 0; i < blocks.length; i++){
    blocksHtml.push(blocks[i].innerHTML);
}

function exercise1(){
    for(let i = 0; i < 7; i++){
        setTimeout(() => {
            blocks[i].innerHTML = i === 6 ? blocksHtml[0] : blocksHtml[i+1];
        }, 500 + i*delay);
    }
}

//exercise 2

function exercise2(){
    let counter = 1;
    let timerID = setInterval(setItalic, 5000);
    function setItalic(){
        if (counter % 2 === 1) {
            document.getElementById("fourthdiv").style.fontStyle = "italic";
        }
        
        else { document.getElementById("fourthdiv").style.fontStyle= "normal";
    }
       counter += 1;
}
}
let flag = 0;
function scrolldownn(){
$( document ).ready(function(){
      $( ".contacts" ).scroll(function(){ 
        $( "span" ).text( "Scroll" ) 
                   .css({ 
                     "display": "inline", 
                     "color": "red"
                   })
                   .fadeOut( "fast" );
setTimeout(function(){
    if (flag === 0) {
        document.getElementById("contacts1").style.fontStyle = "italic";
        document.getElementById("downdiv").style.fontStyle = "italic";
        flag = 1;
    }
    else {
        document.getElementById("contacts1").style.fontStyle = "normal";
        document.getElementById("downdiv").style.fontStyle = "normal";
        flag = 0;
    }
}, 5000);
      });
    });
}


//exercise 3

function exercise3(){
    let accountname = $("#updiv2-input1").val() || "";
    let repository  = $("#updiv2-input2").val() || "";
    let textarea  = $("#updiv2-input3");
if(!accountname || !repository){
sixthblock.innerHTML = "<p style = 'color:red;'> Input data </p>";
return;}
$.ajax({
        type: "get",
        url: `https://api.github.com/repos/${accountname}/${repository}/commits`,
        success: (result) =>{
        let text = "";
        result.forEach((el) => {
        text += `${el.commit.author.name}: ${el.commit.message} \n`;});
        textarea.val(text);},
        error: (xhr, textStatus, errorThrown) => {
            sixthblock.innerHTML = `<p style = 'color:red;'>Error: ${textStatus} (${errorThrown}) </p>`;
}});}

//exercise 4

function test1(){ console.log("test1");}
function test2(){ console.log("test1");}
function exercise4(callback1, callback2){ 
console.log("start test");
callback1();
callback2();
}

//exercise 5

//let inputArrg = document.getElementById("selsort1")[0]


function selectionSort(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}
function exercise5(){
    let inputArr = $("#selsort1").val();
    let resultsort  = $("#selsortresult");
    let startarray = inputArr.split(" ");
    let filterarr = startarray.filter((elem) => {
        return /^-?\d+\.?\d*$/.test(elem);
    });
    resultsort.val(selectionSort(filterarr.map(x=>+x)));}


(function main(){
    //exercise1();
    exercise2();
    scrolldownn();
    $("#updiv2-button").click(() => exercise3());
    exercise4(test1, test2);
    $("#buttonform").click(() => exercise5());


})();