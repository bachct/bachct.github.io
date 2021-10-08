function category() {
    var code;
    var message;
    var detect;
    var cause;
    var motor;
    var sensor;
    var FRU;
    //*********************************
	// Start of General Error Code List
	//*********************************
	var C001 = ["<font size='2px' color='#0000FF'>001 Cause:</font><br>Note remain.<br><font size='2px' color='#0000FF'>Try:</font>Is any note or a piece of note remaining on the transport route?(Visual check)<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Remove remaining notes or a piece of note if any.<br>"];
	var C002 = ["<font size='2px' color='#0000FF'>002 Cause:</font><br>Foreign object remain.<br><font size='2px' color='#0000FF'>Try:</font><br> Is any dust, clips, coins or a piece of paper remaining on the transport route?(Visual check)<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Remove remaining foreign object if any.<br>"];
	var C003 = ["<font size='2px' color='#0000FF'>003 Cause:</font><br>Improper module setting.<br><font size='2px' color='#0000FF'>Try:</font><br>Check if GBRU/GBNA is properly locked on Cradle having correct clearance by moving it manually.<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>When mounting, push the module until it is properly locked.If the module does not move smoothly, adjust the lock position to create clearance of 0.3mm - 0.8mm.<br>"];
	var C004 = ["<font size='2px' color='#0000FF'>004 Cause:</font><br>Jam clearance areas not fully locked.<br><font size='2px' color='#0000FF'>Try:</font><br>Are jam clearance areas completely closed and fully locked?<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Close all jam clearance areas until they are locked.<br>"];
	var C005 = ["<font size='2px' color='#0000FF'>005 Cause:</font><br>Improper cassette setting.<br><font size='2px' color='#0000FF'>Try:</font><br>Is CASSETTE/RJ-BIN properly set?<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Insert a Cassette into a proper position. When mounting, push RJ-bin until it is locked.<br>"];
	var C006 = ["<font size='2px' color='#0000FF'>006 Cause:</font><br>Unit information setting error.<br><font size='2px' color='#0000FF'>Try:</font><br>Are the unit information settings about denomination, maximum number of notes or etc. appropriate?<br><font size='2px' color='#0000FF'>Measures to  be taken:</font><br>Check denomination settings and if magnet positions or note width guide positions do not correspond to the settings, correct them.<br>"];
	var C007 = ["<font size='2px' color='#0000FF'>007 Cause:</font><br>Inappropriate note amount loaded.<br><font size='2px' color='#0000FF'>Try:</font><br>Is the number of notes loaded in a cassette appropriate? (Cassette Full? Cassette Empty?)Is note denomination correct?<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Load appropriate number of notes.<br>"];
	var C008 = ["<font size='2px' color='#0000FF'>008 Cause:</font><br>Power supply and connection failure.<br><font size='2px' color='#0000FF'>Try:</font><br>Are the power supply and controller connected properly?<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>If they are not, reconnect them properly.<br>"];
	var C009 = ["<font size='2px' color='#0000FF'>009 Cause:</font><br>Module set unbalanced.<br><font size='2px' color='#0000FF'>Try:</font><br>Are upper and lower modules mounted with a tilt or misalignment (between upper and lower, left and right, front and back)? Are all the fixing parts fastened? (Visual check)<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Adjust the module position and refasten a fixing screw for the slide rail.<br>"];
	var C010 = ["<font size='2px' color='#0000FF'>010 Cause:</font><br>Bad note quality.<br><font size='2px' color='#0000FF'>Try:</font><br>Check condition of notes to be loaded.<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Check if notes are seriously damaged or have any adhesion of dirt on the surface.<br>"];
	var C011 = ["<font size='2px' color='#0000FF'>011 Cause:</font><br>BV unit error.<br><font size='2px' color='#0000FF'>Try:</font><br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Reset.<br>"];
	var C012 = ["<font size='2px' color='#0000FF'>012 Cause:</font><br>Pick-up mechanism adjustment failure.<br><font size='2px' color='#0000FF'>Try:</font><br>Check the way how notes are rejected. Frequent errors caused by abnormal note distance, abnormal note length, double feed, skew?<br><font size='2px' color='#0000FF'>Measures to be taken:</font><br>Separator: In the case of frequent errors due to abnormal note distance, double feed and note length, turn the dial by 45 degrees counterclockwise.Separator: In the case of frequent skew errors, turn the dial by 45 degrees clockwise.If the measures above show no improvement or deteriorate the problem, or cause another problem, it is recommended to replace the modules.Cassette: Replace cassettes.<br>"];
	var C013 = ["<font size='2px', color='#0000FF'>013 Cause:</font><br>Software problem.<br><font size='2px', color='#0000FF'>Try:</font><br>Power off & after 15 seconds, on again.</font><br>"];
    var C014 = ["<font size='2px', color='#0000FF'>014 Cause:</font><br>Firmware not downloading.<br><font size='2px', color='#0000FF'>Try:</font><br>Download the firmware.<br>"];
    var C015 = ["<font size='2px', color='#0000FF'>015 Cause:</font><br>RAS operation miss.<br><font size='2px', color='#0000FF'>Try:</font><br>--<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>--<br>"];
    var C101 = ["<font size='2px', color='#0000FF'>101 Cause:</font><br>Motor/Solenoid failure or damage.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if motor is rotating and solenoid is activating by a mechanical reset.Check for abnormal sound.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace motors/solenoids.<br>"];
    var C102 = ["<font size='2px', color='#0000FF'>102 Cause:</font><br>Motor/solenoid not fixed securely.<br><font size='2px', color='#0000FF'>Try:</font><br>Is motor/solenoid mounted firmly? Is there any damage and deformation to the fixing brackets? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Fix motor/solenoid properly.<br>"];
    var C103 = ["<font size='2px', color='#0000FF'>103 Cause:</font><br>Pulley/Gear improper rotation.<br><font size='2px', color='#0000FF'>Try:</font><br>Are pulley/gear properly fixed with a shaft and sliding smoothly without interfering surrounding parts?(Check visually and manually)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Fix the fixing part of pulley/gear properly again.When pulley/gear do not move smoothly, disassemble them and then clean and remove foreign objects if any. When pulley/gear interfere with surrounding parts, check for deformation.<br>"];
    var C104 = ["<font size='2px', color='#0000FF'>104 Cause:</font><br>Belt come off/torn off.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Place a belt to a proper position. If belt still comes off, adjust belt tension.Replace belts if torn or damaged.<br>"];
    var C105 = ["<font size='2px', color='#0000FF'>105 Cause:</font><br>Belt tension failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check belt tension.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust belt tension.<br>"];
    var C106 = ["<font size='2px', color='#0000FF'>106 Cause:</font><br>Inappropriate Gear backlash.<br><font size='2px', color='#0000FF'>Try:</font><br>Check the amount of gear backlash using a manual handle.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>If gears have a same diameter, try changing phase of gear engagement. Lubricate gears.<br>"];
    var C107 = ["<font size='2px', color='#0000FF'>107 Cause:</font><br>Bearing rotation not smooth.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if bearing is deformed, damaged, or catching foreign objects, or if shaft is worn using a manual knob handle.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove foreign objects if any.<br>"];
    var C108 = ["<font size='2px', color='#0000FF'>108 Cause:</font><br>Thrust clearance of shaft insufficient.<br><font size='2px', color='#0000FF'>Try:</font><br>Confirm that thrust clearance of shaft is not 0mm by hand.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove foreign objects if any. If there is no foreign object, check for parts deformation.<br>"];
    var C109 = ["<font size='2px', color='#0000FF'>109 Cause:</font><br>Link mechanism operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is link/stud/hub deformed or catching foreign objects? (Check visually and manually)Is link/stud/hub well lubricated? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign objects or lubricate. If the failure still arises, check for parts deformation.<br>"];
    var C110 = ["<font size='2px', color='#0000FF'>110 Cause:</font><br>Carrier drive cam phase missynchronous.<br><font size='2px', color='#0000FF'>Try:</font><br>Check the engagement of cam by moving Carrier back and forth using a manual handle.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>To adjust cam phase, align the matching marks on pulleys with those on the frame and then reattach Carrier drive belt.<br>"];
    var C111 = ["<font size='2px', color='#0000FF'>111 Cause:</font><br>Stage/Pusher belt connection part disengaged.<br><font size='2px', color='#0000FF'>Try:</font><br>Is belt connection part removed from Stage/Pusher? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Connect the belt connection part to Stage/Pusher again.<br>"];
    var C112 = ["<font size='2px', color='#0000FF'>112 Cause:</font><br>Fork operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is Separator fork deformed or damaged? (Visual check)Check if Solenoid moves smoothly by pushing it by hand.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign object or lubricate. If the failure still arises, check for parts deformation.<br>"];
    var C113 = ["<font size='2px', color='#0000FF'>113 Cause:</font><br>Escrow alignment lever operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is ESC alignment lever deformed or damaged? (Visual check)Is there appropriate thrust clearance?Are notes stored in a proper position in ESC?<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign object or lubricate. If thrust clearance is needed, bend the bracket slightly as an emergency measure. If the failure still arises, parts may have been deformed or damaged to the extent that it is hard to repair.<br>"];
    var C114 = ["<font size='2px', color='#0000FF'>114 Cause:</font><br>Reservoir alignment lever operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is RSV alignment lever deformed or damaged? (Visual check)Is there appropriate thrust play? Does RSV alignment lever move properly associated with RSV stage movement?<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign object or lubricate. If thrust clearance is needed, bend the bracket slightly as an emergency measure. If the failure still arises, parts may have been deformed or damaged to the extent that it is hard to repair.<br>"];
    var C115 = ["<font size='2px', color='#0000FF'>115 Cause:</font><br>RSV storing lever operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is RSV storing lever deformed or damaged? (Visual check)Does RSV storing lever move properly associated with RSV stage movement?<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign object or lubricate. If the failure still arises, check for parts deformation.<br>"];
    var C116 = ["<font size='2px', color='#0000FF'>116 Cause:</font><br>Shutter open/close operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is shutter deformed or damaged? (Visual check)Check if shutter moves smoothly by opening and closing it by hand.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign object or lubricate. If the failure still arises, check for parts deformation.<br>"];
    var C201 = ["<font size='2px', color='#0000FF'>201 Cause:</font><br>Flat belt come off/torn/damaged.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace flat belts.<br>"];
    var C202 = ["<font size='2px', color='#0000FF'>202 Cause:</font><br>Flat belt slip.<br><font size='2px', color='#0000FF'>Try:</font><br>Does flat belt slip against flat pulley? (Check manually)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Clean flat belt/flat pulley with alcohol. If flat pulley does not rotate smoothly,disassemble it and clean its hole and the shaft.<br>"];
    var C203 = ["<font size='2px', color='#0000FF'>203 Cause:</font><br>Transport roller disengaged/worn/damaged.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>If transport roller is out of position, return it in place.<br>"];
    var C204 = ["<font size='2px', color='#0000FF'>204 Cause:</font><br>Transport roller slip.<br><font size='2px', color='#0000FF'>Try:</font><br>Does transport roller maintain sufficient transport force? Put a note between transport rollers and pull it by hand to check transport force.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Clean roller surface with alcohol if transport force is significantly reduced.<br>"];
    var C205 = ["<font size='2px', color='#0000FF'>205 Cause:</font><br>Transport guide deformation,mounting failure<br><font size='2px', color='#0000FF'>Try:</font><br>Is transport guide deformed or damaged? Properly mounted? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>In the case of improper installation, re-mount transport guide properly.<br>"];
    var C206 = ["<font size='2px', color='#0000FF'>206 Cause:</font><br>Scratch, burr, adhesion of foreign object, protrusion on transport surface<br><font size='2px', color='#0000FF'>Try:</font><br>Is transport surface smooth?<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign objects adhered on transport surface. Try to plane away any scratches and burrs. Smooth surface required.<br>"];
    var C207 = ["<font size='2px', color='#0000FF'>207 Cause:</font><br>Gate not smooth<br><font size='2px', color='#0000FF'>Try:</font><br>Confirm that thrust clearance of gate joint is not 0mm by moving it manually. Does gate interfere with surrounding parts? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Loosen a gate joint screw so as to generate thrust clearance of axis and fix it again.<br>"];
    var C208 = ["<font size='2px', color='#0000FF'>208 Cause:</font><br>Gate angle failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is point of gate_fin protruding to transport surface? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Loosen a gate joint screw and adjust gate position using turning clearance,and then fix the screw again.Or adjust the guide that covers the point of gate_fin and fix it again.<br>"];
    var C209 = ["<font size='2px', color='#0000FF'>209 Cause:</font><br>Rubber fin roller broken, disengaged.<br><font size='2px', color='#0000FF'>Try:</font><br>Are any fin missing? Does rubber fin roller rotate stably?<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>If some fins are lost, replace the module. Note) The rubber fin roller of cassette is intermittent originally shape.<br>"];
    var C210 = ["<font size='2px', color='#0000FF'>210 Cause:</font><br>Carrier and Stage/Pusher tilted.<br><font size='2px', color='#0000FF'>Try:</font><br>Are Carrier and Stage/Pusher assembled horizontally? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Level Stage/Pusher by adjusting drive belt phase.<br>"];
    var C211 = ["<font size='2px', color='#0000FF'>211 Cause:</font><br>Carrier and Stage/Pusher deformed or damaged<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace them.<br>"];
    var C212 = ["<font size='2px', color='#0000FF'>212 Cause:</font><br>Carrier and Stage/Pusher stopping position error<br><font size='2px', color='#0000FF'>Try:</font><br>Perform a mechanical reset to see if wrong positioning of Carrier and Stage/Pusher interfere with Carrier movement and causes note collision.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>In the case of sensor disengagement, fix it.<br>"];
    var C213 = ["<font size='2px', color='#0000FF'>213 Cause:</font><br>Carrier interference<br><font size='2px', color='#0000FF'>Try:</font><br>Check if Carrier and Reservoir stage rubber interfere each other and also ifCarrier is deformed or damaged visually.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>If stage positioning sensor is disengaged, fix it.<br>"];
    var C214 = ["<font size='2px', color='#0000FF'>214 Cause:</font><br>Pre-Acceptor clamp tilted.<br><font size='2px', color='#0000FF'>Try:</font><br>Is clamp flush against bottom transport belt? (check 4 points-left, right, front and rear)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust clamp using an adjustment screw if it is tilted.<br>"];
    var C215 = ["<font size='2px', color='#0000FF'>215 Cause:</font><br>Pre-Acceptor clamp transport belt tension failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is transport belt tension for clamp appropriate?<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust belt tension.<br>"];
    var C216 = ["<font size='2px', color='#0000FF'>216 Cause:</font><br>Pre-Acceptor clamp up/down movement failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if clamp can move up to a required height, stay there and move down until it reaches bottom transport belt by performing a mechanical reset.(Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust clamp tilt. In the case of sensor disengagement, fix it. Readjust surrounding drive belt tension/transport belt tension if necessary.<br>"];
    var C217 = ["<font size='2px', color='#0000FF'>217 Cause:</font><br>Pre-Acceptor hook operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if hook can stand vertically and also lie down horizontally in RAS mode.Check if a standing hook is not easily fallen down when pushed by hand.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Adjust mounting position of hook drive solenoid.<br>"];
    var C218 = ["<font size='2px', color='#0000FF'>218 Cause:</font><br>Pre-Acceptor tray operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is tray deformed or damaged, or interfering with bottom surface? (Visual check)Is there any foreign objects under tray? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace trays if deformed or damaged.Adjust drive belt tension.Remove foreign objects if any.<br>"];
    var C219 = ["<font size='2px', color='#0000FF'>219 Cause:</font><br>Pre-Acceptor and shutter engagement failure<br><font size='2px', color='#0000FF'>Try:</font><br>Is Pre-Acceptor transport surface connected to shutter with no gap and without being pushed too much by Fascia. (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust facing with Fascia.<br>"];
    var C220 = ["<font size='2px', color='#0000FF'>220 Cause:</font><br>A-stopper operation failure<br><font size='2px', color='#0000FF'>Try:</font><br>Check if A-stopper can stand vertically and also lie down horizontally in RAS mode, and check if a standing hook is not easily fallen down when pushed by hand.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust a position where A-stopper solenoid is fixed.<br>"];
    var C221 = ["<font size='2px', color='#0000FF'>221 Cause:</font><br>D stopper operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if D-stopper can stand vertically and also lie down horizontally in RAS mode.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Readjust a position where D-stopper solenoid is fixed.<br>"];
    var C222 = ["<font size='2px', color='#0000FF'>222 Cause:</font><br>Deskew roller operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if skew correction rollers and pinch rollers are not worn and can rotate smoothly.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace rollers if worn. Remove any foreign objects and clean<br>"];
    var C223 = ["<font size='2px', color='#0000FF'>223 Cause:</font><br>Free gate operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if free gate moves smoothly and is not deformed/damaged. (Check manually and visually.)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign objects and clean.<br>"];
    var C224 = ["<font size='2px', color='#0000FF'>224 Cause:</font><br>BV does not face to transport guide.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if BV is mounted on Upper base without gap by visual check and if transport guide is deformed/damaged.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Adjust and fix BV/transport guide again.<br>"];
    var C225 = ["<font size='2px', color='#0000FF'>225 Cause:</font><br>Leaf spring failure at the entrance of reject bin.<br><font size='2px', color='#0000FF'>Try:</font><br>Is the leaf spring located at the entrance of Reject box/Reject bin deformed?(Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace leaf springs.<br>"];
    var C226 = ["<font size='2px', color='#0000FF'>226 Cause:</font><br>Discharge brush failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if discharge brush is attached and is not worn out by visual check.Check the continuity using a tester.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace discharge brushes.<br>"];
    var C227 = ["<font size='2px', color='#0000FF'>227 Cause:</font><br>Reject Full detection lever operation failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check if Note Full detection lever inside Reject bin moves smoothly by hand<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign objects, clean and lubricate.<br>"];
    var C228 = ["<font size='2px', color='#0000FF'>228 Cause:</font><br>--<br><font size='2px', color='#0000FF'>Try:</font><br>--<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>--<br>"];
    var C229 = ["<font size='2px', color='#0000FF'>229 Cause:</font><br>--<br><font size='2px', color='#0000FF'>Try:</font><br>--<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>--<br>"];
    var C230 = ["<font size='2px', color='#0000FF'>230 Cause:</font><br>--<br><font size='2px', color='#0000FF'>Try:</font><br>--<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>--<br>"];
    var C301 = ["<font size='2px', color='#0000FF'>301 Cause:</font><br>Connector not fully attached/Wrong connection.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Connect properly.<br>"];
    var C302 = ["<font size='2px', color='#0000FF'>302 Cause:</font><br>Breaking of cable/Short-circuit.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.Check the continuity using a tester.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace cables<br>"];
    var C303 = ["<font size='2px', color='#0000FF'>303 Cause:</font><br>Sensor/Prism removal, optical axis misalignment<br><font size='2px', color='#0000FF'>Try:</font><br>Are sensor/prism/fixing parts removed or deformed? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Fix sensor/prism.<br>"];
    var C304 = ["<font size='2px', color='#0000FF'>304 Cause:</font><br>Sensor/Prism dirty, scratched.<br><font size='2px', color='#0000FF'>Try:</font><br>Check light receiving/emitting face of Sensor/Prism visually.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Cleaning required. Or replace them if remarkable scratches found.<br>"];
    var C305 = ["<font size='2px', color='#0000FF'>305 Cause:</font><br>Sensor block plate deformed.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Repair deformed parts or replace.<br>"];
    var C306 = ["<font size='2px', color='#0000FF'>306 Cause:</font><br>Sensor damaged.<br><font size='2px', color='#0000FF'>Try:</font><br>Check sensor output in RAS mode.Replace sensors and then check the output in RAS mode.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace sensors.<br>"];
    var C307 = ["<font size='2px', color='#0000FF'>307 Cause:</font><br>PCB or ROM failure<br><font size='2px', color='#0000FF'>Try:</font><br>Replace PCBs and then check the operation.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br> Replace PCBs<br>"]; 
    var C308 = ["<font size='2px', color='#0000FF'>308 Cause:</font><br>Overload detection failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Check cable connection and scratches visually.Check if sensor is damaged or removed.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Connect properly.Replace sensors.Replace PCBs.<br>"];
    var C309 = ["<font size='2px', color='#0000FF'>309 Cause:</font><br>Floating connector failure.<br><font size='2px', color='#0000FF'>Try:</font><br>Is floating connector damaged/deformed or catching any foreign objects?(Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Remove any foreign objects and clean.<br>"];
    var C310 = ["<font size='2px', color='#0000FF'>310 Cause:</font><br>Fuse blown.<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace fuses<br>"];
    var C311 = ["<font size='2px', color='#0000FF'>311 Cause:</font><br>External noise<br><font size='2px', color='#0000FF'>Try:</font><br>Check ground connection.<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Fix earth connection, change cable layout.<br>"];
    var C312 = ["<font size='2px', color='#0000FF'>312 Cause:</font><br>Lever detection plate operation failure (Note Empty check or others)<br><font size='2px', color='#0000FF'>Try:</font><br>Check if detection plate fulcrum moves smoothly by hand.Is lever detection plate deformed/damaged? (Visual check)<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Repair deformed parts or replace.<br>"];
    var C313 = ["<font size='2px', color='#0000FF'>313 Cause:</font><br>USB cable pulled out<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Connect properly.<br>"];
    var C314 = ["<font size='2px', color='#0000FF'>314 Cause:</font><br>USB cable damaged<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace the cable.<br>"];
    var C315 = ["<font size='2px', color='#0000FF'>315 Cause:</font><br>LAN cable between BRU and BV pulled out<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Connect properly.<br>"];
    var C316 = ["<font size='2px', color='#0000FF'>316 Cause:</font><br>LAN cable between BRU and BV damaged<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace the cable.<br>"];
    var C317 = ["<font size='2px', color='#0000FF'>317 Cause:</font><br>Power cable for BV pulled out<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Connect properly.<br>"];
    var C318 = ["<font size='2px', color='#0000FF'>318 Cause:</font><br>Power cable for BV damaged<br><font size='2px', color='#0000FF'>Try:</font><br>Visual check<br><font size='2px', color='#0000FF'>Measures to be taken:</font><br>Replace the cable.<br>"];
       
	//*******************************
	// End of General Error Code List
	//*******************************
	//*******************************
	// Start of FRU Code List
	//*******************************
	var PC = ["<font size='2px'>Main Upper PCB P/N:009-0019436<br>Separator PCB (was Pre-acceptor)P/N:009-0019437<br>Lower PCB (GBRU/BNA4)P/N:009-0019446<br>Lower PCB (GBNA2)P/N:009-0019447.</font><br>"];
	var PA = ["<font size='2px'>Pre-acceptor (140mm) R/A. P/N: 009-0019421<br>Pre-acceptor (178mm) F/A. P/N:009-0019422</font><br>"];
	var SE = ["<font size='2px'>Separator P/N:009-0019425</font><br>"];
	var ES = ["<font size='2px'>Escrow and Reservoir P/N:009-0019426</font><br>"];
	var UT = ["<font size='2px'>Upper transport (Removable reject bin) P/N:009-0019428<br>Upper transport (Fixed reject bin) P/N:009-0019429</font><br>"];
	var BE = ["<font size='2px'>BV Entry Transport P/N:009-0019435</font><br>"];
	var LT = ["<font size='2px'>Lower transport (BRU4) P/N:009-0019438<br>Lower transport (BNA2)P/N:009-0019439<br>Lower transport (BNA4)P/N:009-0019440</font><br>"];
	var SH = ["<font size='2px'>Shutter</font><br>"];
    var BV = ["<font size='2px'>BV Module (Line Magnetic Sensor) P/N:009-0019431<br>BV Module (Line Magnetic + Serial number option) P/N:009-0019433 </font><br>"];
	var SW = ["<font size='2px'>009-0019568 Reed Switch PCB P/N:009-0019568</font><br>"];
	var PS = ["<font size='2px'>Power supply P/N:009-0019445</font><br>"];
	var SH = ["<font size='2px'>Assembly Recycle Motor P/N:009-0019441<br>Assembly Deposit Motor P/N:009-0019565</font><br>"];
	var FN = ["<font size='2px'>Fan P/N:009-0019762</font><br>"];
	var CA = ["<font size='2px'>Currency Cassette (recycle) P/N:009-0019448<br>Currency Cassette (Recycle w/Keylock) P/N:009-0019449<br>Currency Cassette (Deposit) P/N:009-0019452<br>Currency Cassette (Deposit w/Keylock) P/N:009-0019453</font><br>"];
	var RJ = ["<font size='2px'>Reject Bin (removable) P/N:009-0019427<br>Reject Bin (removable with Keylock)P/N:009-0019564</font><br>"];
	var UB = ["<font size='2px'>Upper Base P/N:009-0019434</font><br>"];
	var LB = ["<font size='2px'>Lower base (GBRU 4 cassettes) P/N:009-0019442<br>Lower base (GBNA 2 cassettes)P/N:009-0019443<br>Lower base (GBNA 4 cassettes) P/N:009-0019444</font><br>"];
	var CC = ["<font size='2px'>Cassette Connector Harness P/N:009-0019569</font><br>"];
	var PL = ["<font size='2px'>Push Latch P/N:009-0019689</font><br>"];
	//*******************************
	// End of FRU Code List
	//*******************************
    var bs1 = ["<font size='2px'>Error Message: Firmware illegal functional error.</font><br>"];
    var bs2 = ["<font size='2px'>Error Message: Relate with Host Interface Error.</font><br>"];
    var bs3 = ["<font size='2px'>Error Message: Relate with BV Error.</font><br>"];
    var bs4 = ["<font size='2px'>Error Message: Relate with Command Error.</font><br>"];
    var bs5 = ["<font size='2px'>Error Message: Relate with Unit Set & Full.</font><br>"];
    var bs6 = ["<font size='2px'>Error Message: Mechanical error at Pre-acceptor,Separator,Shutter.</font><br>"];
    var bs7 = ["<font size='2px'>Error Message: Mechanical error at Escrow & Reservoir.</font><br>"];
    var bs8 = ["<font size='2px'>Error Message: Mechanical error at cassette-1.</font><br>"];
    var bs9 = ["<font size='2px'>Error Message: Mechanical error at cassette-2.</font><br>"];
    var bs10 = ["<font size='2px'>Error Message: Mechanical error at cassette-3.</font><br>"];
    var bs11 = ["<font size='2px'>Error Message: Mechanical error at cassette-4.</font><br>"];
    var bs12 = ["<font size='2px'>Error Message: Des relation.</font><br>"];
    var bss1 = ["(Firmware)"];
    var bss2 = ["(PCB)"];
    var bss3 = ["(Boot)"];
    var bss4 = ["(Host Interface)"];
    var bss5 = ["(USB)"];
    var bss6 = ["(BV)"];
    var bss7 = ["(Operation)"];
    var bss8 = ["(Cassettes)"];
    var bss9 = ["(Separator)"];
    var bss10 = ["(Pre-Acceptor)"];
    var bss11 = ["(Cassette Transport)"];
    var bss12 = ["(Transport before BV)"];
    var bss13 = ["(Separator Transport)"];
    var bss14 = ["(Bill Validate)"];
    var bss15 = ["(Escrow Transport)"];
    var bss16 = ["(Upper Unit)"];
    var bss17 = ["(Lower Unit)"];
    var bss18 = ["(Lower Transport)"];
    var bss19 = ["(Reject Bin)"];
    var bss20 = ["(Cassette 1)"];
    var bss21 = ["(Cassette 2)"];
    var bss22 = ["(Cassette 3)"];
    var bss23 = ["(Cassette 4)"];
    var bss24 = ["(Transport After BV)"];
    var bss25 = ["(Transport under Reject bin)"];
    var bss26 = ["(Top Transport)"];
    var bss27 = ["(Counterfeit area)"];
    var bss28 = ["(Reject Area)"];
    var bss29 = ["(Captured Area)"];
    var bss30 = ["(Escrow)"];  
    var bss31 = ["(Reservoir)"];
    var bss32 = ["(Carrier)"];
    var bss33 = ["(Shutter)"];
    var bss34 = ["(DES)"];
    var bss35 = ["(Reject Transport)"];
    var bss36 = ["(BV Transport)"];
    var bss37 = ["(Cassette 1 Transport)"];
    var bss38 = ["(Cassette 2 Transport)"];
    var bss39 = ["(Cassette 3 Transport)"];
    var bss40 = ["(Cassette 4 Transport)"];
    var bss41 = ["(Escrow Transport)"];
    var bss42 = ["(Over-current)"];
    var bss43 = ["(Bunch Transport)"];
    var bss44 = ["(Interlock)"];    
    code = (document.getElementById("category").value);
    var res1 = code.substring(0, 2);
    var res2 = code.substring(2, 3);
    var res3 = code.substring(3, 4);
    if (code === "0C00") 
        {
            message = bs1+bss1+"Return from system-management-task.";
            detect = "System-management-task has completed.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else
    if (code === "0C01") 
        {
            message = bs1+bss1+"Unjust augments for the function.";
            detect = "Arguments of the function was invalid. Pre-acceptor located in an unexpected position when required to operate.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else
    if (code === "0C02") 
        {
            message = bs1+bss1+"Event generating besides assumption.";
            detect = "Unexpected values detected inside firmware during command processing.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
	else 
    if (code === "0C03") 
        {
            message = bs1+bss1+"Not decide destination of note.";
            detect = "No suitable destination found for a note to be stored.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
	else 
    if (code === "0C10") 
        {
            message = bs1+bss1+"Not allocate memory for TCB.";
            detect = "Could not allocate memory for TCB.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
     else
    if (code === "0C11") 
        {
            message = bs1+bss1+"Not allocate memory for packet of task.";
            detect = "Could not allocate memory for packet of task.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else
    if (code === "0C12") 
        {
            message = bs1+bss1+"Not allocate memory for packet of transfer process.";
            detect = "Could not allocate memory for packet of transfer process.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
	else 
    if (code === "0C13") 
        {
            message = bs1+bss1+"Not initialise for timer-control.";
            detect = "Could not allocate memory for timer-control.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
	else 
    if (code === "0C20") 
        {
            message = bs1+bss1+"Timer-set impossible.";
            detect = "Could not set timer because it has been used in excess of the maximum.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else
    if (code === "0C21") 
        {
            message = bs1+bss1+"Setpkt impossible.";
            detect = "Could not set packet because packet ID had been corrupted.Could not set packet because it had been used in excess of the maximum.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else
    if (code === "0C30") 
        {
            message = bs1+bss1+"Operation is impossible (by remain).";
            detect = "Could not execute a command because notes remained in several locations.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
	else 
    if (code === "0C40") 
        {
            message = bs1+bss2+"FLASH-rom erase impossible.";
            detect = "Could not erase a file in Flash-ROM.";
            cause = C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
	else 
    if (code === "0C41") 
        {
            message = bs1+bss2+"FLASH-rom write impossible.";
            detect = "Could not write a file into Flash-ROM.";
            cause = C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
     else
    if (code === "0C50") 
        {
            message = bs1+bss2+"Memory break.";
            detect = "The sum in a program on RAM did not match.";
            cause = C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else
    if (code === "0C61") 
        {
            message = bs1+bss1+"Command time limit over (2nd).";
            detect = "Second timeout caused by failure to complete a command after the first timeout.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
	else 
    if (code === "0C60") 
        {
            message = bs1+bss1+"Command time limit over (1st).";
            detect = "Command processing did not complete within the specified time leading to timeout.";
            cause = C013+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
	else 
    if (code === "1001") 
        {
            message = bs2+bss3+"Main-Firmware nothing.";
            detect = "Received RT command during BOOT program before downloading MAIN firmware.";
            cause = C014+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else 
    if (code === "1101") 
        {
            message = bs2+bss3+"Boot cannot read and write fail.";
            detect = "Unable to read/write MAIN firmware on Flash-ROM during BOOT program.";
            cause = C014+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else 
    if (code === "1102") 
        {
            message = bs2+bss3+"Unjust check code of file.";
            detect = "The sum in an overall program did not match when downloading firmware..";
            cause = C014+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else 
    if (code === "1201") 
        {
            message = bs2+bss4+"Boot receives invalid command.";
            detect = "Received invalid command in BOOT program.";
            cause = C014+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else 
    if (code === "1301") 
        {
            message = bs2+bss4+"Unjust data length(BOOT).";
            detect = "Frame Length was less than 6 bytes when receiving a command in BOOT program.Frame Length exceeded the maximum length when receiving a command in BOOTprogram.Frame Length was smaller than Message Length when receiving a command in BOOT program.Message Length was not equal to the sum of Message Header and Data Block when receiving a command in BOOT program.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else 
    if (code === "1302") 
        {
            message = bs2+bss4+"Unjust data format(BOOT).";
            detect = "Message Header of a command received in BOOT program contained an invalid value.Classification of data was invalid when receiving a command in BOOT program.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }	
    else 
    if (code === "1303") 
        {
            message = bs2+bss4+"Unjust number of data block(BOOT).";
            detect = "Number of data block received in BOOT program was invalid.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1304") 
        {
            message = bs2+bss4+"Unjust data sum(BOOT).";
            detect = "The sum of a command received in BOOT program did not match.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1311") 
        {
            message = bs2+bss4+"Unjust parameter H0(BOOT).";
            detect = "A Block number of LD or LE commands was an unexpected value in BOOT program.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1500") 
        {
            message = bs2+bss4+"Receive invalid command.";
            detect = "Receive invalid command.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1600") 
        {
            message = bs2+bss4+"Unjust data classification of data header.";
            detect = "Classification of data was invalid when receiving a command.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1601") 
        {
            message = bs2+bss4+"Unjust data length.";
            detect = "Frame Length was less than 6 bytes when receiving a command.<br>Frame Length exceeded the maximum length when receiving a command.<br> Frame Length was smaller than Message Length when receiving a command.<br>Message Length was not equal to the sum of Message Header and Data Block when receiving a command.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1602") 
        {
            message = bs2+bss4+"Unjust data format.";
            detect = "Message Header of a received command contained an invalid value.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1603") 
        {
            message = bs2+bss4+"Unjust number of data block.";
            detect = "Number of data block was invalid when receiving a command.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1604") 
        {
            message = bs2+bss4+"Unjust data sum.";
            detect = "The sum of a command received did not match.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1601") 
        {
            message = bs2+bss4+"Unjust data length.";
            detect = "Frame Length was less than 6 bytes when receiving a command.<br>Frame Length exceeded the maximum length when receiving a command.<br> Frame Length was smaller than Message Length when receiving a command.<br>Message Length was not equal to the sum of Message Header and Data Block when receiving a command.";
            cause = C313+C314;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1620") 
        {
            message = bs2+bss4+"Unjust parameter A1.";
            detect = "Parameter A1 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1621") 
        {
            message = bs2+bss4+"Unjust parameter A2.";
            detect = "Parameter A2 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1622") 
        {
            message = bs2+bss4+"Unjust parameter A5.";
            detect = "Parameter A5 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1623") 
        {
            message = bs2+bss4+"Unjust parameter A6.";
            detect = "Parameter A6 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1624") 
        {
            message = bs2+bss4+"(Not in use ).";
            detect = "(Not in use ).";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1625") 
        {
            message = bs2+bss4+"(Not in use ).";
            detect = "(Not in use ).";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1626") 
        {
            message = bs2+bss4+"Unjust parameter A9.";
            detect = "Parameter A9 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1627") 
        {
            message = bs2+bss4+"Unjust parameter AZ.";
            detect = "Parameter AZ was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1628") 
        {
            message = bs2+bss4+"Unjust parameter H0.";
            detect = "Parameter H0 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1629") 
        {
            message = bs2+bss4+"Unjust parameter A0.";
            detect = "Parameter A0 was set to an invalid value when receiving a command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1640") 
        {
            message = bs2+bss4+"Abnormalities in download sequence.";
            detect = "LE command was received prior to LD command.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1700") 
        {
            message = bs2+bss4+"Un-setting parameter A1.";
            detect = "A1 parameter not specified yet when receiving a command that requires A1 parameter.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1C00") 
        {
            message = bs2+bss4+"Un-setting payment password.";
            detect = "Password for dispense not entered when starting RAS.";
            cause = C015;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1C01") 
        {
            message = bs2+bss4+"Un-setting calculation password.";
            detect = "Password for counting not entered when starting RAS.";
            cause = C015;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "1E00") 
        {
            message = bs2+bss5+"USB connector pull out.";
            detect = "USB VBUS signal was found low during command processing.";
            cause = C313+C314+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1E01") 
        {
            message = bs2+bss5+"USB bus reset detect.";
            detect = "USB bus reset was detected during command processing.";
            cause = C313+C314+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "1E02") 
        {
            message = bs2+bss5+"Timeout of USB transmission.";
            detect = "Could not transmit a response within the specified time.";
            cause = C313+C314+C307;
            motor = "";
            sensor = "";
            FRU = PC;
        }
    else 
    if (code === "2001") 
        {
            message = bs3+bss4+"It cannot receipt request data that it is under bill validation.";
            detect = "BV task was already in operation when requesting to BV task.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "2004") 
        {
            message = bs3+bss5+"Timeout of BV response.";
            detect = "No response sent from BV within the specified time when requesting a command.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2005") 
        {
            message = bs3+bss5+"Unjust BV data sum.";
            detect = "The sum of a response received from BV did not match.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2006") 
        {
            message = bs3+bss5+"Unjust BV data length.";
            detect = "Data length invalid when receiving a response from BV.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2007") 
        {
            message = bs3+bss5+"BV reset failure.";
            detect = "Received a response other than reset command after sent a reset command to BV.<br>No response informed by BV within the specified time resulting in timeout when BV was requested a reset command.<br>There occured an alarm other than BV cover open/Note remain at Alarm read command after BV reset command.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2008") 
        {
            message = bs3+bss5+"Sending data from BRU and Receiving data from BV is discode.";
            detect = "Mismatch between data send command and data receive command when receiving response from BV.<br>A response from BV was UMG.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2009") 
        {
            message = bs3+bss5+"Sending block number from BRU and Receiving block number from BV is discode.";
            detect = "Block number of a response to BV commands (RVR,RGP) was unexpected values.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2020") 
        {
            message = bs3+bss5+"BV program deficit.";
            detect = "BV firmware version was not set after executing BV reset command.";
            cause = C014+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2100") 
        {
            message = bs3+bss5+"There is no response from BV.";
            detect = "RR command did not returned from BV after sending TEST command.<br>RR command did not returned from BV after sending a command.<br>Could not send by LAN LSI error when sending a packet to BV.<br>Lan task was Initialize state when sending a command to BV.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2300") 
        {
            message = bs3+bss5+"Over VD from BV.";
            detect = "Number of validation data exceeded number of notes detected at BVIN during note validation.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (res1 === "25") 
        {
            message = bs3+bss5+"BV unit failure. ( ** : 2digit in VD error code. xx in VD data'9Exx' ).";
            detect = "Received validation data during bill validation that indicates further validation impossible.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2600") 
        {
            message = bs3+bss5+"The taken VD data and the validation result which came from BV did not suit.";
            detect = "Mismatch of validation data between the one stored in BRU and the one read from BV.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2740") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RRV : Read revision information area )";
            detect = "Received a negative response to RRV command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2741") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RUN : Read device information area )";
            detect = "Received a negative response to RUN command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2743") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RAL : Read alarm information area )";
            detect = "Received a negative response to RAL command from BV.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2745") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RST : Read statistics information area )";
            detect = "Received a negative response to RST command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2746") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RVR : Read validation information on a transaction basis )";
            detect = "Received a negative response to RVR command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2747") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RVR2 : Read final validation information on a transaction basis )";
            detect = "Received a negative response to RVR2 command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2748") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RMG : Read message information area )";
            detect = "Received a negative response to RMG command from BV.";
            cause = C315+C316+C317+C318+C011+C307;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2752") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RVP : Read recognition information area )";
            detect = "Received a negative response to RVP command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2753") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( DVR : Read all validation information area )";
            detect = "Received a negative response to DVR command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2760") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CAL : Clear alarm information area )";
            detect = "Received a negative response to CAL command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2761") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CST : Clear statistics information area )";
            detect = "Received a negative response to CST command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2762") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CVP : Clear recognition information area )";
            detect = "Received a negative response to CVP command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2764") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CMG : Clear message information area )";
            detect = "Received a negative response to CMG command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2765") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CVR : Clear validation information area )";
            detect = "Received a negative response to CVR command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2770") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( LPR : Load program )";
            detect = "Received a negative response to LPR command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2771") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( LEN : End of program loading )";
            detect = "Received a negative response to LEN command from BV.";
            cause = C315+C316+C317+C318;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2774") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( SPV : Stop validation )";
            detect = "Received a negative response to SPV command from BV.";
            cause = C315+C316+C317+C318;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "274B") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( SON : Insertion/transit sensor ON )";
            detect = "Received a negative response to SON command from BV.";
            cause = C004+C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "274C") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ). (SOF : Insertion/transit sensor OFF )";
            detect = "Received a negative response to SOF command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2775") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( SLV : Insertion/transit sensor level notification )";
            detect = "Received a negative response to SLV command from BV.";
            cause = C004+C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2731") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RRT : Reset )";
            detect = "Received a negative response to RRT command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2732") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( TM : Time setting )";
            detect = "Received a negative response to TM command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2733") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( SRE : Sensor correction )";
            detect = "Received a negative response to SRE command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2736") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CSG : Clear signature )";
            detect = "Received a negative response to CSG command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2737") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RGR : Read image data )";
            detect = "Received a negative response to RGR command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2738") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( CAM : Clear all memory area )";
            detect = "Received a negative response to CAM command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2739") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( DINF : Validation in-process information )";
            detect = "Received a negative response to DINF command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "273A") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( WGR : Write image data )";
            detect = "Received a negative response to WGR command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "273B") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( SDI : Dummy validation )";
            detect = "Received a negative response to SDI command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "273C") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( PSM : Power save mode setting )";
            detect = "Received a negative response to PSM command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "273D") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RBI : Read Validation available denomination information )   ";
            detect = "Received a negative response to RBI command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "273E") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( SBI : Specify Validation available denomination )";
            detect = "Received a negative response to SBI command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "273F") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RGP : Read all imag data )";
            detect = "Received a negative response to RGP command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2720") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RSG : Read feature image data )";
            detect = "Received a negative response to RSG command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2721") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RNS : Read the number of feature image data )";
            detect = "Received a negative response to RNS command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2722") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( RNO : Read Serial No. )";
            detect = "Received a negative response to RNO command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2723") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( MOD : Change the connetion mode )";
            detect = "Received a negative response to MOD command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2780") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).( UMG : Undefined message )";
            detect = "Received a negative response to UMG command from BV.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2800") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).Received invalid data from BV";
            detect = "Invalid command code in a response received from BV.";
            cause = C315+C316+C317+C318;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (res1 === "29") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).Cannot start validation on BV ( ** : BV AMC code )";
            detect = "Received a negative response to SVR command from BV.";
            cause = C001+C002+C004+C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV+PC;
        }
    else 
    if (code === "2B00") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).Received invalid validation data from BV";
            detect = "Validation data from BV showed invalid denomination during note validation.";
            cause = C013+C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2B01") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).Parity error of validation data from BV.";
            detect = "Parity error in validation data from BV during note validation.";
            cause = C315+C316+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2B10") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).BV cover doesn't shut";
            detect = "BV cover open detected in JA,MR,MJ commands.";
            cause = C004+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2B20") 
        {
            message = bs3+bss5+"Received a negative response relate with BV. ( ** : BV command name is as follows ).The medium remains to BV";
            detect = "Note remain detected inside BV in JA,MR,MJ commands.";
            cause = C001+C002+C317+C318+C011;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "2F00") 
        {
            message = bs3+bss5+"Not in use.";
            detect = ".";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "2F01") 
        {
            message = bs3+bss5+"Not in use.";
            detect = ".";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "2F02") 
        {
            message = bs3+bss5+"Not in use.";
            detect = ".";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "2F03") 
        {
            message = bs3+bss5+"Not in use.";
            detect = ".";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "2F04") 
        {
            message = bs3+bss5+"Not in use.";
            detect = ".";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "3000") 
        {
            message = bs4+bss7+"RAS-number is not available.";
            detect = "Invalid value input in RAS mode.";
            cause = C015;
            motor = "";
            sensor = "";
            FRU = BV;
        }
    else 
    if (code === "3001") 
        {
            message = bs4+bss8+"Cassette for performing RAS is not ready.";
            detect = "The number of setting cassette was not 2 or 4 cassettes at the RAS command.<br>It was not the denomination same per 2 cassettes at the RAS command.<br>Both were empty per 2 cassettes at the RAS command.<br>The type of setting cassette was Deposit cassette at the RAS command.<br>The setting cassette was mix denominations cassette at the RAS command.";
            cause = C005+C007;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3100") 
        {
            message = bs4+bss8+"There isn't cassette which can be sent out.";
            detect = "Recycle cassette supporting the requested denominaion was not mounted into the module at dispensing.<br>Recycle cassette supporting the requested denominaion was Mix denomination cassette at dispensing.<br>Recycle cassette supporting the requested denominaion was Suspect cassette at dispensing.<br>Recycle cassette supporting the requested denominaion was <br>Damaged cassette at dispensing.<br>Recycle cassette supporting the requested denominaion was Generation mix cassette at dispensing.<br>Recycle cassette supporting the requested denominaion was Publication mix cassette at dispensing.";
            cause = C005+C013;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3101") 
        {
            message = bs4+bss8+"Number of notes is not reach to request.";
            detect = "Number of dispensed notes did not reach the number of notes requested.";
            cause = C005+C007;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3102") 
        {
            message = bs4+bss8+"Payment number of notes over.";
            detect = "The sum of the requested notes and the notes stored in Escrow exceeded 200 before dispensing operation.";
            cause = C013;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3200") 
        {
            message = bs4+bss8+"Target cassette is not a recycling type.";
            detect = "Deposit cassette was specified as a Target cassette at reconciliation.";
            cause = C005;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3201") 
        {
            message = bs4+bss8+"Temporary cassette is not a recycling type.";
            detect = "Deposit cassette was specified as a Temporary cassette at reconciliation.";
            cause = C005;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3210") 
        {
            message = bs4+bss8+"Temporary cassette cannot be specified to be a target cassette.";
            detect = "Temporary cassette was specified as a Target cassette at reconciliation.";
            cause = C005;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3300") 
        {
            message = bs4+bss8+"There is no Temporary cassette.";
            detect = "No temporary cassette was specified at reconciliation.";
            cause = C005;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3310") 
        {
            message = bs4+bss9+"There is no note in Separator.";
            detect = "Separator was empty in RAS-C1,C2,C3 operation.";
            cause = C015;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3400") 
        {
            message = bs4+bss8+"The medium remains to temporary cassette.";
            detect = "Notes remained in Temporary cassette at reconciliation.";
            cause = C005;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "3411") 
        {
            message = bs4+bss10+"The medium which should be extracted remains to pre-acceptor.";
            detect = "Notes detected in Pre-acceptor after shutter close operation completed at TO/AP command.";
            cause = C001+C002;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "3412") 
        {
            message = bs4+bss11+"The medium remains to knot portion between upper unit and lower unit (rear).";
            detect = "URHS sensor remained blocked when clearing jam error after pulling out the lower unit and returning it to the mounting position again for jam recovery.";
            cause = C001+C002;
            motor = "";
            sensor = "URHS";
            FRU = UT;
        }
    else 
    if (code === "3413") 
        {
            message = bs4+bss12+"The medium remains to knot portion between upper unit and lower unit (front).";
            detect = "LFHS sensor remained blocked when clearing jam error after pulling out the lower unit and returning it to the mounting position again for jam recovery.";
            cause = C001+C002;
            motor = "";
            sensor = "LFHS";
            FRU = LT;
        }
    else 
    if (code === "3500") 
        {
            message = bs4+bss13+"Not detect home position of deskew lever.";
            detect = "SCDC and SHDC sensors were not cleared within the specified time when moved deskew roller to home position at MR, MJ commands.";
            cause = C101+C102+C103+C104+C105+C106+C107+C108+C301+C302+C303+C304+C305+C306+C307;
            motor = "SEDM";
            sensor = "SCDC+SHDC";
            FRU = SE;
        }
    else 
    if (code === "3C00") 
        {
            message = bs4+bss14+"Number of notes is not suit between primary and secondary payment.";
            detect = "The number of notes stored in storages was not same as that pooled in Escrow when:<br>Not recognized note was not detected during DP command.<br>The number of notes stored in storages was more than that pooled in Escrow when Not recognized notes were detected during DP command.<br>More notes were returned to the original cassette than stored in Temporary cassette during UC command.";
            cause = C110+C111+C210+C211+C212+C301+C307+C011;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "3C01") 
        {
            message = bs4+bss15+"The half-note was detected.";
            detect = "During note transport to Escrow at WC command, one of EDLS/EDRS sensors was blocked but the other was not.";
            cause = C203+C204+C205+C206+C301+C302+C303+C304+C305+C306;
            motor = "";
            sensor = "EDLS,EDRS";
            FRU = ES;
        }
    else 
    if (code === "4001") 
        {
            message = bs5+bss16+"Upper unit was not set.";
            detect = "Upper unit was not set at the start of a command.";
            cause = C004+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "UULC";
            FRU = ES+UT;
        }
    else 
    if (code === "4002") 
        {
            message = bs5+bss17+"Lower unit was not set.";
            detect = "Lower unit was not set at the start of a command.";
            cause = C004+C009+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "ULPC";
            FRU = LB+LT+PL+UB+UT;
        }
    else 
    if (code === "4003") 
        {
            message = bs5+bss18+"Lower transport was not set.";
            detect = "Lower transport was not set at the start of a command.";
            cause = C004+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "BLLC";
            FRU = LB+LT;
        }
    else 
    if (code === "4004") 
        {
            message = bs5+bss19+"Reject area was not set.";
            detect = "Reject bin was not set at the start of a command.";
            cause = C004+C005+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "URLC";
            FRU = RJ+UT;
        }
    else 
    if (code === "4005") 
        {
            message = bs5+bss20+"Cassette 1 was not set.";
            detect = "Cassette 1 was not set at the start of a command.";
            cause = C005+C006+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA+LB;
        }
    else 
    if (code === "4006") 
        {
            message = bs5+bss21+"Cassette 2 was not set.";
            detect = "Cassette 2 was not set at the start of a command.";
            cause = C005+C006+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA+LB;
        }
    else 
    if (code === "4007") 
        {
            message = bs5+bss22+"Cassette 3 was not set.";
            detect = "Cassette 3 was not set at the start of a command.";
            cause = C005+C006+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA+LB;
        }
    else 
    if (code === "4008") 
        {
            message = bs5+bss23+"Cassette 4 was not set.";
            detect = "Cassette 4 was not set at the start of a command.";
            cause = C005+C006+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA+LB;
        }
    else 
    if (code === "4009") 
        {
            message = bs5+bss12+"Transport before BV was not set.";
            detect = "Transport in front of BV was not set at the start of a command.";
            cause = C004+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "SBLC";
            FRU = BE+SE;
        }
    else 
    if (code === "400A") 
        {
            message = bs5+bss25+"Transport under Reject bin was not set.";
            detect = "Transport under Reject bin was not set at the start of a command.";
            cause = C004+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "UGLC";
            FRU = UT;
        }
    else 
    if (code === "400B") 
        {
            message = bs5+bss26+"Top transport was not set.";
            detect = "Top transport was not set at the start of a command.";
            cause = C004+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "ETLC";
            FRU = ES;
        }
    else 
    if (code === "400F") 
        {
            message = bs5+bss4+"Immediately after a power supply ON or a power supply OFF.";
            detect = "Interlock was not set at the start of a command.";
            cause = C003;
            motor = "";
            sensor = "Interlock";
            FRU = LB+PS;
        }
    else 
    if (code === "4300") 
        {
            message = bs5+bss27+"Counterfeit area fills with notes.";
            detect = "Counterfeit area was full before note transport.";
            cause = C007+C010+C225+C227+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "UULC";
            FRU = RJ+UT;
        }
    else 
    if (code === "4301") 
        {
            message = bs5+bss28+"Reject area fills with notes.";
            detect = "Reject area was full before note transport.";
            cause = C007+C010+C225+C227+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "UULC";
            FRU = RJ+UT;
        }
    else 
    if (code === "4302") 
        {
            message = bs5+bss29+"Captured area fills with notes.";
            detect = "Captured area was full before note transport.";
            cause = C007+C010+C225+C227+C301+C302+C303+C304+C305+C306+C307;
            motor = "";
            sensor = "UULC";
            FRU = RJ+UT;
        }
    else 
    if (code === "4303") 
        {
            message = bs5+bss30+"Escrow fills with notes.";
            detect = "Escrow was full before note transport.<br>Escrow FULL detected during note transport.";
            cause = C006+C010+C113+C206+C226;
            motor = "";
            sensor = "";
            FRU = ES;
        }
    else 
    if (code === "4304") 
        {
            message = bs5+bss31+"Reservoir fills with notes.";
            detect = "Reservoir was full before note transport.<br>Reservoir FULL detected during note transport.";
            cause = C006+C010+C113+C206+C226;
            motor = "";
            sensor = "";
            FRU = ES;
        }
    else 
    if (code === "4305") 
        {
            message = bs5+bss20+"Cassette 1 fills with notes.";
            detect = "Cassette 1 was full before note transport.<br>Cassette 1 FULL detected during note transport.";
            cause = C007+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "4306") 
        {
            message = bs5+bss21+"Cassette 2 fills with notes.";
            detect = "Cassette 2 was full before note transport.<br>Cassette 2 FULL detected during note transport.";
            cause = C007+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "4307") 
        {
            message = bs5+bss22+"Cassette 3 fills with notes.";
            detect = "Cassette 3 was full before note transport.<br>Cassette 3 FULL detected during note transport.";
            cause = C007+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "4308") 
        {
            message = bs5+bss23+"Cassette 4 fills with notes.";
            detect = "Cassette 4 was full before note transport.<br>Cassette 4 FULL detected during note transport.";
            cause = C007+C301+C302+C303+C304+C305+C306+C307+C309;
            motor = "";
            sensor = "";
            FRU = CA;
        }
    else 
    if (code === "4501") 
        {
            message = bs5+bss4+"Have different unit types.(BNA or BRU).";
            detect = "PP/UC/BC/WC/SK commands were issued to BNA unit.";
            cause = C006+C301+C302+C303+C304+C305+C306+C309;
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "6100") 
        {
            message = bs6+bss32+"Carrier doesn't move forward.";
            detect = "PCEC sensor was not blocked within the specified time when Carrier moved forward.<br>ECPC sensor was not cleared within the specified time when Carrier moved forward.<br>ECCC sensor was not cleared within the specified time when Carrier moved forward.";
            cause = C004+C101+C102+C103+C104+C106+C107+C108+C110+C111+C210+C211+C212+C213+C301+C302+C303+C304+C305+C306+C307+C312;
            motor = "ESCM";
            sensor = "ECHC/ECPC/ECCC/PCEC";
            FRU = ES+PA+SE;
        }
    else 
    if (code === "6101") 
        {
            message = bs6+bss32+"Carrier doesn't move backward.";
            detect = "ECHC sensor was not blocked within the specified time when Carrier moved backward.<br>ECCC sensor was not cleared within the specified time when Carrier moved backward.";
            cause = C101+C102+C103+C104+C106+C107+C108+C110+C111+C210+C211+C212+C213+C301+C302+C303+C304+C305+C306+C307+C312;
            motor = "ESCM";
            sensor = "ECHC/ECPC/ECCC/PCEC";
            FRU = ES+PA+SE;
        }
    else 
    if (code === "6102") 
        {
            message = bs6+bss32+"Notes under the Carrier.";
            detect = "When Carrier moved backward, ECCC sensor was not cleared and ECHC sensor was blocked.";
            cause = C101+C102+C103+C104+C210+C211+C213+C301+C302+C303+C304+C305+C306+C307+C312;
            motor = "";
            sensor = "ECHC/ECCC";
            FRU = ES+PA+SE;
        }
    else 
    if (code === "6103") 
        {
            message = bs6+bss32+"Carrier drags notes on Bunch transport.";
            detect = "When Carrier moved backward, ECCC sensor was blocked and EELS sensor or EERS sensor was blocked.";
            cause = C101+C102+C103+C104+C210+C211+C213+C301+C302+C303+C304+C305+C306+C307+C312;
            motor = "";
            sensor = "EELS/ECCC/EERS";
            FRU = PA+SE;
        }
    else 
    if (code === "6120") 
        {
            message = bs6+bss10+"Tray  doesn't move forward.";
            detect = "PDPC sensor was not blocked within the specified time when Tray moved forward.<br>Step-out was detected at PTPC sensor before PS1S/PS2S/PS3S/PS4S sensors were blocked when Tray was moving forward.<br>Step-out was detected at PTPC sensor before PDPC sensor was blocked when Tray was moving forward.<br>Step-out was detected at PTPC sensor when Tray was moving forward by a specified number of steps.";
            cause = C001+C002+C010+C101+C102+C103+C104+C105+C106+C107+C108+C201+C216+C218+C301+C302+C303+C304+C305+C306+C307;
            motor = "PATM";
            sensor = "PDPC/PRPC/PTPC";
            FRU = PA+SE;
        }
    else 
    if (code === "6121") 
        {
            message = bs6+bss10+"Tray  doesn't move backward.";
            detect = "PLPC sensor was not blocked within the specified time when Tray moved backward.<br>PRPC sensor was not blocked within the specified time when Tray moved backward.<br>Step-out was detected at PTPC sensor before PRPC sensor was detected when Tray was moving backward.<br>Step-out was detected at PTPC sensor before PLPC sensor was detected when Tray was moving backward.";
            cause = C001+C002+C010+C101+C102+C103+C104+C105+C106+C107+C108+C201+C216+C218+C301+C302+C303+C304+C305+C306+C307;
            motor = "PATM";
            sensor = "PDPC/PRPC/PTPC";
            FRU = PA+SE;
        }
    else 
    if (code === "612F") 
        {
            message = bs6+bss10+"(Not in use ).";
            detect = "(Not in use ).";
            cause = "";
            motor = "";
            sensor = "";
            FRU = "";
        }
    else 
    if (code === "6130") 
        {
            message = bs6+bss10+"Belt doesn't move forward.";
            detect = "Step-out was detected at PBPC sensor when Belt was rotating forward.";
            cause = C001+C002+C010+C101+C102+C103+C104+C105+C106+C107+C108+C201+C202+C205+C214+C216+C220+C301+C302+C303+C304+C305+C306+C307;
            motor = "PABM";
            sensor = "PBPC";
            FRU = PA;
        }
    else 
    if (code === "6131") 
        {
            message = bs6+bss10+"Belt doesn't move backward.";
            detect = "Step-out was detected at PBPC sensor when Belt was rotating backward.";
            cause = C001+C002+C010+C101+C102+C103+C104+C105+C106+C107+C108+C201+C202+C205+C214+C215+C216+C220+C301+C302+C303+C304+C305+C306+C307;
            motor = "PABM";
            sensor = "PBPC";
            FRU = PA;
        }
    else 
    if (code === "6140") 
        {
            message = bs6+bss10+"Clamp doesn't move downward.";
            detect = "PTHC sensor was not blocked and POLC sensor was not cleared when Clamp moved down enough steps.";
            cause = C001+C002+C010+C101+C102+C103+C104+C105+C106+C107+C108+C109+C201+C202+C205+C214+C215+C216+C220+C221+C301+C302+C303+C304+C305+C306+C307;
            motor = "PACM";
            sensor = "PTHC/POLC";
            FRU = PA+SE;
        }
    else 
    if (code === "6141") 
        {
            message = bs6+bss10+"Clamp doesn't move upward.";
            detect = "PTHC sensor was not cleared within the specified time when Clamp moved up.";
            cause = C001+C002+C010+C101+C102+C103+C104+C105+C106+C107+C108+C109+C201+C202+C205+C214+C215+C216+C220+C221+C301+C302+C303+C304+C305+C306+C307;
            motor = "PACM";
            sensor = "PTHC/POLC";
            FRU = PA+SE;
        }
    else 
    if (code === "6150") 
        {
            message = bs6+bss10+"Pre-Acceptor Connector doesn't connect.";
            detect = "Pre-acceptor connector removal detected when requesting Pre-Acceptor to move.";
            cause = C301+C302+C307;
            motor = "";
            sensor = "";
            FRU = PA+SE;
        }
    else 
    if (code === "6151") 
        {
            message = bs6+bss10+"Pre-Acceptor type doesn't right.";
            detect = "Invalid Pre-Acceptor type signal detected when requesting Pre-Acceptor to move.";
            cause = C301+C302+C307;
            motor = "";
            sensor = "";
            FRU = PA;
        }
    else 
    if (code === "6180") 
        {
            message = bs6+bss9+"Pusher doesn't move downward.";
            detect = "SPPC sensor was not cleared within the specified time when Separator Pusher moved down.<br>SPCC sensor was not blocked within the specified time when Separator Pusher moved down.";
            cause = C001+C002+C101+C102+C103+C104+C105+C106+C107+C108+C111+C210+C211+C212+C301+C302+C303+C304+C305+C306+C307;
            motor = "SEPM/PDMG";
            sensor = "SPPC/SPCC/PDAC";
            FRU = PA+SE;
        }
    else 
    if (code === "6181") 
        {
            message = bs6+bss9+"Pusher doesn't move upward.";
            detect = "SPUC sensor was not blocked within the specified time when Separator Pusher moved up.<br>SPBC sensor was not blocked within the specified time when Separator Pusher moved up.";
            cause = C001+C002+C101+C102+C103+C104+C105+C106+C107+C108+C111+C210+C211+C212+C221+C301+C302+C303+C304+C305+C306+C307;
            motor = "SEPM";
            sensor = "SPUC/SPBC";
            FRU = PA+SE;
        }
    document.getElementById("code").innerHTML = code;
    document.getElementById("message").innerHTML = message;
    document.getElementById("detect").innerHTML = detect;
    document.getElementById("cause").innerHTML = cause;
    document.getElementById("motor").innerHTML = motor;
    document.getElementById("sensor").innerHTML = sensor;
    document.getElementById("FRU").innerHTML = FRU;
}
window.onload = init;// JavaScript Document