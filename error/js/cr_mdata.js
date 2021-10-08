function cr_mdata() {
  var cr_text;
  var cr_code = document.getElementById("crInput0").value;
    var res = cr_code.substring(0,2);
     switch(res) {
    case "00":cr_text = "00 - Reset.";break;          
    case "01":cr_text = "01 - Accept.";break;          
    case "02":cr_text = "02 - Read.";break;       
    case "03":cr_text = "03 - Write.";break;
    case "04":cr_text = "04 - Determine reader state.";break;       
    case "05":cr_text = "05 - Eject.";break;       
    case "06":cr_text = "06 - Capture.";break;       
    case "07":cr_text = "07 - Disable.";break;        
    case "08":cr_text = "08 - Speed test.";break;        
    case "09":cr_text = "09 - Shutter/sensor test.";break;        
    case "0A":cr_text = "0A - Cleaning cycle test.";break;        
    case "0B":cr_text = "0B - Card insertion.";break;        
    case "0C":cr_text = "0C - Card removal.";break;        
    case "0D":cr_text = "0D - Card detection.";break;        
    case "0E":cr_text = "0E - CIM verify.";break;        
    case "0F":cr_text = "0F - CIM turnaround.";break;        
    case "10":cr_text = "10 - CIM service test.";break;        
    case "11":cr_text = "11 - CIM self test.";break;        
    case "20":cr_text = "20 - Battery/relay test.";break;        
    case "28":cr_text = "28 - Write buffer.";break;        
    case "29":cr_text = "29 - Write card.";break;        
    case "70":cr_text = "70 - SCIF Command.";break;     
    default:cr_text = "I have never heard of that error code.";
  }
    document.getElementById("cr_Byte0").innerHTML = cr_text;
    
    var text;
    var str = cr_code;
    var bit0 = ["Track 1."+"<br>"]; 
    var bit1 = ["Track 2."+"<br>"];
    var bit2 = ["Track 3."+"<br>"]; 
    var bit3 = ["Read error (Parity or LRC)."+"<br>"];
    var bit4 = ["Read error (Comms fail)."+"<br>"];
    var bit5 = ["Read after write error."+"<br>"];    
    var bit6 = ["Write error(Comms failed)."+"<br>"];
    var bit7 = ["Write error (Invalid data)."+"<br>"];
    var res = str.substring(3,4);
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
    var res2 = str.substring(2,3);
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
    
      text = document.getElementById("cr_Byte1").innerHTML = (text+text2);
    
    var str = cr_code;
    var bit0 = ["Shutter jammed open."+"<br>"]; 
    var bit1 = ["Shutter jammed closed."+"<br>"];
    var bit2 = ["Shutter switch malfunction"+"<br>"]; 
    var bit3 = ["Card jam in forward direction(towards capture bin)."+"<br>"];
    var bit4 = ["Card jam in reverse direction(towards shutter)."+"<br>"];
    var bit5 = ["Card jam during capture."+"<br>"];    
    var bit6 = ["Always."+"<br>"];
    var bit7 = ["Long card detected."+"<br>"];
    var res = str.substring(5,6);
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
    var res2 = str.substring(4,5);
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
    
      text = document.getElementById("cr_Byte2").innerHTML = (text+text2);

    var str = cr_code;
    var bit0 = ["PD1 blocked."+"<br>"]; 
    var bit5 = ["Width switch blocked."+"<br>"];    
    var bit6 = ["LFCC bin full soon/full."+"<br>"];
    var bit7 = ["Unused."+"<br>"];
    var res = str.substring(7,8);
    var text;
    if (res == "0") {text = "";} 
    else if (res == "1"){text = bit4;} 
    else if (res == "2"){text = bit5;} 
    else if (res == "3"){text = bit4+bit5;} 
    else if (res == "4"){text = bit6;} 
    else if (res == "5"){text = bit4+bit6;} 
    else if (res == "6")
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
        text = "Sorry, only 0-9 & A-F characters allowed.";
    }    
    var res2 = str.substring(6,7);
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
        text2 = "Sorry, only 0-9 & A-F characters allowed.";
    }  
    
      text = document.getElementById("cr_Byte3").innerHTML = (text+text2);
    
    var text4;
    var str = cr_code;
    var bit0 = ["PD7 blocked."+"<br>"]; 
    var bit1 = ["PD5/6 Stopper pin/contacts down."+"<br>"];
    var bit2 = ["Always."+"<br>"]; 
    var bit3 = ["Always."+"<br>"];
    var bit4 = ["Always."+"<br>"];
    var bit5 = ["Always."+"<br>"];    
    var bit6 = ["Always."+"<br>"];
    var bit7 = ["Always."+"<br>"];
    var res = str.substring(9,10);
    if (res == "0") {
        text4 = bit0;
    } 
    else if (res == "1")
    {
        text = bit4;
    } 
    else if (res == "2")
    {
        text = bit5;
    } 
    else if (res == "3")
    {
        text = bit4+bit5;
    } 
    else if (res == "4")
    {
        text = bit6;
    } 
    else if (res == "5")
    {
        text = bit4+bit6;
    }
    else if (res == "6")
    {
        text = bit5+bit6;
    } 
    else if (res == "7")
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
    var res2 = str.substring(8,9);
    var text2;
    if (res2 == "0") {
        text2 = bit0;        
    } else if (res2 == "1")
    {
        text2 = bit1;
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

      text4 = document.getElementById("cr_Byte4").innerHTML = (text+text2);
}
window.onload = init;
  