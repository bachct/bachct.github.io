function mdata(){ 
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
    var bit0 = ["$50 cassette is low on money."+"<br>"]; 
    var bit1 = ["$20 cassette is low on money."+"<br>"];
    var bit2 = ["In a self test mode."+"<br>"]; 
    var bit3 = ["A fatal error has occurred."+"<br>"];
    var bit4 = ["A pick failure has occured."+"<br>"];
    var bit5 = [""+"<br>"];    
    var bit6 = ["$100 cassette is low on money."+"<br>"];
    var bit7 = ["$5 cassette is low on money."+"<br>"]; 
    var D00 = ["00 - Operation successful."];
    var D01 = ["01 - Shutter jammed closed during operation or open sensor failed indicating not closed."];
    var D02 = ["02 - Shutter jammed open during operation or closed sensor failed indicating not closed."];
    var D04 = ["03 - Clamp not in position initially."];
    var D06 = ["04 - Clamp jammed moving home or home sensor failed showing not home."];
    var D07 = ["05 - Clamp jammed moving to present or present sensor failed showing not present."];
    var D0C = ["06 - Overfill sensor blocked initially."];
    var D11 = ["07 - Overfill sensor failed clear."];
    var D13 = ["Overfill sensor blocked at end of purge operation."];
    var D14 = ["TSEN 1 sensor blocked or SOH line active initially on present or at end of purge."];
    var D15 = ["TSEN 2 sensor blocked or SOH line active initially on present or at end of purge."];
    var D16 = ["TSEN 3 sensor blocked or SOH line active initially on present or at end of purge."];
    var D17 = ["TSEN 4 sensor blocked or SOH line active initially on present or at end of purge."];
    var D18 = ["TSEN 5 sensor blocked or SOH line active initially on present or at end of purge."];
    var D19 = ["TSEN 6 sensor blocked or SOH line active initially on present or at end of purge."];
    var D1A = ["TSEN 7 sensor blocked or SOH line active initially on present or at end of purge."];
    var D1B = ["TSEN 8 sensor blocked or SOH line active initially on present or at end of purge."];
    var D1C = ["TSEN 1 sensor failed clear initially on present or at end of purge."];
    var D1D = ["TSEN 2 sensor failed clear initially on present or at end of purge."];
    var D1E = ["TSEN 3 sensor failed clear initially on present or at end of purge."];
    var D1F = ["TSEN 4 sensor failed clear initially on present or at end of purge."];
    var D20 = ["TSEN 5 sensor failed clear initially on present or at end of purge."];
    var D21 = ["TSEN 6 sensor failed clear initially on present or at end of purge."];
    var D22 = ["TSEN 7 sensor failed clear initially on present or at end of purge."];
    var D23 = ["TSEN 8 sensor failed clear initially on present or at end of purge."];
    var D24 = ["TSEN 1 sensor failed clear during operation."];
    var D25 = ["TSEN 2 sensor failed clear during operation."];
    var D26 = ["TSEN 3 sensor failed clear during operation."];
    var D27 = ["TSEN 4 sensor failed clear during operation."];
    var D28 = ["TSEN 5 sensor failed clear during operation."];
    var D29 = ["TSEN 6 sensor failed clear during operation."];
    var D2A = ["TSEN 7 sensor failed clear during operation."];
    var D2B = ["TSEN 8 sensor failed clear during operation."];
    var D2C = ["TSEN 1 sensor or SOH input failed blocked or note jam during operation."];
    var D2D = ["TSEN 2 sensor or SOH input failed blocked or note jam during operation."];
    var D2E = ["TSEN 3 sensor or SOH input failed blocked or note jam during operation."];
    var D2F = ["TSEN 4 sensor or SOH input failed blocked or note jam during operation."];
    var D30 = ["TSEN 5 sensor or SOH input failed blocked or note jam during operation."];
    var D31 = ["TSEN 6 sensor or SOH input failed blocked or note jam during operation."];
    var D32 = ["TSEN 7 sensor or SOH input failed blocked or note jam during operation."];
    var D33 = ["TSEN 8 sensor or SOH input failed blocked or note jam during operation."];
    var D34 = ["Presenter transport timing wheel failed to operate correctly."];
    var D35 = ["Reserved."];
    var D36 = ["Interlock open initially."];
    var D37 = ["Interlock open during operation."];
    var D38 = ["Clamp jammed in home position.(attempting to move home)"];
    var D39 = ["Clamp jammed in present position.(attempting to move home)"];
    var D3A = ["Clamp home sensor failed indicating home."];
    var D3B = ["Clamp present sensor failed indicating present."];
    var D3C = ["Shutter jammed closed or closed during operation."];
    var D3D = ["Shutter jammed open or opened during operation."];
    var D3E = ["Shutter open sensor failed indicating open."];
    var D3F = ["Shutter closed sensor failed indicating closed."];
    var D40 = ["Purge bin not installed initially on present or at end of purge."];
    var D41 = ["Note jam has caused presenter motor to fail."];
    var M04 = ["04 - Invalid pick interupt. A note enters the transport from the wrong cassette or one of the pick sensors is faulty."];
    var M05 = ["05 - Divert gate not in the dispense position during a dispense operation when an attempt is made to dispense a note into the note tray."];
    var M06 = ["06 - Divert gate not in the reject position on receipt of a dispense command or when an attempt is made to reject a note."];
    var M09 = ["09 - Pick sensor failed clear during operation. A note is seen at the PRE_LVDT/NTS sensor when it is not expected. This may be the result of a faulty pick sensor or a drag-out separating in the transport."];
    var M0C = ["0C - Purge bin overfill or SOH active initially or at end of clear."];
    var M10 = ["10 - Exit shutter not closed or closed sensor failed indicating not closed, or open sensor failed indicating open."];
    var M02 = ["Purge bin not installed."];
    var M03 = ["03 - Pick failure. Picking is tried 3 times after the initial attempt, each attempt being four or five pick cycles.If a note has not been picked, the motor is shut off.After a time delay, the motor is tried again.The cycle, motor off, delay, motor on, pick, is repeated up to 3 times. If all attempts fail, this status is generated.."];
    var M04 = ["04 - Invalid pick interupt. A note enters the transport from the wrong cassette or one of the pick sensors is faulty."];
    var M05 = ["05 - Divert gate not in the dispense position during a dispense operation when an attempt is made to dispense a note into the note tray."];
    var M06 = ["06 - Divert gate not in the reject position on receipt of a dispense command or when an attempt is made to reject a note."];
    var M09 = ["09 - Pick sensor failed clear during operation. A note is seen at the PRE_LVDT/NTS sensor when it is not expected. This may be the result of a faulty pick sensor or a drag-out separating in the transport."];
    var M0C = ["0C - Purge bin overfill or SOH active initially or at end of clear."];
    var M10 = ["10 - Exit shutter not closed or closed sensor failed indicating not closed, or open sensor failed indicating open."];
    var M11 = ["11 - Pick sensor blocked initially or at end of clear - occurs on a non zero dispense. OR Note did not clear pick sensor - occurs when a picked note jams under a pick sensor or the pick sensor is malfunctioning."];
    var M14 = ["14 - PRE LVDT/NTS sensor blocked or SOH active initially or at end of clear."];
    var M21 = ["21 - PRE LVDT/NTS sensor failed clear during operation. A note seen by the pick sensor has not reached the PRE LVDT/NTS sensor in time."];
    var M22 = ["22 - PRE LVDT/NTS sensor failed blocked / note jam during operation."];
    var M27 = ["27 - Presenter clamp not in home positioninitially or clamp home sensor failed blocked."];
    var M40 = ["40 - Virtual cassette type not installed. A command has not been received to pick notes from a cassette which is not installed."];
    var M41 = ["41 - TSEN 1 sensor blocked or SOH active initially on stack or at end of clear (purge path)."];
    var M42 = ["42 - TSEN 2 sensor blocked or SOH active initially upon initiating a dispense or on completion of a clear (clamp position)."];
    var M43 = ["43 - TSEN 3 sensor blocked or SOH active initially on stack or at end of clear."];
    var M44 = ["44 - TSEN 4 sensor blocked or SOH active initially on stack or at end of clear."];
    var M45 = ["45 - TSEN 5 sensor blocked or SOH active initially on stack or at end of clear (exit sensor for 5674/5 rear access and all 5670 dispensers and Personas 86)."];
    var M46 = ["46 - TSEN 6 sensor blocked or SOH active initially on stack or at end of clear."];
    var M47 = ["47 - TSEN 7 sensor blocked or SOH active initially on stack or at end of clear.(exit sensor for 5674/5 front access)"];
    var M48 = ["48 - TSEN 8 sensor blocked or SOH active initially on stack or at end of clear.(exit sensor for 568X through the wall)."];
    var M49 = ["49 - I2C fault initially."];
    var M4A = ["4A - I2C failure during operation."];
    var M4B = ["4B - Main transport disk too slow."];
    var M4C = ["4C - Reserved."];
    var M4D = ["4D - Main transport timing disk failed."];
    var M4E = ["4E - Pick sensor failed clear initially."];
    var M4F = ["4F - Pick sensor failed blocked/note jam."];
    var M50 = ["50 - Pre LVDT/NTS sensor failed clear initially."];
    var M51 = ["51 - TSEN 1 failed clear initially on stack or at end of clear."];
    var M52 = ["52 - TSEN 2 failed clear initially on stack or at end of clear."];
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
    var M60 = ["60 - Reference null reading too low LVDT #1(right hand)."];
    var M61 = ["61 - Reference null reading too low LVDT #2(left hand)."];
    var M62 = ["62 - Reference null reading too high LVDT #1(right hand)."];
    var M63 = ["63 - Reference null reading too high LVDT #2(left hand)."];
    var M64 = ["64 - LVDT/NTS fault - too few timing wheel interrupts received on execution processor within the timefor one note."];
    var M65 = ["65 - LVDT/NTS fault - execution processor did not receive a response to an LVDT request within the required time."];
    var M70 = ["70 - Cassette already FATAL because of:too many pick fails, too many rejects, cassette empty, or could not learn from the cassette."];
    var M71 = ["71 - Too many interrupts at the pick sensoror preLVDT/NTS sensor."];
    var M72 = ["72 - Note parameterswere not configured. The singularaty at this position was 0FFH. Either note parameters were not configured after initial power up, or NVRAM was corrupted and reinitialized. Note wicths, singularities and stack order should be checked."];
    var M73 = ["73 - Total thickness of notes picked on note learn has reached the limit that can safely be purged."];
    var M75 = ["75 - TSEN 1 (feed) sensor failed clear during operation or note jam before sensor. May be due to a note jam between the NTS sensor and the FEED sensor."];
    var M76 = ["76 - TSEN 1 (feed) sensor failed blocked during operation or note jam at sensor.May be due to a note jam at the FEED sensor."];
    var M77 = ["77 - TSEN 2 (exit) sensor failed clear during operation or a note jam before sensor. May be due to a note jam betwen the FEED sensor and the EXIT sensor. "];
    var M78 = ["78 - TSEN 2 (exit) sensor failed blocked during operation or note jam at sensor. May be due to a note jam at the EXIT sensor."];
    var bit01 = code.substring(0, 2);
    //<<START OF SCRIPT>> This will find and print the answer to Byte 0.
    switch(bit01) {
    case "00":text = "00 - Reset.";break;         
    case "01":text = "01 - The notes were being stacked.";break;         
    case "02":text = "02 - The notes were being dispensed.";break;       
    case "03":text = "03 - The clamp was moving to the present position.";break;       
    case "04":text = "04 - The main transport was being cleared.";break;       
    case "05":text = "05 - Check if notes are taken.";break;       
    case "06":text = "06 - The notes were being purged.";break;       
    case "07":text = "07 - A 'set notes' width was set.";break;        
    case "08":text = "08 - A 'set notes' singularity was set.";break;        
    case "09":text = "09 - A 'set notes' pick order was set.";break;        
    case "0A":text = "0A - Read dispense counts.";break;        
    case "0B":text = "0B - Clear dispense counts.";break;
    case "0C":text = "0C - Read configured parameters.";break;        
    case "0D":text = "0D - Read container status.";break;        
    case "0E":text = "0E - Read cassette type.";break;        
    case "0F":text = "0F - Rotate clamp to home position.";break;        
    case "10":text = "10 - Close shutter command.";break;        
    case "11":text = "11 - Main motor test.";break;        
    case "12":text = "12 - Pick valve test.";break;        
    case "13":text = "13 - Learn bill parameters.";break;        
    case "14":text = "14 - Exit shutter test.";break;     
    case "15":text = "15 - Presenter motor test.";break;      
    case "16":text = "16 - Presenter clamp test.";break;      
    case "1C":text = "1C - Pre present.";break;
    case "1B":text = "1B - Disable Hamming codes.";break;
    case "17":text = "17 - Sensor test mode.";break;
    case "22":text = "22 - Divert gate test";break;       
    default:text = "";
    
    }
        document.getElementById("Byte0").innerHTML = text;
            //<<END OF SCRIPT>>Byte 0.
    
    //<<START OF SCRIPT>>This will find and print the answer to Byte 1.
    var res1 = code.substring(2, 3);
    var error;
    if (res1 == "0") {error = "";} 
    else if (res1 == "1"){error = bit4;} 
    else if (res1 == "2"){error = bit5;} 
    else if (res1 == "3"){error = bit4+bit5;} 
    else if (res1 == "4"){error = bit6;} 
    else if (res1 == "5"){error = bit4+bit6;} 
    else if (res1 == "6"){error = bit5+bit6;} 
    else if (res1 == "7"){error = bit4+bit5+bit6;} 
    else if (res1 == "8"){error = bit7;} 
    else if (res1 == "9"){error = bit4+bit7;} 
    else if (res1 == "A"){error = bit5+bit7;} 
    else if (res1 == "B"){error = bit4+bit5+bit7;} 
    else if (res1 == "C"){error = bit6+bit7;} 
    else if (res1 == "D"){error = bit4+bit6+bit7;} 
    else if (res1 == "E"){error = bit5+bit6+bit7;} 
    else if (res1 == "F"){error = bit4+bit5+bit6+bit7;}
    else {error = "";}    
    var res2 = code.substring(3,4);
    var error2;
    if (res2 == "0") {error2 = "";} 
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
    else {error2 = "";}  
    //MData changes as per Byte0 input.
    var res3 = code.substring(0, 4);
    if (res3 == "1400") {error = "Operation OK.";}
    else if (res3 == "1401") {error = "Shutter closed sensor indicated closed when it should have been not closed.";}
    else if (res3 == "1100") {error = "Good operation."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";}
    else if (res3 == "1101") {error = "Timing wheel slow."+"<br>"+"<font color='green' >" +  "Byte 2 is the number of timing wheel ticks seen during test.";}
    else if (res3 == "1102") {error = "Timing wheel fast."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during tes.t";}
    else if (res3 == "1103") {error = "Timing wheel failed."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";}
    else if (res3 == "1104") {error = "Timing wheel too slow."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";}
    else if (res3 == "1105") {error = "Timing wheel too fast."+"<br>"+"<font color='green'>" +  "Byte 2 is the number of timing wheel ticks seen during test.";}
    else if (res3 == "0200" || res3 == "0300" || res3 == "0600" || res3 == "0F00") {error = D00, error2 = "";}
    else if (res3 == "0201" || res3 == "0301" || res3 == "0601" || res3 == "0F01") {error = D01, error2 = "";}
    else if (res3 == "0202" || res3 == "0302" || res3 == "0602" || res3 == "0F02") {error = D02, error2 = "";}
    else if (res3 == "0204" || res3 == "0304" || res3 == "0604" || res3 == "0F04") {error = D04, error2 = "";}
    else if (res3 == "0206" || res3 == "0306" || res3 == "0606" || res3 == "0F06") {error = D06, error2 = "";}
    else if (res3 == "0207" || res3 == "0307" || res3 == "0607" || res3 == "0F07") {error = D07, error2 = "";}
    else if (res3 == "020C" || res3 == "030C" || res3 == "060C" || res3 == "0F0C") {error = D0C, error2 = "";}
    else if (res3 == "0211" || res3 == "0311" || res3 == "0611" || res3 == "0F11") {error = D11, error2 = "";}
    else if (res3 == "0213" || res3 == "0313" || res3 == "0613" || res3 == "0F13") {error = D13, error2 = "";}
    else if (res3 == "0214" || res3 == "0314" || res3 == "0614" || res3 == "0F14") {error = D14, error2 = "";}
    else if (res3 == "0215" || res3 == "0315" || res3 == "0615" || res3 == "0F15") {error = D15, error2 = "";}
    else if (res3 == "0216" || res3 == "0316" || res3 == "0616" || res3 == "0F16") {error = D16, error2 = "";}
    else if (res3 == "0217" || res3 == "0317" || res3 == "0617" || res3 == "0F17") {error = D17, error2 = "";}
    else if (res3 == "0218" || res3 == "0318" || res3 == "0618" || res3 == "0F18") {error = D18, error2 = "";}
    else if (res3 == "0219" || res3 == "0319" || res3 == "0619" || res3 == "0F19") {error = D19, error2 = "";}
    else if (res3 == "021A" || res3 == "031A" || res3 == "061A" || res3 == "0F1A") {error = D1A, error2 = "";}
    else if (res3 == "021B" || res3 == "031B" || res3 == "061B" || res3 == "0F1B") {error = D1B, error2 = "";}
    else if (res3 == "021C" || res3 == "031C" || res3 == "061C" || res3 == "0F1C") {error = D1C, error2 = "";}
    else if (res3 == "021D" || res3 == "031D" || res3 == "061D" || res3 == "0F1D") {error = D1D, error2 = "";}
    else if (res3 == "021E" || res3 == "031E" || res3 == "061E" || res3 == "0F1E") {error = D1E, error2 = "";}
    else if (res3 == "021F" || res3 == "031F" || res3 == "061F" || res3 == "0F1F") {error = D1F, error2 = "";}
    else if (res3 == "0220" || res3 == "0320" || res3 == "0620" || res3 == "0F20") {error = D20, error2 = "";}
    else if (res3 == "0221" || res3 == "0321" || res3 == "0621" || res3 == "0F21") {error = D21, error2 = "";}
    else if (res3 == "0222" || res3 == "0322" || res3 == "0622" || res3 == "0F22") {error = D22, error2 = "";}
    else if (res3 == "0223" || res3 == "0323" || res3 == "0623" || res3 == "0F23") {error = D23, error2 = "";}
    else if (res3 == "0224" || res3 == "0324" || res3 == "0624" || res3 == "0F24") {error = D24, error2 = "";}
    else if (res3 == "0225" || res3 == "0325" || res3 == "0625" || res3 == "0F25") {error = D25, error2 = "";}
    else if (res3 == "0226" || res3 == "0326" || res3 == "0626" || res3 == "0F26") {error = D26, error2 = "";}
    else if (res3 == "0227" || res3 == "0327" || res3 == "0627" || res3 == "0F27") {error = D27, error2 = "";}
    else if (res3 == "0228" || res3 == "0328" || res3 == "0628" || res3 == "0F28") {error = D28, error2 = "";}
    else if (res3 == "0229" || res3 == "0329" || res3 == "0629" || res3 == "0F29") {error = D29, error2 = "";}
    else if (res3 == "022A" || res3 == "032A" || res3 == "062A" || res3 == "0F2A") {error = D2A, error2 = "";}
    else if (res3 == "022B" || res3 == "032B" || res3 == "062B" || res3 == "0F2B") {error = D2B, error2 = "";}
    else if (res3 == "022C" || res3 == "032C" || res3 == "062C" || res3 == "0F2C") {error = D2C, error2 = "";}
    else if (res3 == "022D" || res3 == "032D" || res3 == "062D" || res3 == "0F2D") {error = D2D, error2 = "";}
    else if (res3 == "022E" || res3 == "032E" || res3 == "062E" || res3 == "0F2E") {error = D2E, error2 = "";}
    else if (res3 == "022F" || res3 == "032F" || res3 == "062F" || res3 == "0F2F") {error = D2F, error2 = "";}
    else if (res3 == "0230" || res3 == "0330" || res3 == "0630" || res3 == "0F30") {error = D30, error2 = "";}
    else if (res3 == "0231" || res3 == "0331" || res3 == "0631" || res3 == "0F31") {error = D31, error2 = "";}
    else if (res3 == "0232" || res3 == "0332" || res3 == "0632" || res3 == "0F32") {error = D32, error2 = "";}
    else if (res3 == "0233" || res3 == "0333" || res3 == "0633" || res3 == "0F33") {error = D33, error2 = "";}
    else if (res3 == "0234" || res3 == "0334" || res3 == "0634" || res3 == "0F34") {error = D34, error2 = "";}
    else if (res3 == "0235" || res3 == "0335" || res3 == "0635" || res3 == "0F35") {error = D35, error2 = "";}
    else if (res3 == "0236" || res3 == "0336" || res3 == "0636" || res3 == "0F36") {error = D36, error2 = "";}
    else if (res3 == "0237" || res3 == "0337" || res3 == "0637" || res3 == "0F37") {error = D37, error2 = "";}
    else if (res3 == "0238" || res3 == "0338" || res3 == "0638" || res3 == "0F38") {error = D38, error2 = "";}
    else if (res3 == "0239" || res3 == "0339" || res3 == "0639" || res3 == "0F39") {error = D39, error2 = "";}
    else if (res3 == "023A" || res3 == "033A" || res3 == "063A" || res3 == "0F3A") {error = D3A, error2 = "";}
    else if (res3 == "023B" || res3 == "033B" || res3 == "063B" || res3 == "0F3B") {error = D3B, error2 = "";}
    else if (res3 == "023C" || res3 == "033C" || res3 == "063C" || res3 == "0F3C") {error = D3C, error2 = "";}    
    else if (res3 == "023D" || res3 == "033D" || res3 == "063D" || res3 == "0F3D") {error = D3D, error2 = "";}
    else if (res3 == "023E" || res3 == "033E" || res3 == "063E" || res3 == "0F3E") {error = D3E, error2 = "";}    
    else if (res3 == "023F" || res3 == "033F" || res3 == "063F" || res3 == "0F3F") {error = D3F, error2 = "";}
    else if (res3 == "0240" || res3 == "0340" || res3 == "0640" || res3 == "0F40") {error = D40, error2 = "";}
    else if (res3 == "0241" || res3 == "0341" || res3 == "0641" || res3 == "0F41") {error = D41, error2 = "";}  
    else if (res3 == "1500") {error = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Good operation.";}
    else if (res3 == "1501") {error = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel slow";}
    else if (res3 == "1502") {error = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel fast.";}
    else if (res3 == "1503") {error = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel failed.";}
    else if (res3 == "1504") {error = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel too slow.";}
    else if (res3 == "1505") {error = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status Slow Speed :"+"</font>"+"<br>"+"Timing wheel too fast.";}
    else if (res3 == "1600") {error = "Operation successful.";}
    else if (res3 == "1601") {error = "Clamp home indicated home when it should have been not home.";}
    
      text = document.getElementById("Byte1").innerHTML = (error+error2);
    //<<END OF SCRIPT>>Byte 1.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 2.
    var code = document.getElementById("myInput0").value;
    var text;
    var bit2 = code.substring(4,6);
    switch(bit2) {     
    case "02":text = M02;break;       
    case "03":text = M03;break;       
    case "04":text = M04;break;       
    case "05":text = M05;break;       
    case "06":text = M06;break;            
    case "09":text = M09;break;        
    case "0C":text = M0C;break;          
    case "10":text = M10;break;        
    case "11":text = M11;break;        
    case "14":text = M14;break;        
    case "21":text = M21;break;      
    case "22":text = M22;break;      
    case "27":text = M27;break;
    case "40":text = M40;break;
    case "41":text = M41;break;
    case "42":text = M42;break;        
    case "43":text = M43;break; 
    case "44":text = M44;break;        
    case "45":text = M45;break;        
    case "46":text = M46;break;        
    case "47":text = M47;break;        
    case "48":text = M48;break; 
    case "49":text = M49;break;        
    case "4A":text = M4A;break;
    case "4B":text = M4B;break;
    case "4C":text = M4C;break;
    case "4D":text = M4D;break;
    case "4E":text = M4E;break;
    case "4F":text = M4F;break;
    case "50":text = M50;break;
    case "51":text = M51;break;
    case "52":text = M52;break;
    case "53":text = M53;break; 
    case "54":text = M54;break; 
    case "55":text = M55;break;        
    case "56":text = M56;break;
    case "57":text = M57;break;
    case "58":text = M58;break;
    case "59":text = M59;break;
    case "5A":text = M5A;break;
    case "5B":text = M5B;break;
    case "5C":text = M5C;break;
    case "60":text = M60;break;
    case "61":text = M61;break;
    case "62":text = M62;break; 
    case "63":text = M63;break; 
    case "64":text = M64;break;        
    case "65":text = M65;break;
    case "70":text = M70;break;
    case "71":text = M71;break;
    case "72":text = M72;break;
    case "73":text = M73;break;
    case "75":text = M75;break;
    case "76":text = M76;break;
    case "77":text = M77;break;
    case "78":text = M78;break;   
    default:text = "";
    }
    var code = document.getElementById("myInput0").value;
    var text;
    var bit2 = code.substring(0, 6);
    var bit3 = code.substring(0, 2);
    var bit4 = code.substring(4, 6);
    if (bit2 == "140000" || bit2 == "140100") {text = "Operation OK.";}
    else if (bit2 == "140001" || bit2 == "140101") {text = "Shutter open sensor indicated open when it should have been not open.";}
    else if (bit2 == "150000" || bit2 == "150100" || bit2 == "150200" || bit2 == "150300" || bit2 == "150400" || bit2 == "150500") {text = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status High Speed :"+"</font>"+"<br>"+"Good operation.";}
    else if (bit2 == "150001" || bit2 == "150101" || bit2 == "150201" || bit2 == "150301" || bit2 == "150401" || bit2 == "150501") {text = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel slow";}
    else if (bit2 == "150002" || bit2 == "150102" || bit2 == "150202" || bit2 == "150302" || bit2 == "150402" || bit2 == "150502") {text = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel fast.";}
    else if (bit2 == "150003" || bit2 == "150103" || bit2 == "150203" || bit2 == "150303" || bit2 == "150403" || bit2 == "150503") {text = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel failed.";}
    else if (bit2 == "150004" || bit2 == "150104" || bit2 == "150204" || bit2 == "150304" || bit2 == "150404" || bit2 == "150504") {text = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel too slow.";}
    else if (bit2 == "150005" || bit2 == "150105"|| bit2 == "150205" || bit2 == "150305" || bit2 == "150405" || bit2 == "150505") {text = "<font color=`green` size=`1.5px`>"+"Forwards Operation Status High Speed :"+"</font>"+"<br>"+"Timing wheel too fast.";}
    else if (bit3 == "02" && bit4 == "00" || bit3 == "03" && bit4 == "00" || bit3 == "06" && bit4 == "00" || bit3 == "0F" && bit4 == "00") {text = "00 - Notes seen at purge/overfill sensor during the operation. (purge only)";}
    else if (bit3 == "02" && bit4 == "01" || bit3 == "03" && bit4 == "01" || bit3 == "06" && bit4 == "01" || bit3 == "0F" && bit4 == "01") {text = "01 - Notes not seen at purge/overfill sensor during the initial purge  operation.";}
    else if (bit3 == "02" && bit4 == "02" || bit3 == "03" && bit4 == "02" || bit3 == "06" && bit4 == "02" || bit3 == "0F" && bit4 == "02") {text = "02 - Notes  are still in the the presenter transport. (purge only)";}
    else if (bit3 == "02" && bit4 == "03" || bit3 == "03" && bit4 == "03" || bit3 == "06" && bit4 == "03" || bit3 == "0F" && bit4 == "03") {text = "03 - An unknown present occurred. (present only)";}
    else if (bit2 == "160000" || bit2 == "160100") {text = "Operation successful.";}
    else if (bit2 == "160001" || bit2 == "160101") {text = "Clamp present indicated present when it should have been not present.";}
    else if (bit2 == "160000" || bit2 == "160100") {text = "Operation successful.";}
    else if (bit2 == "160001" || bit2 == "160101") {text = "Clamp present indicated present when it should have been not present.";}
    
    document.getElementById("Byte2").innerHTML = text;
    
    //<<END OF SCRIPT>>Byte 2.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 3.
    var code = document.getElementById("myInput0").value;
    var text;
    var bit3 = code.substring(6,8);
    switch(bit3) {     
    case "02":text = M02;break;       
    case "03":text = M03;break;       
    case "04":text = M04;break;       
    case "05":text = M05;break;       
    case "06":text = M06;break;            
    case "09":text = M09;break;        
    case "0C":text = M0C;break;          
    case "10":text = M10;break;        
    case "11":text = M11;break;        
    case "14":text = M14;break;        
    case "21":text = M21;break;      
    case "22":text = M22;break;      
    case "27":text = M27;break;
    case "40":text = M40;break;
    case "41":text = M41;break;
    case "42":text = M42;break;        
    case "43":text = M43;break; 
    case "44":text = M44;break;        
    case "45":text = M45;break;        
    case "46":text = M46;break;        
    case "47":text = M47;break;        
    case "48":text = M48;break; 
    case "49":text = M49;break;        
    case "4A":text = M4A;break;
    case "4B":text = M4B;break;
    case "4C":text = M4C;break;
    case "4D":text = M4D;break;
    case "4E":text = M4E;break;
    case "4F":text = M4F;break;
    case "50":text = M50;break;
    case "51":text = M51;break;
    case "52":text = M52;break;
    case "53":text = M53;break; 
    case "54":text = M54;break; 
    case "55":text = M55;break;        
    case "56":text = M56;break;
    case "57":text = M57;break;
    case "58":text = M58;break;
    case "59":text = M59;break;
    case "5A":text = M5A;break;
    case "5B":text = M5B;break;
    case "5C":text = M5C;break;
    case "60":text = M60;break;
    case "61":text = M61;break;
    case "62":text = M62;break; 
    case "63":text = M63;break; 
    case "64":text = M64;break;        
    case "65":text = M65;break;
    case "70":text = M70;break;
    case "71":text = M71;break;
    case "72":text = M72;break;
    case "73":text = M73;break;
    case "75":text = M75;break;
    case "76":text = M76;break;
    case "77":text = M77;break;
    case "78":text = M78;break;  
    default:
      text = "";
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
    var code = document.getElementById("myInput0").value;
    var text;
    var bit4 = code.substring(8, 10);
    switch(bit4) {     
    case "02":text = M02;break;       
    case "03":text = M03;break;       
    case "04":text = M04;break;       
    case "05":text = M05;break;       
    case "06":text = M06;break;            
    case "09":text = M09;break;        
    case "0C":text = M0C;break;          
    case "10":text = M10;break;        
    case "11":text = M11;break;        
    case "14":text = M14;break;        
    case "21":text = M21;break;      
    case "22":text = M22;break;      
    case "27":text = M27;break;
    case "40":text = M40;break;
    case "41":text = M41;break;
    case "42":text = M42;break;        
    case "43":text = M43;break; 
    case "44":text = M44;break;        
    case "45":text = M45;break;        
    case "46":text = M46;break;        
    case "47":text = M47;break;        
    case "48":text = M48;break; 
    case "49":text = M49;break;        
    case "4A":text = M4A;break;
    case "4B":text = M4B;break;
    case "4C":text = M4C;break;
    case "4D":text = M4D;break;
    case "4E":text = M4E;break;
    case "4F":text = M4F;break;
    case "50":text = M50;break;
    case "51":text = M51;break;
    case "52":text = M52;break;
    case "53":text = M53;break; 
    case "54":text = M54;break; 
    case "55":text = M55;break;        
    case "56":text = M56;break;
    case "57":text = M57;break;
    case "58":text = M58;break;
    case "59":text = M59;break;
    case "5A":text = M5A;break;
    case "5B":text = M5B;break;
    case "5C":text = M5C;break;
    case "60":text = M60;break;
    case "61":text = M61;break;
    case "62":text = M62;break; 
    case "63":text = M63;break; 
    case "64":text = M64;break;        
    case "65":text = M65;break;
    case "70":text = M70;break;
    case "71":text = M71;break;
    case "72":text = M72;break;
    case "73":text = M73;break;
    case "75":text = M75;break;
    case "76":text = M76;break;
    case "77":text = M77;break;
    case "78":text = M78;break;  
    default:
      text = "";
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
    var code = document.getElementById("myInput0").value;
    var text;
    var bit5 = code.substring(10, 12);
    switch(bit5) {     
    case "02":text = M02;break;       
    case "03":text = M03;break;       
    case "04":text = M04;break;       
    case "05":text = M05;break;       
    case "06":text = M06;break;            
    case "09":text = M09;break;        
    case "0C":text = M0C;break;          
    case "10":text = M10;break;        
    case "11":text = M11;break;        
    case "14":text = M14;break;        
    case "21":text = M21;break;      
    case "22":text = M22;break;      
    case "27":text = M27;break;
    case "40":text = M40;break;
    case "41":text = M41;break;
    case "42":text = M42;break;        
    case "43":text = M43;break; 
    case "44":text = M44;break;        
    case "45":text = M45;break;        
    case "46":text = M46;break;        
    case "47":text = M47;break;        
    case "48":text = M48;break; 
    case "49":text = M49;break;        
    case "4A":text = M4A;break;
    case "4B":text = M4B;break;
    case "4C":text = M4C;break;
    case "4D":text = M4D;break;
    case "4E":text = M4E;break;
    case "4F":text = M4F;break;
    case "50":text = M50;break;
    case "51":text = M51;break;
    case "52":text = M52;break;
    case "53":text = M53;break; 
    case "54":text = M54;break; 
    case "55":text = M55;break;        
    case "56":text = M56;break;
    case "57":text = M57;break;
    case "58":text = M58;break;
    case "59":text = M59;break;
    case "5A":text = M5A;break;
    case "5B":text = M5B;break;
    case "5C":text = M5C;break;
    case "60":text = M60;break;
    case "61":text = M61;break;
    case "62":text = M62;break; 
    case "63":text = M63;break; 
    case "64":text = M64;break;        
    case "65":text = M65;break;
    case "70":text = M70;break;
    case "71":text = M71;break;
    case "72":text = M72;break;
    case "73":text = M73;break;
    case "75":text = M75;break;
    case "76":text = M76;break;
    case "77":text = M77;break;
    case "78":text = M78;break;  
    default:
      text = "";
  }
    document.getElementById("Byte5").innerHTML = text;
    
    //<<END OF SCRIPT>>Byte 5.
    
    var DBit7 = ["Inaccurate note count, or unable to learn note paramenters during learn note parameters command." + "<br>"];
    var DBit6 = ["Thermistor indicates cold (below 10deg C)." + "<br>"];
    var DBit5 = ["Cassette not installed." + "<br>"];
    var DBit4 = ["At least one extra note picked." + "<br>"];
    var DBit3 = ["At least one long note detected." + "<br>"];
    var DBit2 = ["At least one short note detected." + "<br>"];
    var DBit1 = ["At least one multiple (double) note detected." + "<br>"];
    var DBit0 = ["At least one overlength note detected." + "<br>"];
    
    //<<START OF SCRIPT>>This will find and print the answer to Byte 6.
    var res3 = code.substring(12, 13);
    var error3;
    if (res3 == "0") {error3 = "";} 
    else if (res3 == "1"){error3 = DBit4;} 
    else if (res3 == "2"){error3 = DBit5;} 
    else if (res3 == "3"){error3 = DBit4+DBit5;} 
    else if (res3 == "4"){error3 = DBit6;} 
    else if (res3 == "5"){error3 = DBit4+DBit6;} 
    else if (res3 == "6"){error3 = DBit5+DBit6;} 
    else if (res3 == "7"){error3 = DBit4+DBit5+DBit6;} 
    else if (res3 == "8"){error3 = DBit7;} 
    else if (res3 == "9"){error3 = DBit4+DBit7;} 
    else if (res3 == "A"){error3 = DBit5+DBit7;} 
    else if (res3 == "B"){error3 = DBit4+DBit5+DBit7;} 
    else if (res3 == "C"){error3 = DBit6+DBit7;} 
    else if (res3 == "D"){error3 = DBit4+DBit6+DBit7;} 
    else if (res3 == "E"){error3 = DBit5+DBit6+DBit7;} 
    else if (res3 == "F"){error3 = DBit4+DBit5+DBit6+DBit7;}
    else {error3 = "";}    
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
    else {error4 = "";}  
    
      text = document.getElementById("Byte6").innerHTML = (error3+error4);
    //<<END OF SCRIPT>>Byte 6.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 7.
     var res5 = code.substring(14, 15);
    var error5;
    if (res5 == "0") {error5 = "";} 
    else if (res5 == "1"){error5 = DBit4;} 
    else if (res5 == "2"){error5 = DBit5;} 
    else if (res5 == "3"){error5 = DBit4+DBit5;} 
    else if (res5 == "4"){error5 = DBit6;} 
    else if (res5 == "5"){error5 = DBit4+DBit6;} 
    else if (res5 == "6"){error5 = DBit5+DBit6;} 
    else if (res5 == "7"){error5 = DBit4+DBit5+DBit6;} 
    else if (res5 == "8"){error5 = DBit7;} 
    else if (res5 == "9"){error5 = DBit4+DBit7;} 
    else if (res5 == "A"){error5 = DBit5+DBit7;} 
    else if (res5 == "B"){error5 = DBit4+DBit5+DBit7;} 
    else if (res5 == "C"){error5 = DBit6+DBit7;} 
    else if (res5 == "D"){error5 = DBit4+DBit6+DBit7;} 
    else if (res5 == "E"){error5 = DBit5+DBit6+DBit7;} 
    else if (res5 == "F"){error5 = DBit4+DBit5+DBit6+DBit7;}
    else {error5 = "";}    
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
    else {error6 = "";}  
    
      text = document.getElementById("Byte7").innerHTML = (error5+error6);
    //<<END OF SCRIPT>>Byte 7.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 8.
    var res7 = code.substring(16, 17);
    var error7;
    if (res7 == "0") {error7 = "";} 
    else if (res7 == "1"){error7 = DBit4;} 
    else if (res7 == "2"){error7 = DBit5;} 
    else if (res7 == "3"){error7 = DBit4+DBit5;} 
    else if (res7 == "4"){error7 = DBit6;} 
    else if (res7 == "5"){error7 = DBit4+DBit6;} 
    else if (res7 == "6"){error7 = DBit5+DBit6;} 
    else if (res7 == "7"){error7 = DBit4+DBit5+DBit6;} 
    else if (res7 == "8"){error7 = DBit7;} 
    else if (res7 == "9"){error7 = DBit4+DBit7;} 
    else if (res7 == "A"){error7 = DBit5+DBit7;} 
    else if (res7 == "B"){error7 = DBit4+DBit5+DBit7;} 
    else if (res7 == "C"){error7 = DBit6+DBit7;} 
    else if (res7 == "D"){error7 = DBit4+DBit6+DBit7;} 
    else if (res7 == "E"){error7 = DBit5+DBit6+DBit7;} 
    else if (res7 == "F"){error7 = DBit4+DBit5+DBit6+DBit7;}
    else {error7 = "";}    
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
    else {error8 = "";}  
    
      text = document.getElementById("Byte8").innerHTML = (error7+error8);
    //<<END OF SCRIPT>>Byte 8.
    //<<START OF SCRIPT>>This will find and print the answer to Byte 9.
    var res9 = code.substring(18, 19);
    var error9;
    if (res9 == "0") {error9 = "";} 
    else if (res9 == "1"){error9 = DBit4;} 
    else if (res9 == "2"){error9 = DBit5;} 
    else if (res9 == "3"){error9 = DBit4+DBit5;} 
    else if (res9 == "4"){error9 = DBit6;} 
    else if (res9 == "5"){error9 = DBit4+DBit6;} 
    else if (res9 == "6"){error9 = DBit5+DBit6;} 
    else if (res9 == "7"){error9 = DBit4+DBit5+DBit6;} 
    else if (res9 == "8"){error9 = DBit7;} 
    else if (res9 == "9"){error9 = DBit4+DBit7;} 
    else if (res9 == "A"){error9 = DBit5+DBit7;} 
    else if (res9 == "B"){error9 = DBit4+DBit5+DBit7;} 
    else if (res9 == "C"){error9 = DBit6+DBit7;} 
    else if (res9 == "D"){error9 = DBit4+DBit6+DBit7;} 
    else if (res9 == "E"){error9 = DBit5+DBit6+DBit7;} 
    else if (res9 == "F"){error9 = DBit4+DBit5+DBit6+DBit7;}
    else {error9 = "";}    
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
    else {error10 = "";}  
    
      text = document.getElementById("Byte9").innerHTML = (error9+error10);
    //<<END OF SCRIPT>>Byte 9.
    }
window.onload = init;