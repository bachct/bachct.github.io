function p_Function() {
    var p_mstatus, p_code;
    p_mstatus = Number(document.getElementById("p_mstatus").value);
    if (p_mstatus == 00) 
        {p_code = "No error.";
        }	
    else if (p_mstatus == 01) 
        {p_code = "Head jam/knife jam.";
        } 
    else if (p_mstatus == 03) 
        {p_code = "Black mark error.";
        }	 
    else if (p_mstatus == 04) 
        {p_code = "Not used.";
        }	
	else if (p_mstatus == 05) 
        {p_code = "Paper out.";
        } 	
	else if (p_mstatus == 07) 
        {p_code = "Paper not loaded or paper jam before transport.";
        }	
	else if (p_mstatus == 08) 
        {p_code = "Communications error.";
        }	
	else 
    if (p_mstatus == 09) 
        {p_code = "Printer open.";
        }	
	else 
    if (p_mstatus == 10) 
        {p_code = "Ribbon needs replacement soon.";
        }	
	else
    if (p_mstatus == 11) 
        {p_code = "Printhead needs replacing soon.";
        }	
	else 
    if (p_mstatus == 12) 
        {p_code = "Knife needs replacing soon.";
        }   
	else 
    if (p_mstatus == 13) 
        {p_code = "Ribbon needs replacing now.";
        }	
	else 
    if (p_mstatus == 14) 
        {p_code = "Printhead needs replacing now."; 
        }   
	else 
    if (p_mstatus == 15) 
        {p_code = "Sideways communication error."; 
        }   
	else
    if (p_mstatus == 16) 
        {p_code = "Eject jam."; 
        } 
    else 
       { p_code = (p_mstatus == 146) ? "SDClink failure." : ""; }
    document.getElementById("p_answer").innerHTML = p_code;
}
window.onload = init;