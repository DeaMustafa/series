document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector('.custom-cursor');
    const cursorRing = document.createElement('div');
    cursorRing.classList.add('cursor-ring');
    document.body.appendChild(cursorRing);

    // Custom cursor
    document.addEventListener('mousemove', function (e) {
        if (customCursor) {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        }
        if (cursorRing) {
            cursorRing.style.left = `${e.clientX}px`;
            cursorRing.style.top = `${e.clientY}px`;
        }
    });

    // Change cursor color on hover over nav links
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            if (customCursor) {
                customCursor.style.backgroundColor = '#fff';
            }
            if (cursorRing) {
                cursorRing.style.borderColor = '#fff';
            }
        });

        link.addEventListener('mouseout', function () {
            if (customCursor) {
                customCursor.style.backgroundColor = 'var(--main-color)';
            }
            if (cursorRing) {
                cursorRing.style.borderColor = 'var(--main-color)';
            }
        });
    });
    
    // Split letters and apply animation delay
    links.forEach((link) => {
        const letters = link.textContent.trim().split('');
        let delay = 0;
        link.innerHTML = ''; // Clear existing content
        letters.forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${delay}s`; // Set animation delay for each letter
            delay += 0.1; // Increment delay for next letter
            link.appendChild(span);
        });
    });

    // Hamburger menu toggle for mobile
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});


/*Featured Section START*/



/*Featured Section START*/
$(document).ready(function() {
    $('.featured-carousel').owlCarousel({
        // Owl Carousel options
        loop: true, // Enable loop to make the carousel infinite
        nav: true, // Enable navigation arrows
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], // Customize navigation arrow icons
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:6
            }
        }
    });
});
/*Featured Section END*/


import { Application, Assets, Container, Sprite } from 'https://cdn.skypack.dev/pixi.js';

// Krijoni një aplikacion të ri
const app = new Application({
    backgroundColor: 0x1099bb,
    width: 1280,
    height: 900
});

// Shtoni aplikacionin në dokument
document.body.appendChild(app.view);

// Krijoni dhe shtoni një kontenier në skenë
const container = new Container();
app.stage.addChild(container);

// Ngarkoni teksturën e kunjës
Assets.load('https://pixijs.com/assets/bunny.png').then((texture) => {
    // Krijo një 5x5 rreth të kunjave në kontenier
    for (let i = 0; i < 25; i++) {
        const bunny = new Sprite(texture);

        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    }
});

// Lëviz kontenierin në qendër
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Qendro kunjat në koordinatat lokale të kontenierit
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Dëgjoni për përditësimin e animacionit
app.ticker.add((delta) => {
    // Rrotullo kontenierin vazhdimisht!
    container.rotation -= 0.01 * delta;
});
