//Übertragenes string
let msg ='';
//convertiertes string
let rcvmsg='';

//var fuer modus
let mode =0;


//customhintergrund
let cust = 0;



radio.setGroup(177);
basic.forever(function() {


//MODSSCHALTER------------------------------------------
    input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function() {
        mode = 0;
        rcvmsg = '';
        
      
      
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

        //hintergründe
        if(storage.getNumber(StorageSlots.s1)==0){

            basic.showIcon(IconNames.Heart);
        }
    if (storage.getNumber(StorageSlots.s1) == 1) {

        basic.showIcon(IconNames.Square);
    }
    if (storage.getNumber(StorageSlots.s1) == 2) {

        basic.showIcon(IconNames.Diamond);
    }
    if (storage.getNumber(StorageSlots.s1) == 3) {

        basic.showIcon(IconNames.Cow);
    }
    if (storage.getNumber(StorageSlots.s1) == 4) {

        basic.showIcon(IconNames.Rabbit);
    }
    if (storage.getNumber(StorageSlots.s1) == 5) {

        basic.showIcon(IconNames.Triangle);
    }
    if (storage.getNumber(StorageSlots.s1) == 6) {

        basic.showIcon(IconNames.SmallSquare);
    }

   
    if(input.buttonIsPressed(Button.A)&& cust<6){
        cust++;
       
    storage.putNumber(StorageSlots.s1, cust);
    }
    if(input.buttonIsPressed(Button.B) && cust >0){
        cust--;
        
        storage.putNumber(StorageSlots.s1, cust);
    }

    
   



}








//morsecode
if(mode==1){ 
   
       
    
    morse();
    reciever();
   
basic.showString(rcvmsg);

}

//MusicPlayer
if(mode==2){
   
    if(input.buttonIsPressed(Button.A)){ 
        music.stopMelody(MelodyStopOptions.All)
        music.playMelody("D E G E B - B A - D E G E A - A G - D E G E B - A F# - D - D A - G", 400);
     }
    if (input.buttonIsPressed(Button.B)) {
        music.stopMelody(MelodyStopOptions.All)
        music.playMelody("E6 D6 F#5 - G#5 - C#6 B5 D5 - E5 - B5 A5 C#5 - E5 - A5", 400);
    }
    
    
    basic.showIcon(IconNames.EigthNote);
    
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