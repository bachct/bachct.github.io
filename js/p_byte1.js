function p_byte1() {
    var text;
    var code = document.getElementById("p_Input1").value;
    var str = code;
    var bit0 = ["0 - Knife sensor (open)."+"<br>"]; 
    var bit1 = ["1 - Paper jam sensor (covered)."+"<br>"];
    var bit2 = ["1 - Paper not loaded."+"<br>"]; 
    var bit3 = ["1 - Unit open sensor (open)."+"<br>"];
    var bit4 = ["1 - Printhead sensor (home)(not thermal printer)."+"<br>"];
    var bit5 = ["0 - Transport sensor (home)(not thermal printer)."+"<br>"];    
    var bit6 = ["0 - Always."+"<br>"];
    var bit7 = ["0 - Always."+"<br>"];
    var res = str.substring(0,1);
    var text;
    if (res == "0") {text = "";} 
    else if (res == "1"){text = bit4;} 
    else if (res == "2"){text = bit5;} 
    else if (res == "3"){text = bit4+bit5;} 
    else if (res == "4"){text = bit6;} 
    else if (res == "5"){text = bit4+bit6;} 
    else if (res == "6"){text = bit5+bit6;} 
    else if (res == "7"){text = bit4+bit5+bit6;} 
    else if (res == "8"){text = bit7;} 
    else if (res == "9"){text = bit4+bit7;} 
    else if (res == "A"){text = bit5+bit7;} 
    else if (res == "B"){text = bit4+bit5+bit7;} 
    else if (res == "C"){text = bit6+bit7;} 
    else if (res == "D"){text = bit4+bit6+bit7;} 
    else if (res == "E"){text = bit5+bit6+bit7;} 
    else if (res == "F"){text = bit4+bit5+bit6+bit7;}
    else {text = "Sorry, only 0-9 & A-F characters allowed.";}    
    var res2 = str.substring(1,2);
    var text2;
    if (res2 == "0") {text2 = bit5;} 
    else if (res2 == "1"){text2 = bit0;} 
    else if (res2 == "2"){text2 = bit1;}  
    else if (res2 == "3"){text2 = bit0+bit1;} 
    else if (res2 == "4"){text2 = bit2;}  
    else if (res2 == "5"){text2 = bit0+bit2;}  
    else if (res2 == "6"){text2 = bit1+bit2;}  
    else if (res2 == "7"){text2 = bit0+bit1+bit2;}  
    else if (res2 == "8"){text2 = bit3;}  
    else if (res2 == "9"){text2 = bit0+bit3;}  
    else if (res2 == "A"){text2 = bit1+bit3;} 
    else if (res2 == "B"){text2 = bit0+bit1+bit3;}  
    else if (res2 == "C"){text2 = bit2+bit3;}  
    else if (res2 == "D"){text2 = bit0+bit2+bit3;}  
    else if (res2 == "E"){text2 = bit1+bit2+bit3;} 
    else if (res2 == "F"){text2 = bit0+bit1+bit2+bit3;} 
    else {text2 = "Sorry, only 0-9 & A-F characters allowed.";}    
text = document.getElementById("p_Byte1").innerHTML = (text+text2);    
}
window.onload = init;