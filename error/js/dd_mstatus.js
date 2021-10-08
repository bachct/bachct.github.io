function dd_Function() {
    var dd_mstatus;
    var dd_code;
    dd_mstatus = Number(document.getElementById("dd_mstatus").value);
    if (dd_mstatus == 00) 
        {dd_code = "No error.";
        }	
    else
    if (dd_mstatus == 01) 
        {dd_code = "Write failure.";
        }
    else
    if (dd_mstatus == 02) 
        {dd_code = "Read failure.";
        }	
	else 
    if (dd_mstatus == 03) 
        {dd_code = "Drive not configured.";
        }	
	else 
    if (dd_mstatus == 04) 
        {dd_code = "Random read error.";
        }	
	else 
    if (dd_mstatus == 05) 
        {dd_code = "Seek error.";
        } 	
	else
    {dd_code = "Unknown code, please check your input.";}
    document.getElementById("dd_answer").innerHTML = dd_code;
}
window.onload = init;