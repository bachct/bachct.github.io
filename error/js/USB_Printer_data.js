function usb_data() {
  var cr_text;
  var cr_code = document.getElementById("usb_Input").value;
    var res = cr_code.substring(0,2);
     switch(res) {
    case "30":cr_text = "30 - Receipt Printer.";break;          
    case "31":cr_text = "31 - Journal Printer.";break;          
    default:cr_text = "I have never heard of that error code.";
  }
    document.getElementById("pr_Byte0").innerHTML = cr_text;
  
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["BD sensor (Black Dot), 1=Black."+"<br>"];
    var bit6 = ["PB sensor (Paper End of Print engine), 1=Exhausted."+"<br>"];
    var bit5 = ["DF_2b sensor (Dual feeder #2 positioning sensor), 1 = Blocked."+"<br>"];
    var bit4 = ["DF_1b sensor (Dual feeder #1 positioning sensor), I = Blocked ."+"<br>"];
    var bit3 = ["DF2a sensor (Dual feeder #2 PE sensor), 1 = Empty."+"<br>"];
    var bit2 = ["DF_1a sensor (Dual feeder #1 FE sensor), 1 = Empty."+"<br>"];
    var bit1 = ["Paper low (#2) sensor, 1 = Paper Low."+"<br>"];
    var bit0 = ["Paper low (#1) sensor, 1 = Paper Low."+"<br>"];
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
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Always 0."+"<br>"];
    var bit5 = ["Cover Open Sensor, 1 = Open."+"<br>"];
    var bit4 = ["CBF sensor (Capture Bin Full), 1 = Full."+"<br>"];
    var bit3 = ["CB sensor (Capture Bin), 1 = Empty."+"<br>"];
    var bit2 = ["Exit sensor (Transport exit), 1 = Blocked."+"<br>"];
    var bit1 = ["TJ sensor (Transport Jam), 1 = Blocked."+"<br>"];
    var bit0 = ["HP sensor (Cutter Home Position), 1 =Home."+"<br>"];
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
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Always 0."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Feed Switch #2, 1 = Pushed."+"<br>"];
    var bit0 = ["Feed Switch (Standard model or Feeder #1), 1 = Pushed."+"<br>"];
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
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Printing, 1 = In progress."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Dual feed motor #2, 1 = Going."+"<br>"];
    var bit3 = ["Dual feed motor #1, 1 = Going."+"<br>"];
    var bit2 = ["Transport motor, 1 = Going."+"<br>"];
    var bit1 = ["Cutter motor, 1 = Going."+"<br>"];
    var bit0 = ["Feed motor, 1 = Going."+"<br>"];
    var res = str.substring(8,9);
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
    var res2 = str.substring(9,10);
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
    
      text = document.getElementById("pr_Byte4").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Fault state, 1 = Fault."+"<br>"];
    var bit6 = ["Warning due to Over Heated, 1 = Over Heated."+"<br>"];
    var bit5 = ["Non Transport Detection, 1 = Error."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Reboot flag, 1 = After reboot."+"<br>"];
    var bit0 = ["Recovery running, 1 = yes."+"<br>"];
    var res = str.substring(10,11);
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
    var res2 = str.substring(11,12);
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
    
      text = document.getElementById("pr_Byte5").innerHTML = (text+text2);
    
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Black mark error, 1 = Error."+"<br>"];
    var bit6 = ["Thermal head temperature, 1 = Error."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Transport jam, 1 = Jam."+"<br>"];
    var bit3 = ["Cutter jam, 1 = Jam."+"<br>"];
    var bit2 = ["Dual feeder jam, 1 = Jam."+"<br>"];
    var bit1 = ["Flash Erase/Write error or Memory full, 1 = Error."+"<br>"];
    var bit0 = ["H/W error -unrecoverable- (ROM,RAM, etc), 1 = Error."+"<br>"];
    var res = str.substring(12,13);
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
    var res2 = str.substring(13,14);
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
    
      text = document.getElementById("pr_Byte6").innerHTML = (text+text2);
    
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Capture Jam (inc. Customer tampering), 1 = Jam."+"<br>"];
    var bit6 = ["Cover Open, 1=Open."+"<br>"];
    var bit5 = ["PE (Print engine), 1 = Exhausted."+"<br>"];
    var bit4 = ["Reserved, 1 = Empty."+"<br>"];
    var bit3 = ["PE feeder #1, 1 = Empty."+"<br>"];
    var bit2 = ["Unable to load paper (Std model), 1 = Unable."+"<br>"];
    var bit1 = ["Unable to load paper feeder #2, 1 = Unable."+"<br>"];
    var bit0 = ["Unable to load paper feeder #1, 1 = Unable."+"<br>"];
    var res = str.substring(14,15);
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
    var res2 = str.substring(15,16);
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
    
      text = document.getElementById("pr_Byte7").innerHTML = (text+text2);
    
     var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Illegal sequence or parameter, 1 = Present."+"<br>"];
    var bit6 = ["24V Anomaly, 1 = Anomaly."+"<br>"];
    var bit5 = ["Capture - Customer tampering, 1 = Tampering."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Capture bin full, 1 = Full."+"<br>"];
    var bit2 = ["Executed Present, Purge or Refract w/o a receipt, 1 = Executed."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Paper low (#1) sensor, 1 = Paper Low."+"<br>"];
    var res = str.substring(16,17);
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
    var res2 = str.substring(17,18);
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
    
      text = document.getElementById("pr_Byte8").innerHTML = (text+text2);
    
    var res = cr_code.substring(18,20);
     switch(res) {
    case "30":cr_text = "30 - Receipt Printer.";break;          
    case "31":cr_text = "31 - Journal Printer.";break;          
    default:cr_text = "I have never heard of that error code.";
  }
    document.getElementById("pr_Byte9").innerHTML = cr_text;
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["PE sensor (Paper End of Print engine), 1 = Exhausted."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Paper low (#1) sensor, 1 = Paper Low."+"<br>"];
    var res = str.substring(20,21);
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
    var res2 = str.substring(21,22);
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
    
      text = document.getElementById("pr_Byte10").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Winding Jam sensor, 1 = High level."+"<br>"];
    var bit5 = ["Cover Open Sensor,1 = Open."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Always 0."+"<br>"];
    var res = str.substring(22,23);
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
    var res2 = str.substring(23,24);
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
    
      text = document.getElementById("pr_Byte11").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Always 0."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Feed Switch (Standard model or Feeder #1), 1 Pushed."+"<br>"];
    var res = str.substring(24,25);
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
    var res2 = str.substring(25,26);
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
    
      text = document.getElementById("pr_Byte12").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Printing, 1 = In progress."+"<br>"];
    var bit5 = ["Winding motor; 1 = Going."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Feed motor, 1 = Going."+"<br>"];
    var res = str.substring(26,27);
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
    var res2 = str.substring(27,28);
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
    
      text = document.getElementById("pr_Byte13").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Fault state, 1 = Fault."+"<br>"];
    var bit6 = ["Warning due to Over Heated, 1 = Over Heated."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Reboot flag, 1 = After reboot."+"<br>"];
    var bit0 = ["Recovery running, 1 = Yes."+"<br>"];
    var res = str.substring(28,29);
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
    var res2 = str.substring(29,30);
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
    
      text = document.getElementById("pr_Byte14").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Thermal head temperature, 1= Error."+"<br>"];
    var bit5 = ["Winding jam, 1=Jam."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Flash Erase/Write error or Memory full, 1 = Error."+"<br>"];
    var bit0 = ["H/W error -unrecoverable-. (ROM, RAM, etc), 1 = Error."+"<br>"];
    var res = str.substring(30,31);
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
    var res2 = str.substring(31,32);
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
    
      text = document.getElementById("pr_Byte15").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["Always 0."+"<br>"];
    var bit6 = ["Cover Open, 1 = Open."+"<br>"];
    var bit5 = ["PE (Print engine), 1 = Exhausted ."+"<br>"];
    var bit4 = ["Always 0."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Unable to load paper (Std model), 1 = Unable."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Always 0."+"<br>"];
    var res = str.substring(32,33);
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
    var res2 = str.substring(33,34);
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
    
      text = document.getElementById("pr_Byte16").innerHTML = (text+text2);
    
    var text;
    var code = document.getElementById("usb_Input").value;
    var str = code;
    var bit7 = ["illegal sequence or parameter, 1 = Present ."+"<br>"];
    var bit6 = ["24V Anomaly, 1 = Anomaly."+"<br>"];
    var bit5 = ["Always 0."+"<br>"];
    var bit4 = ["Paper Not Wound, 1 = Not Wound."+"<br>"];
    var bit3 = ["Always 0."+"<br>"];
    var bit2 = ["Always 0."+"<br>"];
    var bit1 = ["Always 0."+"<br>"];
    var bit0 = ["Paper low (#1) sensor, 1 = Paper Low ."+"<br>"];
    var res = str.substring(34,35);
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
    var res2 = str.substring(35,36);
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
    
      text = document.getElementById("pr_Byte17").innerHTML = (text+text2);
    
    }
window.onload = init;