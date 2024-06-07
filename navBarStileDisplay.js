const BottonNavBar = document.getElementById("navBar-BotSect");

let prevScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
        // User is at the top of the page
        BottonNavBar.style.opacity = '1';
    } else if (currentScrollY > prevScrollY) {
        // Scrolling down
        BottonNavBar.style.opacity = '0.5';
    } else {
        // Scrolling up
        BottonNavBar.style.opacity = '0.5';
    }

    prevScrollY = currentScrollY;
});

BottonNavBar.addEventListener('mouseenter', () => {
    BottonNavBar.style.opacity = '1';
});

BottonNavBar.addEventListener('mouseleave', () => {
    if (window.scrollY > 0) {
        BottonNavBar.style.opacity = '0.5';
    }
});