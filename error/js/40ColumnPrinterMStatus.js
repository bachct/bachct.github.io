function pr_Function() {
    var pr_mstatus;
    var pr_code;
    pr_mstatus = Number(document.getElementById("mstatus").value);
    if (pr_mstatus == 00) 
        {pr_code = "No error (good).";
        }	
    else
    if (pr_mstatus == 01) 
        {pr_code = "Head Jam/Knife Jam.";
        }
    else
    if (pr_mstatus == 02) 
        {pr_code = "Not used.";
        }	
	else 
    if (pr_mstatus == 03) 
        {pr_code = "Black mark error.";
        }	
	else 
    if (pr_mstatus == 04) 
        {pr_code = "Not used.";
        }	
	else 
    if (pr_mstatus == 05) 
        {pr_code = "Paper out.";
        } 	
	else 
    if (pr_mstatus == 06) 
        {pr_code = "Not used.";
        }	
	else 
	if (pr_mstatus == 07) 
        {pr_code = "Paper not loaded or paper jam before transport.";
        }	
	else
    if (pr_mstatus == 08) 
        {pr_code = "Communications error.";
        }	
	else 
    if (pr_mstatus == 09) 
        {pr_code = "Printer open.";
        }	
	else 
    if (pr_mstatus == 10) 
        {pr_code = "Ribbon needs to be replaced soon (not thermal printer).";
        }	
	else
    if (pr_mstatus == 11) 
        {pr_code = "Printhead needs to be replaced soon.";
        }	
	else 
    if (pr_mstatus == 12) 
        {pr_code = "Knife needs to be replaced soon.";
        }   
	else 
    if (pr_mstatus == 13) 
        {pr_code = "Ribbon needs to be replaced now (not thermal printer).";
        }	
	else 
    if (pr_mstatus == 14) 
        {pr_code = "Printhead needs to be replaced now."; 
        }   
	else 
    if (pr_mstatus == 15) 
        {pr_code = "Sideways communications error."; 
        }   
	else
    if (pr_mstatus == 16) 
        {pr_code = "Eject jam."; 
        }   
	else 
    if (pr_mstatus == 146) 
        {pr_code = "SDC link failure."; 
        }   
	else
    {pr_code = "This code is unknown to me.<br>Please check your input and try again.";}
    
    document.getElementById("answer").innerHTML = pr_code;
}
window.onload = init;