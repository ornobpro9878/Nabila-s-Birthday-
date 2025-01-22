document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 1;

    const slides = document.querySelectorAll(".slide");
    const showSlide = (slideNumber) => {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === slideNumber - 1);
        });
    };

    // Initial Slide
    showSlide(currentSlide);

    // Button Handlers
    document.getElementById("yesButton").addEventListener("click", () => {
        currentSlide++;
        showSlide(currentSlide);
    });

    document.getElementById("noButton").addEventListener("click", () => {
        alert("Oh no! 😢 But it's still your special day, Nabila!");
    });

    document.getElementById("nextButton1").addEventListener("click", () => {
        currentSlide++;
        showSlide(currentSlide);
        startParticles();
    });

    document.getElementById("nextButton2").addEventListener("click", () => {
        currentSlide++;
        showSlide(currentSlide);
    });

    document.getElementById("cutCakeButton").addEventListener("click", () => {
        alert("🎂 Cake cut! Happy Birthday, Nabila!");
    });

    document.getElementById("nextButton3").addEventListener("click", () => {
        currentSlide++;
        showSlide(currentSlide);
    });

    // Particle Animation
    const startParticles = () => {
        const canvas = document.getElementById("particleCanvas");
        const ctx = canvas.getContext("2d");
        const particles = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }
            draw() {
                ctx.fillStyle = "#ff6f61";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.size <= 0.2) {
                    particles.splice(index, 1);
                    particles.push(new Particle());
                }
            });
            requestAnimationFrame(animateParticles);
        };

        initParticles();
        animateParticles();
    };
});
