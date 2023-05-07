var RandomNumber1= Math.floor(Math.random() * 6 )+1;
var Randomfile1 = "dice"+RandomNumber1+".png";
var Random1 = "images/"+Randomfile1;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",Random1);

//for Dice2
var RandomNumber2=Math.floor(Math.random()* 6 )+1;
var Randomfile2 ="images/dice" + RandomNumber2+".png";

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",Randomfile2);

if(RandomNumber1>RandomNumber2){
    document.querySelector('H1').innerHTML="🚩Player 1 win";
}
else if(RandomNumber1<RandomNumber2){
    document.querySelector('H1').innerHTML="🚩Player 2 win";
}
else{
    document.querySelector('H1').innerHTML="Draw!";
}