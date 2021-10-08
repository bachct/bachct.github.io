function Thermal() {
    var usb_mstatus;
    var usb_code;
    usb_mstatus = Number(document.getElementById("mstatus").value);
    if (usb_mstatus == 0) 
        {usb_code = "Printer OK.";
        }	
    else
    if (usb_mstatus == 1) 
        {usb_code = "Head Jam/Knife Jam.";
        }
    else 
    if (usb_mstatus == 03) 
        {usb_code = "Black mark error.";
        }	
	else 
    if (usb_mstatus == 05) 
        {usb_code = "Paper out.";
        } 	
	else 
	if (usb_mstatus == 07) 
        {usb_code = "Paper not loaded or paper jam before transport.";
        }	
	else
    if (usb_mstatus == 08) 
        {usb_code = "Communications error.";
        }	
	else 
    if (usb_mstatus == 09) 
        {usb_code = "Printer open.";
        }	
	else
    if (usb_mstatus == 11) 
        {usb_code = "Printhead needs to be replaced soon.";
        }	
	else 
    if (usb_mstatus == 12) 
        {usb_code = "Knife needs to be replaced soon.";
        }   
	else 
    if (usb_mstatus == 14) 
        {usb_code = "Printhead needs to be replaced now."; 
        }   
	else
    if (usb_mstatus == 16) 
        {usb_code = "Eject jam."; 
        } 
    else
    if (usb_mstatus == 17) 
        {usb_code = "Transport Jam."; 
        } 
    else
    if (usb_mstatus == 18) 
        {usb_code = "Capture Jam."; 
        } 
    else
    if (usb_mstatus == 19) 
        {usb_code = "Paper Not Winding."; 
        } 
    else
    if (usb_mstatus == 20) 
        {usb_code = "Mechanism Jammed."; 
        }
    else
    if (usb_mstatus == 21) 
        {usb_code = "No Receipt During Control."; 
        }
    else
    if (usb_mstatus == 23) 
        {usb_code = "Capture Bin Full."; 
        }
    else
    if (usb_mstatus == 24) 
        {usb_code = "Power Supply Voltage Error."; 
        }
    else
    if (usb_mstatus == 25) 
        {usb_code = "Control Board Error."; 
        }
    else
    if (usb_mstatus == 26) 
        {usb_code = "Head Over Heated (recoverable). 10s Transient status. Not reported."; 
        }
    else
    if (usb_mstatus == 27) 
        {usb_code = "Head Burnt Out (non-recoverable)."; 
        }
    else
    if (usb_mstatus == 28) 
        {usb_code = "Paper Low."; 
        }
    else
    if (usb_mstatus == 29) 
        {usb_code = "Exit Jam On Capture."; 
        }
    else
    if (usb_mstatus == 30) 
        {usb_code = "Knife needs replaced now."; 
        }
    else
    if (usb_mstatus == 31) 
        {usb_code = "Receipt Transport Not Connected On Power Up."; 
        }
    else
    if (usb_mstatus == 32) 
        {usb_code = "Media Not Cleared."; 
        }
	else 
    if (usb_mstatus == 34) 
        {usb_code = "Dual Feed Mechanism Jam."; 
        }   
	else
    {usb_code = "This code is unknown to me.<br>Please check your input and try again.";}
    
    document.getElementById("answer").innerHTML = usb_code;
}

    
window.onload = init;