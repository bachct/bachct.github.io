function epp_Function() {
    var epp_mstatus, epp_code;
    epp_mstatus = Number(document.getElementById("epp_mstatus").value);
    if (epp_mstatus == 00) 
        {epp_code = "No error.";
        }	
    else 
    if (epp_mstatus == 01) 
        {epp_code = "Parity error.";
        } 
    else 
    if (epp_mstatus == 02) 
        {epp_code = "Hardware error detected during a key or data transmission or during an encryptor operation .";
        }	 
    else 
    if (epp_mstatus == 03) 
        {epp_code = "Invalid command,not all keyspaces are closed.";
        }	
	else 
    if (epp_mstatus == 04) 
        {epp_code = "Invalid command,no keyspace open.";
        } 	
	else
    if (epp_mstatus == 05) 
        {epp_code = "Invalid command as keyboard is currently enabled.";
        }	
	else 
    if (epp_mstatus == 07) 
        {epp_code = "Communications error.";
        }	
	else 
    if (epp_mstatus == 08) 
        {epp_code = "Security Module reset was successful.";
        }	
	else 
    if (epp_mstatus == 11) 
        {epp_code = "Invalid command data.";
        }	
	else
    if (epp_mstatus == 12) 
        {epp_code = "Data mismatch/Erroneous data.";
        }	
	else 
    if (epp_mstatus == 13) 
        {epp_code = "No key loaded in DEU prior to requesting an encryption or decryption operation.";
        }   
	else 
    if (epp_mstatus == 15) 
        {epp_code = "Set up failure-key space ID1 already exists and is not a programmer parent with E/D attribute and 17 keys.";
        }	
	else 
    if (epp_mstatus == 16) 
        {epp_code = "Invalid keyspace ID format,outside range 0 to 15."; 
        }   
	else 
    if (epp_mstatus == 17) 
        {epp_code = "Keyspace already exists."; 
        }   
	else
    if (epp_mstatus == 18) 
        {epp_code = "Keyspace does not exist."; 
        } 
    else
    if (epp_mstatus == 19) 
        {epp_code = "Keyspace ID1 has wrong attribute or class."; 
        }
    else
    if (epp_mstatus == 20) 
        {epp_code = "Keyspace ID2 has wrong attribute or class."; 
        }
    else
    if (epp_mstatus == 22) 
        {epp_code = "Invalid keyspace,wrong access right."; 
        }
    else
    if (epp_mstatus == 23) 
        {epp_code = "Only two RAR access spaces allowed,keyspace not created."; 
        }
    else
    if (epp_mstatus == 24) 
        {epp_code = "Secret keyspace creation disabled."; 
        }
    else
    if (epp_mstatus == 25) 
        {epp_code = "Keyspace is not a parent."; 
        }
    else
    if (epp_mstatus == 26) 
        {epp_code = "Key ID2 not a keyspace specified or keyspace specified not a child of key ID2 keyspace  ."; 
        }
    else
    if (epp_mstatus == 27) 
        {epp_code = "Invalid parent format."; 
        }
    else
    if (epp_mstatus == 28) 
        {epp_code = "Invalid parent ID,keyspace not a parent or keyspace dose not exist."; 
        }
    else
    if (epp_mstatus == 29) 
        {epp_code = "Parent keyspace is a programmer,can not have secret child."; 
        }
    else
    if (epp_mstatus == 30) 
        {epp_code = "Key spaces do not match."; 
        }
    else
    if (epp_mstatus == 32) 
        {epp_code = "Key ID outside maximum range of keys."; 
        }
    else
    if (epp_mstatus == 33) 
        {epp_code = "Key ID1 has wrong attribute."; 
        }
    else
    if (epp_mstatus == 34) 
        {epp_code = "Key ID2 has wrong attribute."; 
        }
    else
    if (epp_mstatus == 37) 
        {epp_code = "Invalid key ID,no PIN encryption allowed."; 
        }
    else
    if (epp_mstatus == 39) 
        {epp_code = "Key ID2 does not specify an IV."; 
        }
    else
    if (epp_mstatus == 38) 
        {epp_code = "Invalid key,key does not exist."; 
        }
    else
    if (epp_mstatus == 40) 
        {epp_code = "Invalid key ID,no key."; 
        }
    else
    if (epp_mstatus == 41) 
        {epp_code = "Invalid key ID,key may not be exclusively Or used with key from a different keyspace."; 
        }
    else
    if (epp_mstatus == 48) 
        {epp_code = "Invalid attribute field."; 
        }
    else
    if (epp_mstatus == 49) 
        {epp_code = "Attribute already in family."; 
        }
    else
    if (epp_mstatus == 50) 
        {epp_code = "Invalid parameter field."; 
        }
    else
    if (epp_mstatus == 51) 
        {epp_code = "Undefined parameter for keyspace class."; 
        }
    else
    if (epp_mstatus == 52) 
        {epp_code = "Variation index outside range 01 to 7F hex."; 
        }
    else
    if (epp_mstatus == 53) 
        {epp_code = "Variation index already in family."; 
        }
    else
    if (epp_mstatus == 54) 
        {epp_code = "Invalid mode for this function."; 
        }
    else
    if (epp_mstatus == 55) 
        {epp_code = "Invalid left shift,value out of range."; 
        }
    else
    if (epp_mstatus == 56) 
        {epp_code = "Invalid length,or length and offset outside range."; 
        }
    else
    if (epp_mstatus == 57) 
        {epp_code = "Invalid access right."; 
        }
    else
    if (epp_mstatus == 58) 
        {epp_code = "Invalid POST PIN PAD digit(>0F hex)."; 
        }
    else
    if (epp_mstatus == 59) 
        {epp_code = "Invalid PRE PIN PAD data length (>0C hex)."; 
        }
    else
    if (epp_mstatus == 60) 
        {epp_code = "Modulus bit length>575 or Exponent bit length> 576 or Modulus bit length<=exponent bit length."; 
        }
    else
    if (epp_mstatus == 64) 
        {epp_code = "Password does not contain decimal digits."; 
        }
    else
    if (epp_mstatus == 65) 
        {epp_code = "Invalid password,no match."; 
        }
    else
    if (epp_mstatus == 66) 
        {epp_code = "Keyspace inaccessible,password error count exceeded."; 
        }
    else
    if (epp_mstatus == 70) 
        {epp_code = "PIN verification failed."; 
        }
    else
    if (epp_mstatus == 74) 
        {epp_code = "Invalid PIN encrypt type function(encryption mode changed)."; 
        }
    else
    if (epp_mstatus == 75) 
        {epp_code = "Key integrity error."; 
        }
    else
    if (epp_mstatus == 76) 
        {epp_code = "Invalid PIN,no encryption allowed(truncated PIN does not contain decimal digits)."; 
        }
    else
    if (epp_mstatus == 81) 
        {epp_code = "Keyboard not authorised or usb cable faulty. Try replacing the usb cable."; 
        }
    else
    if (epp_mstatus == 97) 
        {epp_code = "timeout error atmrc."; 
        }
    else
    if (epp_mstatus == 98) 
        {epp_code = "Communications error."; 
        }
    else
    if (epp_mstatus == 99) 
        {epp_code = "TC<>41,or TRS<>00 00 00 00,when decrypted."; 
        }
    else 
       { epp_code = (epp_mstatus == 146) ? "SDClink failure." : ""; }
    document.getElementById("epp_answer").innerHTML = epp_code;
}
window.onload = init;