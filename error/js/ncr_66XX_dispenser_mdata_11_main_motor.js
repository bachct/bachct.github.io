function mainmotor() {
    var mstatus; 
    var code;
    mstatus = Number(document.getElementById("mstatus").value);
    if (mstatus === "11" && byte0 == 11) {
        code == "Main transport test"
    }
        
    else
        code = (mstatus == 43) ? "The serial number of the dispenser control board has changed and has not yet been authorized for use. This code is only generated by USB S1 dispenser variants" : "";  
    document.getElementById("answer").innerHTML = code;
}
window.onload = init;