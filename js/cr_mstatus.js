function cr_Function() {
    var cr_mstatus;
    var cr_code;
    cr_mstatus = Number(document.getElementById("cr_mstatus").value);
    if (cr_mstatus == 00) 
        {cr_code = "No error.";
        }	
    else
    if (cr_mstatus == 01) 
        {cr_code = "Blank track.";
        }
    else
    if (cr_mstatus == 02) 
        {cr_code = "Track not supported.";
        }	
	else 
    if (cr_mstatus == 03) 
        {cr_code = "Read error.";
        }	
	else 
    if (cr_mstatus == 04) 
        {cr_code = "Write error.";
        }	
	else 
    if (cr_mstatus == 05) 
        {cr_code = "No card in reader at start of command.";
        } 	
	else 
    if (cr_mstatus == 06) 
        {cr_code = "Card removed by user during capture.";
        }	
	else 
	if (cr_mstatus == 07) 
        {cr_code = "Shutter jammed open.";
        }	
	else
    if (cr_mstatus == 08) 
        {cr_code = "Shutter switch failure detected.";
        }	
	else 
    if (cr_mstatus == 09) 
        {cr_code = "Error recovery successfull.";
        }	
	else 
    if (cr_mstatus == 10) 
        {cr_code = "Shutter jammed closed.";
        }	
	else
    if (cr_mstatus == 11) 
        {cr_code = "Card jam.";
        }	
	else 
    if (cr_mstatus == 12) 
        {cr_code = "Card captured after unsuccessful eject.";
        }   
	else 
    if (cr_mstatus == 13) 
        {cr_code = "Possible customer tampering.";
        }	
	else 
    if (cr_mstatus == 14) 
        {cr_code = "Too many consecutive read errors or blank tracks on any track."; 
        }   
	else 
    if (cr_mstatus == 15) 
        {cr_code = "Too many consecutive write errors."; 
        }   
	else
    if (cr_mstatus == 16) 
        {cr_code = "Too many consecutive card jams."; 
        }   
	else 
    if (cr_mstatus == 17) 
        {cr_code = "Too many consecutive shutter jammed closed."; 
        }   
	else
    if (cr_mstatus == 18) 
        {cr_code = "Card jam during capture."; 
        }   
	else 
    if (cr_mstatus == 19) 
        {cr_code = "Too many invalid cards."; 
        }   
	else 
    if (cr_mstatus == 20) 
        {cr_code = "Device still inoperative."; 
        }   
	else 
    if (cr_mstatus == 21) 
        {cr_code = "No card entered during cleaning cycle test."; 
        }   
	else 
    if (cr_mstatus == 22) 
        {cr_code = "Speed out of specification (fast)."; 
        }   
	else 
    if (cr_mstatus == 23) 
        {cr_code = "Speed within +3%."; 
        }   
	else 
    if (cr_mstatus == 24) 
        {cr_code = "Speed within +-1%."; 
        }   
	else 
    if (cr_mstatus == 25) 
        {cr_code = "Speed within -3%."; 
        }   
	else 
    if (cr_mstatus == 26) 
        {cr_code = "Speed out of specification (slow)."; 
        }   
	else 
    if (cr_mstatus == 27) 
        {cr_code = "Invalid card detected (Diagnostics only)."; 
        }   
	else 
    if (cr_mstatus == 33) 
        {cr_code = "CIM services test failed."; 
        }   
	else 
    if (cr_mstatus == 35) 
        {cr_code = "Error in track 3 data."; 
        }   
	else         
    if (cr_mstatus == 37) 
        {cr_code = "CROPF feature not supported."; 
        }   
	else
    if (cr_mstatus == 38) 
        {cr_code = "LFCC bin full soon/full.";
        }   
	else 
    if (cr_mstatus == 40) 
        {cr_code = "LFCC bin removed/not configured."; 
        }   
	else 
    if (cr_mstatus == 41) 
        {cr_code = "CROPF feature failure."; 
        }   
	else 
    if (cr_mstatus == 50) 
        {cr_code = "Card not in SCRW stage position."; 
        }   
	else 
    if (cr_mstatus == 51) 
        {cr_code = "Smart card stopper pin or contacts lowered, unable to capture."; 
        }   
	else 
    if (cr_mstatus == 52) 
        {cr_code = "Invalid smart card command code error."; 
        }   
	else 
    if (cr_mstatus == 53) 
        {cr_code = "Inavlid smart card command data error."; 
        } 
    else 
    if (cr_mstatus == 54) 
        {cr_code = "SCIF not configured/not responding."; 
        } 
    else 
    if (cr_mstatus == 55) 
        {cr_code = "SCIF response timeout exceeded."; 
        } 
    else 
    if (cr_mstatus == 56) 
        {cr_code = "Card reader is in SCRW mode (Diagnostics only)."; 
        } 
    else 
    if (cr_mstatus == 57) 
        {cr_code = "Invalid smart card response length."; 
        } 
    else 
    if (cr_mstatus == 64) 
        {cr_code = "Invalid SCIF command code.";         
        } 
    else 
    if (cr_mstatus == 65) 
        {cr_code = "Invalid SCIF command format."; 
        }
    else 
    if (cr_mstatus == 66) 
        {cr_code = "No smart card encryptor response error."; 
        } 
    else 
    if (cr_mstatus == 67) 
        {cr_code = "Invalid key ID."; 
        } 
    else 
    if (cr_mstatus == 68) 
        {cr_code = "Invalid key type."; 
        } 
     else 
    if (cr_mstatus == 70) 
        {cr_code = "Invalid key - does not exist."; 
        }
     else 
    if (cr_mstatus == 71) 
        {cr_code = "Invalid password - not decimal."; 
        } 
     else 
    if (cr_mstatus == 72) 
        {cr_code = "Invalid password - no match."; 
        } 
     else 
    if (cr_mstatus == 73) 
        {cr_code = "Key integrity error."; 
        } 
     else 
    if (cr_mstatus == 74) 
        {cr_code = "Key parity error."; 
        } 
     else 
    if (cr_mstatus == 75) 
        {cr_code = "Invalid data format."; 
        } 
     else 
    if (cr_mstatus == 76) 
        {cr_code = "Stopper pin failure."; 
        }
     else 
    if (cr_mstatus == 77) 
        {cr_code = "Contact unit failure."; 
        }
     else 
    if (cr_mstatus == 78) 
        {cr_code = "Card movement failure."; 
        }
     else 
    if (cr_mstatus == 79) 
        {cr_code = "Smart card switch off failure."; 
        }
     else 
    if (cr_mstatus == 80) 
        {cr_code = "Smart card removed error."; 
        } 
     else 
    if (cr_mstatus == 81) 
        {cr_code = "No smart card response."; 
        } 
     else 
    if (cr_mstatus == 82) 
        {cr_code = "Smart card transmission error."; 
        } 
     else 
    if (cr_mstatus == 83) 
        {cr_code = "Smart card switched off."; 
        } 
     else 
    if (cr_mstatus == 84) 
        {cr_code = "Illegal card type/parameter."; 
        } 
     else 
    if (cr_mstatus == 85) 
        {cr_code = "Power up time exceeded."; 
        }
     else 
    if (cr_mstatus == 86) 
        {cr_code = "ANSI X9.8 pin block error."; 
        } 
     else 
    if (cr_mstatus == 87) 
        {cr_code = "CIM self test failed."; 
        } 
     else 
    if (cr_mstatus == 88) 
        {cr_code = "CIM security module defective."; 
        } 
     else 
    if (cr_mstatus == 89) 
        {cr_code = "CIM security module communication failure."; 
        } 
     else 
    if (cr_mstatus == 90) 
        {cr_code = "CIM interface board defective."; 
        } 
     else 
    if (cr_mstatus == 91) 
        {cr_code = "CIM interface board communications failure."; 
        } 
     else 
    if (cr_mstatus == 146) 
        {cr_code = "SDC link failure."; 
        } 
	else 
        code = (cr_mstatus == 39) ? "The Note Thickness Sensor circuit is malfunctioning." : ""; 
    document.getElementById("cr_answer").innerHTML = cr_code;
}
window.onload = init;