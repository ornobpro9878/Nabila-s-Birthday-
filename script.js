let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const okButton = document.getElementById("okButton");
const turnOffLightButton = document.getElementById("turnOffLight");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

yesButton.addEventListener("click", () => {
    currentSlide = 3; // Skip the 'Please Watch' slide
    showSlide(currentSlide);
});

noButton.addEventListener("click", () => {
    currentSlide = 2; // Show the 'Please Watch' slide
    showSlide(currentSlide);
});

okButton.addEventListener("click", nextSlide);

turnOffLightButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    setTimeout(() => {
        document.body.style.backgroundColor = "#fdf6e3";
    }, 6000); // Restore after 6 seconds
});

// Initial display
showSlide(currentSlide);

// Automatically transition slides
setInterval(nextSlide, 5000);
