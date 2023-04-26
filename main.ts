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
        
       for(let i=0;i<26;i++){
           if(receivedString == morsecode[i]){
               rcvmsg +=alphabet[i];
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
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];