function startGame(){
        window.open("game.html");
    }

var myPix = new Array("/images/penguin-front.png","/images/penguin-left.png","/images/penguin-right.png","/images/yeti.jpg");
var score=0;
function choosePic1() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture1").src = myPix[randomNum];
    var pic1=document.getElementById("myPicture1").src;
//    console.log(pic1);
//    console.log(randomNum);
    document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
        
    }
//    if(pic1 == "/images/yeti.jpg")
//        console.log("gameovver");
//    }
//    score(pic1);


function choosePic2() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture2").src = myPix[randomNum];
    document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
}

function choosePic3() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture3").src = myPix[randomNum];
  document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);

}

function choosePic4() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture4").src = myPix[randomNum];
  document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
}

function choosePic5() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture5").src = myPix[randomNum];
   document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
}

function choosePic6() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture6").src = myPix[randomNum];
   document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
    
}

function choosePic7() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture7").src = myPix[randomNum];
   document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
}

function choosePic8() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture8").src = myPix[randomNum];
    document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
}

function choosePic9() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture9").src = myPix[randomNum];
   document.getElementById("dispScore").innerHTML=scoreEvaluate(randomNum);
}

//function score(pic1){
//    console.log("reached score");
//    if(pic1=='/images/yeti.jpg'){
//        console.log("gameover");
//    }
//}

function scoreEvaluate(randomNum){
    if(randomNum==3){
        alert("Oh oh! Gameover!!");
        alert("Your score is " +score);
        var retVal = confirm("Do you want to continue ?");
               if( retVal == true ){
                  window.open("game.html");
                  return true;
               }
               else{
                  window.close("game.html");
                  return false;
               }
        
    }
    else{
        score=score+1;
        console.log(score);
    }
    return score;
}
//function removePic() {
//    document.getElementById("myPicture1").src = "/images/mound_1.png";
//}
//
//function sleep(milliseconds) {
//  var start = new Date().getTime();
//  for (var i = 0; i < 1e7; i++) {
//    if ((new Date().getTime() - start) > milliseconds){
//      break;
//    }
//  }
//}