let display = document.getElementById("display");
bts = document.querySelectorAll("button");
let displayvalue="";

for (no of bts){
    no.addEventListener("click",function(e) {
       buttonText = e.target.innerText;
    if (buttonText == "C") {
            displayvalue =  " ";
            display.value = displayvalue;
        }
       else if (buttonText == "=") {
            display.value = eval(displayvalue);
        }
       else {
            displayvalue += buttonText;
            display.value = displayvalue;
        
       }
    })
}




