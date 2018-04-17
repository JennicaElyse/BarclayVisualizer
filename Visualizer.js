
var D = 400;
var H = 200;
var ts1 = 50;
var ts2 = 50;
var ts3 = 50;
var ts4 = 50;
var ts5 = 50;
var play = false;

var song1;
var song2;
var song3;
var song4;
var song5;

var amplitude;

function preload()
{
 loadFont('DoHyeon.ttf');
 song1 = loadSound('sounds/1SleepyKids.mp3');
 song2 = loadSound('sounds/2HiddenHarmonics.mp3');
 song3 = loadSound('sounds/3RespectTheSource.mp3');
 song4 = loadSound('sounds/4ImUpHere.mp3');
 song5 = loadSound('sounds/5MyDogKnows.mp3');
}

function setup() 
{

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    
    amplitude = new p5.Amplitude();
}

function draw() 
{
    
    D = 350 + 400 * amplitude.getLevel();
    
    console.log(amplitude.getLevel());
    
    background(H, 20, 90);
    noFill();
    strokeWeight(20);
    stroke(H, 30, 60);
    ellipse(5*windowWidth/8, windowHeight/2, D);
    fill(H, 30, 40);
    noStroke();
    ellipse(5*windowWidth/8, windowHeight/2, D-40);
    stroke(H, 30, 80);
    strokeWeight(3);
    ellipse(5*windowWidth/8, windowHeight/2, D-60);
    strokeWeight(2);
    ellipse(5*windowWidth/8, windowHeight/2, D-70);
    strokeWeight(1);
    ellipse(5*windowWidth/8, windowHeight/2, D-80);
    
    fill(0, 0, 50);
    textSize(68);
    textFont('DoHyeon');
    text('BARCLAY CRENSHAW', 24, 84);
    textSize(ts1);
    text('Sleepy Kids', 24, 144);
    textSize(ts2);
    text('Hidden Harmonics', 24, 204);
    textSize(ts3);
    text('Respect the Source', 24, 264);
    textSize(ts4);
    text("I'm Up Here", 24, 324);
    textSize(ts5);
    text('My Dog Knows The Truth', 25, 384); //shadow
    
    fill(0, 0, 100);
    textSize(68);
    textFont('DoHyeon');
    text('BARCLAY CRENSHAW', 20, 80);
    textSize(ts1);
    text('Sleepy Kids', 20, 140);
    textSize(ts2);
    text('Hidden Harmonics', 20, 200);
    textSize(ts3);
    text('Respect the Source', 20, 260);
    textSize(ts4);
    text("I'm Up Here", 20, 320);
    textSize(ts5);
    text('My Dog Knows The Truth', 20, 380); //white text
    
    hoverSong1();
    hoverSong2();
    hoverSong3();
    hoverSong4();
    hoverSong5();
    
    playSong1();
    playSong2();
    playSong3();
    playSong4();
    playSong5();

    noOverlap();
    
    colorize();
}


function hoverSong1(){ 
   if(mouseX >= 20 && mouseX <= 255)
        if(mouseY >= 100 && mouseY <= 160)
           {
               ts1 = 60;
               return true;
           }
    else{
        ts1 = 50
        };   
}

function hoverSong2(){
    
   if(mouseX >= 20 && mouseX <= 255)
        if(mouseY >= 160 && mouseY <= 220)
           {
               ts2 = 60;
               return true;
           }
    else{
        ts2 = 50
        };   
}

function hoverSong3(){
    
   if(mouseX >= 20 && mouseX <= 255)
        if(mouseY >= 220 && mouseY <= 280)
           {
               ts3 = 60;
               return true;
           }
    else{
        ts3 = 50
        };   
}

function hoverSong4(){
    
   if(mouseX >= 20 && mouseX <= 255)
        if(mouseY >= 280 && mouseY <= 340)
           {
               ts4 = 60;
               return true;
           }
    else{
        ts4 = 50
        };   
}

function hoverSong5(){
   if(mouseX >= 20 && mouseX <= 255)
        if(mouseY >= 340 && mouseY <= 400)
           {
               ts5 = 60;
               return true;
           }
    else{
        ts5 = 50
        };   
}

function playSong1(){
    if(hoverSong1() && song1.isPlaying() == false && play){
        song1.play();
    }
  if(play == false){
        song1.pause();
    }
}

function playSong2(){
    if(hoverSong2() && song2.isPlaying() == false && play){
        song2.play();
    }
  if(play == false){
        song2.pause();
    }
}

function playSong3(){
    if(hoverSong3() && song3.isPlaying() == false && play){
        song3.play();
    }
  if(play == false){
        song3.pause();
    }
}

function playSong4(){
    if(hoverSong4() && song4.isPlaying() == false && play){
        song4.play();
    }
  if(play == false){
        song4.pause();
    }
}

function playSong5(){
    if(hoverSong5() && song5.isPlaying() == false && play){
        song5.play();
    }
  if(play == false){
        song5.pause();
    }
}

function noOverlap(){
        if(song1.isPlaying()){
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
    }
     if(song2.isPlaying()){
        song1.pause();
        song3.pause();
        song4.pause();
        song5.pause();
    }
     if(song3.isPlaying()){
        song1.pause();
        song2.pause();
        song4.pause();
        song5.pause();
    }
    if(song4.isPlaying()){
        song1.pause();
        song2.pause();
        song3.pause();
        song5.pause();
    }
    if(song5.isPlaying()){
        song1.pause();
        song2.pause();
        song3.pause();
        song4.pause();
    }
}

function colorize(){
    if(song1.isPlaying()){
        if(H <=25){
            H +=1
        }
        if(H >=25){
            H -=1
        }
    }
    else if(song2.isPlaying()){
        if(H <=70){
            H +=1
        }
        if(H >=70){
            H -=1
        }
    }
     else if(song3.isPlaying()){
        if(H <=150){
            H +=1
        }
        if(H >=150){
            H -=1
        }
    }
     else if(song4.isPlaying()){
        if(H <=265){
            H +=1
        }
        if(H >=265){
            H -=1
        }
    }
    else if(song5.isPlaying()){
        if(H <=335){
            H +=1
        }
        if(H >=335){
            H -=1
        }
    }
    else{
        if(H <=200){
            H +=5
        }
        if(H >=200){
            H -=5
        }
    }
}


function mousePressed()
{
play = !play;

}

