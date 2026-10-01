/* =========================================================
   AMBURSA — PERSONAL WEBSITE
   JavaScript Interactions
   ========================================================= */


/* =========================
   PAGE LOADER
   ========================= */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


/* =========================
   NAVBAR SCROLL EFFECT
   ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(3, 3, 3, 0.95)";
        navbar.style.borderBottom =
            "1px solid rgba(212, 175, 55, 0.25)";

    } else {

        navbar.style.background = "rgba(5, 5, 5, 0.75)";
        navbar.style.borderBottom =
            "1px solid rgba(212, 175, 55, 0.1)";

    }

});


/* =========================
   ACTIVE NAVIGATION LINK
   ========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.style.color = "#d8d8d8";

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.style.color = "#d4af37";

        }

    });

});


/* =========================
   SMOOTH NAVIGATION
   ========================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        if (
            targetId &&
            targetId.startsWith("#") &&
            targetId.length > 1
        ) {

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".about-content, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".journey-card, " +
    ".gallery-item, " +
    ".value-card, " +
    ".contact-card, " +
    ".football-image, " +
    ".football-content"
);


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================
   STAGGER CARD ANIMATION
   ========================= */

const cardGroups = [
    ".skills-grid .skill-card",
    ".journey-grid .journey-card",
    ".values-grid .value-card",
    ".contact-container .contact-card"
];


cardGroups.forEach(function (group) {

    const cards =
        document.querySelectorAll(group);

    cards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });

});


/* =========================
   SKILL BAR ANIMATION
   ========================= */

const skillBars =
    document.querySelectorAll(".skill-progress");


skillBars.forEach(function (bar) {

    const originalWidth =
        getComputedStyle(bar).width;

    bar.style.width = "0";

    bar.style.transition =
        "width 1.5s cubic-bezier(0.22, 1, 0.36, 1)";


    const skillObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        setTimeout(function () {

                            bar.style.width =
                                originalWidth;

                        }, 300);

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.5
            }

        );


    skillObserver.observe(bar);

});


/* =========================
   GALLERY LIGHT EFFECT
   ========================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");


galleryItems.forEach(function (item) {

    item.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                item.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            item.style.background =
                `radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(212, 175, 55, 0.12),
                    #111 35%
                )`;

        }
    );


    item.addEventListener(
        "mouseleave",
        function () {

            item.style.background = "#111";

        }
    );

});


/* =========================
   BUTTON HOVER SOUND-LIKE EFFECT
   ========================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(function (button) {

    button.addEventListener(
        "mouseenter",
        function () {

            button.style.letterSpacing =
                "0.5px";

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            button.style.letterSpacing =
                "normal";

        }
    );

});


/* =========================
   FOOTBALL IMAGE PARALLAX
   ========================= */

const footballImage =
    document.querySelector(".football-image");


window.addEventListener("scroll", function () {

    if (!footballImage) return;

    const rect =
        footballImage.getBoundingClientRect();

    const windowHeight =
        window.innerHeight;


    if (
        rect.top < windowHeight &&
        rect.bottom > 0
    ) {

        const movement =
            (windowHeight - rect.top) * 0.03;

        footballImage.style.transform =
            `translateY(${movement - 10}px)`;

    }

});


/* =========================
   HERO MOUSE MOVEMENT
   ========================= */

const hero =
    document.querySelector(".hero");

const heroImage =
    document.querySelector(".hero-image");


if (hero && heroImage) {

    hero.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (window.innerWidth / 2 - event.clientX)
                / 40;

            const y =
                (window.innerHeight / 2 - event.clientY)
                / 40;


            heroImage.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        function () {

            heroImage.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================
   EMAIL CONFIRMATION
   ========================= */

const emailLink =
    document.querySelector(
        'a[href^="mailto:"]'
    );


if (emailLink) {

    emailLink.addEventListener(
        "click",
        function () {

            console.log(
                "Opening email contact..."
            );

        }
    );

}


/* =========================
   WHATSAPP CONFIRMATION
   ========================= */

const whatsappLink =
    document.querySelector(
        'a[href*="wa.me"]'
    );


if (whatsappLink) {

    whatsappLink.addEventListener(
        "click",
        function () {

            console.log(
                "Opening WhatsApp..."
            );

        }
    );

}


/* =========================
   CURRENT YEAR
   ========================= */

const copyright =
    document.querySelector(
        ".copyright"
    );


if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.textContent =
        `© ${currentYear} Yahaya Umar. All Rights Reserved.`;

}


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "%cAMBURSA",
    "color:#d4af37; font-size:30px; font-weight:bold;"
);

console.log(
    "%cWelcome to Yahaya Umar's website.",
    "color:#ffffff; font-size:14px;"
);