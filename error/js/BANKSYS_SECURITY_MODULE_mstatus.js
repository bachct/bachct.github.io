function banksys_Function() {
    var code;
    var mdata = document.getElementById("banksys_mstatus").value;
    if (mdata == 00) 
        {code = "Good.";
        }	
    else
    if (mdata == 01) 
        {code = "SCM sends AKO(CRC error)or service receives corrupt data from SCM (CRC error).";
        }
    else
    if (mdata == 02) 
        {code = "SCM sends incorrect character.";
        }	
	else 
    if (mdata == 03) 
        {code = "SCM does not respond.";
        }	
	else 
    if (mdata == 04) 
        {code = "SCM not ready to receive/send.";
        }	
	else 
    if (mdata == 05) 
        {code = "RS232\TTL interface not present.";
        } 
    else 
    if (mdata == 06) 
        {code = "Serial port error.";
        }	
	else 
    if (mdata == 07) 
        {code = "Not configured.";
        }
    else 
    if (mdata == 97) 
        {code = "Timeout error.";
        }	
	else 
    if (mdata == 98) 
        {code = "Communications error.";
        } 
    else
    {code = "Unknown code, please check your input.";}
    document.getElementById("banksys_answer").innerHTML = code;
}
window.onload = init;