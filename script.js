let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove("active");
        currentSlide++;
        slides[currentSlide].classList.add("active");
    }
}

function releaseBalloons() {
    const balloonContainer = document.getElementById("balloonContainer");
    const balloons = [];

    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = `${Math.random() * 90 + 5}%`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloonContainer.appendChild(balloon);
        balloons.push(balloon);
    }

    setTimeout(() => {
        balloons.forEach(balloon => balloon.remove());
    }, 5000);
}

function cutCake() {
    const cakeContainer = document.getElementById("cakeContainer");
    cakeContainer.style.background = "linear-gradient(to bottom, #ffccd5, #ffe6f2)";
    cakeContainer.innerHTML = `<p>Enjoy the cake! 🎂</p>`;
}

const particleCanvas = document.getElementById("particleCanvas");
const ctx = particleCanvas.getContext("2d");
const particles = [];

function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

function createParticles() {
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            size: Math.random() * 5 + 1,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1
        });
    }
}

resizeCanvas();
createParticles();
window.addEventListener("resize", resizeCanvas);
