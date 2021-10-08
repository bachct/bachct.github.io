function commandcode() {
    var number;
    var code;
    var command;
    var summary;
    code = (document.getElementById("commandcode").value);
    if (code == "5254") 
        {
            number = "1";
            command = "RT";
            summary = "Reset (Software reset).";
        }	
    else
    if (code == "4854") 
        {
            number = "2";
            command = "HT";
            summary = "Halt (abort) command.";
        }
	else
    if (code == "5354") 
        {
            number = "3";
            command = "ST";
            summary = "Read status of unit.";
        }
	else
    if (code == "4C44") 
        {
            number = "4";
            command = "LD";
            summary = "Load program.";
        }
	else
    if (code == "4C45") 
        {
            number = "5";
            command = "LE";
            summary = "End to load program.";
        }
	else
    if (code == "454B") 
        {
            number = "6";
            command = "EK";
            summary = "Set encryption key.";
        }
	else
    if (code == "4650") 
        {
            number = "7";
            command = "FP";
            summary = "Set fixed parameter.";
        }
	else
    if (code == "4350") 
        {
            number = "8";
            command = "CP";
            summary = "Set cassette parameter.";
        }
	else
    if (code == "4944") 
        {
            number = "9";
            command = "ID";
            summary = "Read identification of unit.";
        }
	else
    if (code == "4352") 
        {
            number = "10";
            command = "CR";
            summary = "Correct counter of note.";
        }
	else
    if (code == "5349") 
        {
            number = "11";
            command = "SI";
            summary = "Read statistics information.";
        }
    else
    if (code == "4943") 
        {
            number = "12";
            command = "IC";
            summary = "Clear statistics information.";
        }
    else
    if (code == "4C49") 
        {
            number = "13";
            command = "LI";
            summary = "Load statistics information.";
        }
    else
    if (code == "5342") 
        {
            number = "14";
            command = "SB";
            summary = "Read BV information.";
        }
    else
    if (code == "4943") 
        {
            number = "15";
            command = "VR";
            summary = "Read validation order information.";
        }
    else
    if (code == "5347") 
        {
            number = "16";
            command = "SG";
            summary = "Read signature of note.";
        }
    else
    if (code == "534E") 
        {
            number = "17";
            command = "SN";
            summary = "Read serial number of note.";
        }
    else
    if (code == "5049") 
        {
            number = "18";
            command = "PI";
            summary = "Read picture of note.";
        }
    else
    if (code == "4C47") 
        {
            number = "19";
            command = "LG";
            summary = "Read log data.";
        }
    else
    if (code == "5359") 
        {
            number = "20";
            command = "SY";
            summary = "Power off.";
        }
    else
    if (code == "4956") 
        {
            number = "21";
            command = "IV";
            summary = "Accept.";
        }
    else
    if (code == "4450") 
        {
            number = "22";
            command = "DP";
            summary = "Deposit.";
        }
    else
    if (code == "424B") 
        {
            number = "23";
            command = "BK";
            summary = "Back accepted notes.";
        }
    else
    if (code == "5743") 
        {
            number = "24";
            command = "WC";
            summary = "Dispense.";
        }
    else
    if (code == "5050") 
        {
            number = "25";
            command = "PP";
            summary = "Present preparation.";
        }
    else
    if (code == "544F") 
        {
            number = "26";
            command = "TO";
            summary = "Present.";
        }
    else
    if (code == "534F") 
        {
            number = "27";
            command = "SO";
            summary = "Shutter open.";
        }
    else
    if (code == "5343") 
        {
            number = "28";
            command = "SC";
            summary = "Shutter close.";
        }
    else
    if (code == "5543") 
        {
            number = "29";
            command = "UC";
            summary = "Reconciliation.";
        }
    else
    if (code == "4243") 
        {
            number = "30";
            command = "BC";
            summary = "Back notes from temporary cassette.";
        }
    else
    if (code == "434C") 
        {
            number = "31";
            command = "CL";
            summary = "Collect data of note.";
        }
    else
    if (code == "534B") 
        {
            number = "32";
            command = "SK";
            summary = "Mechanical preparation.";
        }
    else
    if (code == "524A") 
        {
            number = "33";
            command = "RJ";
            summary = "Capture.";
        }
    else
    if (code == "4D52") 
        {
            number = "34";
            command = "MR";
            summary = "Mechanical reset.";
        }
    else
    if (code == "4D4A") 
        {
            number = "35";
            command = "MJ";
            summary = "Jam clear, Reject and Mechanical reset.";
        }
    else
    if (code == "4A41") 
        {
            number = "36";
            command = "JA";
            summary = "Jam clear for accept.";
        }
    else
    if (code == "4150") 
        {
            number = "37";
            command = "AP";
            summary = "Auto present.";
        }
    else
    if (code == "5253") 
        {
            number = "38";
            command = "RS";
            summary = "Remote RAS.";
        }
    else
    if (code == "4442") 
        {
            number = "39";
            command = "DB";
            summary = "Debug.";
        }
    else
    if (code == "4553") 
        {
            number = "40";
            command = "ES";
            summary = "Escape note (Auto purge).";
        }
    
    
    document.getElementById("cat").innerHTML = code;
    document.getElementById("cat1").innerHTML = number;
    document.getElementById("cat2").innerHTML = command;
    document.getElementById("cat3").innerHTML = summary;
}
window.onload = init;// JavaScript Document