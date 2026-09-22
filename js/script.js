const startButton = document.getElementById("startButton");
const scene = document.getElementById("scene");
const flowerStage = document.getElementById("flowerStage");
const flower = document.querySelector(".flower");
const message = document.getElementById("message");
const cornerMessage = document.getElementById("cornerMessage");
const particles = document.getElementById("particles");
const music = document.getElementById("music");

let started = false;

startButton.addEventListener("click", () => {
    if (started) return;

    started = true;

    startButton.classList.add("hidden");
    scene.classList.add("started");
    flowerStage.classList.add("active");

    music.currentTime = 0;
    music.play();

    setTimeout(() => {
        flower.classList.add("opening");
    }, 2000);

    setTimeout(() => {
        flower.classList.add("finished");
    }, 16000);

    setTimeout(() => {
        message.classList.add("show");
        cornerMessage.classList.add("show");
        createParticles();
    }, 17400);
});

function createParticles() {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("span");

        particle.classList.add("particle");
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;

        particles.appendChild(particle);
    }
}