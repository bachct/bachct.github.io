function pr_data() {
 
    var text;
    var code = document.getElementById("pr_Input").value;
    var str = code;
    var bit7 = ["Always "+"<br>"];
    var bit6 = ["Fault status"+"<br>"];
    var bit5 = ["Always."+"<br>"];
    var bit4 = ["Exit sensor (covered)."+"<br>"];
    var bit3 = ["Paper out sensor (active)."+"<br>"];
    var bit2 = ["Black mark sensor (covered)."+"<br>"];
    var bit1 = ["Paper low sensor (active)."+"<br>"];
    var bit0 = ["Always."+"<br>"];
    var res = str.substring(0,1);
    var text;
    if (res == "0"){text = "";} 
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
    else {text = "";}    
    var res2 = str.substring(1,2);
    var text2;
    if (res2 == "0") {text2 = "";} 
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
    else {text2 = "";}  
    
      text = document.getElementById("pr_Byte0").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("pr_Input").value;
    var str = code;
    var bit7 = ["Always "+"<br>"];
    var bit6 = ["Always."+"<br>"];
    var bit5 = ["Transport sensor (home) (Not thermal printer)."+"<br>"];
    var bit4 = ["Printhead sensor (home) (Not thermal printer)."+"<br>"];
    var bit3 = ["Unit open sensor (open)."+"<br>"];
    var bit2 = ["Paper not loaded status."+"<br>"];
    var bit1 = ["Paper jam sensor (covered)."+"<br>"];
    var bit0 = ["Knife sensor (open)."+"<br>"];
    var res = str.substring(2,3);
    var text;
    if (res == "0"){text = "";} 
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
    else {text = "";}    
    var res2 = str.substring(3,4);
    var text2;
    if (res2 == "0") {text2 = "";} 
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
    else {text2 = "";}  
    
      text = document.getElementById("pr_Byte1").innerHTML = (text+text2);
    
        var text;
    var code = document.getElementById("pr_Input").value;
    var str = code;
    var bit7 = ["Always."+"<br>"];
    var bit6 = ["Always."+"<br>"];
    var bit5 = ["Always."+"<br>"];
    var bit4 = ["Always."+"<br>"];
    var bit3 = ["Communications failure status."+"<br>"];
    var bit2 = ["Controller RAM error status."+"<br>"];
    var bit1 = ["Controller ROM error status."+"<br>"];
    var bit0 = ["Interface ROM/RAM error status."+"<br>"];
    var res = str.substring(4,5);
    var text;
    if (res == "0"){text = "";} 
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
    else {text = "";}    
    var res2 = str.substring(5,6);
    var text2;
    if (res2 == "0") {text2 = "";} 
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
    else {text2 = "";}  
    
      text = document.getElementById("pr_Byte2").innerHTML = (text+text2);
    
     var text;
    var code = document.getElementById("pr_Input").value;
    var str = code;
    var bit7 = ["Always."+"<br>"];
    var bit6 = ["Always."+"<br>"];
    var bit5 = ["Always."+"<br>"];
    var bit4 = ["Always."+"<br>"];
    var bit3 = ["Always."+"<br>"];
    var bit2 = ["Failed to detect black mark status."+"<br>"];
    var bit1 = ["Paper jam status."+"<br>"];
    var bit0 = ["Knife jam status."+"<br>"];
    var res = str.substring(6,7);
    var text;
    if (res == "0"){text = "";} 
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
    else {text = "";}    
    var res2 = str.substring(7,8);
    var text2;
    if (res2 == "0") {text2 = "";} 
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
    else {text2 = "";}  
    
      text = document.getElementById("pr_Byte3").innerHTML = (text+text2);
    
    }
window.onload = init;