/* ============================================
   GANDHI HOMEO CONSULTANCY
   Website JavaScript
   ============================================ */


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll(
    ".why-card, .expertise-card, .homeopathy-card, .journey-step"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});