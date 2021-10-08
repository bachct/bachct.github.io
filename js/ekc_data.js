function ekc_data() {
    var text;
    var code = document.getElementById("ekc_Input").value;
    var str = code;
    var res = str.substring(0,1);
    var res2 = str.substring(1,2);
    
text = document.getElementById("ekc_Byte0").innerHTML = (res + res2);

    var text;
    var code = document.getElementById("ekc_Input").value;
    var str = code;
    var bit0 = ["TxRdy,set when ready to receive a character for transmission."+"<br>"]; 
    var bit1 = ["RxRdy,set when a character has been received."+"<br>"];
    var bit2 = ["TxEmpty set when USART has no characters to transmit."+"<br>"]; 
    var bit3 = ["0."+"<br>"];
    var bit4 = ["Overrun error,set when a character is not read before the next one becomes available."+"<br>"];
    var bit5 = ["Framing error,set when a valid stop bit is not detected at the end of every character."+"<br>"];    
    var bit6 = ["0."+"<br>"];
    var bit7 = ["Data Set Ready (DSR),set when security module has passed its level 0."+"<br>"];
    var res = str.substring(2, 3);
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
    else {text = "";}    
    var res2 = str.substring(3, 4);
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
    else {text2 = "";}  
    
text = document.getElementById("ekc_Byte1").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("ekc_Input").value;
    var str = code;
    var bit0 = ["DSR fail."+"<br>"]; 
    var bit1 = ["TxEmpty not empty."+"<br>"];
    var bit2 = [""+"<br>"]; 
    var bit3 = [""+"<br>"];
    var bit4 = [""+"<br>"];
    var bit5 = [""+"<br>"];    
    var bit6 = [""+"<br>"];
    var bit7 = [""+"<br>"];
    var res = str.substring(4,5);
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
    else {text = "";}    
    var res2 = str.substring(5,6);
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
    else {text2 = "";}     
    text = document.getElementById("ekc_Byte2").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("ekc_Input").value;
    var str = code;
    var bit0 = ["set=on receiving a command."+"<br>"]; 
    var bit1 = ["set=on receiving a message."+"<br>"];
    var bit2 = ["set=timeout/rubbish returned continually."+"<br>"]; 
    var bit3 = ["set=NAKs returned continually."+"<br>"];
    var bit4 = [""+"<br>"];
    var bit5 = [""+"<br>"];    
    var bit6 = [""+"<br>"];
    var bit7 = [""+"<br>"];
    var res = str.substring(6,7);
    var text;
    if (res == "0") {text = "";} 
    else if (res == "1"){text = bit4;} 
    else if (res == "2")
    {
        text = bit5;
    } else if (res == "3")
    {
        text = bit4+bit5;
    } else if (res == "4")
    {
        text = bit6;
    } else if (res == "5")
    {
        text = bit4+bit6;
    } else if (res == "6")
    {
        text = bit5+bit6;
    } else if (res == "7")
    {
        text = bit4+bit5+bit6;
    } else if (res == "8")
    {
        text = bit7;
    } else if (res == "9")
    {
        text = bit4+bit7;
    } else if (res == "A")
    {
        text = bit5+bit7;
    } else if (res == "B")
    {
        text = bit4+bit5+bit7;
    } else if (res == "C")
    {
        text = bit6+bit7;
    } else if (res == "D")
    {
        text = bit4+bit6+bit7;
    } else if (res == "E")
    {
        text = bit5+bit6+bit7;
    } else if (res == "F")
    {
        text = bit4+bit5+bit6+bit7;
    }else {
        text = "";
    }    
    var res2 = str.substring(7,8);
    var text2;
    if (res2 == "0") {
        text2 = bit5;        
    } else if (res2 == "1")
    {
        text2 = bit0;
    } else if(res2 == "2")
    {
        text2 = bit1;
    }  else if(res2 == "3")
    {
        text2 = bit0+bit1;
    } else if (res2 == "4")
    {
        text2 = bit2;
    }  else if (res2 == "5")
    {
        text2 = bit0+bit2;
    }  else if (res2 == "6")
    {
        text2 = bit1+bit2;
    }  else if (res2 == "7")
    {
        text2 = bit0+bit1+bit2;
    }  else if (res2 == "8")
    {
        text2 = bit3;
    }  else if (res2 == "9")
    {
        text2 = bit0+bit3;
    }  else if (res2 == "A")
    {
        text2 = bit1+bit3;
    } else if (res2 == "B")
    {
        text2 = bit0+bit1+bit3;
    }  else if (res2 == "C")
    {
        text2 = bit2+bit3;
    }  else if (res2 == "D")
    {
        text2 = bit0+bit2+bit3;
    }  else if (res2 == "E")
    {
        text2 = bit1+bit2+bit3;
    } else if (res2 == "F")
    {
        text2 = bit0+bit1+bit2+bit3;
    } else {
        text2 = "";
    }  
    
      text = document.getElementById("ekc_Byte3").innerHTML = (text+text2);
    
}

window.onload = init;   
	