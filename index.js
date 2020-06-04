var randomNumber1   = Math.random();
randomNumber1= Math.floor((randomNumber1*6)+1);

var randomDiceImage=("dice"+ randomNumber1+".png");
var diceImageSource="images/"+randomDiceImage;

var image_1=document.querySelectorAll("img")[0].setAttribute("src",diceImageSource);

var randomNumber2   = Math.random();
randomNumber2= Math.floor((randomNumber2*6)+1);

var randomDiceImage=("dice"+ randomNumber2+".png");
var diceImageSource="images/"+randomDiceImage;

var image_2=document.querySelectorAll("img")[1].setAttribute("src",diceImageSource);

if(randomNumber1>randomNumber2){
 document.querySelector("h1").innerHTML="Player 1 wins, congratulations!   ✌️";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins, congratulations!  ✌️";
 }
else{
  document.querySelector("h1").innerHTML="Its a draw!  😊";
 }
