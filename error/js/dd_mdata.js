function dd_mdata() {
    var code;
    var mdata = document.getElementById("dd_mdata").value;
    if (mdata == 00) 
        {code = "No error.";
        }	
    else
    if (mdata == 01) 
        {code = "Invalid function number.";
        }
    else
    if (mdata == 02) 
        {code = "File not found.";
        }	
	else 
    if (mdata == 03) 
        {code = "Path not found.";
        }	
	else 
    if (mdata == 04) 
        {code = "Out of handles.";
        }	
	else 
    if (mdata == 05) 
        {code = "Access denied.";
        } 
    else 
    if (mdata == 06) 
        {code = "Invalid handle.";
        }	
	else 
    if (mdata == 07) 
        {code = "Memory control block destroyed.";
        }
    else 
    if (mdata == 08) 
        {code = "Insufficient memory.";
        }	
	else 
    if (mdata == 09) 
        {code = "Invalid memory block address.";
        } 
    else 
    if (mdata == "0A") 
        {code = "Invalid environment.";
        }	
	else 
    if (mdata == "0B") 
        {code = "Invalid format.";
        } 
    else 
    if (mdata == "0C") 
        {code = "Invalid access code.";
        }	
	else 
    if (mdata == "0D") 
        {code = "Invalid data.";
        } 
    else 
    if (mdata == "0E") 
        {code = "Unknown unit.";
        }	
	else 
    if (mdata == "0F") 
        {code = "Invalid disk drive.";
        } 
    else 
    if (mdata == "0a") 
        {code = "Invalid environment.";
        }	
	else 
    if (mdata == "0b") 
        {code = "Invalid format.";
        } 
    else 
    if (mdata == "0c") 
        {code = "Invalid access code.";
        }	
	else 
    if (mdata == "0d") 
        {code = "Invalid data.";
        } 
    else 
    if (mdata == "0e") 
        {code = "Unknown unit.";
        }	
	else 
    if (mdata == "0f") 
        {code = "Invalid disk drive.";
        } 
     else 
    if (mdata == 10) 
        {code = "Cannot remove current directory.";
        }	
	else 
    if (mdata == 11) 
        {code = "Not same device.";
        } 
    else
    if (mdata == 12) 
        {code = "No more files.";
        }	
	else 
    if (mdata == 13) 
        {code = "Disk write protected.";
        }	
	else 
    if (mdata == 14) 
        {code = "Unknown unit.";
        }	
	else 
    if (mdata == 15) 
        {code = "Drive not ready.";
        } 
    else 
    if (mdata == 16) 
        {code = "Unknown command.";
        }	
	else 
    if (mdata == 17) 
        {code = "Data error (CRC).";
        }
    else 
    if (mdata == 18) 
        {code = "Bad request structure length.";
        }	
	else 
    if (mdata == 19) 
        {code = "Seek error.";
        } 
    else 
    if (mdata == "1A") 
        {code = "Unknown type of medium.";
        }	
	else 
    if (mdata == "1B") 
        {code = "Sector not found.";
        } 
    else 
    if (mdata == "1D") 
        {code = "Write fault.";
        } 
    else 
    if (mdata == "1E") 
        {code = "Read fault.";
        }	
	else 
    if (mdata == "1F") 
        {code = "General failure.";
        } 
    else 
    if (mdata == "1a") 
        {code = "Unknown type of medium.";
        }	
	else 
    if (mdata == "1b") 
        {code = "Sector not found.";
        } 
    else 
    if (mdata == "1d") 
        {code = "Write fault.";
        } 
    else 
    if (mdata == "1e") 
        {code = "Read fault.";
        }	
	else 
    if (mdata == "1f") 
        {code = "General failure.";
        }
    else 
    if (mdata == 20) 
        {code = "Sharing violation.";
        }	
	else 
    if (mdata == 21) 
        {code = "Lock violation.";
        } 
    else
    if (mdata == 22) 
        {code = "Invalid disk change.";
        }	
	else 
    if (mdata == 23) 
        {code = "FCB unavailable.";
        }	
	else 
    if (mdata == 24) 
        {code = "Sharing buffer exceeded.";
        }	
	else 
    if (mdata == 50) 
        {code = "File already exists.";
        } 
    else 
    if (mdata == 70) 
        {code = "Disk is full.";
        }	
	else 
    if (mdata == 82) 
        {code = "Disk is not formatted.";
        }
    else 
    if (mdata == "FF") 
        {code = "General error.";
        }
    else 
    if (mdata == "ff") 
        {code = "General error.";
        }
	else
    {code = "Unknown code, please check your input.";}
    document.getElementById("mdata").innerHTML = code;
}
window.onload = init;