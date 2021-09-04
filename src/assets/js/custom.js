var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


window.onload=function(){
  var minusBtn = document.getElementById("minus"),
      plusBtn = document.getElementById("plus"),
      numberPlace = document.getElementById("numberPlace"),
      submitBtn = document.getElementById("submit"),
      number = 0, /// number value
      min = 0, /// min number
      max = 30; /// max number
      
  minusBtn.onclick = function(){
      if (number>min){
         number = number-1; /// Minus 1 of the number
         numberPlace.innerText = number ; /// Display the value in place of the number
         
      }
      if(number == min) {        
          numberPlace.style.color= "red";
          setTimeout(function(){numberPlace.style.color= "black"},500)
      }
      else {
        numberPlace.style.color="black";            
         }
              
  }
  plusBtn.onclick = function(){
      if(number<max){
         number = number+1;
         numberPlace.innerText = number ; /// Display the value in place of the number
      }     
      if(number == max){
             numberPlace.style.color= "red";
             setTimeout(function(){numberPlace.style.color= "black"},500)
      }
         
      else {
             numberPlace.style.color= "black";
             
      }
   
         
  }
  submitBtn.onclick = function(){
       alert("you choice : " + number);
   }
  
}
import wixWindow from 'wix-window';

$w.onReady(function () {
 if(wixWindow.formFactor === "Mobile"){
  $w("#car").show();     
 }
});
