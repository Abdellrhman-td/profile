const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 6500,
    allowTouchMove: true,
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
        delay: 0,
    },
});
// Handle scroll events to the navbar
let navbar = document.querySelector("nav");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add("hidden");
    } else {
        // Scrolling up
        navbar.classList.remove("hidden");
    }
    lastScrollY = window.scrollY; // Update last scroll position
});
