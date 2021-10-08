function mcrw_data() {
  var cr_text;
  var str = document.getElementById("mcrw_Input").value;
  var cr_code = str.substring(0,2);
     switch(cr_code) {
    case "00":cr_text = "00 - Reset command.";break;          
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
    case "0B":cr_text = "0B - Card fully inserted.";break;        
    case "0C":cr_text = "0C - Card fully removed.";break;        
    case "0D":cr_text = "0D - Card detection - being inserted or not fully removed.";break;        
    case "0E":cr_text = "0E - CIM verify.";break;        
    case "0F":cr_text = "0F - CIM turnaround test.";break;        
    case "10":cr_text = "10 - CIM service test.";break;        
    case "11":cr_text = "11 - CIM self test.";break;        
    case "20":cr_text = "20 - Battery/relay test.";break;        
    case "21":cr_text = "21 - TICC bin shutter test.";break; 
    case "28":cr_text = "28 - Write buffer.";break;        
    case "29":cr_text = "29 - Write card.";break;        
    case "70":cr_text = "70 - SCIF Command.";break;     
    default:cr_text = " ";
  }
    document.getElementById("mcrw_Byte0").innerHTML = "Byte 0  : " + cr_text;
    
    var text;
    var code = document.getElementById("mcrw_Input").value;
    var str = code;
    var bit0 = ["Track 1."+"<br>"]; 
    var bit1 = ["Track 2."+"<br>"];
    var bit2 = ["Track 3."+"<br>"]; 
    var bit3 = ["Read error (Parity or LRC)."+"<br>"];
    var bit4 = ["Read error (Comms fail)."+"<br>"];
    var bit5 = ["Read after write error."+"<br>"];    
    var bit6 = ["Write error(Comms failed)."+"<br>"];
    var bit7 = ["Write error (Invalid data)."+"<br>"];
    var x = str.substring(0,2);
    var res = str.substring(2,3);
    var text;
    if (x == "70" && res == "0") {text = " ";}
    else if (x == "70" && res == "1"){text = bit4;}
    else if (x == "70" && res == "2"){text = bit5;} 
    else if (x == "70" && res == "3"){text = bit4+bit5;} 
    else if (x == "70" && res == "4"){text = bit6;} 
    else if (x == "70" && res == "5"){text = bit4+bit6;} 
    else if (x == "70" && res == "6"){text = bit5+bit6;}
    else if (x == "70" && res == "7"){text = bit4+bit5+bit6;} 
    else if (x == "70" && res == "8"){text = bit7;} 
    else if (x == "70" && res == "9"){text = bit4+bit7;} 
    else if (x == "70" && res == "A"){text = bit5+bit7;} 
    else if (x == "70" && res == "B"){text = bit4+bit5+bit7;} 
    else if (x == "70" && res == "C"){text = bit6+bit7;}
    else if (x == "70" && res == "D"){text = bit4+bit6+bit7;}
    else if (x == "70" && res == "E"){text = bit5+bit6+bit7;} 
    else if (x == "70" && res == "F"){text = bit4+bit5+bit6+bit7;}
    else {text = " ";} 
    var res2 = str.substring(3,4);
    var text2;
    if (x == "70" && res2 == "0"){text2 = " ";} 
    else if (x == "70" && res2 == "1"){text2 = bit0;} 
    else if (x == "70" && res2 == "2"){text2 = bit1;}  
    else if (x == "70" && res2 == "3"){text2 = bit0+bit1;} 
    else if (x == "70" && res2 == "4"){text2 = bit2;}  
    else if (x == "70" && res2 == "5"){text2 = bit0+bit2;} 
    else if (x == "70" && res2 == "6"){text2 = bit1+bit2;}  
    else if (x == "70" && res2 == "7"){text2 = bit0+bit1+bit2;}  
    else if (x == "70" && res2 == "8"){text2 = bit3;}  
    else if (x == "70" && res2 == "9"){text2 = bit0+bit3;}  
    else if (x == "70" && res2 == "A"){text2 = bit1+bit3;} 
    else if (x == "70" && res2 == "B"){text2 = bit0+bit1+bit3;}  
    else if (x == "70" && res2 == "C"){text2 = bit2+bit3;}  
    else if (x == "70" && res2 == "D"){text2 = bit0+bit2+bit3;} 
    else if (x == "70" && res2 == "E"){text2 = bit1+bit2+bit3;} 
    else if (x == "70" && res2 == "F"){text2 = bit0+bit1+bit2+bit3;}
    
    // **** If user inputs any number other than 70 in Byte 0 *******
    
    else if (x != "70" && res == "1" && res2 == "0"){text2 = "Stage.";} 
    else if (x != "70" && res == "1" && res2 == "1"){text2 = "Release.";}
    else if (x != "70" && res == "2" && res2 == "0"){text2 = "Power on.";}
    else if (x != "70" && res == "2" && res2 == "1"){text2 = "Power off.";}
    else if (x != "70" && res == "2" && res2 == "2"){text2 = "Smart Card Direct.";}
    else if (x != "70" && res == "2" && res2 == "5"){text2 = "SCIF initialize.";}
    else if (x != "70" && res == "2" && res2 == "7"){text2 = "EMV Smart Card Direct.";}
    else if (x != "70" && res == "2" && res2 == "8"){text2 = "EMV Power on.";}
    else if (x != "70" && res == "3" && res2 == "0"){text2 = "Contact block.";}
    else if (x != "70" && res == "3" && res2 == "1"){text2 = "Firmware ID.";} 
    else {text2 = "";}  
    
      text = document.getElementById("mcrw_Byte1").innerHTML = "Byte 1 : " + (text+text2);
    
    var text;
    var code = document.getElementById("mcrw_Input").value;
    var str = code;
    var bit0 = ["Shutter jammed open."+"<br>"]; 
    var bit1 = ["Shutter jammed closed."+"<br>"];
    var bit2 = ["Shutter switch malfunction"+"<br>"]; 
    var bit3 = ["Card jam in forward direction(towards capture bin)."+"<br>"];
    var bit4 = ["Card jam in reverse direction(towards shutter)."+"<br>"];
    var bit5 = ["Card jam during capture."+"<br>"];    
    var bit6 = ["Always."+"<br>"];
    var bit7 = ["Long card detected."+"<br>"];
    var nb0 = ["CROPF circuit failure."+"<br>"];
    var nb1 = ["Battery Low/Battery Charging."+"<br>"];
    var x = str.substring(0,2);
    var res = str.substring(4,5);
    var text;
    if (x != "20" && res == "0"){text = " ";} 
    else if (x != "20" && res == "1"){text = bit4;} 
    else if (x != "20" && res == "2"){text = bit5;} 
    else if (x != "20" && res == "3"){text = bit4+bit5;}
    else if (x != "20" && res == "4"){text = bit6;} 
    else if (x != "20" && res == "5"){text = bit4+bit6;} 
    else if (x != "20" && res == "6"){text = bit5+bit6;} 
    else if (x != "20" && res == "7"){text = bit4+bit5+bit6;}
    else if (x != "20" && res == "8"){text = bit7;} 
    else if (x != "20" && res == "9"){text = bit4+bit7;} 
    else if (x != "20" && res == "A"){text = bit5+bit7;} 
    else if (x != "20" && res == "B"){text = bit4+bit5+bit7;} 
    else if (x != "20" && res == "C"){text = bit6+bit7;} 
    else if (x != "20" && res == "D"){text = bit4+bit6+bit7;} 
    else if (x != "20" && res == "E"){text = bit5+bit6+bit7;} 
    else if (x != "20" && res == "F"){text = bit4+bit5+bit6+bit7;}
    else {text = " ";}    
    var res2 = str.substring(5,6);
    var text2;
    if (x != "20" && res2 == "0"){text2 = " ";} 
    else if (x != "20" && res2 == "1"){text2 = bit0;}
    else if (x != "20" && res2 == "2"){text2 = bit1;}  
    else if (x != "20" && res2 == "3"){text2 = bit0+bit1;} 
    else if (x != "20" && res2 == "4"){text2 = bit2;}  
    else if (x != "20" && res2 == "5"){text2 = bit0+bit2;}  
    else if (x != "20" && res2 == "6"){text2 = bit1+bit2;}  
    else if (x != "20" && res2 == "7"){text2 = bit0+bit1+bit2;}  
    else if (x != "20" && res2 == "8"){text2 = bit3;}  
    else if (x != "20" && res2 == "9"){text2 = bit0+bit3;}  
    else if (x != "20" && res2 == "A"){text2 = bit1+bit3;} 
    else if (x != "20" && res2 == "B"){text2 = bit0+bit1+bit3;}  
    else if (x != "20" && res2 == "C"){text2 = bit2+bit3;}  
    else if (x != "20" && res2 == "D"){text2 = bit0+bit2+bit3;}  
    else if (x != "20" && res2 == "E"){text2 = bit1+bit2+bit3;} 
    else if (x != "20" && res2 == "F"){text2 = bit0+bit1+bit2+bit3;}
    
    // ******* IF user inputs 20 in Byte0 *********
    
    else if (x == "20" && res2 == "1"){text2 = nb0;}
    else if (x == "20" && res2 == "2"){text2 = nb1;}  
    else if (x == "20" && res2 == "3"){text2 = nb0+nb1;} 
    else if (x == "20" && res2 == "4"){text2 = bit2;}  
    else if (x == "20" && res2 == "5"){text2 = nb0+bit2;}  
    else if (x == "20" && res2 == "6"){text2 = nb1+bit2;}  
    else if (x == "20" && res2 == "7"){text2 = nb0+nb1+bit2;}  
    else if (x == "20" && res2 == "8"){text2 = bit3;}  
    else if (x == "20" && res2 == "9"){text2 = nb0+bit3;}  
    else if (x == "20" && res2 == "A"){text2 = nb1+bit3;} 
    else if (x == "20" && res2 == "B"){text2 = nb0+nb1+bit3;}  
    else if (x == "20" && res2 == "C"){text2 = bit2+bit3;}  
    else if (x == "20" && res2 == "D"){text2 = nb0+bit2+bit3;}  
    else if (x == "20" && res2 == "E"){text2 = nb1+bit2+bit3;} 
    else if (x == "20" && res2 == "F"){text2 = nb0+nb1+bit2+bit3;}
    else {text2 = " ";}  
    
      text = document.getElementById("mcrw_Byte2").innerHTML = "Byte 2 : " +  (text+text2);
    
    var text;
    var code = document.getElementById("mcrw_Input").value;
    var str = code;
    var bit0 = ["PD1 blocked."+"<br>"];
    var bit1 = ["PD2 blocked."+"<br>"];
    var bit2 = ["PD3 blocked."+"<br>"];
    var bit3 = ["PD1 or PD2 or PD3 busy."+"<br>"];
    var bit4 = ["Shutter switch open."+"<br>"];
    var bit5 = ["Width switch blocked."+"<br>"];    
    var bit6 = ["LFCC bin full soon/full."+"<br>"];
    var bit7 = ["Reader is HiCo Capable - 1 = true, 0= false "+"<br>"];
    var res = str.substring(6,7);
    var text;
    if (res == "0"){text = " ";} 
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
    else {text = " ";}    
    var res2 = str.substring(7,8);
    var text2;
    if (res2 == "0") {text2 = " ";} 
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
    else {text2 = " ";}  
    
      text = document.getElementById("mcrw_Byte3").innerHTML = "Byte 3 : " +  (text+text2);
    
    var cr_text;
  var str = document.getElementById("mcrw_Input").value;
  var cr_code = str.substring(8,10);
     switch(cr_code) {
    case "00":cr_text = "00 - No error.";break;          
    case "11":cr_text = "11 - Self test error 1.";break; 
    case "12":cr_text = "12 - Self test error 2.";break;
    case "13":cr_text = "13 - Self test error 3.";break;
    case "14":cr_text = "14 - Self test error 4.";break;     
    case "15":cr_text = "15 - Self test error 5.";break;
    case "16":cr_text = "16 - Self test error 6.";break;
    case "17":cr_text = "17 - Self test error 7.";break;     
    case "18":cr_text = "18 - Self test error 8.";break;    
    case "19":cr_text = "19 - Self test error 9.";break;     
    case "40":cr_text = "40 - CIM module permanently 'error'.";break;        
    case "41":cr_text = "41 - CIM module permanently “busy”.";break; 
    case "70":cr_text = "70 - Wrap connector attached.";break;
    case "71":cr_text = "71 - Comms timeout or open line.";break;         
    default:cr_text = " ";
  }
    document.getElementById("mcrw_Byte4").innerHTML = "Byte 4 : " + cr_text;
    
    
    var cr_text;
  var str = document.getElementById("mcrw_Input").value;
  var cr_code = str.substring(10,12);
     switch(cr_code) {
    case "00":cr_text = "00 - CIM: No error or MM: Comms error.";break;          
    case "01":cr_text = "01 - CIM: Comms error or MM: Quality 1.";break; 
    case "02":cr_text = "02 - MM Only, Quality 2.";break;
    case "03":cr_text = "03 - MM Only, Quality 3.";break;
    case "04":cr_text = "04 - MM Only, Quality 4.";break;     
    case "06":cr_text = "06 - MM Only, Quality 5.";break;
    case "07":cr_text = "07 - MM Only, No MM.";break;
    case "08":cr_text = "08 - MM/CIM Module Defective.";break;     
    case "09":cr_text = "09 - CIM module or interface pcb defective.";break;    
    case "0A":cr_text = "0A - Error in track 3 data.";break;     
    case "40":cr_text = "40 - CIM module permanently 'error'.";break;        
    case "41":cr_text = "41 - CIM module permanently “busy”.";break; 
    case "70":cr_text = "70 - Wrap connector attached.";break;
    case "71":cr_text = "71 - Comms timeout or open line.";break;         
    default:cr_text = " ";
  }
    document.getElementById("mcrw_Byte5").innerHTML =
        "Byte 5 : " + cr_text;
    
    
    }
window.onload = init;