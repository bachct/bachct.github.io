function myFunctionS2() {
                         var code;
                         var Meaning;
                         var code2;
                         var code3;
                         var text;
                         var text2;
                         code = Number(document.getElementById("mstatus").value);
                         if (code == "0")
                             {Meaning = "<font size='3' color='#FF6347'>No Error</font";
                              }
                         else
                         if (code == "1")
                             {Meaning = "<font size='3' color='#FF6347'>NVRAM Error:  An area of NVRAM cannot be accessed.(Lỗi NVRAM của controlboard)</font>";
                             }
                         else
                         if (code == "2")
                             {Meaning = "<font size='3' color='#FF6347'>USB Communications Error: There has been a USB communications failure (lỗi cổng USB kiểm tra cáp usb nối với controlboard)</font";
                              }
                         else
                         if (code == "3")
                             {Meaning = "<font size='3' color='#FF6347'>l2C Communication Fault: There has been a communications fault on the l2C bus.</font";
                              }
                         else
                         if (code == "4")
                             {Meaning = "<font size='3' color='#FF6347'>ICS Activated: The ICS security system has notified the dispenser that it has activated.</font";
                             }
                         else
                         if (code == "5")
                             {Meaning = "<font size='3' color='#FF6347'>Interlock Open:<br>There has been a power disconnection via interlock on the dispenser racking mechanism during operation.(lỗi interlock open kiểm tra lại nguồn và interlock)</font";
                              }
                         else
                         if (code == "6")
                             {Meaning = "<font size='3' color='#FF6347'>Request Inhibited:<br> The request was not attempted because there was something wrong with the request, or it was not permitted at this time.</font";
                              }
 else
 if (code == "7")
     {Meaning = "<font size='3' color='#FF6347'>Not Configured:<br> The dispenser has not been configured. This is because this is the first operation since initial power up or because there was memory corruption and the configuration was lost.(chưa thiết lập thông số tiền do bị lỗi bộ nhớ hoặc bị mất cấu hình)</font";
    }
    else
     if (code == "8")
         {Meaning = "<font size='3' color='#FF6347'>Not Authorised: <br>Unauthorised change of dispenser or control board.</font";
        }
  else
      if (code == "9")
          {Meaning = "<font size='3' color='#FF6347'>Not Authenticated: <br>The dispenser has not been authenticated.(chưa xác thực bộ phận trả tiền)</font";
           }
  else
      if (code == "21")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - SNT (lỗi sensor SNT kiểm tra vệ sinh các sensor SNT)</font";
         }
  else
      if (code == "22")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Carriage (lỗi bộ phận carriage kiểm tra các sensor.</font";
         }
  else
      if (code == "23")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Presenter.(Lỗi sensor của bộ phận trả tiền)</font";
         }
  else
      if (code == "24")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Shutter.(lỗi cửa trả tiền)</font";
         }
  else
      if (code == "25")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Pick 1 (kiểm tra sensor của pick module 1).</font";
         }
  else
      if (code == "26")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Pick 2 (kiểm tra sensor của pick module 2).</font";
         }
  else
      if (code == "27")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Pick 3.(kiểm tra sensor của pick module 3)</font";
         }
  else
      if (code == "28")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Pick 4.(kiểm tra sensor của pick module 4)</font";
         }
  else
      if (code == "29")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Pick 5.(kiểm tra sensor của pick module 5)</font";
         }
  else
      if (code == "30")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Pick 6.(kiểm tra sensor của pick module 6)</font";
         }
  else
      if (code == "31")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Aligner.(kiểm tra sensor của bộ phận BAM)</font";
         }
  else
      if (code == "32")
          {Meaning = "<font size='3' color='#FF6347'>Sensor Fault - Vacuum.(Kiểm tra thiết bị hơi pittong và sensor đo áp suất)</font";
         }
  else
      if (code == "41")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - SNT.(Lỗi bộ phận SNT)</font";
         }
  else
      if (code == "42")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Carriage.(Lỗi bộ phận carriage)</font";
         }
  else
      if (code == "43")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Presenter.(Lỗi bộ phận Presenter)</font";
         }
  else
      if (code == "44")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Shutter .(Lỗi cửa trả tiền)</font";
         }
  else
      if (code == "45")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Pick 1.(Lỗi pick tiền pick module 1)</font";
         }
  else
      if (code == "46")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Pick 2.(Lỗi pick tiền pick module 2)</font";
         }
  else
      if (code == "47")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Pick 3.(Lỗi pick tiền pick module 3)</font";
         }
  else
      if (code == "48")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Pick 4.(Lỗi pick tiền pick module 4)</font";
         }
  else
      if (code == "49")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Pick 5.(Lỗi pick tiền pick module 5)</font";
         }
  else
      if (code == "50")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Pick 6.(Lỗi pick tiền pick module 6)</font";
         }
  else
      if (code == "51")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Aligner .(Lỗi bộ phận BAM)</font";
         }
  else
      if (code == "52")
          {Meaning = "<font size='3' color='#FF6347'>There has been a mechanism failure in the dispenser while attempting to execute a request.<br>Mechanism Fault - Vacuum. (Lỗi bộ phận Vaccum kiểm tra hơi, pittong...)</font";
         }
  else
      if (code == "61")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser.<br>Media Jam - SNT.(Kẹt tiền ở bộ phận SNT, kiểm tra và vệ sinh SNT thay thế nếu không xử lí được)</font";
         }
  else
      if (code == "62")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Carriage.(Kẹt tiền trên Carriage lấy tiền kẹt vệ sinh các sensor trên carriage)</font";
         }
  else
      if (code == "63")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Bin.(Lỗi hộp tiền loại kẹt tiền)</font";
         }
  else
      if (code == "64")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Pick 1.(kẹt tiền pick module 1)</font";
         }
  else
      if (code == "65")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Pick 2.(kẹt tiền pick module 2)</font";
         }
  else
      if (code == "66")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Pick 3.(kẹt tiền pick module 3)</font";
         }
  else
      if (code == "67")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Pick 4.(kẹt tiền pick module 4)</font";
         }
  else
      if (code == "68")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Pick 5.(kẹt tiền pick module 5)</font";
         }
  else
      if (code == "69")
          {Meaning = "<font size='3' color='#FF6347'>There has been a media jam in the dispenser: <br>Media Jam - Pick 6.(kẹt tiền pick module 6)</font";
         }
  else
      if (code == "70")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - SNT (lỗi sensor SNT kiểm tra vệ sinh sensor hoặc thay thế SNT)</font";
         }
  else
      if (code == "71")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Carriage .(lỗi sensor Carriage kiểm tra vệ sinh sensor hoặc thay thế Carriage)</font";
         }
  else
      if (code == "72")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Presenter.(lỗi sensor Presenter kiểm tra vệ sinh sensor )</font";
         }
  else
      if (code == "73")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Shutter .(lỗi sensor cửa trả tiền kiểm tra vệ sinh sensor hoặc thay thế cửa trả tiền)</font";
         }
  else
      if (code == "74")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Pick 1.(lỗi sensor pick module 1 kiểm tra vệ sinh sensor hoặc thay thế double pick)</font";
         }
  else
      if (code == "75")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Pick 2.(lỗi sensor pick module 2 kiểm tra vệ sinh sensor hoặc thay thế double pick)</font";
         }
  else
      if (code == "76")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Pick 3.(lỗi sensor pick module 3 kiểm tra vệ sinh sensor hoặc thay thế double pick)</font";
         }
  else
      if (code == "77")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Pick 4.(lỗi sensor pick module 4 kiểm tra vệ sinh sensor hoặc thay thế double pick)</font";
         }
  else
      if (code == "78")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Pick 5.(lỗi sensor pick module 5 kiểm tra vệ sinh sensor hoặc thay thế double pick)</font";
         }
  else
      if (code == "79")
          {Meaning = "<font size='3' color='#FF6347'>A sensor has changed state unexpectedly during operation: <br>Unexpected Sensor Change - Pick 6.(lỗi sensor pick module 6 kiểm tra vệ sinh sensor hoặc thay thế double pick)</font";
         }
  else
      if (code == "81")
          {Meaning = "<font size='3' color='#FF6347'>There is a pick unit configuration fault or a problem with picking media from the media cassette: <br>Picking Error - Pick 1.(lấy tiền không được ở pick module 1 kiểm tra và thay thế) </font";
         }
  else
      if (code == "82")
          {Meaning = "<font size='3' color='#FF6347'>There is a pick unit configuration fault or a problem with picking media from the media cassette: <br>Picking Error - Pick 2.(lấy tiền không được ở pick module 2 kiểm tra và thay thế)</font";
         }
  else
      if (code == "83")
          {Meaning = "<font size='3' color='#FF6347'>There is a pick unit configuration fault or a problem with picking media from the media cassette: <br>Picking Error - Pick 3.(lấy tiền không được ở pick module 3 kiểm tra và thay thế)</font";
         }
  else
      if (code == "84")
          {Meaning = "<font size='3' color='#FF6347'>There is a pick unit configuration fault or a problem with picking media from the media cassette: <br>Picking Error - Pick 4.(lấy tiền không được ở pick module 4 kiểm tra và thay thế)</font";
         }
  else
      if (code == "85")
          {Meaning = "<font size='3' color='#FF6347'>There is a pick unit configuration fault or a problem with picking media from the media cassette: <br>Picking Error - Pick 5.(lấy tiền không được ở pick module 5 kiểm tra và thay thế)</font";
         }
  else
      if (code == "86")
          {Meaning = "<font size='3' color='#FF6347'>There is a pick unit configuration fault or a problem with picking media from the media cassette: <br>Picking Error - Pick 6.(lấy tiền không được ở pick module 6 kiểm tra và thay thế)</font";
         }
  else
      if (code == "91")
          {Meaning = "<font size='3' color='#FF6347'>There is a problem with discarding media to the purge bin: <br>Discard Error - Divert Area .(Lỗi bộ phận hộp loại kiểm tra divert sensor)</font";
         }
  else
      if (code == "92")
          {Meaning = "<font size='3' color='#FF6347'>There is a problem with discarding media to the purge bin: <br>Discard Error - Reject Area.(Lỗi bộ phận hộp loại kiểm tra Reject hộp loại)</font";
         }
  else
      if (code == "93")
          {Meaning = "<font size='3' color='#FF6347'>There is a problem with discarding media to the purge bin: <br>Discard Error - Retract Area.(Lỗi bộ phận hộp loại kiểm tra Retract hộp loại)</font";
         }
  else
      if (code == "95")
          {Meaning = "<font size='3' color='#FF6347'>Error detected with SNR hardware: <br>Serial Number Read Error.</font";
         }
     else 
          {Meaning = " ";
         }
                         document.getElementById("code").innerHTML = code;
                         document.getElementById("Meaning").innerHTML = Meaning;

                          }
                         window.onload = init;
