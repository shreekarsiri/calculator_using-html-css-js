
const display=document.getElementById("display");
console.log(display);
console.log(display.value);

function appendToDisplay(input){
display.value+=input;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}