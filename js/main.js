//slideshow slider
// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   let i;
//   const slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "block";
// }
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   if (n===undefined){n= ++slideIndex;}
//   if (n > slides.length) {slideIndex = 1;}
//   if (n < 1) {slideIndex = slides.length}

//   $(slides[slideIndex-1]).fadeIn(2000);
//   slides[slideIndex-1].style.display = "block";
//   $(slides[slideIndex-1]).delay(3000);
//   $(slides[slideIndex-1]).fadeOut(1000);

//   setTimeout(showSlides, 6000);
// }

//mobile menu
function closemenu(){
    nav = document.querySelector('nav');
    nav.classList.remove('menu-btn');
}
function openmenu(){
    nav = document.querySelector('nav');
    nav.classList.add('menu-btn');
}

//drop-down feature list
function handlechange(e){
    location.href = e.target.value;
}
