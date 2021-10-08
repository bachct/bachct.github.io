function door_access_mstatus() {
    var code;
    var mdata = document.getElementById("door_access_mstatus").value;
    if (mdata == 00) 
        {code = "No error.";
        }	
    else
    if (mdata == 01) 
        {code = "Bad read error.";
        }
    else
    if (mdata == 02) 
        {code = "Time - out error(Open door test）.";
        }	
	else 
    if (mdata == 03) 
        {code = "Communications error（Open door test）.";
        }	
	else 
    if (mdata == 146) 
        {code = "SDC link failure.";
        }
    else 
    if (mdata == 97) 
        {code = "Time - out error（Turnaround test）.";
        }	
	else 
    if (mdata == 98) 
        {code = "Communications error（Turnaround test）.";
        } 
    else
    {code = "Unknown code, please check your input.";}
    document.getElementById("door_answer").innerHTML = code;
}
window.onload = init;