function showSlide(slideId) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.add('hidden');
    });
    document.getElementById(slideId).classList.remove('hidden');
}

function yesClicked() {
    showSlide('slideYes');
}

function noClicked() {
    showSlide('slideNo');
}

function splitCake() {
    const cake = document.getElementById('cake');
    cake.style.transform = 'rotate(-30deg) translateX(50px)';
}

function restart() {
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide('slide1');
});
