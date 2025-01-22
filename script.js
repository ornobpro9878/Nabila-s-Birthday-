document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextButtons = document.querySelectorAll("#nextButton");
    const balloonContainer = document.getElementById("balloonContainer");
    const cutCakeButton = document.getElementById("cutCakeButton");
    let currentSlide = 0;

    // Function to go to the next slide
    nextButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index < slides.length - 1) {
                slides[currentSlide].classList.remove("active");
                slides[currentSlide].classList.add("hidden");
                currentSlide++;
                slides[currentSlide].classList.remove("hidden");
                slides[currentSlide].classList.add("active");

                if (currentSlide === 2) spawnBalloons();
            }
        });
    });

    // Function to spawn balloons
    function spawnBalloons() {
        balloonContainer.innerHTML = ""; // Clear previous balloons
        for (let i = 0; i < 8; i++) {
            const balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.left = `${Math.random() * 80 + 10}%`;
            balloon.style.animationDelay = `${Math.random() * 2}s`;
            balloon.addEventListener("click", () => balloon.remove());
            balloonContainer.appendChild(balloon);
        }
    }

    // Cut the cake animation
    cutCakeButton.addEventListener("click", () => {
        cutCakeButton.textContent = "Enjoy the Cake! 🎂";
        cutCakeButton.disabled = true;
    });

    // Particle background
    const particleCanvas = document.getElementById("particleCanvas");
    const ctx = particleCanvas.getContext("2d");
    const particles = [];

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    function resizeCanvas() {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }

    function createParticles() {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 4 + 1,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1,
        });
    }

    function updateParticles() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        particles.forEach((particle, index) => {
            particle.x += particle.dx;
            particle.y += particle.dy;

            if (particle.x < 0 || particle.x > window.innerWidth || particle.y < 0 || particle.y > window.innerHeight) {
                particles.splice(index, 1);
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 100, 100, 0.7)";
            ctx.fill();
        });

        if (particles.length < 100) createParticles();

        requestAnimationFrame(updateParticles);
    }

    updateParticles();
});
