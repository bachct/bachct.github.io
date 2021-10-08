function mcrw_Function() {
    var cr_mstatus;
    var cr_code;
    cr_mstatus = Number(document.getElementById("mcrw_mstatus").value);
    if (cr_mstatus == 00) 
        {cr_code = "No error - Operation successful.";
        }	
    else
    if (cr_mstatus == 01) 
        {cr_code = "Blank track.";
        }
    else
    if (cr_mstatus == 02) 
        {cr_code = "Track not supported - SCIF write not supported.";
        }	
	else 
    if (cr_mstatus == 03) 
        {cr_code = "Read error.";
        }	
	else 
    if (cr_mstatus == 04) 
        {cr_code = "Write error - write data error.";
        }	
	else 
    if (cr_mstatus == 05) 
        {cr_code = "No card in reader (at stage position) at start of command.";
        } 	
	else 
    if (cr_mstatus == 06) 
        {cr_code = "Card removed by customer during capture.";
        }	
	else 
	if (cr_mstatus == 07) 
        {cr_code = "Shutter jammed open after card staged.";
        }	
	else
    if (cr_mstatus == 08) 
        {cr_code = "Shutter switch failure detected.";
        }	
	else 
    if (cr_mstatus == 09) 
        {cr_code = "Error recovery successful - invalid card ejected.";
        }	
	else 
    if (cr_mstatus == 10) 
        {cr_code = "Shutter jammed closed on entry or eject.";
        }	
	else
    if (cr_mstatus == 11) 
        {cr_code = "Card jam - or invalid card in throat at startup.";
        }	
	else 
    if (cr_mstatus == 12) 
        {cr_code = "Card captured after unsuccessful eject.";
        }   
	else 
    if (cr_mstatus == 13) 
        {cr_code = "Possible customer tampering - card jammed in throat, unable to pull card into reader.";
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
        {cr_code = "Too many consecutive shutter jammed closed (not shutter test)."; 
        }   
	else
    if (cr_mstatus == 18) 
        {cr_code = "Card jam during capture - unsuccessful eject."; 
        }   
	else 
    if (cr_mstatus == 19) 
        {cr_code = "Too many consecutive invalid cards."; 
        }   
	else 
    if (cr_mstatus == 20) 
        {cr_code = "Device still inoperative (not diagnostics)."; 
        }   
	else 
    if (cr_mstatus == 21) 
        {cr_code = "No card entered within 10 seconds."; 
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
        {cr_code = "Invalid card detected."; 
        } 
    else 
    if (cr_mstatus == 28) 
        {cr_code = "Fraud throat detected obstruct ion or fraud throat failure."; 
        } 
    else 
    if (cr_mstatus == 29) 
        {cr_code = "Manual card insertion fraud detected."; 
        } 
    else 
    if (cr_mstatus == 30) 
        {cr_code = "MM invalid ."; 
        } 
    else 
    if (cr_mstatus == 31) 
        {cr_code = "MM Module defective."; 
        } 
	else 
    if (cr_mstatus == 33) 
        {cr_code = "For CIM/MM: service test failed For Smart command: contact unit failure."; 
        }   
    else 
    if (cr_mstatus == 34) 
        {cr_code = "CIM/MM module communications failure service test."; 
        }
	else 
    if (cr_mstatus == 35) 
        {cr_code = "Error in track 3 data - CIM/MM."; 
        }   
	else         
    if (cr_mstatus == 37) 
        {cr_code = "CROPF feature not supported (diagnostic)."; 
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
        {cr_code = "CROPF feature failure - invalid command format (diagnostic)."; 
        }
    else 
    if (cr_mstatus == 42) 
        {cr_code = "Device not authorized (UIMCRW only)."; 
        } 
	else 
    if (cr_mstatus == 50) 
        {cr_code = "Smart/SAM/Memory card not in correct SCRW stage position."; 
        }   
	else 
    if (cr_mstatus == 51) 
        {cr_code = "Smart card contacts lowered - unable to capture."; 
        }   
	else 
    if (cr_mstatus == 52) 
        {cr_code = "Invalid Smart/SAM/Memory card command code error - transmission error."; 
        }   
	else 
    if (cr_mstatus == 53) 
        {cr_code = "Invalid Smart/SAM/Memory card command data error - switched off."; 
        } 
    else 
    if (cr_mstatus == 54) 
        {cr_code = "SCIF not configured/not responding - invalid card type/parameter."; 
        } 
    else 
    if (cr_mstatus == 55) 
        {cr_code = "SCIF response timeout exceeded."; 
        } 
    else 
    if (cr_mstatus == 56) 
        {cr_code = "Reader is in Smart/SAM/Memory code (SCRW) mode (Not in MCRW mode)."; 
        } 
    else 
    if (cr_mstatus == 57) 
        {cr_code = "Invalid Smart/SAM/Memory card response code (length)."; 
        } 
    else 
    if (cr_mstatus == 65) 
        {cr_code = "Invalid Smart Card Command Format."; 
        }
    else 
    if (cr_mstatus == 66) 
        {cr_code = "No smart card encryptor response error."; 
        } 
    else
    if (cr_mstatus == 77) 
        {cr_code = "Contact unit failure."; 
        }
     else 
    if (cr_mstatus == 78) 
        {cr_code = "Smart/SAM/Memory card movement failure."; 
        }
     else 
    if (cr_mstatus == 79) 
        {cr_code = "Smart/SAM/Memory card switch off failure."; 
        }
     else 
    if (cr_mstatus == 80) 
        {cr_code = "Smart/SAM/Memory card removed error."; 
        } 
     else 
    if (cr_mstatus == 81) 
        {cr_code = "Smart/SAM/Memory card - no response."; 
        } 
     else 
    if (cr_mstatus == 82) 
        {cr_code = "Smart/SAM/Memory card transmission error."; 
        } 
     else 
    if (cr_mstatus == 83) 
        {cr_code = "Smart/SAM/Memory card switched off."; 
        } 
     else 
    if (cr_mstatus == 84) 
        {cr_code = "Smart/SAM/Memory card - illegal type/ parameter."; 
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
        {cr_code = "CIM interface pcb defective."; 
        } 
     else 
    if (cr_mstatus == 91) 
        {cr_code = "CIM interface pcb communications failure."; 
        } 
     else 
    if (cr_mstatus == 96) 
        {cr_code = "Device Communications Inoperative (UIMCRW only)."; 
        } 
    else 
    if (cr_mstatus == 97) 
        {cr_code = "Device Communications Operative (UIMCRW only)."; 
        } 
    else 
    if (cr_mstatus == 98) 
        {cr_code = "Device ReConnection (State Lost) (UIMCRW only)."; 
        } 
	else 
    if (cr_mstatus == 99) 
        {cr_code = "Device ReConnected (New Device) [SOH/Tallies Cleared] (UIMCRW only) ."; 
        } 
    
    document.getElementById("mcrw_answer").innerHTML = "M-Status : " + cr_mstatus + " = " + cr_code;
}
window.onload = init;