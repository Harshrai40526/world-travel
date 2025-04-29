// Toggle Mobile Menu
const menu = document.querySelector('.navbar');
const menuToggle = document.createElement('button');
menuToggle.innerText = "☰ Menu";
menuToggle.className = "menu-toggle";
document.querySelector('nav').appendChild(menuToggle);

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('show');
});

// Auto Change Background Video based on time
const bannerVideo = document.querySelector('.banner video');

function changeVideoBasedOnTime() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        bannerVideo.src = "./files/day.mp4";  // Day video
    } else {
        bannerVideo.src = "./files/night.mp4";  // Night video
    }
}
changeVideoBasedOnTime();

// Fade-in animation for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});

// Countdown Timer for Travel Offers
const offerTimer = document.createElement('div');
offerTimer.id = "countdown";
document.querySelector('.package-title').appendChild(offerTimer);

function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(() => {
        days = Math.floor(timer / (24 * 60 * 60));
        hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        document.getElementById("countdown").innerHTML =
            `Limited Offer Ends In: ${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec`;

        timer--;
    }, 1000);
}

startCountdown(7 * 24 * 60 * 60); // Countdown for 7 days