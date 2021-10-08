function data(){ 
    var text;
    var text1;
    var bit14;
    var bit1400;
    var error;
    var error2;
    var error3;
    var error4;
    var error5;
    var error6;
    var error7;
    var error8;
    var error9;
    var error10;
    var error11;
    var error12;
    var code = document.getElementById("myInput0").value; 
    var bit7 = ["Virtual cassette type 3 is low on bills." + "<br>"];
    var bit6 = ["Virtual cassette type 4 is low on bills." + "<br>"];
    var bit5 = ["Always." + "<br>"];
    var bit4 = ["Pick fail occurred." + "<br>"];
    var bit3 = ["Fatal malfunction IN0P flag set." + "<br>"];
    var bit2 = ["Self-Test command." + "<br>"];
    var bit1 = ["Virtual cassette type 1 is low on bills." + "<br>"];
    var bit0 = ["Virtual cassette type 2 is low on bills." + "<br>"];
    var DBit7 = ["LVDT transducer could not make an accurate assessment of the number of bills which have passed under it, or unable to learn bill parameters during learn bill parameters command." + "<br>"];
    var DBit6 = ["Thermistor indicates cold (below 10 deg. C)." + "<br>"];
    var DBit5 = ["A cassette with the correct ID was not found installed in the dispenser unit. This may be caused by the cassette installed bit being a logic 1 or the correct ID (three bits) was not found Note: If there is a fault reported against the equivalent auxiliary M_DATA, an error has occurred from a module that does not have a cassette present (or invalid cassette ID)." + "<br>"];
    var DBit4 = ["At least one extra note picked." + "<br>"];
    var DBit3 = ["At least one long note detected." + "<br>"];
    var DBit2 = ["At least one short note detected." + "<br>"];
    var DBit1 = ["At least one multiple (double) note detected." + "<br>"];
    var DBit0 = ["At least one overlength note detected." + "<br>"];
    var bs1 = ["<font size='2px'>Byte 1: Main Motor Status.</font><br>"];
    var bs2 = ["<font size='2px'>Byte 1: Presenter Status.</font><br>"];
    var bs3 = ["<font size='2px'>Byte 1: Presenter Format.</font><br>"];
    var bs4 = ["<font size='2px'>Byte 1: Presenter Bill Motor.</font><br>"];
    var bs5 = ["<font size='2px'>Byte 1: Exit Shutter.</font><br>"];
    var bs55 = ["<font size='2px'>Byte 2: Exit Shutter.</font><br>"];
    var bs6 = ["<font size='2px'>Byte 1: Presenter Clamp.</font><br>"];
    var bs66 = ["<font size='2px'>Byte 2: Presenter Clamp.</font><br>"];
    var bs70 = ["<font size='2px'>Byte 2: Auxiliary Status, Virtual Cassette Type 1:</font><br>"];
    var bs71 = ["<font size='2px'>Byte 3: Auxiliary Status, Virtual Cassette Type 2:</font><br>"];
    var bs72 = ["<font size='2px'>Byte 4: Auxiliary Status, Virtual Cassette Type 3:</font><br>"];
    var bs73 = ["<font size='2px'>Byte 5: Auxiliary Status, Virtual Cassette Type 4:</font><br>"];
    var bs74 = ["<font size='2px'>Byte 6: Divert Reason, Virtual Cassette Type 1:</font><br>"];
    var bs75 = ["<font size='2px'>Byte 7: Divert Reason, Virtual Cassette Type 2:</font><br>"];
    var bs76 = ["<font size='2px'>Byte 8: Divert Reason, Virtual Cassette Type 3:</font><br>"];
    var bs77 = ["<font size='2px'>Byte 9: Divert Reason, Virtual Cassette Type 4:</font><br>"];
    var D00 = [bs2+"00 - Operation successful."];
    var D01 = [bs2+"01 - Shutter jammed closed during operation or open sensor failed indicating not open."];
    var D02 = [bs2+"02 - Shutter jammed open during operation or closed sensor failed indicating not closed."];
    var D04 = [bs2+"04 - Clamp not in position initially."];
    var D06 = [bs2+"06 - Clamp jammed moving home or home sensor failed showing not home."];
    var D07 = [bs2+"07 - Clamp jammed moving to present or present sensor failed showing not present ."];
    var D0C = [bs2+"0C - Overfill sensor blocked initially ."];
    var D11 = [bs2+"11 - Overfill sensor failed clear."];
    var D13 = [bs2+"13 - Overfill sensor blocked at end of purge operation."];
    var D14 = [bs2+"14 - TSEN 1 sensor blocked or 5014 line active initially on present or at end of purge."];
    var D15 = [bs2+"15 - TSEN 2 sensor blocked or SOfl line active initially on present or at end of purge ."];
    var D16 = [bs2+"16 - TSEN 3 sensor blocked or 5014 line active initially on present or at end of purge."];
    var D17 = [bs2+"17 - TSEN 4 sensor blocked or SOH line active initially on present or at end of purge."];
    var D18 = [bs2+"18 - TSEN 5 sensor blocked or SOH line active initially on present or at end of purge."];
    var D19 = [bs2+"19 - TSEN 6 sensor blocked or SOH line active initially on present or at end of purge."];
    var D1A = [bs2+"1A - TSEN 7 sensor blocked or SOH line active initially on present or at end of purge."];
    var D1B = [bs2+"1B - TSEN 8 sensor blocked or SOH line active initially on present or at end of purge."];
    var D1C = [bs2+"1C - TSEN 1 sensor failed clear initially on present or at end of purge."];
    var D1D = [bs2+"1D - TSEN 2 sensor failed clear initially on present or at end of purge."];
    var D1E = [bs2+"1E - TSEN 3 sensor failed clear initially on present or at end of purge."];
    var D1F = [bs2+"1F - TSEN 4 sensor failed clear initially on present or at end of purge."];
    var D20 = [bs2+"20 - TSEN 5 sensor failed clear initially on present or at end of purge."];
    var D21 = [bs2+"21 - TSEN 6 sensor failed clear initially on present or at end of purge."];
    var D22 = [bs2+"22 - TSEN 7 sensor failed clear initially on present or at end of purge."];
    var D23 = [bs2+"23 - TSEN 8 sensor failed clear initially on present or at end of purge."];
    var D24 = [bs2+"24 - TSEN 1 sensor failed clear during operation."];
    var D25 = [bs2+"25 - TSEN 2 sensor failed clear during operation."];
    var D26 = [bs2+"26 - TSEN 3 sensor failed clear during operation."];
    var D27 = [bs2+"27 - TSEN 4 sensor failed clear during operation."];
    var D28 = [bs2+"28 - TSEN 5 sensor failed clear during operation."];
    var D29 = [bs2+"29 - TSEN 6 sensor failed clear during operation."];
    var D2A = [bs2+"2A - TSEN 7 sensor failed clear during operation."];
    var D2B = [bs2+"2B - TSEN 8 sensor failed clear during operation."];
    var D2C = [bs2+"2C - TSEN 1 sensor or SOH input failed blocked or bill jam during operation."];
    var D2D = [bs2+"2D - TSEN 2 sensor or SOH input failed blocked or bill jam during operation or clamp present sensor failure."];
    var D2E = [bs2+"2E - TSEN 3 sensor or SOH input failed blocked or bill jam during operation."];
    var D2F = [bs2+"2F - TSEN 4 sensor or SOH input failed blocked or bill jam during operation."];
    var D30 = [bs2+"30- TSEN 5 sensor or SOH input failed blocked or bill jam during operation."];
    var D31 = [bs2+"31 - TSEN 6 sensor or SOH input failed blocked or bill jam during operation."];
    var D32 = [bs2+"32 - TSEN 7 sensor or SOH input failed blocked or bill jam during operation."];
    var D33 = [bs2+"33 - TSEN 8 sensor or SOH input failed blocked or bill jam during operation."];
    var D34 = [bs2+"34 - Presenter transport timing wheel failed to operate correctly."];
    var D35 = [bs2+"35 - Reserved."];
    var D36 = [bs2+"36 - Interlock open initially."];
    var D37 = [bs2+"37 - Interlock open during operation."];
    var D38 = [bs2+"38 - Clamp jammed in home position (attempting to move to present)"];
    var D39 = [bs2+"39 - Clamp jammed in present position (attempting to move to home)"];
    var D3A = [bs2+"3A - Clamp home sensor failed indicating home."];
    var D3B = [bs2+"3B - Clamp present sensor failed indicating present ."];
    var D3C = [bs2+"3C - Shutter jammed closed or closed during operation."];
    var D3D = [bs2+"3D - Shutter jammed open or opened during operation ."];
    var D3E = [bs2+"3E - Shutter open sensor failed indicating open or the I2C comms has failed (only applicable if the dispenser uses an I2C shutter)."];
    var D3F = [bs2+"3F - Shutter closed sensor failed indicating closed."];
    var D40 = [bs2+"40 - Purge bin nut installed initially on present or at end of purge."];
    var D41 = [bs2+"41 - Bill jam has caused presenter motor to fail."];
    var M02 = ["02 - Purge bin not installed."];
    var M03 = ["03 - Pick failure (status 1-10H). Picking is tried three times after the initial attempt, each attempt being four or five pick cycles. If a bill has not been picked, the motor is shut off.After a time delay, the motor is turned on and picking is tried again. The cycle, motor off, delay, motor on, pick, is repeated op to three times. If all attempts fail, this status is generated."];
    var M04 = ["04 - Invalid pick interrupt. A bill enters the transport from the wrong cassette or one of the pick sensors is faulty."];
    var M05 = ["05 -Divert gate not in dispense position during a dispense operation when an attempt is made to dispense a bill into the note tray."];
    var M06 = ["06 - Divert gate not in the reject position on receipt of a dispense command or when an attempt is made to reject a bill."];
    var M09 = ["09 - Pick sensor failed clear during operation. A bill is seen at the PRE_LVDT/NTS sensor when it is not expected. This may be the result of a faulty pick sensor or a drag-out separating in the transport."];
    var M0C = ["0C - Purge bin overfill or SOH active initially or at end of clear."];
    var M10 = ["10 - Exit shutter not closed or closed sensor failed indicating not closed, or the I2C comms has failed (only applicable if the dispenser uses an l2C shutter) or open sensor failed indicating open."];
    var M11 = ["11 - Pick sensor blocked initially or SOH active initially or at end of clear - occurs on a non-zero dispense. OR Bill did not clear pick sensor - occurs when a picked bill jams under a pick sensor or the pick sensor is malfunctioning."];
    var M14 = ["14 - PRE_LVDT/NTS sensor blocked or SOH active initially or at end of clear."];
    var M21 = ["21 - PRE_LVDT/NTS sensor failed clear during operation. A bill seen by the pick sensor has not reached the PRE_LVDT/NTS sensor in time."];
    var M22 = ["22- Pre_LVDT/NTS sensor failed blocked / bill jam during operation."];
    var M27 = ["27 - Presenter clamp not in home position initially or clamp home sensor failed blocked."];
    var M40 = ["40 - Virtual cassette type not installed. A command has been received to pick bills from cassette which is not installed."];
    var M41 = ["41 - TSEN 1 (FEED) sensor blocked or SOH active initially upon initiating a dispense command or on completion of a clear."];
    var M42 = ["42 - TSEN 2 (EXIT) sensor blocked or SOH active initially on stack or at end of clear."];
    var M43 = ["43 - TSEN 3 sensor blocked or SOH active initially on stack or at end of clear."];
    var M44 = ["44 - TSEN 4 sensor blocked or SOH active initially on stack or at end of clear."];
    var M45 = ["45 - TSEN 5 sensor blocked or SOH active initially on stack or at end of clear (exit sensor for 5674/5 rear access and all 5670 dispensers and Personas 86)."];
    var M46 = ["46 - TSEN 6 sensor blocked or SOH active initially on stack or at end of clear."];
    var M47 = ["47 - TSEN 7 sensor blocked or SOH active initially on stack or at end of clear.(exit sensor for 5674/5 front access)"];
    var M48 = ["48 - TSEN 8 sensor blocked or SOH active initially on stack or at end of clear.(exit sensor for 568X through the wall)."];
    var M49 = ["49 - I2C fault initially or a Pick Interface fault was detected before the operation started."];
    var M4A = ["4A - I2C failure during operation."];
    var M4B = ["4B - Main transport disk too slow."];
    var M4C = ["4C - Reserved."];
    var M4D = ["4D - Main transport timing disk failed."];
    var M4E = ["4E - Pick sensor failed clear initially."];
    var M4F = ["4F - Pick sensor failed blocked/note jam."];
    var M50 = ["50 - Pre LVDT/NTS sensor failed clear initially."];
    var M51 = ["51 - TSEN 1 (FEED) sensor failed clear initially on dispense or at end of clear."];
    var M52 = ["52 - TSEN 2 (EXIT) failed clear initially on dispense or at end of clear."];
    var M53 = ["53 - TSEN 3 failed clear initially on stack or at end of clear."];
    var M54 = ["54 - TSEN 4 failed clear initially on stack or at end of clear."];
    var M55 = ["55 - TSEN 5 failed clear initially on stack or at end of clear."];
    var M56 = ["56 - TSEN 6 failed clear initially on stack or at end of clear."];
    var M57 = ["57 - TSEN 7 failed clear initially on stack or at end of clear."];
    var M58 = ["58 - TSEN 8 failed clear initially on stack or at end of clear."];
    var M59 = ["59 - Purge bin overfill failed clear initially."];
    var M5A = ["5A - Gulp feed detected."];
    var M5B = ["5B - Interlock open initially."];
    var M5C = ["5C - Interlock open during operation."];
    var M60 = ["60 - Reference null reading too low on NTS."];
    var M61 = ["61 - Reference null reading too low LVDT #2(left hand)."];
    var M62 = ["62 - Reference null reading too high on NTS."];
    var M63 = ["63 - Reference null reading too high LVDT #2(left hand)."];
    var M64 = ["64 - LVDT/NTS fault - too few timing wheel interrupts received on execution processor within the time for one note."];
    var M65 = ["65 - LVDT/NTS fault - execution processor did not receive a response to an LVDT request within the required time."];
    var M70 = ["70 - Cassette already FATAL because of:too many pick fails, too many rejects, cassette empty, or could not learn from the cassette."];
    var M71 = ["71 - Too many interrupts at the pick sensor or preLVDT/NTS sensor."];
    var M72 = ["72 - Note parameters were not configured. The singularaty at this position was 0FFH. Either note parameters were not configured after initial power up, or NVRAM was corrupted and reinitialized. Note widths, singularities and stack order should be checked."];
    var M73 = ["73 - Total thickness of notes picked on note learn has reached the limit that can safely be purged."];
    var M75 = ["75 - TSEN 1 (feed) sensor failed clear during operation or note jam before sensor. May be due to a note jam between the NTS sensor and the FEED sensor."];
    var M76 = ["76 - TSEN 1 (feed) sensor failed blocked during operation or note jam at sensor.May be due to a note jam at the FEED sensor."];
    var M77 = ["77 - TSEN 2 (exit) sensor failed clear during operation or a note jam before sensor. May be due to a note jam betwen the FEED sensor and the EXIT sensor. "];
    var M78 = ["78 - TSEN 2 (exit) sensor failed blocked during operation or note jam at sensor. May be due to a note jam at the EXIT sensor."];
    var res6 = code.substr(0, 4);
    var bit01 = code.substring(0, 2);
    //<<START OF SCRIPT>> This will find and print the answer to Byte 0.
    switch(bit01) {
    case "00":text = "00 - Reset.";break;         
    case "01":text = "01 - Bunch Presenter: Stack.";break;      
    case "02":text = "02 - Present.";break;       
    case "03":text = "03 - Move clamp to present.";break;       
    case "04":text = "04 - Clear main transport.";break;       
    case "05":text = "05 - Check if notes are taken.";break;       
    case "06":text = "06 - Purge.";break;       
    case "07":text = "07 - Set note widths.";break;        
    case "08":text = "08 - Set note singularities.";break;        
    case "09":text = "09 - Set note presentation order.";break;    
    case "0A":text = "0A - Read dispense counts.";break;        
    case "0B":text = "0B - Clear dispense counts.";break;
    case "0C":text = "0C - Read configured parameters.";break;      
    case "0D":text = "0D - Read container status.";break;        
    case "0E":text = "0E - Read ('Set' on P86 style and USB S1) virtual cassette type.";break;      
    case "0F":text = "0F - Rotate ('Move' on P86 style and USB S1) clamp to home position.";break;  
    case "10":text = "10 - Close shutter command.";break;        
    case "11":text = "11 - Main motor test.";break;        
    case "12":text = "12 - Bunch Presenter: Pick valve test.";break;        
    case "13":text = "13 - Learn note parameters.";break;        
    case "14":text = "14 - Exit shutter test.";break;     
    case "15":text = "15 - Presenter note motor test.";break;      
    case "16":text = "16 - Presenter clamp test.";break;      
    case "1C":text = "1C - Pre present.";break;
    case "1B":text = "1B - Disable Hamming codes.";break;
    case "17":text = "17 - Sensor test.";break;
    case "22":text = "22 - Spray dispenser: Divert Gate test.";break;
    default:text = " ";
    }   
    
    document.getElementById("Byte0").innerHTML = "Byte 0 : " + text;
    
    //*****************************************************************
    // Presenter Format MData codes....Byte0 must be 01, 04, 05, 13 or 17.
    //*****************************************************************
  
   //<<START OF SCRIPT>>This will find and print the answers to Byte 1.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var res1 = code.substring(2, 3);
    var error;
    if (res1 === "0") {error = bs3;} 
    else if (res1 == "1"){error = bs3+bit4;} 
    else if (res1 == "2"){error = bs3+bit5;} 
    else if (res1 == "3"){error = bs3+bit4+bit5;} 
    else if (res1 == "4"){error = bs3+bit6;} 
    else if (res1 == "5"){error = bs3+bit4+bit6;} 
    else if (res1 == "6"){error = bs3+bit5+bit6;} 
    else if (res1 == "7"){error = bs3+bit4+bit5+bit6;} 
    else if (res1 == "8"){error = bs3+bit7;} 
    else if (res1 == "9"){error = bs3+bit4+bit7;} 
    else if (res1 == "A"){error = bs3+bit5+bit7;} 
    else if (res1 == "B"){error = bs3+bit4+bit5+bit7;} 
    else if (res1 == "C"){error = bs3+bit6+bit7;} 
    else if (res1 == "D"){error = bs3+bit4+bit6+bit7;} 
    else if (res1 == "E"){error = bs3+bit5+bit6+bit7;} 
    else if (res1 == "F"){error = bs3+bit4+bit5+bit6+bit7;}
    else {error = " ";}    
        
    var res2 = code.substring(3,4);
    var error2;
    if (res2 === "0") {error2 = ".";} 
    else if (res2 == "1"){error2 = bit0;} 
    else if (res2 == "2"){error2 = bit1;}  
    else if (res2 == "3"){error2 = bit0+bit1;} 
    else if (res2 == "4"){error2 = bit2;}  
    else if (res2 == "5"){error2 = bit0+bit2;}  
    else if (res2 == "6"){error2 = bit1+bit2;}  
    else if (res2 == "7"){error2 = bit0+bit1+bit2;}  
    else if (res2 == "8"){error2 = bit3;}  
    else if (res2 == "9"){error2 = bit0+bit3;}  
    else if (res2 == "A"){error2 = bit1+bit3;} 
    else if (res2 == "B"){error2 = bit0+bit1+bit3;}  
    else if (res2 == "C"){error2 = bit2+bit3;}  
    else if (res2 == "D"){error2 = bit0+bit2+bit3;}  
    else if (res2 == "E"){error2 = bit1+bit2+bit3;} 
    else if (res2 == "F"){error2 = bit0+bit1+bit2+bit3;} 
    else {error2 = " ";} 
    }
    
    //************************************************
    // Exit Shutter MData codes....Byte0 must be 14.
    //************************************************
   
    if (bit01 === "14") {  //MData changes as per Byte0 input.
    var res3 = code.substring(2, 4);
    if (res3 === "00") {error = bs5+"Operation OK.";error2 = ""}
    else if (res3 == "01") {error = bs5+"Shutter closed sensor indicated closed when it should have been not closed.";error2 = ""}
    }
    
    //**********************************************
    // Main Motor MData codes....Byte0 must be 11.
    //********************************************** 
    
    if (bit01 === "11") {
        var res3 = code.substring(2, 4);
    if (res3 == "00") {error = "Good operation."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";error2 = ""}
    else if (res3 == "01") {error = "Timing wheel slow."+"<br>"+"<font color='green' >" +  "Byte 2 is the number of timing wheel ticks seen during test.";error2 = ""}
    else if (res3 == "02") {error = "Timing wheel fast."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";error2 = ""}
    else if (res3 == "03") {error = "Timing wheel failed."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";error2 = ""}
    else if (res3 == "04") {error = "Timing wheel too slow."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";error2 = ""}
    else if (res3 == "05") {error = "Timing wheel too fast."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";error2 = ""}
    }
    //*************************************************************
    // Presenter Clamp MData codes....Byte0 must be 02, 03, 06, 0F.
    //*************************************************************
    
    if (res6 == "0200" || res6 == "0300" || res6 == "0600" || res6 == "0F00") {error = D00, error2 = "";}
    else if (res6 == "0201" || res6 == "0301" || res6 == "0601" || res6 == "0F01") {error = D01, error2 = "";}
    else if (res6 == "0202" || res6 == "0302" || res6 == "0602" || res6 == "0F02") {error = D02, error2 = "";}
    else if (res6 == "0204" || res6 == "0304" || res6 == "0604" || res6 == "0F04") {error = D04, error2 = "";}
    else if (res6 == "0206" || res6 == "0306" || res6 == "0606" || res6 == "0F06") {error = D06, error2 = "";}
    else if (res6 == "0207" || res6 == "0307" || res6 == "0607" || res6 == "0F07") {error = D07, error2 = "";}
    else if (res6 == "020C" || res6 == "030C" || res6 == "060C" || res6 == "0F0C") {error = D0C, error2 = "";}
    else if (res6 == "0211" || res6 == "0311" || res6 == "0611" || res6 == "0F11") {error = D11, error2 = "";}
    else if (res6 == "0213" || res6 == "0313" || res6 == "0613" || res6 == "0F13") {error = D13, error2 = "";}
    else if (res6 == "0214" || res6 == "0314" || res6 == "0614" || res6 == "0F14") {error = D14, error2 = "";}
    else if (res6 == "0215" || res6 == "0315" || res6 == "0615" || res6 == "0F15") {error = D15, error2 = "";}
    else if (res6 == "0216" || res6 == "0316" || res6 == "0616" || res6 == "0F16") {error = D16, error2 = "";}
    else if (res6 == "0217" || res6 == "0317" || res6 == "0617" || res6 == "0F17") {error = D17, error2 = "";}
    else if (res6 == "0218" || res6 == "0318" || res6 == "0618" || res6 == "0F18") {error = D18, error2 = "";}
    else if (res6 == "0219" || res6 == "0319" || res6 == "0619" || res6 == "0F19") {error = D19, error2 = "";}
    else if (res6 == "021A" || res6 == "031A" || res6 == "061A" || res6 == "0F1A") {error = D1A, error2 = "";}
    else if (res6 == "021B" || res6 == "031B" || res6 == "061B" || res6 == "0F1B") {error = D1B, error2 = "";}
    else if (res6 == "021C" || res6 == "031C" || res6 == "061C" || res6 == "0F1C") {error = D1C, error2 = "";}
    else if (res6 == "021D" || res6 == "031D" || res6 == "061D" || res6 == "0F1D") {error = D1D, error2 = "";}
    else if (res6 == "021E" || res6 == "031E" || res6 == "061E" || res6 == "0F1E") {error = D1E, error2 = "";}
    else if (res6 == "021F" || res6 == "031F" || res6 == "061F" || res6 == "0F1F") {error = D1F, error2 = "";}
    else if (res6 == "0220" || res6 == "0320" || res6 == "0620" || res6 == "0F20") {error = D20, error2 = "";}
    else if (res6 == "0221" || res6 == "0321" || res6 == "0621" || res6 == "0F21") {error = D21, error2 = "";}
    else if (res6 == "0222" || res6 == "0322" || res6 == "0622" || res6 == "0F22") {error = D22, error2 = "";}
    else if (res6 == "0223" || res6 == "0323" || res6 == "0623" || res6 == "0F23") {error = D23, error2 = "";}
    else if (res6 == "0224" || res6 == "0324" || res6 == "0624" || res6 == "0F24") {error = D24, error2 = "";}
    else if (res6 == "0225" || res6 == "0325" || res6 == "0625" || res6 == "0F25") {error = D25, error2 = "";}
    else if (res6 == "0226" || res6 == "0326" || res6 == "0626" || res6 == "0F26") {error = D26, error2 = "";}
    else if (res6 == "0227" || res6 == "0327" || res6 == "0627" || res6 == "0F27") {error = D27, error2 = "";}
    else if (res6 == "0228" || res6 == "0328" || res6 == "0628" || res6 == "0F28") {error = D28, error2 = "";}
    else if (res6 == "0229" || res6 == "0329" || res6 == "0629" || res6 == "0F29") {error = D29, error2 = "";}
    else if (res6 == "022A" || res6 == "032A" || res6 == "062A" || res6 == "0F2A") {error = D2A, error2 = "";}
    else if (res6 == "022B" || res6 == "032B" || res6 == "062B" || res6 == "0F2B") {error = D2B, error2 = "";}
    else if (res6 == "022C" || res6 == "032C" || res6 == "062C" || res6 == "0F2C") {error = D2C, error2 = "";}
    else if (res6 == "022D" || res6 == "032D" || res6 == "062D" || res6 == "0F2D") {error = D2D, error2 = "";}
    else if (res6 == "022E" || res6 == "032E" || res6 == "062E" || res6 == "0F2E") {error = D2E, error2 = "";}
    else if (res6 == "022F" || res6 == "032F" || res6 == "062F" || res6 == "0F2F") {error = D2F, error2 = "";}
    else if (res6 == "0230" || res6 == "0330" || res6 == "0630" || res6 == "0F30") {error = D30, error2 = "";}
    else if (res6 == "0231" || res6 == "0331" || res6 == "0631" || res6 == "0F31") {error = D31, error2 = "";}
    else if (res6 == "0232" || res6 == "0332" || res6 == "0632" || res6 == "0F32") {error = D32, error2 = "";}
    else if (res6 == "0233" || res6 == "0333" || res6 == "0633" || res6 == "0F33") {error = D33, error2 = "";}
    else if (res6 == "0234" || res6 == "0334" || res6 == "0634" || res6 == "0F34") {error = D34, error2 = "";}
    else if (res6 == "0235" || res6 == "0335" || res6 == "0635" || res6 == "0F35") {error = D35, error2 = "";}
    else if (res6 == "0236" || res6 == "0336" || res6 == "0636" || res6 == "0F36") {error = D36, error2 = "";}
    else if (res6 == "0237" || res6 == "0337" || res6 == "0637" || res6 == "0F37") {error = D37, error2 = "";}
    else if (res6 == "0238" || res6 == "0338" || res6 == "0638" || res6 == "0F38") {error = D38, error2 = "";}
    else if (res6 == "0239" || res6 == "0339" || res6 == "0639" || res6 == "0F39") {error = D39, error2 = "";}
    else if (res6 == "023A" || res6 == "033A" || res6 == "063A" || res6 == "0F3A") {error = D3A, error2 = "";}
    else if (res6 == "023B" || res6 == "033B" || res6 == "063B" || res6 == "0F3B") {error = D3B, error2 = "";}
    else if (res6 == "023C" || res6 == "033C" || res6 == "063C" || res6 == "0F3C") {error = D3C, error2 = "";}    
    else if (res6 == "023D" || res6 == "033D" || res6 == "063D" || res6 == "0F3D") {error = D3D, error2 = "";}
    else if (res6 == "023E" || res6 == "033E" || res6 == "063E" || res6 == "0F3E") {error = D3E, error2 = "";}    
    else if (res6 == "023F" || res6 == "033F" || res6 == "063F" || res6 == "0F3F") {error = D3F, error2 = "";}
    else if (res6 == "0240" || res6 == "0340" || res6 == "0640" || res6 == "0F40") {error = D40, error2 = "";}
    else if (res6 == "0241" || res6 == "0341" || res6 == "0641" || res6 == "0F41") {error = D41, error2 = "";} 
    
    //*******************************************************
    // Presenter Bill Motor  MData codes....Byte0 must be 15.
    //*******************************************************
    
    else if(res6 == "1500") {error = bs4+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Good operation.";error2 = ""}
    else if (res6 == "1501") {error = bs4+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel slow";error2 = ""}
    else if (res6 == "1502") {error = bs4+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel fast.";error2 = ""}
    else if (res6 == "1503") {error = bs4+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel failed.";error2 = ""}
    else if (res6 == "1504") {error = bs4+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel too slow.";error2 = ""}
    else if (res6 == "1505") {error = bs4+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel too fast.";error2 = ""}  
    
    /*******************************************************
       Presenter Clamp MData codes....Byte0 must be 16.  
    *******************************************************/
    
    if (bit01 == "16") {
        var res3 = code.substring(2, 4);
    if (res3 == "00") {error = bs6+"Operation successful.";error2 = ""}
    else if (res3 === "01") {error = bs6+"Clamp home indicated home when it should have been not home.";error2 = ""}
    }
   
      document.getElementById("Byte1").innerHTML = (error+error2);
   
     //<<END OF SCRIPT>>Byte 1.
    
     //<<START OF SCRIPT>>This will find and print the answer to Byte 2.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var code = document.getElementById("myInput0").value;
    var text;
    var bit2 = code.substring(4,6);
    switch(bit2) {     
    case "02":text = bs70+M02;break;       
    case "03":text = bs70+M03;break;       
    case "04":text = bs70+M04;break;       
    case "05":text = bs70+M05;break;       
    case "06":text = bs70+M06;break;            
    case "09":text = bs70+M09;break;        
    case "0C":text = bs70+M0C;break;          
    case "10":text = bs70+M10;break;        
    case "11":text = bs70+M11;break;        
    case "14":text = bs70+M14;break;        
    case "21":text = bs70+M21;break;      
    case "22":text = bs70+M22;break;      
    case "27":text = bs70+M27;break;
    case "40":text = bs70+M40;break;
    case "41":text = bs70+M41;break;
    case "42":text = bs70+M42;break;        
    case "43":text = bs70+M43;break; 
    case "44":text = bs70+M44;break;        
    case "45":text = bs70+M45;break;        
    case "46":text = bs70+M46;break;        
    case "47":text = bs70+M47;break;        
    case "48":text = bs70+M48;break; 
    case "49":text = bs70+M49;break;        
    case "4A":text = bs70+M4A;break;
    case "4B":text = bs70+M4B;break;
    case "4C":text = bs70+M4C;break;
    case "4D":text = bs70+M4D;break;
    case "4E":text = bs70+M4E;break;
    case "4F":text = bs70+M4F;break;
    case "50":text = bs70+M50;break;
    case "51":text = bs70+M51;break;
    case "52":text = bs70+M52;break;
    case "53":text = bs70+M53;break; 
    case "54":text = bs70+M54;break; 
    case "55":text = bs70+M55;break;        
    case "56":text = bs70+M56;break;
    case "57":text = bs70+M57;break;
    case "58":text = bs70+M58;break;
    case "59":text = bs70+M59;break;
    case "5A":text = bs70+M5A;break;
    case "5B":text = bs70+M5B;break;
    case "5C":text = bs70+M5C;break;
    case "60":text = bs70+M60;break;
    case "61":text = bs70+M61;break;
    case "62":text = bs70+M62;break; 
    case "63":text = bs70+M63;break; 
    case "64":text = bs70+M64;break;        
    case "65":text = bs70+M65;break;
    case "70":text = bs70+M70;break;
    case "71":text = bs70+M71;break;
    case "72":text = bs70+M72;break;
    case "73":text = bs70+M73;break;
    case "75":text = bs70+M75;break;
    case "76":text = bs70+M76;break;
    case "77":text = bs70+M77;break;
    case "78":text = bs70+M78;break;   
    default:text = " ";
    }
    }
    var code = document.getElementById("myInput0").value;
    var text;
    var bit2 = code.substring(0, 6);
    var bit3 = code.substring(0, 2);
    var bit4 = code.substring(4, 6);
    if (bit2 === "140000" || bit2 === "140100") {text = bs55+"Operation OK.";}
    else if (bit2 == "140001" || bit2 == "140101") {text = bs55+"Shutter open sensor indicated open when it should have been not open.";}
    else if (bit2 == "150000" || bit2 == "150100" || bit2 == "150200" || bit2 == "150300" || bit2 == "150400" || bit2 == "150500") {text = "<font size='2px'>Byte 2: Forwards Operation Status High Speed:</font><br>Good operation.";}
    else if (bit2 == "150001" || bit2 == "150101" || bit2 == "150201" || bit2 == "150301" || bit2 == "150401" || bit2 == "150501") {text = "<font size='2px'>Byte 2: Forwards Operation Status High Speed:</font><br>Timing wheel slow";}
    else if (bit2 == "150002" || bit2 == "150102" || bit2 == "150202" || bit2 == "150302" || bit2 == "150402" || bit2 == "150502") {text = "<font size='2px'>Byte 2: Forwards Operation Status High Speed:</font><br>Timing wheel fast.";}
    else if (bit2 == "150003" || bit2 == "150103" || bit2 == "150203" || bit2 == "150303" || bit2 == "150403" || bit2 == "150503") {text = "<font size='2px'>Byte 2: Forwards Operation Status High Speed:</font><br>Timing wheel failed.";}
    else if (bit2 == "150004" || bit2 == "150104" || bit2 == "150204" || bit2 == "150304" || bit2 == "150404" || bit2 == "150504") {text = "<font size='2px'>Byte 2: Forwards Operation Status High Speed:</font><br>Timing wheel too slow.";}
    else if (bit2 == "150005" || bit2 == "150105"|| bit2 == "150205" || bit2 == "150305" || bit2 == "150405" || bit2 == "150505") {text = "<font size='2px'>Byte 2: Forwards Operation Status High Speed:</font><br>Timing wheel too fast.";}
    else if (bit3 == "02" && bit4 == "00" || bit3 == "03" && bit4 == "00" || bit3 == "06" && bit4 == "00" || bit3 == "0F" && bit4 == "00") {text = "00 - Notes seen at purge/overfill sensor during the operation. (purge only)";}
    else if (bit3 == "02" && bit4 == "01" || bit3 == "03" && bit4 == "01" || bit3 == "06" && bit4 == "01" || bit3 == "0F" && bit4 == "01") {text = "01 - Notes not seen at purge/overfill sensor during the initial purge  operation.";}
    else if (bit3 == "02" && bit4 == "02" || bit3 == "03" && bit4 == "02" || bit3 == "06" && bit4 == "02" || bit3 == "0F" && bit4 == "02") {text = "02 - Notes  are still in the the presenter transport. (purge only)";}
    else if (bit3 == "02" && bit4 == "03" || bit3 == "03" && bit4 == "03" || bit3 == "06" && bit4 == "03" || bit3 == "0F" && bit4 == "03") {text = "03 - An unknown present occurred. (present only)";}
    else if (bit2 == "160000" || bit2 == "160100") {text = bs66+"Operation successful.";}
    else if (bit2 == "160001" || bit2 == "160101") {text = bs66+"Clamp present indicated present when it should have been not present.";}
    else if (bit2 == "160000" || bit2 == "160100") {text = bs66+"Operation successful.";}
    else if (bit2 == "160001" || bit2 == "160101") {text = bs66+"Clamp present indicated present when it should have been not present.";}
    
    document.getElementById("Byte2").innerHTML = text;
    
      //<<START OF SCRIPT>>This will find and print the answer to Byte 3.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var code = document.getElementById("myInput0").value;
    var text;
    var bit3 = code.substring(6,8);
    switch(bit3) {     
    case "02":text = bs71+M02;break;       
    case "03":text = bs71+M03;break;       
    case "04":text = bs71+M04;break;       
    case "05":text = bs71+M05;break;       
    case "06":text = bs71+M06;break;            
    case "09":text = bs71+M09;break;        
    case "0C":text = bs71+M0C;break;          
    case "10":text = bs71+M10;break;        
    case "11":text = bs71+M11;break;        
    case "14":text = bs71+M14;break;        
    case "21":text = bs71+M21;break;      
    case "22":text = bs71+M22;break;      
    case "27":text = bs71+M27;break;
    case "40":text = bs71+M40;break;
    case "41":text = bs71+M41;break;
    case "42":text = bs71+M42;break;        
    case "43":text = bs71+M43;break; 
    case "44":text = bs71+M44;break;        
    case "45":text = bs71+M45;break;        
    case "46":text = bs71+M46;break;        
    case "47":text = bs71+M47;break;        
    case "48":text = bs71+M48;break; 
    case "49":text = bs71+M49;break;        
    case "4A":text = bs71+M4A;break;
    case "4B":text = bs71+M4B;break;
    case "4C":text = bs71+M4C;break;
    case "4D":text = bs71+M4D;break;
    case "4E":text = bs71+M4E;break;
    case "4F":text = bs71+M4F;break;
    case "50":text = bs71+M50;break;
    case "51":text = bs71+M51;break;
    case "52":text = bs71+M52;break;
    case "53":text = bs71+M53;break; 
    case "54":text = bs71+M54;break; 
    case "55":text = bs71+M55;break;        
    case "56":text = bs71+M56;break;
    case "57":text = bs71+M57;break;
    case "58":text = bs71+M58;break;
    case "59":text = bs71+M59;break;
    case "5A":text = bs71+M5A;break;
    case "5B":text = bs71+M5B;break;
    case "5C":text = bs71+M5C;break;
    case "60":text = bs71+M60;break;
    case "61":text = bs71+M61;break;
    case "62":text = bs71+M62;break; 
    case "63":text = bs71+M63;break; 
    case "64":text = bs71+M64;break;        
    case "65":text = bs71+M65;break;
    case "70":text = bs71+M70;break;
    case "71":text = bs71+M71;break;
    case "72":text = bs71+M72;break;
    case "73":text = bs71+M73;break;
    case "75":text = bs71+M75;break;
    case "76":text = bs71+M76;break;
    case "77":text = bs71+M77;break;
    case "78":text = bs71+M78;break;  
    default:
      text = " ";
  }
    }
    var code = document.getElementById("myInput0").value;
    var text;
    var bit3 = code.substring(0, 8);
    if (bit3 == "14000000" || bit3 == "14010000" || bit3 =="14000100") {text = "Operation OK.";}
    else if (bit3 == "14000001" || bit3 == "14010101" || bit3 == "14010001") {text = "Shutter closed sensor indicated not closed when it should have been closed.";}
    else if (bit3 == "15000000" || bit3 == "15010000" || bit3 == "15020000" || bit3 == "15030000" || bit3 == "15040000" || bit3 == "15050000") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Good operation.";}
    else if (bit3 == "15000101" || bit3 == "15000001" || bit3 == "15010101" || bit3 == "15020101" || bit3 == "15030101" || bit3 == "15040101" || bit3 == "15050101") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel slow";}
    else if (bit3 == "15000202" || bit3 == "15000002" || bit3 == "15010202" || bit3 == "15020202" || bit3 == "15030202" || bit3 == "15040202" || bit3 == "15050202") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel fast.";}
    else if (bit3 == "15000303" || bit3 == "15000003" || bit3 == "15010303" || bit3 == "1502030203" || bit3 == "15030303" || bit3 == "15040303" || bit3 == "15050303") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel failed.";}
    else if (bit3 == "15000404"  || bit3 == "15000004"|| bit3 == "15010404" || bit3 == "15020404" || bit3 == "15030404" || bit3 == "15040404" || bit3 == "15050404") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel too slow.";}
    else if (bit3 == "15000505"  || bit3 == "15000005"|| bit3 == "15010505"|| bit3 == "15020505" || bit3 == "15030505" || bit3 == "15040505" || bit3 == "15050505") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel too fast.";}
    else if (bit3 == "16000000" || bit3 == "16010000" || bit3 =="16000100") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Operation successful.";}
    else if (bit3 == "16000001" || bit3 == "16010101" || bit3 == "16010001") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status Slow Speed :"+"</font>"+"<br>"+"Clamp home indicated not home when it should have been home.";}
   
    document.getElementById("Byte3").innerHTML = text;
    
    //<<END OF SCRIPT>>Byte 3.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 4.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var code = document.getElementById("myInput0").value;
    var text;
    var bit4 = code.substring(8, 10);
    switch(bit4) {     
    case "02":text = bs72+M02;break;       
    case "03":text = bs72+M03;break;       
    case "04":text = bs72+M04;break;       
    case "05":text = bs72+M05;break;       
    case "06":text = bs72+M06;break;            
    case "09":text = bs72+M09;break;        
    case "0C":text = bs72+M0C;break;          
    case "10":text = bs72+M10;break;        
    case "11":text = bs72+M11;break;        
    case "14":text = bs72+M14;break;        
    case "21":text = bs72+M21;break;      
    case "22":text = bs72+M22;break;      
    case "27":text = bs72+M27;break;
    case "40":text = bs72+M40;break;
    case "41":text = bs72+M41;break;
    case "42":text = bs72+M42;break;        
    case "43":text = bs72+M43;break; 
    case "44":text = bs72+M44;break;        
    case "45":text = bs72+M45;break;        
    case "46":text = bs72+M46;break;        
    case "47":text = bs72+M47;break;        
    case "48":text = bs72+M48;break; 
    case "49":text = bs72+M49;break;        
    case "4A":text = bs72+M4A;break;
    case "4B":text = bs72+M4B;break;
    case "4C":text = bs72+M4C;break;
    case "4D":text = bs72+M4D;break;
    case "4E":text = bs72+M4E;break;
    case "4F":text = bs72+M4F;break;
    case "50":text = bs72+M50;break;
    case "51":text = bs72+M51;break;
    case "52":text = bs72+M52;break;
    case "53":text = bs72+M53;break; 
    case "54":text = bs72+M54;break; 
    case "55":text = bs72+M55;break;        
    case "56":text = bs72+M56;break;
    case "57":text = bs72+M57;break;
    case "58":text = bs72+M58;break;
    case "59":text = bs72+M59;break;
    case "5A":text = bs72+M5A;break;
    case "5B":text = bs72+M5B;break;
    case "5C":text = bs72+M5C;break;
    case "60":text = bs72+M60;break;
    case "61":text = bs72+M61;break;
    case "62":text = bs72+M62;break; 
    case "63":text = bs72+M63;break; 
    case "64":text = bs72+M64;break;        
    case "65":text = bs72+M65;break;
    case "70":text = bs72+M70;break;
    case "71":text = bs72+M71;break;
    case "72":text = bs72+M72;break;
    case "73":text = bs72+M73;break;
    case "75":text = bs72+M75;break;
    case "76":text = bs72+M76;break;
    case "77":text = bs72+M77;break;
    case "78":text = bs72+M78;break;  
    default:
      text = " ";
  }
    }
    var code = document.getElementById("myInput0").value;
    var text;
    var bit4 = code.substring(0, 10);
    if (bit4 == "1400000000" || bit4 == "1401000000" || bit4 =="1400010000" || bit4 == "1400010100") {text = "Operation OK.";}
    else if (bit4 == "1400000101" || bit4 == "1401010101" || bit4 == "1401000101" || bit4 == "1400000001") {text = "Shutter open sensor indicated not open when it should have been open.";}
    else if (bit4 == "1500000000" || bit4 == "1501000000" || bit4 == "1502000000" || bit4 == "1503000000" || bit4 == "1504000000" || bit4 == "150500000") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status High Speed :"+"</font>"+"<br>"+"Good operation.";}
    else if (bit4 == "1500010101" || bit4 == "1500000101" || bit4 == "1501010101" || bit4 == "1502010101" || bit4 == "1503010101" || bit4 == "1504010101" || bit4 == "1505010101") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel slow";}
    else if (bit4 == "1500020202" || bit4 == "1500000102" || bit4 == "1500000202" || bit4 == "1501020202" || bit4 == "1502020202" || bit4 == "1503020202" || bit4 == "1504020202" || bit4 == "1505020202") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel fast.";}
    else if (bit4 == "1500030303" || bit4 == "1500000103" || bit4 == "1500000303" || bit4 == "1501030303" || bit4 == "150203020303" || bit4 == "1503030303" || bit4 == "1504030303" || bit4 == "1505030303") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel failed.";}
    else if (bit4 == "1500040404"  || bit4 == "1500000404"|| bit4 == "1501040404" || bit4 == "1502040404" || bit4 == "1503040404" || bit4 == "1504040404" || bit4 == "1505040404") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel too slow.";}
    else if (bit4 == "1500050505" || bit4 == "1500000104"  || bit4 == "1500000505"|| bit4 == "1501050505"|| bit4 == "1502050505" || bit4 == "1503050505" || bit4 == "1504050505" || bit4 == "1505050505") {text = "<font color=`green` size=`1.5px`>"+"Reverse Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel too fast.";}
    else if (bit4 == "1600000000" || bit4 == "1601000000" || bit4 =="1600010000" || bit4 == "1600010100" || bit4 == "1600000100") {text = "Operation successful.";}
    else if (bit4 == "1600000101" || bit4 == "1601010101" || bit4 == "1601000101" || bit4 == "1600000001") {text = "Clamp present indicated not present when it should have been present.";}
    
    document.getElementById("Byte4").innerHTML = text;
    
    //<<END OF SCRIPT>>Byte 4.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 5.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var code = document.getElementById("myInput0").value;
    var text;
    var bit5 = code.substring(10, 12);
    switch(bit5) {     
    case "02":text = bs73+M02;break;       
    case "03":text = bs73+M03;break;       
    case "04":text = bs73+M04;break;       
    case "05":text = bs73+M05;break;       
    case "06":text = bs73+M06;break;            
    case "09":text = bs73+M09;break;        
    case "0C":text = bs73+M0C;break;          
    case "10":text = bs73+M10;break;        
    case "11":text = bs73+M11;break;        
    case "14":text = bs73+M14;break;        
    case "21":text = bs73+M21;break;      
    case "22":text = bs73+M22;break;      
    case "27":text = bs73+M27;break;
    case "40":text = bs73+M40;break;
    case "41":text = bs73+M41;break;
    case "42":text = bs73+M42;break;        
    case "43":text = bs73+M43;break; 
    case "44":text = bs73+M44;break;        
    case "45":text = bs73+M45;break;        
    case "46":text = bs73+M46;break;        
    case "47":text = bs73+M47;break;        
    case "48":text = bs73+M48;break; 
    case "49":text = bs73+M49;break;        
    case "4A":text = bs73+M4A;break;
    case "4B":text = bs73+M4B;break;
    case "4C":text = bs73+M4C;break;
    case "4D":text = bs73+M4D;break;
    case "4E":text = bs73+M4E;break;
    case "4F":text = bs73+M4F;break;
    case "50":text = bs73+M50;break;
    case "51":text = bs73+M51;break;
    case "52":text = bs73+M52;break;
    case "53":text = bs73+M53;break; 
    case "54":text = bs73+M54;break; 
    case "55":text = bs73+M55;break;        
    case "56":text = bs73+M56;break;
    case "57":text = bs73+M57;break;
    case "58":text = bs73+M58;break;
    case "59":text = bs73+M59;break;
    case "5A":text = bs73+M5A;break;
    case "5B":text = bs73+M5B;break;
    case "5C":text = bs73+M5C;break;
    case "60":text = bs73+M60;break;
    case "61":text = bs73+M61;break;
    case "62":text = bs73+M62;break; 
    case "63":text = bs73+M63;break; 
    case "64":text = bs73+M64;break;        
    case "65":text = bs73+M65;break;
    case "70":text = bs73+M70;break;
    case "71":text = bs73+M71;break;
    case "72":text = bs73+M72;break;
    case "73":text = bs73+M73;break;
    case "75":text = bs73+M75;break;
    case "76":text = bs73+M76;break;
    case "77":text = bs73+M77;break;
    case "78":text = bs73+M78;break;  
    default:
      text = " ";
  }
    }
    document.getElementById("Byte5").innerHTML = text;
    
    //<<END OF SCRIPT>>Byte 5.
    
    //<<START OF SCRIPT>>This will find and print the answer to Byte 6.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var res3 = code.substring(12, 13);
    var error3;
    if (res3 == "0") {error3 = bs74;} 
    else if (res3 == "1"){error3 = bs74+DBit4;} 
    else if (res3 == "2"){error3 = bs74+DBit5;} 
    else if (res3 == "3"){error3 = bs74+DBit4+DBit5;} 
    else if (res3 == "4"){error3 = bs74+DBit6;} 
    else if (res3 == "5"){error3 = bs74+DBit4+DBit6;} 
    else if (res3 == "6"){error3 = bs74+DBit5+DBit6;} 
    else if (res3 == "7"){error3 = bs74+DBit4+DBit5+DBit6;} 
    else if (res3 == "8"){error3 = bs74+DBit7;} 
    else if (res3 == "9"){error3 = bs74+DBit4+DBit7;} 
    else if (res3 == "A"){error3 = bs74+DBit5+DBit7;} 
    else if (res3 == "B"){error3 = bs74+DBit4+DBit5+DBit7;} 
    else if (res3 == "C"){error3 = bs74+DBit6+DBit7;} 
    else if (res3 == "D"){error3 = bs74+DBit4+DBit6+DBit7;} 
    else if (res3 == "E"){error3 = bs74+DBit5+DBit6+DBit7;} 
    else if (res3 == "F"){error3 = bs74+DBit4+DBit5+DBit6+DBit7;}
    else {error3 = " ";}    
    var res4 = code.substring(13, 14);
    var error4;
    if (res4 == "0") {error4 = "";} 
    else if (res4 == "1"){error4 = DBit0;} 
    else if (res4 == "2"){error4 = DBit1;}  
    else if (res4 == "3"){error4 = DBit0+DBit1;} 
    else if (res4 == "4"){error4 = DBit2;}  
    else if (res4 == "5"){error4 = DBit0+DBit2;}  
    else if (res4 == "6"){error4 = DBit1+DBit2;}  
    else if (res4 == "7"){error4 = DBit0+DBit1+DBit2;}  
    else if (res4 == "8"){error4 = DBit3;}  
    else if (res4 == "9"){error4 = DBit0+DBit3;}  
    else if (res4 == "A"){error4 = DBit1+DBit3;} 
    else if (res4 == "B"){error4 = DBit0+DBit1+DBit3;}  
    else if (res4 == "C"){error4 = DBit2+DBit3;}  
    else if (res4 == "D"){error4 = DBit0+DBit2+DBit3;}  
    else if (res4 == "E"){error4 = DBit1+DBit2+DBit3;} 
    else if (res4 == "F"){error4 = DBit0+DBit1+DBit2+DBit3;} 
    else {error4 = " ";}  
    }
      document.getElementById("Byte6").innerHTML = (error3+error4);
    //<<END OF SCRIPT>>Byte 6.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 7.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var res5 = code.substring(14, 15);
    var error5;
    if (res5 == "0") {error5 = bs75;} 
    else if (res5 == "1"){error5 = bs75+DBit4;} 
    else if (res5 == "2"){error5 = bs75+DBit5;} 
    else if (res5 == "3"){error5 = bs75+DBit4+DBit5;} 
    else if (res5 == "4"){error5 = bs75+DBit6;} 
    else if (res5 == "5"){error5 = bs75+DBit4+DBit6;} 
    else if (res5 == "6"){error5 = bs75+DBit5+DBit6;} 
    else if (res5 == "7"){error5 = bs75+DBit4+DBit5+DBit6;} 
    else if (res5 == "8"){error5 = bs75+DBit7;} 
    else if (res5 == "9"){error5 = bs75+DBit4+DBit7;} 
    else if (res5 == "A"){error5 = bs75+DBit5+DBit7;} 
    else if (res5 == "B"){error5 = bs75+DBit4+DBit5+DBit7;} 
    else if (res5 == "C"){error5 = bs75+DBit6+DBit7;} 
    else if (res5 == "D"){error5 = bs75+DBit4+DBit6+DBit7;} 
    else if (res5 == "E"){error5 = bs75+DBit5+DBit6+DBit7;} 
    else if (res5 == "F"){error5 = bs75+DBit4+DBit5+DBit6+DBit7;}
    else {error5 = " ";}    
    var res6 = code.substring(15, 16);
    var error6;
    if (res6 == "0") {error6 = "";} 
    else if (res6 == "1"){error6 = DBit0;} 
    else if (res6 == "2"){error6 = DBit1;}  
    else if (res6 == "3"){error6 = DBit0+DBit1;} 
    else if (res6 == "4"){error6 = DBit2;}  
    else if (res6 == "5"){error6 = DBit0+DBit2;}  
    else if (res6 == "6"){error6 = DBit1+DBit2;}  
    else if (res6 == "7"){error6 = DBit0+DBit1+DBit2;}  
    else if (res6 == "8"){error6 = DBit3;}  
    else if (res6 == "9"){error6 = DBit0+DBit3;}  
    else if (res6 == "A"){error6 = DBit1+DBit3;} 
    else if (res6 == "B"){error6 = DBit0+DBit1+DBit3;}  
    else if (res6 == "C"){error6 = DBit2+DBit3;}  
    else if (res6 == "D"){error6 = DBit0+DBit2+DBit3;}  
    else if (res6 == "E"){error6 = DBit1+DBit2+DBit3;} 
    else if (res6 == "F"){error6 = DBit0+DBit1+DBit2+DBit3;} 
    else {error6 = " ";}  
    }
     document.getElementById("Byte7").innerHTML = (error5+error6);
    //<<END OF SCRIPT>>Byte 7.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 8.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var res7 = code.substring(16, 17);
    var error7;
    if (res7 == "0") {error7 = bs76;} 
    else if (res7 == "1"){error7 = bs76+DBit4;} 
    else if (res7 == "2"){error7 = bs76+DBit5;} 
    else if (res7 == "3"){error7 = bs76+DBit4+DBit5;} 
    else if (res7 == "4"){error7 = bs76+DBit6;} 
    else if (res7 == "5"){error7 = bs76+DBit4+DBit6;} 
    else if (res7 == "6"){error7 = bs76+DBit5+DBit6;} 
    else if (res7 == "7"){error7 = bs76+DBit4+DBit5+DBit6;} 
    else if (res7 == "8"){error7 = bs76+DBit7;} 
    else if (res7 == "9"){error7 = bs76+DBit4+DBit7;} 
    else if (res7 == "A"){error7 = bs76+DBit5+DBit7;} 
    else if (res7 == "B"){error7 = bs76+DBit4+DBit5+DBit7;} 
    else if (res7 == "C"){error7 = bs76+DBit6+DBit7;} 
    else if (res7 == "D"){error7 = bs76+DBit4+DBit6+DBit7;} 
    else if (res7 == "E"){error7 = bs76+DBit5+DBit6+DBit7;} 
    else if (res7 == "F"){error7 = bs76+DBit4+DBit5+DBit6+DBit7;}
    else {error7 = " ";}    
    var res8 = code.substring(17, 18);
    var error8;
    if (res8 == "0") {error8 = "";} 
    else if (res8 == "1"){error8 = DBit0;} 
    else if (res8 == "2"){error8 = DBit1;}  
    else if (res8 == "3"){error8 = DBit0+DBit1;} 
    else if (res8 == "4"){error8 = DBit2;}  
    else if (res8 == "5"){error8 = DBit0+DBit2;}  
    else if (res8 == "6"){error8 = DBit1+DBit2;}  
    else if (res8 == "7"){error8 = DBit0+DBit1+DBit2;}  
    else if (res8 == "8"){error8 = DBit3;}  
    else if (res8 == "9"){error8 = DBit0+DBit3;}  
    else if (res8 == "A"){error8 = DBit1+DBit3;} 
    else if (res8 == "B"){error8 = DBit0+DBit1+DBit3;}  
    else if (res8 == "C"){error8 = DBit2+DBit3;}  
    else if (res8 == "D"){error8 = DBit0+DBit2+DBit3;}  
    else if (res8 == "E"){error8 = DBit1+DBit2+DBit3;} 
    else if (res8 == "F"){error8 = DBit0+DBit1+DBit2+DBit3;} 
    else {error8 = " ";}  
    }
      document.getElementById("Byte8").innerHTML = (error7+error8);
    //<<END OF SCRIPT>>Byte 8.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 9.
    if (bit01 == "01" || bit01 == "04" || bit01 == "05" || bit01 == "13" || bit01 == "17"){
    var res9 = code.substring(18, 19);
    var error9;
    if (res9 == "0") {error9 = bs77;} 
    else if (res9 == "1"){error9 = bs77+DBit4;} 
    else if (res9 == "2"){error9 = bs77+DBit5;} 
    else if (res9 == "3"){error9 = bs77+DBit4+DBit5;} 
    else if (res9 == "4"){error9 = bs77+DBit6;} 
    else if (res9 == "5"){error9 = bs77+DBit4+DBit6;} 
    else if (res9 == "6"){error9 = bs77+DBit5+DBit6;} 
    else if (res9 == "7"){error9 = bs77+DBit4+DBit5+DBit6;} 
    else if (res9 == "8"){error9 = bs77+DBit7;} 
    else if (res9 == "9"){error9 = bs77+DBit4+DBit7;} 
    else if (res9 == "A"){error9 = bs77+DBit5+DBit7;} 
    else if (res9 == "B"){error9 = bs77+DBit4+DBit5+DBit7;} 
    else if (res9 == "C"){error9 = bs77+DBit6+DBit7;} 
    else if (res9 == "D"){error9 = bs77+DBit4+DBit6+DBit7;} 
    else if (res9 == "E"){error9 = bs77+DBit5+DBit6+DBit7;} 
    else if (res9 == "F"){error9 = bs77+DBit4+DBit5+DBit6+DBit7;}
    else {error9 = " ";}    
    var res10 = code.substring(19, 20);
    var error10;
    if (res10 == "0") {error10 = "";} 
    else if (res10 == "1"){error10 = DBit0;} 
    else if (res10 == "2"){error10 = DBit1;}  
    else if (res10 == "3"){error10 = DBit0+DBit1;} 
    else if (res10 == "4"){error10 = DBit2;}  
    else if (res10 == "5"){error10 = DBit0+DBit2;}  
    else if (res10 == "6"){error10 = DBit1+DBit2;}  
    else if (res10 == "7"){error10 = DBit0+DBit1+DBit2;}  
    else if (res10 == "8"){error10 = DBit3;}  
    else if (res10 == "9"){error10 = DBit0+DBit3;}  
    else if (res10 == "A"){error10 = DBit1+DBit3;} 
    else if (res10 == "B"){error10 = DBit0+DBit1+DBit3;}  
    else if (res10 == "C"){error10 = DBit2+DBit3;}  
    else if (res10 == "D"){error10 = DBit0+DBit2+DBit3;}  
    else if (res10 == "E"){error10 = DBit1+DBit2+DBit3;} 
    else if (res10 == "F"){error10 = DBit0+DBit1+DBit2+DBit3;} 
    else {error10 = " ";}  
    }
    document.getElementById("Byte9").innerHTML = (error9+error10);
    //<<END OF SCRIPT>>Byte 9.
    
    }
window.onload = init;