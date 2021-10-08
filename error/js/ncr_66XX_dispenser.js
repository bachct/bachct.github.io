function myFunction() {
    var mstatus; 
    var code;
    mstatus = Number(document.getElementById("mstatus").value);
    if (mstatus === "00") 
        {code = "No error.";}
    else
    if (mstatus == 01) 
        {code = "Dispense requested from a cassette which is not installed or no cassettes installed during self test ";}
    else
         if (mstatus == 02) 
        {code = "Too many bills being rejected, for example, undersize, oversize, doubles, extra bills, or unable to learn bill width and singularity.";}
    else
         if (mstatus == 03) 
        {code = "Pick failure.";}	
	else 
         if (mstatus == 04) 
        {code = "Pick failure plus low (Out of bills).";}	
	else 
         if (mstatus == 05) 
        {code = "Sensor failure or currency jam in main transport or A short dispense was performed (bills dispensed fewer than bills requested) and no error was reported.";}	
	else 
         if (mstatus == 06) 
        {code = "This is not used on a bunch Style Presenter ATM. It reports a divert gate fault on a Spray Type Dispenser. Divert gate fault caused by one of the following: <br>* Divert gate in wrong position initially <br>* Divert gate failed to move to correct position<br>* Divert gate sensor failure.";}	
	else 
         if (mstatus == 07) 
        {code = "Purge bin not present (unit inoperative).";}	
	else 
	     if (mstatus == 08) 
        {code = "<font color='#0000FF'>Bunch:</font> Purge bin overfill sensor blocked (unit inoperative)<br><font color='#0000FF'>Spray:</font> Purge bin full (unit inoperative) ";}	
	else
         if (mstatus == 09) 
        {code = "Communications failure between Command and Execution firmware, or between host and device for USB S1 Dispenser. Current replenishment information may not have been determined.";}	
	else 
         if (mstatus == 10) 
        {code = "= Operation not attempted because the device or a cassette type is FATAL from a previous operation. A reset of SOH to HEALTHY must be performed to clear this condition. Current replenishment information is not determined.";}	
	else 
         if (mstatus == 11) 
        {code = "Operation not attempted due to one of the following conditions;<br>* Bills are still stacked in the transport from a previous operation (stacking dispensers only)<br> *Bills may not have been cleared from the transport due to an unrecovered error during a previous operation <br>* The dispenser has been powered up and no CLEAR/DIAG_CLEAR has been issued A CLEAR or DIAG_CLEAR must be performed to clear this condition. Replenishment information is not determined.";}	
	else
         if (mstatus == 12) 
        {code = "Presenter clamping mechanism (or bill alignment mechanism) failed or jammed.";}	
	else 
         if (mstatus == 13) 
        {code = "Exit shutter is jammed open."; }   
	else 
         if (mstatus == 14) 
        {code = "Exit shutter is jammed closed.";}	
	else 
	     if (mstatus == 15) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 16) 
        {code = "Main transport timing disk did not operate correctly or the main ac motor failed."; }   
	else
         if (mstatus == 17) 
        {code = "Reserved."; }   
	else 
         if (mstatus == 18) 
        {code = "Currency jam in presenter transport or transport sensor failure."; }   
	else
         if (mstatus == 19) 
        {code = "Exit sensor blocked initially on next operation after a good present (bills may not have been taken by cardholder). Current replenishment information is not determined."; }   
	else 
         if (mstatus == 20) 
        {code = "Reserved."; }   
	else 
         if (mstatus == 21) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 22) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 23) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 24) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 25) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 26) 
        {code = "Reserved."; }   
	else 
        if (mstatus == 27) 
        {code = "Reserved."; }   
	else 
         if (mstatus == 28) 
        {code = "An area of NVRAM cannot be accessed (SOH cannot be updated)."; }   
	else 
         if (mstatus == 29) 
        {code = "Presenter transport timing disk did not operate correctly or motor failed."; }   
	else 
         if (mstatus == 30) 
        {code = "One of the presenter transport sensors failed clear or blocked."; }   
	else         
         if (mstatus == 31) 
        {code = "Reserved."; }   
	else
        if (mstatus == 32) 
        {code = "Heartbeat on execution processor failed."; }   
	else 
        if (mstatus == 33) 
        {code = "Communications failure on the 12C bus of the execution processor. On P86 style and USB S1 Dispensers this code denotes a communications failure on the pick interface to pick modules. Also used to denote a Fluditi attack activation."; }   
	else 
        if (mstatus == 34) 
        {code = "A present bills operation has been attempted without any bills being stacked or a RETRACT with no bills presented."; }   
	else 
        if (mstatus == 35) 
        {code = "Operation incomplete due to ac and 24V dc power disconnection through interlock on ATM access door."; }   
	else 
        if (mstatus == 36) 
        {code = "Pick valve test not attempted because cassettes were installed."; }   
	else 
        if (mstatus == 37) 
        {code = "Tamper Indicator Service is switched ON."; }   
	else 
        if (mstatus == 38) 
        {code = "Tamper Indicator Service is switched OFF."; }   
	else 
        if (mstatus == 39) 
        {code = "The LVDT/NTS or associated circuit is malfunctioning."; }   
	else
        if (mstatus == 40)
        {code = "Bill parameters have not been set up. This is because this is the first operation since initial power-up or because there was an NVRAM corruption and the NVRAM was reinitialized.";}
    else
        if (mstatus == 41)
        {code = "An attempt to pick from a cassette in a pick module which has been disabled for in-service replenishment.";}
    else
        if (mstatus == 42)
        {code = "The dispenser has not been authenticated by the PC Core module. This code is only generated by USB S1 dispenser variants.";}
    else
        if (mstatus == 146)
        {code = "SDC link failure.";}
    else
        if  (mstatus == 43) 
        { code = "The serial number of the dispenser control board has changed and has not yet been authorized for use. This code is only generated by USB S1 dispenser variants";}
    else {code = " ";}
    document.getElementById("answer").innerHTML = "M-Status: " +mstatus +" = " +code;
}
window.onload = init;