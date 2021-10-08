function myFunction() {
    var Easypoint; 
    var code;
    Easypoint = Number(document.getElementById("Easypoint").value);
    if (Easypoint == "002") 
        {code = "002 - ENQ transmit timeout (FUJI)<br>Dispenser Not Responding (HAWK, MCDM, TCDM).";}		
    else
        if (Easypoint == "003") 
        {code = "003 - Command response receive time-out (HAWK).";}	
	else 
         if (Easypoint == "004") 
        {code = "004 - Communication write failed (HAWK).";}	
	else 
         if (Easypoint == "005") 
        {code = "005 - Block check character error (HAWK).";}	
	else 
         if (Easypoint == "007") 
        {code = "007 - Dispenser Response Timeout (HAWK, MCDM, TCDM).";}	
	else
         if (Easypoint == "009") 
        {code = "009 - FIB (Feeder/dispenser Interface Board) jumper setting error (HAWK).";}	
	else 
         if (Easypoint == "010") 
        {code = "010 - FIB not responding (HAWK, MCDM, TCDM).";}	
	else 
         if (Easypoint == "011") 
        {code = "011 - <br>Dispenser Demo Mode Jumper Setting Error.-or- <br>Invalid item length or thickness.-or-<br>FIB error recovery failure (HAWK, MCDM, TCDM).";}	
	else
         if (Easypoint == "012") 
        {code = "012 - Power Fail During Dispense (MCDM, TCDM).";}	
	else 
         if (Easypoint == "013") 
        {code = "013 - Empty Cassette(S) (TCDM)."; }   
	else 
         if (Easypoint == "014") 
        {code = "014 - All Cassettes Out Of Service (TCDM).";}	
	else 
	     if (Easypoint == "015") 
        {code = "015 - Left Cassette 4 Sensor Blocked (TCDM) "; }   
	else 
        if (Easypoint == "016") 
        {code = "016 - Right Cassette 4 Sensor Blocked (TCDM)."; }   
	else
         if (Easypoint == "017") 
        {code = "017 - Left Cassette 3 Sensor Blocked (TCDM)."; }   
	else 
         if (Easypoint == "018") 
        {code = "018 - Right Cassette 3 Sensor Blocked (TCDM)."; }   
	else
         if (Easypoint == "019") 
        {code = "019 - Unknown error code (FUJI) <br>Left Cassette 2 Sensor Blocked (TCDM)."; }   
	else 
         if (Easypoint == "020") 
        {code = "020 - Right Cassette 2 Sensor Blocked (TCDM)."; }   
	else 
         if (Easypoint == "021") 
        {code = "021 - Power fail during dispense (FUJI) <br>Left Cassette 1 Sensor Blocked (TCDM)."; }   
	else 
        if (Easypoint == "022") 
        {code = "022 - Right Cassette 1 Sensor Blocked (TCDM)."; }   
	else 
        if (Easypoint == "023") 
        {code = "023 - Left Sensor Before RVDT Blocked (TCDM)."; }   
	else 
        if (Easypoint == "024") 
        {code = "024 - Right Sensor Before RVDT Blocked (TCDM)."; }   
	else 
        if (Easypoint == "025") 
        {code = "025 - Left Sensor Before Diverter Blocked (TCDM)."; }   
	else 
        if (Easypoint == "026") 
        {code = "026 - Right Sensor Before Diverter Blocked (TCDM)."; }   
	else 
        if (Easypoint == "027") 
        {code = "027 - Left Reject Sensor Blocked (TCDM)."; }   
	else 
         if (Easypoint == "028") 
        {code = "028 - Count mismatch (FUJI) <br>Right Reject Sensor Blocked (TCDM)."; }   
	else 
         if (Easypoint == "029") 
        {code = "029 - Left Sensor After Diverter Blocked (TCDM)."; }   
	else 
         if (Easypoint == "030") 
        {code = "030 - Right Sensor After Diverter Blocked (TCDM)."; }   
	else         
         if (Easypoint == "031") 
        {code = "031 - Left Eject Sensor Blocked (TCDM)."; }   
	else
        if (Easypoint == "032") 
        {code = "032 - Right Eject Sensor Blocked (TCDM)."; }   
	else 
        if (Easypoint == "033") 
        {code = "033 - Cassette 1 not installed (FUJI)<br>Feed failure (HAWK) <br>Pick Failure (MCDM, TCDM)."; }   
	else 
        if (Easypoint == "034") 
        {code = "034 - Cassette 1 pick failure (FUJI) <br>Item mis-track at feed (HAWK) <br>Jam Between Cassette 1 and RVDT (TCDM)."; }   
	else 
        if (Easypoint == "035") 
        {code = "035 - Cassette 2 not installed (FUJI) <br>Item mis-track at double detect (HAWK)<br>Jam Between Cassette 2 and RVDT (TCDM).";}
    else 
        if (Easypoint == "036") 
        {code = "036 - Cassette 2 pick failure (FUJI) <br>Item mis-track at exit (HAWK) <br>Jam Between Cassette 3 and RVDT (TCDM)."; }   
	else 
        if (Easypoint == "037") 
        {code = "037 - Cassette 3 not installed (FUJI) <br>Delay At Exit Sensor (MCDM) <br>Item too long at exit (HAWK) <br>Jam Between Cassette 4 and RVDT (TCDM)."; }   
	else 
        if (Easypoint == "038") 
        {code = "038 - Cassette 3 pick failure (FUJI) <br>Blocked exit (HAWK) <br>Exit Sensor Blocked (MCDM)."; }   
	else 
        if (Easypoint == "039") 
        {code = "039 - Cassette 4 not installed (FUJI) <br>Jam Between Diverter and Exit (TCDM) <br>Timing Wheel Error (MCDM)<br>Too many items (HAWK)."; }   
	else
        if (Easypoint == "040")
        {code = "040 - Cassette 4 pick failure (FUJI) <br>Double Detect Before Picking <br>Jam Between Diverter and Reject (TCDM) <br>Timing wheel error (HAWK).";}
    else
        if (Easypoint == "041")
        {code = "041 - Diverter Error (HAWK, MCDM) <br>Note At Exit Too Long (TCDM).";}
    else
        if (Easypoint == "042")
        {code = "042 - Exit Count Error (MCDM) <br>Note At Exit Too Short (TCDM).";}
    else
        if (Easypoint == "043")
        {code = "043 - Bldc Motor Failure (TCDM).";}
    else
        if (Easypoint == "044")
        {code = "044 - Motor failure (FUJI) <br>Operation time-out (HAWK) <br>Sensor Error (TCDM).";}
    else
        if (Easypoint == "045")
        {code = "045 - Jam between pick & potentiometer sensors (FUJI) <br>Motor Failure Check 24v Power (TCDM).";}
    else
        if (Easypoint == "046")
        {code = "046 - Abnormal Feeding Speed (TCDM) <br>Calibration error (HAWK) <br>Exit Sensor Initialization Error (MCDM).";}
    else
        if (Easypoint == "047")
        {code = "047 - Jam between potentiometer and exit sensors (FUJI) <br>Cassette type not equal to position (HAWK) <br>Diverter Failed Note(S) Rejected (TCDM).";}
    else
        if (Easypoint == "048")
        {code = "048 - Check diverter gate (FUJI) <br>Diverter Failed Note(S) Ejected (TCDM) <br>Empty cassette(s) (HAWK).";}
    else
        if (Easypoint == "049")
        {code = "049 - All cassettes out of service (HAWK) <br>Dispenser Error Code Unknown (MCDM) <br>Diverter Failed During Initialization (TCDM).";}
    else
        if (Easypoint == "050")
        {code = "050 - Dispense Timeout (MCDM) <br>Sensor Error-Notes Mistracked (TCDM).";}
    else
        if (Easypoint == "051")
        {code = "051  Exit sensor blocked (HAWK) <br>Note Skew-Check Condition Of Notes (TCDM).";}
    else
        if (Easypoint == "052")
        {code = "052 - Abnormal double detect in last dispense (HAWK) <br>Too Many Notes Requested (TCDM).";}
    else
        if (Easypoint == "053")
        {code = "053 - Bad Command To Dispenser (MCDM) <br>Too Many Notes Rejected (TCDM).";}
    else
        if (Easypoint == "054")
        {code = "054 - TCDM Unknown Command (TCDM) <br>Cassette 1 Pick Sensor Blocked (MCDM) <br>EPROM error (HAWK) <br>Unknown Dispenser Error Code (TCDM).";}
    else
        if (Easypoint == "055")
        {code = "055 - Potentiometer failure (FUJI) <br>Cassette 2 Pick Sensor Blocked (MCDM) <br>Potentiometer Error (TCDM).";}
    else
        if (Easypoint == "056")
        {code = "056 - Empty cassette(s) (FUJI) <br>Reject Cassette Missing (TCDM).";}
    else
        if (Easypoint == "057")
        {code = "057 - TCDM Dip Switch 3 Not Set Correctly (TCDM).";}
    else
        if (Easypoint == "058")
        {code = "058 - Warning - Cassette Missing (TCDM).";}
    else
        if (Easypoint == "059")
        {code = "059 - Warning - Reject Cassette Almost Full (TCDM).";}
    else
        if (Easypoint == "060")
        {code = "060 - Dispensing From Wrong Cassette (TCDM).";}
    else
        if (Easypoint == "061")
        {code = "061 - Clear Dispenser Errors Ejected Notes (TCDM).";}
    else
        if (Easypoint == "066")
        {code = "066 - Printer Device Error.";}
    else
        if (Easypoint == "067")
        {code = "067 - Card Reader Device Failure.";}
    else
        if (Easypoint == "068")
        {code = "068 - Dispensed item count not equal to requested item count.";}
    else
        if (Easypoint == "077")
        {code = "077 - Door opened with no log-on.";}
    else
        if (Easypoint == "079")
        {code = "079 - Telephone line and/or modem problem(s).";}
    else
        if (Easypoint == "080")
        {code = "080 - Modem TX/RX problems.";}
    else
        if (Easypoint == "081")
        {code = "081 - Reversal in process.";}
    else
        if (Easypoint == "083")
        {code = "083 - Host response Message Type 97 - invalid Sequence Number.";}
     else
        if (Easypoint == "084")
        {code = "084 - Host response Message Type 99 - invalid request Terminal ID.";}
     else
        if (Easypoint == "085")
        {code = "085 - Card removal display message down-load error.";}
     else
        if (Easypoint == "087")
        {code = "087 - No Valid Cash Selections.";}
     else
        if (Easypoint == "088")
        {code = "088 - Transaction file date error.";}
     else
        if (Easypoint == "089")
        {code = "089 - Host response Message Type 96 - invalid message sequence.";} 
    else
        if (Easypoint == "090")
        {code = "090 - Host type-2 dispense amount error.";} 
    else
        if (Easypoint == "091")
        {code = "091 - Out of Service - close-out required.";} 
    else
        if (Easypoint == "095")
        {code = "095 - Modem Setup Required - External Modem.";} 
    else
        if (Easypoint == "097")
        {code = "097 - Cassette-1 empty (MCDM, TCDM).";} 
    else
        if (Easypoint == "098")
        {code = "098 - Cassette-2 empty (MCDM, TCDM).";} 
     else
        if (Easypoint == "099")
        {code = "099  Cassette-3 empty (MCDM, TCDM).";} 
     else
        if (Easypoint == "100")
        {code = "100 - Cassette-4 empty (MCDM, TCDM).";} 
     else
        if (Easypoint == "105")
        {code = "105 - Cassette-1 low.";} 
     else
        if (Easypoint == "106")
        {code = "106 - Cassette-2 low.";} 
     else
        if (Easypoint == "107")
        {code = "107 - Cassette-3 low.";} 
     else
        if (Easypoint == "108")
        {code = "108 - Cassette-4 low.";} 
     else
        if (Easypoint == "113")
        {code = "113 - Cassette-1 zero document count.";} 
     else
        if (Easypoint == "114")
        {code = "114 - Cassette-2 zero document count.";} 
    else
        if (Easypoint == "115")
        {code = "115 - Cassette-3 zero document count .";} 
    else
        if (Easypoint == "116")
        {code = "116 - Cassette-4 zero document count .";} 
    else
        if (Easypoint == "129")
        {code = "129 - Cassette-1 Missing or Out Of Service (HAWK, MCDM, TCDM).";} 
    else
        if (Easypoint == "130")
        {code = "130 - Cassette-2 Missing or Out Of Service (HAWK, MCDM, TCDM).";} 
    else
        if (Easypoint == "131")
        {code = "131 - Cassette-3 Missing or Out Of Service (HAWK, MCDM, TCDM).";} 
    else
        if (Easypoint == "132")
        {code = "132 - Cassette-4 Missing or Out Of Service (HAWK, MCDM, TCDM).";} 
    else
        if (Easypoint == "162")
        {code = "162 - PPP not authorized or PPP Host Cutover Required.";} 
    else
        if (Easypoint == "960") 
            {code = "960 - Abnormal Power Off (TCDM).";}
    else
        if (Easypoint == "990") 
            {code = "990 - Disk free-space is low.";}
    else
        if (Easypoint == "993") 
            {code = "993 - DS5002 Keyload Failure.";}
    else
        if (Easypoint == "996") 
            {code = "996 - Speech Device Failure.";}
    else
        if (Easypoint == "997") 
            {code = "997 - Dispenser Device Failure.";}
    else
        if (Easypoint == "998") 
            {code = "998 - PinPad Device Failure";}
    else
    {code = "This code is unknown to me.<br>Please check your input and try again.";}
    document.getElementById("answer").innerHTML = code;
}
window.onload = init;