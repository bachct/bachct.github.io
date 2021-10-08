function myFunction() {
    var mstatus; 
    var code;
    mstatus = Number(document.getElementById("mstatus").value);
    if (mstatus == 01) 
        {code = "Dispence was requested from a cassette that was not installed";}	
    else
         if (mstatus == 02) 
        {code = "Too many notes are being rejected. Possibly could be caused by doubles or extra notes.";}
    else
         if (mstatus == 03) 
        {code = "A pick failure has occurred and the note low sensor was not activated.";}	
	else 
         if (mstatus == 04) 
        {code = "A pick failure has occurred however the note low sensor was activated therefore the cassette may simply be out of notes.";}	
	else 
         if (mstatus == 05) 
        {code = "A jam has occurred in the Transport section of the Dispenser.";}	
	else 
         if (mstatus == 06) 
        {code = "This is not used on a bunch Style Presenter ATM. It reports a divert gate fault on a Spray Type Dispenser.)";}	
	else 
         if (mstatus == 07) 
        {code = "The Purge Bin has not been detected.";}	
	else 
	     if (mstatus == 08) 
        {code = "The Purge Bin Overfill sensor has been blocked.";}	
	else
         if (mstatus == 09) 
        {code = "The control between the Dispenser PCB and the Computer has been lost.";}	
	else 
         if (mstatus == 10) 
        {code = "A Clear fitness must be performed.";}	
	else 
         if (mstatus == 11) 
        {code = "A Clear fitness must be performed.";}	
	else
         if (mstatus == 12) 
        {code = "The Presenter Clamp Unit has jammed.";}	
	else 
         if (mstatus == 13) 
        {code = "Exit shutter is jammed open."; }   
	else 
         if (mstatus == 14) 
        {code = "Exit shutter is jammed closed.";}	
	else 
	     if (mstatus == 15) 
        {code = "Not used."; }   
	else 
        if (mstatus == 16) 
        {code = "The Main Transport Motor Timing Disk did not operate."; }   
	else
         if (mstatus == 17) 
        {code = "Not used."; }   
	else 
         if (mstatus == 18) 
        {code = "Currency jam has occurred in the Presenter Section."; }   
	else
         if (mstatus == 19) 
        {code = "Exit Sensor was blocked following a good dispense operation."; }   
	else 
         if (mstatus == 20) 
        {code = "Not used."; }   
	else 
         if (mstatus == 21) 
        {code = "Not used."; }   
	else 
        if (mstatus == 22) 
        {code = "Not used."; }   
	else 
        if (mstatus == 23) 
        {code = "Not used."; }   
	else 
        if (mstatus == 24) 
        {code = "Not used."; }   
	else 
        if (mstatus == 25) 
        {code = "Not used."; }   
	else 
        if (mstatus == 26) 
        {code = "Not used."; }   
	else 
        if (mstatus == 27) 
        {code = "Not used."; }   
	else 
         if (mstatus == 28) 
        {code = "An area of NVRAM cannot be accessed and State of Health cannot be updated."; }   
	else 
         if (mstatus == 29) 
        {code = "The Presenter Timing Disk did not operate."; }   
	else 
         if (mstatus == 30) 
        {code = "One of the Presenter Sensors failed to clear or is blocked."; }   
	else         
         if (mstatus == 31) 
        {code = "Not used."; }   
	else
        if (mstatus == 32) 
        {code = "Fault with Dispenser Processor."; }   
	else 
        if (mstatus == 33) 
        {code = "Communication fault with the pick sensor."; }   
	else 
        if (mstatus == 34) 
        {code = "A present operation has been attempted without any note being stacked."; }   
	else 
        if (mstatus == 35) 
        {code = "Safe still in supervisor mode."; }   
	else 
        if (mstatus == 36) 
        {code = "Pick valve test was not attempted because there are cassettes still installed."; }   
	else 
        if (mstatus == 37) 
        {code = "Tamper Indicator Service is ON."; }   
	else 
        if (mstatus == 38) 
        {code = "Tamper Indicator Service is OFF."; }   
	else 
        if (mstatus == 39) 
        {code = "The Note Thickness Sensor circuit is malfunctioning."; }   
	else
        if (mstatus == 40)
        {code = "Currency parameters deconfigured.";}
    else
        if (mstatus == 41)
        {code = "Cassette disabled.";}
    else
        if (mstatus == 42)
        {code = "Dispenser not authorised.";}
    else
        code = (mstatus == 43) ? "Dispenser not authorized" : "";  
    document.getElementById("answer").innerHTML = code;
}
window.onload = init;