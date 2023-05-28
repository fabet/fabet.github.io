let slideIndex = 0;
let slides = document.querySelectorAll('.slideshow-container img');
let buttons = document.querySelectorAll('.slideshow-container .buttons');

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        buttons[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
    buttons[slideIndex].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

setInterval(function() { changeSlide(1); }, 5000);