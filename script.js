var comp="rsp";
var you="rsp";
var ys = 0;
var cs = 0;
function s() {
    document.getElementById('db').innerHTML=""
    var rn = Math.floor((Math.random() * 3) + 1);
console.log(rn);
if (rn == 1) {
    var comp = "Rock";
}
if (rn == 2) {
    var comp = "Paper";
}
if (rn == 3) {
    var comp = "Scissor";
}
var you = "s";

//Take S


//take of
if (comp == "Scissor" && you=="s") {
    document.getElementById('d').play();
    document.getElementById('yoc').innerHTML="match is draw"
    document.getElementById('db').innerHTML="You choose Scissor and computer also choose Scissor"

}
if (you == "P" || you ==  "p" && comp == "Rock" ) {
    document.getElementById('w').play();
    ys++;
   document.getElementById('ys').innerHTML=ys;
    document.getElementById('yoc').innerHTML="You choose paper and Computer choose "+comp;
}
if (you == "R"|| you == "r" && comp == "Paper" ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose rock and Computer choose "+comp;
}
if (you == "S" || you == "s" && comp == "Paper" ) {
    document.getElementById('w').play();
ys++;
   document.getElementById('ys').innerHTML=ys;
    document.getElementById('yoc').innerHTML="You choose scissor and Computer choose "+comp;
}
if (you == "P" || you =="p" && comp == "Scissor" ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose paper and Computer choose "+comp;
}
if (you == "R" || you == "r" && comp == "Scissor" ) {
    document.getElementById('w').play();
    ys++;
    document.getElementById('ys').innerHTML=ys;
   
    document.getElementById('yoc').innerHTML="You choose rock and Computer choose "+comp;
}
if (you == "S" || you == "s" && comp == Rock ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose scissor and Computer choose "+comp;
}
if (cs=="10") {
    window.location.href = "lose.html";
        
    }
    if (ys=="10") {
        window.location.href = "win.html";
            
        }

}
function p() {
    document.getElementById('db').innerHTML=""
    var rn = Math.floor((Math.random() * 3) + 1);
console.log(rn);
if (rn == 1) {
    var comp = "Rock";
}
if (rn == 2) {
    var comp = "Paper";
}
if (rn == 3) {
    var comp = "Scissor";
}
var you = "p";

//Take S


//take of
if (comp == "Paper" && you=="p") {
    document.getElementById('d').play();
    document.getElementById('yoc').innerHTML="match is draw"
    document.getElementById('db').innerHTML="You choose Paper and computer also choose Paper"
}
if (you == "P" || you ==  "p" && comp == "Rock" ) {
    document.getElementById('w').play();
    ys++;
   document.getElementById('ys').innerHTML=ys;
   
    document.getElementById('yoc').innerHTML="You choose paper and Computer choose "+comp;
}
if (you == "R"|| you == "r" && comp == "Paper" ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose rock and Computer choose "+comp;
}
if (you == "S" || you == "s" && comp == "Paper" ) {
    document.getElementById('w').play();
    ys++;
   document.getElementById('ys').innerHTML=ys;
    document.getElementById('yoc').innerHTML="You choose scissor and Computer choose "+comp;
}
if (you == "P" || you =="p" && comp == "Scissor" ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose paper and Computer choose "+comp;
}
if (you == "R" || you == "r" && comp == "Scissor" ) {
    document.getElementById('w').play();
    ys++;
    document.getElementById('ys').innerHTML=ys;
   
    document.getElementById('yoc').innerHTML="You choose rock and Computer choose "+comp;
}
if (you == "S" || you == "s" && comp == Rock ) {
    document.getElementById('w').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose scissor and Computer choose "+comp;
}
if (cs=="10") {
    window.location.href = "lose.html";
        
    }
    if (ys=="10") {
        window.location.href = "win.html";
            
        }
}
function r() {
    document.getElementById('db').innerHTML=""
    var rn = Math.floor((Math.random() * 3) + 1);
console.log(rn);
if (rn == 1) {
    var comp = "Rock";
}
if (rn == 2) {
    var comp = "Paper";
}
if (rn == 3) {
    var comp = "Scissor";
}
var you = "r";

//Take S


//take of
if (comp == "Rock" && you=="r") {
    document.getElementById('d').play();
    document.getElementById('yoc').innerHTML="Match is draw"
    document.getElementById('db').innerHTML="You choose Rock and computer also choose Rock"
}
if (you == "P" || you ==  "p" && comp == "Rock" ) {
    document.getElementById('w').play();
   
    document.getElementById('yoc').innerHTML="You choose paper and Computer choose "+comp;
}
if (you == "R"|| you == "r" && comp == "Paper" ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose rock and Computer choose "+comp;
}
if (you == "S" || you == "s" && comp == "Paper" ) {
    document.getElementById('w').play();
    ys++;
    document.getElementById('ys').innerHTML=ys;
    document.getElementById('yoc').innerHTML="You choose scissor and Computer choose "+comp;
}
if (you == "P" || you =="p" && comp == "Scissor" ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose paper and Computer choose "+comp;
}
if (you == "R" || you == "r" && comp == "Scissor" ) {
    document.getElementById('w').play();
    ys++;
    document.getElementById('ys').innerHTML=ys;
    document.getElementById('yoc').innerHTML="You choose rock and Computer choose "+comp;
}
if (you == "S" || you == "s" && comp == Rock ) {
    document.getElementById('l').play();
    cs++;
    document.getElementById('cs').innerHTML=cs;
    document.getElementById('yoc').innerHTML="You choose scissor and Computer choose "+comp;
}
if (cs=="10") {
    window.location.href = "lose.html";
        
    }
    if (ys=="10") {
        window.location.href = "win.html";
            
        }
}
