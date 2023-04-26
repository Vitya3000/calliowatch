//Übertragenes string
let msg ='';
//convertiertes string
let rcvmsg='';

//var fuer modus
let mode =0;




radio.setGroup(177);
basic.forever(function() {

    input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function() {
        rcvmsg = '';
        basic.showString("");
       mode=0;
      
    })
    input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
        rcvmsg = '';
        mode = 1;
    })
    input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
        rcvmsg = '';
        mode = 2;
    })

    
   //MainMenu
if(mode ==0){

    
}








//morsecode
if(mode==1){ 
   
       
    
    morse();
    reciever();
   
basic.showString(rcvmsg);

}

//Test
if(mode==2){

    basic.showString("TEST");
}






})


//MORSECODE-------------------
function morse(){
    
    input.onButtonEvent(Button.A, input.buttonEventClick(), function() {
        msg+='.';
    })
    input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
        msg += '-';
    })
    input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {

        radio.sendString(msg);
        msg = '';
    })
}


//EMPFÄNGERFUNKTION----------------
function reciever(){ 
    
    radio.onReceivedString(function(receivedString: string) {
        
       if(receivedString[0] =='.'){

                if(receivedString == morsecode[0]){

                     rcvmsg +='A';
                 }
           if (receivedString == morsecode[4]) {

               rcvmsg += 'E';
           }
           if (receivedString == morsecode[5]) {

               rcvmsg += 'F';
           }
           if (receivedString == morsecode[7]) {

               rcvmsg += 'H';
           }
           if (receivedString == morsecode[8]) {

               rcvmsg += 'I';
           }
           if (receivedString == morsecode[9]) {

               rcvmsg += 'J';
           } if (receivedString == morsecode[11]) {

               rcvmsg += 'L';
           }
           if (receivedString == morsecode[15]) {

               rcvmsg += 'P';
           }
           if (receivedString == morsecode[17]) {

               rcvmsg += 'R';
           }
           if (receivedString == morsecode[18]) {

               rcvmsg += 'S';
           }
           if (receivedString == morsecode[20]) {

               rcvmsg += 'U';
           }
           if (receivedString == morsecode[21]) {

               rcvmsg += 'V';
           }
           if (receivedString == morsecode[22]) {

               rcvmsg += 'W';
           }
       }
          
       else{
               if (receivedString == morsecode[1]) {

                   rcvmsg += 'B';
               }
               if (receivedString == morsecode[2]) {

                   rcvmsg += 'C';
               }
               if (receivedString == morsecode[3]) {

                   rcvmsg += 'D';
               }
               if (receivedString == morsecode[6]) {

                   rcvmsg += 'G';
               }
               if (receivedString == morsecode[10]) {

                   rcvmsg += 'K';
               }
               if (receivedString == morsecode[12]) {

                   rcvmsg += 'M';
               }
               if (receivedString == morsecode[13]) {

                   rcvmsg += 'N';
               }
               if (receivedString == morsecode[14]) {

                   rcvmsg += 'O';
               }
               if (receivedString == morsecode[16]) {

                   rcvmsg += 'Q';
               }
           if (receivedString == morsecode[19]) {

               rcvmsg += 'T';
           }
            if (receivedString == morsecode[23]) {

               rcvmsg += 'X';
           } 
           if (receivedString == morsecode[24]) {

               rcvmsg += 'Y';
           }
           if (receivedString == morsecode[25]) {

               rcvmsg += 'Z';
           }
       }
    })
}

//MORSEALPHABET----------------------------
let morsecode = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..'
];