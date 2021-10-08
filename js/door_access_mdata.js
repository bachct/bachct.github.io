function door_mdata() {
    var code;
    var mdata = document.getElementById("door_mdata").value;
    if (mdata == 00) 
        {code = "Good.";
        }	
    else
    if (mdata == 01) 
        {code = "Parity error.";
        }
    else
    if (mdata == 02) 
        {code = "Overrun error.";
        }	
	else 
    if (mdata == 03) 
        {code = "Framing error.";
        }	
	else 
    if (mdata == 04) 
        {code = "DTR or DSR time - out.";
        }	
	else 
    if (mdata == 05) 
        {code = "Transmit time-out.";
        } 
    else 
    if (mdata == 06) 
        {code = "Receive time-out.";
        }	
	else
    {code = "Unknown code, please check your input.";}
    document.getElementById("door_data").innerHTML = code;
}
window.onload = init;