function myFunctionMdata() {
    var mdata;
    var byte0;
    var byte1;
    var byte2;
    //************************************
    //   **** Reason for rejection. ****
    //************************************
    var R01 = ["01 - Illegal parameter."];
    var R02 = ["02 - Device out of order."];
    var R03 = ["03 - Clear required."];
    var R04 = ["04 - Media still or already presented."];
    var R05 = ["05 - Media still or already stacked."];
    var R06 = ["06 - Nothing to retract (retract request only)."];
    var R07 = ["07 - Nothing to present (present request only)."];
    var R08 = ["08 - Re-present not allowed (after half-retract."];
    var R09 = ["09 - Pick unit out of order."];
    var R10 = ["10 - Cassette empty."];
    var R11 = ["11 - Cassette not installed."];
    var R12 = ["12 - Bin not present."];
    var R13 = ["13 - Bin overfilled."];
    var R14 = ["14 - Cassette type changed."];
    var R15 = ["15 - Cassette not latched."];
    var R16 = ["16 - Instance ID not configured."];
    var R17 = ["17 - Retract not allowed (retract limit exceeded."];
    var R18 = ["18 - All cassettes inop."];
    // **** Unit Identities ****
    var U00 = ["00 - Control board."];
    var U01 = ["01 - Pick unit 1."];
    var U02 = ["02 - Pick unit 2."];
    var U03 = ["03 - Pick unit 3."];
    var U04 = ["04 - Pick unit 4."];
    var U05 = ["05 - Pick unit 5."];
    var U06 = ["06 - Pick unit 6."];
    var U07 = ["07 - SNT."];
    var U08 = ["08 - Carriage."];
    var U09 = ["09 - Bin."];
    var U0A = ["0A - Presenter chassis."];
    var U0B = ["0B - Shutter."];
    var U0C = ["0C - Media aligner."];
    var U0D = ["0D - Vacuum system."];
    //*****************************************
    // **** Sensor Identities ****
    //*****************************************
    //   ****  SNT  ****
    var SSNT00 = ["00 = Unit SNT<br>Divert gate position sensor."];
    var SSNT01 = ["01 = Unit SNT<br>Stacker entry."];
    var SSNT02 = ["02 = Unit SNT<br>Divert bin entry."];
    var SSNT03 = ["03 = Unit SNT<br>HETS left."];
    var SSNT04 = ["04 = Unit SNT<br>HETS right."];
    var SSNT05 = ["05 = Unit SNT<br>Media Width left."];
    var SSNT06 = ["06 = Unit SNT<br>Media Width right."];
    var SSNT07 = ["07 = Unit SNT<br>Main timing disk."];
    var SSNT08 = ["08 = Unit SNT<br>Media deflector home sensor."];
    var SSNT09 = ["09 = Unit SNT<br>Media deflector extended sensor."];
    //   *****  Carriage  ******
    var SCAR00 = ["00 = Unit Carriage<br>Carriage home."];
    var SCAR01 = ["01 = Unit Carriage<br>Carriage position."];
    var SCAR02 = ["02 = Unit Carriage<br>Carriage belt encoder."];
    var SCAR03 = ["03 = Unit Carriage<br>Bunch."];
    var SCAR04 = ["04 = Unit Carriage<br>Pre-exit."];
    var SCAR05 = ["05 = Unit Carriage<br>Exit."];
    //   *****  Presenter Chassis ******
    var SPC00 = ["00 = Unit Presenter Chassis<br>Clamp position."];
    var SPC01 = ["01 = Unit Presenter Chassis<br>Retract entry."];
    var SPC02 = ["02 = Unit Presenter Chassis<br>Reject entry."];
    var SPC03 = ["03 = Unit Presenter Chassis<br>Purge Bin latch."];
    var SPC04 = ["04 = Unit Presenter Chassis<br>Purge bin present."];
    var SPC05 = ["05 = Unit Presenter Chassis<br>Module latch."];
    //   *****  Shutter ******
    var SS00 = ["00 = Unit Shutter<br>Shutter open."];
    var SS01 = ["01 = Unit Shutter<br>Shutter closed."];
    //   *****  Pick ******
    var SP00 = ["00 = Pick arm position."];
    var SP01 = ["01 = D - wheel position."];
    var SP02 = ["02 = Pick transport."];
    var SP03 = ["03 = Cassette ID."];
    var SP04 = ["04 = Cassette latch."];
    var SP05 = ["05 = Cassette low."];
     //   *****  Media Aligner ******
    var SMA00 = ["00 = Unit Media Aligner:<br>Media Aligner Position."];
     //   *****  Vacuum System ******
    var SVS00 = ["00 = Unit Vacuum System:<br>Vacuum sensor."];
    //***************************************
    //  **** Mechanism Fault Description ****
    //***************************************
    //  **** SNT  ****
    var SNTMFD00 = ["00 = Unit SNT<br>Divert gate jam at stack position. To stack."];
    var SNTMFD01 = ["01 = Unit SNT<br>Divert gate jam at divert position. To divert."];
    var SNTMFD02 = ["00 = Unit SNT<br>Divert gate jam between positions."];
    var SNTMFD03 = ["03 = Unit SNT<br>Main motor failed."];
    var SNTMFD04 = ["04 = Unit SNT<br>Main motor too slow."];
    var SNTMFD05 = ["05 = Unit SNT<br>Media deflector jam."];
    //  **** Carriage  ****
    var CMFD00 = ["00 = Unit Carriage<br>Carriage jammed at present."];
    var CMFD01 = ["01 = Unit Carriage<br>Carriage jammed at home."];
    var CMFD02 = ["02 = Unit Carriage<br>Carriage jammed at purge."];
    var CMFD03 = ["03 = Unit Carriage<br>Carriage jammed at rfp."];
    var CMFD04 = ["04 = Unit Carriage<br>Carriage jammed between present and home."];
    var CMFD05 = ["05 = Unit Carriage<br>Carriage jammed between home and rfp."];
    var CMFD06 = ["06 = Unit Carriage<br>Carriage jammed between home and purge."];
    var CMFD07 = ["07 = Unit Carriage<br>Carriage jammed between rfp and purge."];
    var CMFD08 = ["08 = Unit Carriage<br>Carriage jammed between purge and present."];
    var CMFD09 = ["09 = Unit Carriage<br>Carriage jammed between home and park."];
    var CMFD0A = ["0A = Unit Carriage<br>Carriage jammed between park and present."];
    var CMFD0B = ["0B = Unit Carriage<br>Carriage drive motor failed."];
    var CMFD0C = ["0C = Unit Carriage<br>Carriage drive motor too fast."];
    var CMFD0D = ["0D = Unit Carriage<br>Carriage drive motor too slow."];
    var CMFD0E = ["0E = Unit Carriage<br>Carriage belt motor failed."];
    //  **** Presenter  ****
    var PMFD00 = ["00 = Unit Presenter<br>Clamp jammed at home."];
    var PMFD01 = ["01 = Unit Presenter<br>Clamp jammed at present."];
    var PMFD02 = ["02 = Unit Presenter<br>Clamp jammed at rotate."];
    var PMFD03 = ["03 = Unit Presenter<br>Clamp jammed between home and present."];
    var PMFD04 = ["04 = Unit Presenter<br>Clamp jammed between present and rotate."];
    var PMFD05 = ["05 = Unit Presenter<br>Clamp motor failed."];
    var PMFD06 = ["06 = Unit Presenter<br>Clamp motor too slow."];
    var PMFD07 = ["07 = Unit Presenter<br>Clamp motor too fast."];
    //  **** Shutter  ****
    var SMFD00 = ["00 = Unit Shutter<br>Shutter jammed open."];
    var SMFD01 = ["01 = Unit Shutter<br>Shutter jammed closed."];
    var SMFD02 = ["02 = Unit Shutter<br>Shutter jammed between open and closed."];
    var SMFD03 = ["03 = Unit Shutter<br>Shutter sensors both blocked - unknown position."];
    //  **** Pick  ****
    var PFD00 = ["00 = Unit Pick<br>Pick arm motor failure."];
    var PFD01 = ["01 = Unit Pick<br>D wheel failed."];
    //  **** Media Aligner ****
    var MAMFD00 = ["00 = Unit Media Aligner<br>Media Aligner jammed."];
    //  **** Vacuum System ****
    var VSMFD00 = ["00 = Unit Vacuum System<br>Vacuum system failure."];
    //***************************************
    //  **** Picking Error Reasons ****
    //***************************************
    var PER00 = ["00 = Pick failure."];
    var PER01 = ["01 = Cassette type changed since request started."];
    var PER02 = ["02 = Too many rejected items."];
    var PER03 = ["03 = Cassette empty."];
    var PER04 = ["04 = Reject item in stacker."];
    var PER05 = ["05 = Pusher plate stuck."];
    var PER06 = ["06 = Too thick to learn."];
    //******************************************
    // **** Mechanism Fault description  ****
    // *****************************************
    var DIR00 = ["The direction of mechanism when fault was detected:<br>00 = To stack."];
    var DIR01 = ["The direction of mechanism when fault was detected:<br>01 = To divert."];
    var DIRF00 = ["The direction of mechanism when fault was detected:<br>00 = Forwards."];
    var DIRR01 = ["The direction of mechanism when fault was detected:<br>01 = Reverse."];
    //******************************************
    // **** Media Jam Description  ****
    // *****************************************
    //  **** SNT  ****
    var SMJD00 = ["Unit SNT:<br>Sensor Name:<br>Jam before HETS."];
    var SMJD01 = ["Unit SNT:<br>Sensor Name:<br>Jam at HETS."];
    var SMJD02 = ["Unit SNT:<br>Sensor Name:<br>Jam at media width."];
    var SMJD03 = ["Unit SNT:<br>Sensor Name:<br>Jam between width sensor and stack entry sensor."];
    var SMJD04 = ["Unit SNT:<br>Sensor Name:<br>Jam between width sensor and divert entry sensor."];
    var SMJD05 = ["Unit SNT:<br>Sensor Name:<br>Jam at stack entry."];
    var SMJD06 = ["Unit SNT:<br>Sensor Name:<br>Jam at divert entry."];
    //  **** Carriage  ****
    var CMJD00 = ["Unit Carriage:<br>Sensor Name:<br>Jam at bunch sensor."];
    var CMJD01 = ["Unit Carriage:<br>Sensor Name:<br>Jam at bunch and pre-exit sensor."];
    var CMJD02 = ["Unit Carriage:<br>Sensor Name:<br>Jam at pre-exit sensor."];
    var CMJD03 = ["Unit Carriage:<br>Sensor Name:<br>Jam at pre-exit and exit sensor."];
    var CMJD04 = ["Unit Carriage:<br>Sensor Name:<br>Jam at exit sensor."];
    var CMJD05 = ["Unit Carriage:<br>Sensor Name:<br>Jam at bunch and reject entry sensor."];
    var CMJD06 = ["Unit Carriage:<br>Sensor Name:<br>Jam at bunch and retract entry sensor."];
    var CMJD07 = ["Unit Carriage:<br>Sensor Name:<br>Jam at bunch and pre-exit sensor."];
    var CMJD08 = ["Unit Carriage:<br>Sensor Name:<br>Jam at pre-exit and exit sensor."];
    var CMJD09 = ["Unit Carriage:<br>Sensor Name:<br>Bunch not presentable."];
    // **** Bin ****
    var BMJD00 = ["Unit Bin:<br>Sensor Name:<br>Jam at purge entry sensor."];
    var BMJD01 = ["Unit Bin:<br>Sensor Name:<br>Jam at retract entry sensor."];
    // **** Pick *****
    var PMJD00 = ["Sensor Name:<br>Jam at pick sensor."];
    //****************************************
    //***** Source of Media ******
    // ***************************************
    var SOM00 = ["00 = Bunch media jam."];
    var SOM01 = ["01 = Pick unit 1."];
    var SOM02 = ["02 = Pick unit 2."];
    var SOM03 = ["03 = Pick unit 3."];
    var SOM04 = ["04 = Pick unit 4."];
    var SOM05 = ["05 = Pick unit 5."];
    var SOM06 = ["06 = Pick unit 6."];
    //****************************************
    //***** Unit Identities ******
    // ***************************************
    var UI00 = ["00 = Control board."];
    var UI01 = ["01 = Pick Unit 1."];
    var UI02 = ["02 = Pick Unit 2."];
    var UI03 = ["03 = Pick Unit 3."];
    var UI04 = ["04 = Pick Unit 4."];
    var UI05 = ["05 = Pick Unit 5."];
    var UI06 = ["06 = Pick Unit 6."];
    var UI07 = ["07 = SNT."];
    var UI08 = ["08 = Carriage."];
    var UI09 = ["09 = Bin."];
    var UI0A = ["0A = Presenter chassis."];
    var UI0B = ["0B = Shutter."];
    var UI0C = ["0C = Media Aligner."];
    var UI0D = ["0D = Vacuum System"];
    var UI0E = ["0E = Software application sequence error."];
    //*******************************************************************
    code = Number(document.getElementById("mstatus").value);
    var str2 = document.getElementById("mdata").value;
    var code2 = str2.substring(0,2);
    var str3 = document.getElementById("mdata").value;
    var code3 = str3.substring(2,4);
    var str4 = document.getElementById("mdata").value;
    var code4 = str4.substring(4,6);
    var str5 = document.getElementById("mdata").value;
    var code5 = str5.substring(6,8);
    var str6 = document.getElementById("mdata").value;
    var code6 = str6.substring(8,10);
    var str7 = document.getElementById("mdata").value;
    var code7 = str7.substring(10,12);
    var str8 = document.getElementById("mdata").value;
    var code8 = str8.substring(12,14);
    var str9 = document.getElementById("mdata").value;
    var code9 = str9.substring(14,16);
    if (code == "1" && code2  == "00")
         {byte0 = "<font size='3'>Reserved, always 0.</font>";}
    if (code == "1" &&  code3 == "00")
        {byte1 = "<font size='3'>Value indicating whether it was a read or write operation which failed:<br> 0	= Read</font>";}
    else
    if (code == "1" &&  code3 == "01")
        {byte1 = "<font size='3'>Value indicating whether it was a read or write operation which failed:<br>1  = Write</font>";}
    else
    if (code == "5" && code2  == "00" && code3 =="00")
       {byte0 = "<font size='3'>Reserved, always 0.</font>";
        byte1 = "<font size='3'>Point in operation when fault was detected:<br>0	= Prior to commencing operation.</font>";}
    else
    if (code == "5" && code2  == "00" && code3 =="01")
        {byte0 = "<font size='3'>Reserved, always 0.</font>";
         byte1 = "<font size='3'>Point in operation when fault was detected:<br>1	= During operation.</font>";}
     else
     if (code == "5" && code2  == "00" && code3 =="02")
       {byte0 = "<font size='3'>Reserved, always 0.</font>";
        byte1 = "<font size='3'>Point in operation when fault was detected:<br>2	= At end of operation.</font>";}
      else
      if (code == "6" && code4 == "01"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = SSNT00;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "02"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R02;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "03"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R03;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "04"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R04;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "05"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R05;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "06"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R06;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "07"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R07;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "08"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R08;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "09"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R09;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "10"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R10;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "11"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R11;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "12"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R12;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "13"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R13;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "14"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R14;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "15"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R15;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "16"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R16;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "17"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R17;
          byte3 = code4 + " - Illegal Parameter Description.";
          }
      else
      if (code == "6" && code4 == "18"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = R18;
          byte3 = "";
          }
      else
      if (code == "7" && code4 == "00"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = "00 - Dispenser Instance ID.";
          byte3 = "";
          }
      else
      if (code == "7" && code4 == "01"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = "01 - Media Parameters.";
          byte3 = "";
          }
      else
      if (code == "7" && code4 == "02"){
          byte0 = "Reserved, always 0.";
          byte1 = code3 + "   - Unit where fault occurred.";
          byte2 = "02 - Invalid presenter configuration.";
          byte3 = "";
          }      
    else
    if (code == "8"){
          byte0 = "Reserved, always 0.";
          byte1 = "";
          byte2 = "";
          byte3 = "";
          }
    else
    if (code == "9"){
          byte0 = "Reserved, always 0.";
          byte1 = "";
          byte2 = "";
          byte3 = "";
          }
    else
    if (code == "21"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Sensor ID: <br>" + SSNT00;break; 
    case "01":byte4 = "Sensor ID: <br>" + SSNT01;break;
    case "02":byte4 = "Sensor ID: <br>" + SSNT02;break;
    case "03":byte4 = "Sensor ID: <br>" + SSNT03;break;
    case "04":byte4 = "Sensor ID: <br>" + SSNT04;break; 
    case "05":byte4 = "Sensor ID: <br>" + SSNT05;break;
    case "06":byte4 = "Sensor ID: <br>" + SSNT06;break;
    case "07":byte4 = "Sensor ID: <br>" + SSNT07;break;
    case "08":byte4 = "Sensor ID: <br>" + SSNT09;break; 
    case "09":byte4 = "Sensor ID: <br>" + SSNT09;break;           
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    }
     else
    if (code == "22"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Sensor ID: <br>" + SCAR00;break; 
    case "01":byte4 = "Sensor ID: <br>" + SCAR01;break;
    case "02":byte4 = "Sensor ID: <br>" + SCAR02;break;
    case "03":byte4 = "Sensor ID: <br>" + SCAR03;break;
    case "04":byte4 = "Sensor ID: <br>" + SCAR04;break; 
    case "05":byte4 = "Sensor ID: <br>" + SCAR05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
    else
    if (code == "23"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Sensor ID: <br>" + SPC00;break; 
    case "01":byte4 = "Sensor ID: <br>" + SPC01;break;
    case "02":byte4 = "Sensor ID: <br>" + SPC02;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
    else
    if (code == "24"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Sensor ID: <br>" + SS00;break; 
    case "01":byte4 = "Sensor ID: <br>" + SS01;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
    else
    if (code == "25"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Pick Unit 1<br>Sensor ID: <br>" + SP00;break; 
    case "01":byte4 = "Pick Unit 1<br>Sensor ID: <br>" + SP01;break;
    case "02":byte4 = "Pick Unit 1<br>Sensor ID: <br>" + SP02;break;  
    case "03":byte4 = "Pick Unit 1<br>Sensor ID: <br>" + SP03;break;
    case "04":byte4 = "Pick Unit 1<br>Sensor ID: <br>" + SP04;break;
    case "05":byte4 = "Pick Unit 1<br>Sensor ID: <br>" + SP05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
        else
    if (code == "26"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Pick Unit 2<br>Sensor ID: <br>" + SP00;break; 
    case "01":byte4 = "Pick Unit 2<br>Sensor ID: <br>" + SP01;break;
    case "02":byte4 = "Pick Unit 2<br>Sensor ID: <br>" + SP02;break;  
    case "03":byte4 = "Pick Unit 2<br>Sensor ID: <br>" + SP03;break;
    case "04":byte4 = "Pick Unit 2<br>Sensor ID: <br>" + SP04;break;
    case "05":byte4 = "Pick Unit 2<br>Sensor ID: <br>" + SP05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    }
        else
    if (code == "27"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Pick Unit 3<br>Sensor ID: <br>" + SP00;break; 
    case "01":byte4 = "Pick Unit 3<br>Sensor ID: <br>" + SP01;break;
    case "02":byte4 = "Pick Unit 3<br>Sensor ID: <br>" + SP02;break;  
    case "03":byte4 = "Pick Unit 3<br>Sensor ID: <br>" + SP03;break;
    case "04":byte4 = "Pick Unit 3<br>Sensor ID: <br>" + SP04;break;
    case "05":byte4 = "Pick Unit 3<br>Sensor ID: <br>" + SP05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
        else
    if (code == "28"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Pick Unit 4<br>Sensor ID: <br>" + SP00;break; 
    case "01":byte4 = "Pick Unit 4<br>Sensor ID: <br>" + SP01;break;
    case "02":byte4 = "Pick Unit 4<br>Sensor ID: <br>" + SP02;break;  
    case "03":byte4 = "Pick Unit 4<br>Sensor ID: <br>" + SP03;break;
    case "04":byte4 = "Pick Unit 4<br>Sensor ID: <br>" + SP04;break;
    case "05":byte4 = "Pick Unit 4<br>Sensor ID: <br>" + SP05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
        else
    if (code == "29"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Pick Unit 5<br>Sensor ID: <br>" + SP00;break; 
    case "01":byte4 = "Pick Unit 5<br>Sensor ID: <br>" + SP01;break;
    case "02":byte4 = "Pick Unit 5<br>Sensor ID: <br>" + SP02;break;  
    case "03":byte4 = "Pick Unit 5<br>Sensor ID: <br>" + SP03;break;
    case "04":byte4 = "Pick Unit 5<br>Sensor ID: <br>" + SP04;break;
    case "05":byte4 = "Pick Unit 5<br>Sensor ID: <br>" + SP05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
        else
    if (code == "30"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Pick Unit 6<br>Sensor ID: <br>" + SP00;break; 
    case "01":byte4 = "Pick Unit 6<br>Sensor ID: <br>" + SP01;break;
    case "02":byte4 = "Pick Unit 6<br>Sensor ID: <br>" + SP02;break;  
    case "03":byte4 = "Pick Unit 6<br>Sensor ID: <br>" + SP03;break;
    case "04":byte4 = "Pick Unit 6<br>Sensor ID: <br>" + SP04;break;
    case "05":byte4 = "Pick Unit 6<br>Sensor ID: <br>" + SP05;break;
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    }
        else
    if (code == "31"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Sensor ID: <br>" + SMA00;break; 
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    }
        else
    if (code == "32"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = "Failure mode: <br>" + "00 - Failed clear.";break;       
    case "01":byte3 = "Failure mode: <br>" + "01 - Failed blocked.";break;       
    case "02":byte3 = "Failure mode: <br>" + "02 - No sensor POI.";break;
    case "03":byte3 = "Failure mode: <br>" + "03 - CIC sensor reading invalid.";break;
    case "04":byte3 = "Failure mode: <br>" + "04 - Out of range.";break;        
    }  
    switch(code6) {     
    case "00":byte4 = "Sensor ID: <br>" + SVS00;break; 
    }
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    }      
    } 
    else
    if (code == "41"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = SNTMFD00;break;       
    case "01":byte3 = SNTMFD01;break;       
    case "02":byte3 = SNTMFD02;break;
    case "03":byte3 = SNTMFD03;break;
    case "04":byte3 = SNTMFD04;break; 
    case "05":byte3 = SNTMFD05;break;        
    }  
    switch(code6) {     
    case "00":byte4 = DIR00;break; 
    case "01":byte4 = DIR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }          
    }
     else
    if (code == "42"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = CMFD00;break;       
    case "01":byte3 = CMFD01;break;       
    case "02":byte3 = CMFD02;break;
    case "03":byte3 = CMFD03;break;
    case "04":byte3 = CMFD04;break; 
    case "05":byte3 = CMFD05;break; 
    case "06":byte3 = CMFD06;break;       
    case "07":byte3 = CMFD07;break;       
    case "08":byte3 = CMFD08;break;
    case "09":byte3 = CMFD09;break;
    case "0A":byte3 = CMFD0A;break; 
    case "0B":byte3 = CMFD0B;break; 
    case "0C":byte3 = CMFD0C;break;       
    case "0D":byte3 = CMFD0D;break;       
    case "0E":byte3 = CMFD0E;break;
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }     
    } 
    else
    if (code == "43"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PMFD00;break;       
    case "01":byte3 = PMFD01;break;       
    case "02":byte3 = PMFD02;break;
    case "03":byte3 = PMFD03;break;
    case "04":byte3 = PMFD04;break; 
    case "05":byte3 = PMFD05;break; 
    case "06":byte3 = PMFD06;break;       
    case "07":byte3 = PMFD07;break;        
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }        
    } 
    else
    if (code == "44"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;      
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }          
    } 
    else
    if (code == "45"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }    
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;          
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }        
    } 
        else
    if (code == "46"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;          
    }   
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }         
    }
        else
    if (code == "47"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;          
    }   
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }        
    } 
        else
    if (code == "48"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;          
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }       
    } 
        else
    if (code == "49"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;          
    } 
   switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }          
    } 
        else
    if (code == "50"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = PFD00;break;       
    case "01":byte3 = PFD01;break;          
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }     
    }
        else
    if (code == "51"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = MAMFD00;break;       
    }  
    switch(code6) {     
    case "00":byte4 = DIRF00;break; 
    case "01":byte4 = DIRR01;break;
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }       
    }
    else
    if (code == "52"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }   
    switch(code4) {     
    case "00":byte2 = "Point in operation when sensor fault was detected: <br>" + "00 - Prior to commencing operation.";break;       
    case "01":byte2 = "Point in operation when sensor fault was detected: <br>" + "01 - During operation.";break;       
    case "02":byte2 = "Point in operation when sensor fault was detected: <br>" + "02 - At end of operation.";break;
    }
    switch(code5) {     
    case "00":byte3 = MAMFD00;break;       
    } 
    switch(code6) {     
    case "00":byte4 = VSMFD00;break; 
    }
    switch (code7){
    case "00":byte5 = "00 - Unable to move in any direction from failed position.";break;
    case "01":byte5 = "01 - Unable to move past failed position.";break;        
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }   
    switch (true){
    case code9 >= 00:
        byte7 = (code9 + " - Sensor analogue value at failed position, if relevant and available.");
        break;
    }         
    }
    else
    if (code == "61"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = SMJD00;break;       
    case "01":byte2 = SMJD01;break;       
    case "02":byte2 = SMJD02;break;
    case "03":byte2 = SMJD03;break;
    case "04":byte2 = SMJD04;break; 
    case "05":byte2 = SMJD05;break; 
    case "06":byte2 = SMJD06;break;       
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    }
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    } 
    else
    if (code == "62"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = CMJD00;break;       
    case "01":byte2 = CMJD01;break;       
    case "02":byte2 = CMJD02;break;
    case "03":byte2 = CMJD03;break;
    case "04":byte2 = CMJD04;break; 
    case "05":byte2 = CMJD05;break; 
    case "06":byte2 = CMJD06;break;
    case "07":byte2 = CMJD07;break; 
    case "08":byte2 = CMJD08;break; 
    case "09":byte2 = CMJD09;break;
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    }
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    } 
    else
    if (code == "63"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = BMJD00;break;       
    case "01":byte2 = BMJD01;break;       
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }         
    } 
    else
    if (code == "64"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
        case "00":byte2 = "Pick Module 1:<br>" + PMJD00;break;         
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }         
    } 
       else
    if (code == "65"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
        case "00":byte2 = "Pick Module 2:<br>" + PMJD00;break;         
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }         
    } 
       else
    if (code == "66"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
        case "00":byte2 = "Pick Module 3:<br>" + PMJD00;break;         
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    }
        switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    } 
       else
    if (code == "67"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
        case "00":byte2 = "Pick Module 4:<br>" + PMJD00;break;         
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    }  
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }         
    } 
       else
    if (code == "68"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
        case "00":byte2 = "Pick Module 5:<br>" + PMJD00;break;         
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }         
    } 
    else
    if (code == "69"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
        case "00":byte2 = "Pick Module 6:<br>" + PMJD00;break;         
    } 
    switch(code5) {     
    case "00":byte3 = SOM00;break;       
    case "01":byte3 = SOM01;break;       
    case "02":byte3 = SOM02;break;
    case "03":byte3 = SOM03;break;
    case "04":byte3 = SOM04;break; 
    case "05":byte3 = SOM05;break; 
    case "06":byte3 = SOM06;break;       
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    }   
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    }  
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    } 
    else
    if (code == "70"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SSNT00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SSNT01;break; 
    case "02":byte2 = "Sensor ID:<br>" + SSNT02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SSNT03;break;
    case "04":byte2 = "Sensor ID:<br>" + SSNT04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SSNT05;break; 
    case "06":byte2 = "Sensor ID:<br>" + SSNT06;break; 
    case "07":byte2 = "Sensor ID:<br>" + SSNT07;break;
    case "08":byte2 = "Sensor ID:<br>" + SSNT08;break; 
    case "09":byte2 = "Sensor ID:<br>" + SSNT09;break; 
    } 
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    } 
    else
    if (code == "71"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SCAR00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SCAR01;break; 
    case "02":byte2 = "Sensor ID:<br>" + SCAR02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SCAR03;break;
    case "04":byte2 = "Sensor ID:<br>" + SCAR04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SCAR05;break; 
    } 
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    } 
    else
    if (code == "72"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SPC00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SPC01;break; 
    case "02":byte2 = "Sensor ID:<br>" + SPC02;break; 
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "73"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SS00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SS01;break; 
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "74"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SP00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SP01;break;
    case "02":byte2 = "Sensor ID:<br>" + SP02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SP03;break;
    case "04":byte2 = "Sensor ID:<br>" + SP04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SP05;break;         
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "75"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SP00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SP01;break;
    case "02":byte2 = "Sensor ID:<br>" + SP02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SP03;break;
    case "04":byte2 = "Sensor ID:<br>" + SP04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SP05;break;         
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "76"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SP00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SP01;break;
    case "02":byte2 = "Sensor ID:<br>" + SP02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SP03;break;
    case "04":byte2 = "Sensor ID:<br>" + SP04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SP05;break;         
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "77"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SP00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SP01;break;
    case "02":byte2 = "Sensor ID:<br>" + SP02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SP03;break;
    case "04":byte2 = "Sensor ID:<br>" + SP04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SP05;break;         
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "78"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SP00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SP01;break;
    case "02":byte2 = "Sensor ID:<br>" + SP02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SP03;break;
    case "04":byte2 = "Sensor ID:<br>" + SP04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SP05;break;         
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "79"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Unit where fault occurred: <br>" + U00;break;       
    case "01":byte1 = "Unit where fault occurred: <br>" + U01;break;       
    case "02":byte1 = "Unit where fault occurred: <br>" + U02;break;       
    case "03":byte1 = "Unit where fault occurred: <br>" + U03;break;
    case "04":byte1 = "Unit where fault occurred: <br>" + U04;break;
    case "05":byte1 = "Unit where fault occurred: <br>" + U05;break;
    case "06":byte1 = "Unit where fault occurred: <br>" + U06;break;
    case "07":byte1 = "Unit where fault occurred: <br>" + U07;break;
    case "08":byte1 = "Unit where fault occurred: <br>" + U08;break;
    case "09":byte1 = "Unit where fault occurred: <br>" + U09;break; 
    case "0A":byte1 = "Unit where fault occurred: <br>" + U0A;break;
    case "0B":byte1 = "Unit where fault occurred: <br>" + U0B;break;
    case "0C":byte1 = "Unit where fault occurred: <br>" + U0C;break;
    case "0D":byte1 = "Unit where fault occurred: <br>" + U0D;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Sensor ID:<br>" + SP00;break; 
    case "01":byte2 = "Sensor ID:<br>" + SP01;break;
    case "02":byte2 = "Sensor ID:<br>" + SP02;break; 
    case "03":byte2 = "Sensor ID:<br>" + SP03;break;
    case "04":byte2 = "Sensor ID:<br>" + SP04;break; 
    case "05":byte2 = "Sensor ID:<br>" + SP05;break;         
    }
    switch (true){
    case code5 >= 00:
        byte3 = (code5 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = (code6 + " - Sensor A/D value. LSB first.<br>If the sensor only has a digital value then the following applies:<br>0x0000 = Clear<br>0x03FF = Blocked.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = (code7 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = (code8 + " - Sensor Expected Value.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "81"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Pick Unit ID: <br>" + UI00;break;       
    case "01":byte1 = "Pick Unit ID: <br>" + UI01;break;        
    case "02":byte1 = "Pick Unit ID: <br>" + UI02;break;       
    case "03":byte1 = "Pick Unit ID: <br>" + UI03;break; 
    case "04":byte1 = "Pick Unit ID: <br>" + UI04;break; 
    case "05":byte1 = "Pick Unit ID: <br>" + UI05;break; 
    case "06":byte1 = "Pick Unit ID: <br>" + UI06;break; 
    case "07":byte1 = "Pick Unit ID: <br>" + UI07;break; 
    case "08":byte1 = "Pick Unit ID: <br>" + UI08;break; 
    case "09":byte1 = "Pick Unit ID: <br>" + UI09;break; 
    case "0A":byte1 = "Pick Unit ID: <br>" + UI0A;break; 
    case "0B":byte1 = "Pick Unit ID: <br>" + UI0B;break; 
    case "0C":byte1 = "Pick Unit ID: <br>" + UI0C;break; 
    case "0D":byte1 = "Pick Unit ID: <br>" + UI0D;break;
    case "0E":byte1 = "Pick Unit ID: <br>" + UI0E;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Pick error reason:<br>" + PER00;break; 
    case "01":byte2 = "Pick error reason:<br>" + PER01;break;
    case "02":byte2 = "Pick error reason:<br>" + PER02;break; 
    case "03":byte2 = "Pick error reason:<br>" + PER03;break;
    case "04":byte2 = "Pick error reason:<br>" + PER04;break; 
    case "05":byte2 = "Pick error reason:<br>" + PER05;break;
    case "06":byte2 = "Pick error reason:<br>" + PER06;break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "82"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Pick Unit ID: <br>" + UI00;break;       
    case "01":byte1 = "Pick Unit ID: <br>" + UI01;break;        
    case "02":byte1 = "Pick Unit ID: <br>" + UI02;break;       
    case "03":byte1 = "Pick Unit ID: <br>" + UI03;break; 
    case "04":byte1 = "Pick Unit ID: <br>" + UI04;break; 
    case "05":byte1 = "Pick Unit ID: <br>" + UI05;break; 
    case "06":byte1 = "Pick Unit ID: <br>" + UI06;break; 
    case "07":byte1 = "Pick Unit ID: <br>" + UI07;break; 
    case "08":byte1 = "Pick Unit ID: <br>" + UI08;break; 
    case "09":byte1 = "Pick Unit ID: <br>" + UI09;break; 
    case "0A":byte1 = "Pick Unit ID: <br>" + UI0A;break; 
    case "0B":byte1 = "Pick Unit ID: <br>" + UI0B;break; 
    case "0C":byte1 = "Pick Unit ID: <br>" + UI0C;break; 
    case "0D":byte1 = "Pick Unit ID: <br>" + UI0D;break;
    case "0E":byte1 = "Pick Unit ID: <br>" + UI0E;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Pick error reason:<br>" + PER00;break; 
    case "01":byte2 = "Pick error reason:<br>" + PER01;break;
    case "02":byte2 = "Pick error reason:<br>" + PER02;break; 
    case "03":byte2 = "Pick error reason:<br>" + PER03;break;
    case "04":byte2 = "Pick error reason:<br>" + PER04;break; 
    case "05":byte2 = "Pick error reason:<br>" + PER05;break;
    case "06":byte2 = "Pick error reason:<br>" + PER06;break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "83"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Pick Unit ID: <br>" + UI00;break;       
    case "01":byte1 = "Pick Unit ID: <br>" + UI01;break;        
    case "02":byte1 = "Pick Unit ID: <br>" + UI02;break;       
    case "03":byte1 = "Pick Unit ID: <br>" + UI03;break; 
    case "04":byte1 = "Pick Unit ID: <br>" + UI04;break; 
    case "05":byte1 = "Pick Unit ID: <br>" + UI05;break; 
    case "06":byte1 = "Pick Unit ID: <br>" + UI06;break; 
    case "07":byte1 = "Pick Unit ID: <br>" + UI07;break; 
    case "08":byte1 = "Pick Unit ID: <br>" + UI08;break; 
    case "09":byte1 = "Pick Unit ID: <br>" + UI09;break; 
    case "0A":byte1 = "Pick Unit ID: <br>" + UI0A;break; 
    case "0B":byte1 = "Pick Unit ID: <br>" + UI0B;break; 
    case "0C":byte1 = "Pick Unit ID: <br>" + UI0C;break; 
    case "0D":byte1 = "Pick Unit ID: <br>" + UI0D;break;
    case "0E":byte1 = "Pick Unit ID: <br>" + UI0E;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Pick error reason:<br>" + PER00;break; 
    case "01":byte2 = "Pick error reason:<br>" + PER01;break;
    case "02":byte2 = "Pick error reason:<br>" + PER02;break; 
    case "03":byte2 = "Pick error reason:<br>" + PER03;break;
    case "04":byte2 = "Pick error reason:<br>" + PER04;break; 
    case "05":byte2 = "Pick error reason:<br>" + PER05;break;
    case "06":byte2 = "Pick error reason:<br>" + PER06;break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "84"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Pick Unit ID: <br>" + UI00;break;       
    case "01":byte1 = "Pick Unit ID: <br>" + UI01;break;        
    case "02":byte1 = "Pick Unit ID: <br>" + UI02;break;       
    case "03":byte1 = "Pick Unit ID: <br>" + UI03;break; 
    case "04":byte1 = "Pick Unit ID: <br>" + UI04;break; 
    case "05":byte1 = "Pick Unit ID: <br>" + UI05;break; 
    case "06":byte1 = "Pick Unit ID: <br>" + UI06;break; 
    case "07":byte1 = "Pick Unit ID: <br>" + UI07;break; 
    case "08":byte1 = "Pick Unit ID: <br>" + UI08;break; 
    case "09":byte1 = "Pick Unit ID: <br>" + UI09;break; 
    case "0A":byte1 = "Pick Unit ID: <br>" + UI0A;break; 
    case "0B":byte1 = "Pick Unit ID: <br>" + UI0B;break; 
    case "0C":byte1 = "Pick Unit ID: <br>" + UI0C;break; 
    case "0D":byte1 = "Pick Unit ID: <br>" + UI0D;break;
    case "0E":byte1 = "Pick Unit ID: <br>" + UI0E;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Pick error reason:<br>" + PER00;break; 
    case "01":byte2 = "Pick error reason:<br>" + PER01;break;
    case "02":byte2 = "Pick error reason:<br>" + PER02;break; 
    case "03":byte2 = "Pick error reason:<br>" + PER03;break;
    case "04":byte2 = "Pick error reason:<br>" + PER04;break; 
    case "05":byte2 = "Pick error reason:<br>" + PER05;break;
    case "06":byte2 = "Pick error reason:<br>" + PER06;break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "85"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Pick Unit ID: <br>" + UI00;break;       
    case "01":byte1 = "Pick Unit ID: <br>" + UI01;break;        
    case "02":byte1 = "Pick Unit ID: <br>" + UI02;break;       
    case "03":byte1 = "Pick Unit ID: <br>" + UI03;break; 
    case "04":byte1 = "Pick Unit ID: <br>" + UI04;break; 
    case "05":byte1 = "Pick Unit ID: <br>" + UI05;break; 
    case "06":byte1 = "Pick Unit ID: <br>" + UI06;break; 
    case "07":byte1 = "Pick Unit ID: <br>" + UI07;break; 
    case "08":byte1 = "Pick Unit ID: <br>" + UI08;break; 
    case "09":byte1 = "Pick Unit ID: <br>" + UI09;break; 
    case "0A":byte1 = "Pick Unit ID: <br>" + UI0A;break; 
    case "0B":byte1 = "Pick Unit ID: <br>" + UI0B;break; 
    case "0C":byte1 = "Pick Unit ID: <br>" + UI0C;break; 
    case "0D":byte1 = "Pick Unit ID: <br>" + UI0D;break;
    case "0E":byte1 = "Pick Unit ID: <br>" + UI0E;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Pick error reason:<br>" + PER00;break; 
    case "01":byte2 = "Pick error reason:<br>" + PER01;break;
    case "02":byte2 = "Pick error reason:<br>" + PER02;break; 
    case "03":byte2 = "Pick error reason:<br>" + PER03;break;
    case "04":byte2 = "Pick error reason:<br>" + PER04;break; 
    case "05":byte2 = "Pick error reason:<br>" + PER05;break;
    case "06":byte2 = "Pick error reason:<br>" + PER06;break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "86"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "Pick Unit ID: <br>" + UI00;break;       
    case "01":byte1 = "Pick Unit ID: <br>" + UI01;break;        
    case "02":byte1 = "Pick Unit ID: <br>" + UI02;break;       
    case "03":byte1 = "Pick Unit ID: <br>" + UI03;break; 
    case "04":byte1 = "Pick Unit ID: <br>" + UI04;break; 
    case "05":byte1 = "Pick Unit ID: <br>" + UI05;break; 
    case "06":byte1 = "Pick Unit ID: <br>" + UI06;break; 
    case "07":byte1 = "Pick Unit ID: <br>" + UI07;break; 
    case "08":byte1 = "Pick Unit ID: <br>" + UI08;break; 
    case "09":byte1 = "Pick Unit ID: <br>" + UI09;break; 
    case "0A":byte1 = "Pick Unit ID: <br>" + UI0A;break; 
    case "0B":byte1 = "Pick Unit ID: <br>" + UI0B;break; 
    case "0C":byte1 = "Pick Unit ID: <br>" + UI0C;break; 
    case "0D":byte1 = "Pick Unit ID: <br>" + UI0D;break;
    case "0E":byte1 = "Pick Unit ID: <br>" + UI0E;break;
    }     
    switch(code4) {     
    case "00":byte2 = "Pick error reason:<br>" + PER00;break; 
    case "01":byte2 = "Pick error reason:<br>" + PER01;break;
    case "02":byte2 = "Pick error reason:<br>" + PER02;break; 
    case "03":byte2 = "Pick error reason:<br>" + PER03;break;
    case "04":byte2 = "Pick error reason:<br>" + PER04;break; 
    case "05":byte2 = "Pick error reason:<br>" + PER05;break;
    case "06":byte2 = "Pick error reason:<br>" + PER06;break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "91"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "00 = Bin overfill.";break;       
    case "01":byte1 = "01 = Bin removed during operation";break;        
    }     
    switch(code4) {     
    case "00":byte2 = "Bin compartment ID:<br>00 = Divert area.";break;
    case "01":byte2 = "Bin compartment ID:<br>01 = Reject area.";break;
    case "02":byte2 = "Bin compartment ID:<br>02 = Retract area.";break;
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "92"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "00 = Bin overfill.";break;       
    case "01":byte1 = "01 = Bin removed during operation";break;        
    }     
    switch(code4) {     
    case "00":byte2 = "Bin compartment ID:<br>00 = Divert area.";break;
    case "01":byte2 = "Bin compartment ID:<br>01 = Reject area.";break;
    case "02":byte2 = "Bin compartment ID:<br>02 = Retract area.";break;
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "93"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "00 = Bin overfill.";break;       
    case "01":byte1 = "01 = Bin removed during operation";break;        
    }     
    switch(code4) {     
    case "00":byte2 = "Bin compartment ID:<br>00 = Divert area.";break;
    case "01":byte2 = "Bin compartment ID:<br>01 = Reject area.";break;
    case "02":byte2 = "Bin compartment ID:<br>02 = Retract area.";break;
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else
    if (code == "95"){
    switch(code2){
    case "00": byte0 = "00 - Reserved, always 0.";
    }    
    switch(code3) {     
    case "00":byte1 = "0xE = SNR Module.";break;       
    }     
    switch(code4) {     
    case "00":byte2 = "Bit 0:<br>0 = SNR_Board_Defective.";break;
    case "01":byte2 = "Bit 1:<br>1 = SNR_Top_CIS_Defective.";break;
    case "02":byte2 = "Bit 2:<br>2 = SNR_Bottom_CIS_Defective.";break;
    case "03":byte2 = "Bit 3:<br>3 = SNR_Comms_Error.";break;
    case "04":byte2 = "Bit 4:<br>4 = Reserved.";break; 
    case "05":byte2 = "Bit 5:<br>5 = SNR_Unknown_Error.";break; 
    case "06":byte2 = "Bit 6:<br>6 = Reserved.";break;
    case "07":byte2 = "Bit 7:<br>7 = SNR_Count_Mismatch.";break;        
    }
    switch (true){
    case code5 >= 00:
        byte3 = ("N/A.");
        break;
    } 
    switch (true){
    case code6 >= 00:
        byte4 = ("N/A.");
        break;
    } 
    switch (true){
    case code7 >= 00:
        byte5 = ("N/A.");
        break;
    } 
    switch (true){
    case code8 >= 00:
        byte6 = ("N/A.");
        break;
    } 
    switch (true){
    case code9 >= 00:
        byte7 = ("N/A.");
        break;
    }     
    }
    else {
          byte0 = " ?";
          byte1 = "? ";
          byte2 = " ?";
          byte3 = " ?";
          }
    document.getElementById("byte0").innerHTML = byte0;
    document.getElementById("byte1").innerHTML = byte1;
    document.getElementById("byte2").innerHTML = byte2;
    document.getElementById("byte3").innerHTML = byte3;
    document.getElementById("byte4").innerHTML = byte4;
    document.getElementById("byte5").innerHTML = byte5;
    document.getElementById("byte6").innerHTML = byte6;
    document.getElementById("byte7").innerHTML = byte7;
    }
window.onload = init;