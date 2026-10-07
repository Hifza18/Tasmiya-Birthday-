/* =========================================================
   ELEMENTS
========================================================= */

const openButton = document.getElementById("openButton");

const birthdayBlast = document.getElementById("birthdayBlast");
const blastCollage = document.getElementById("blastCollage");
const confettiContainer = document.getElementById("confettiContainer");
const blastContinue = document.getElementById("blastContinue");

const birthdayMusic = document.getElementById("birthdayMusic");

const birthdayScreen = document.getElementById("birthdayScreen");
const continueButton = document.getElementById("continueButton");

const relationshipSection =
    document.getElementById("relationshipSection");

const storySection =
    document.getElementById("storySection");

const storyNextButton =
    document.getElementById("storyNextButton");

const finalButton =
    document.getElementById("finalButton");

const finalSurprise =
    document.getElementById("finalSurprise");

const meterFill =
    document.getElementById("meterFill");


/* =========================================================
   29 BLAST PHOTO POSITIONS
========================================================= */

const blastPositions = [

    { left: "3%",  top: "6%",  r: "-8deg" },
    { left: "25%", top: "3%",  r: "6deg" },
    { left: "51%", top: "4%",  r: "-5deg" },
    { left: "76%", top: "5%",  r: "9deg" },

    { left: "9%",  top: "23%", r: "7deg" },
    { left: "29%", top: "19%", r: "-9deg" },
    { left: "70%", top: "20%", r: "6deg" },
    { left: "87%", top: "25%", r: "-7deg" },

    { left: "1%",  top: "42%", r: "5deg" },
    { left: "16%", top: "37%", r: "-6deg" },
    { left: "78%", top: "39%", r: "8deg" },
    { left: "91%", top: "45%", r: "-5deg" },

    { left: "5%",  top: "61%", r: "-7deg" },
    { left: "21%", top: "57%", r: "8deg" },
    { left: "73%", top: "58%", r: "-8deg" },
    { left: "88%", top: "62%", r: "6deg" },

    { left: "10%", top: "77%", r: "6deg" },
    { left: "27%", top: "72%", r: "-7deg" },
    { left: "69%", top: "74%", r: "8deg" },
    { left: "86%", top: "78%", r: "-6deg" },

    { left: "4%",  top: "89%", r: "-5deg" },
    { left: "22%", top: "87%", r: "7deg" },
    { left: "76%", top: "88%", r: "-8deg" },

    { left: "34%", top: "9%",  r: "-7deg" },
    { left: "62%", top: "9%",  r: "8deg" },

    { left: "34%", top: "82%", r: "7deg" },
    { left: "58%", top: "83%", r: "-8deg" },

    { left: "13%", top: "49%", r: "9deg" },
    { left: "82%", top: "51%", r: "-9deg" }

];


/* =========================================================
   CREATE 29 BLAST PHOTOS
========================================================= */

function createBlastPhotos() {

    if (!blastCollage) return;

    blastCollage.innerHTML = "";

    blastPositions.forEach((position, index) => {

        const photo = document.createElement("img");

        const number = String(index + 1).padStart(2, "0");

        photo.src = `blast/${number}.jpg`;

        photo.alt = `Birthday memory ${index + 1}`;

        photo.className = "blast-photo";

        photo.style.left = position.left;
        photo.style.top = position.top;
        photo.style.setProperty(
            "--rotation",
            position.r
        );

        photo.style.animationDelay =
            `${index * 0.07}s`;

        blastCollage.appendChild(photo);
    });
}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti() {

    if (!confettiContainer) return;

    confettiContainer.innerHTML = "";

    const symbols = [
        "💗",
        "✨",
        "💕",
        "🎉",
        "💖",
        "⭐"
    ];

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("span");

        piece.className = "confetti";

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            `${Math.random() * 100}%`;

        piece.style.fontSize =
            `${10 + Math.random() * 12}px`;

        piece.style.animationDuration =
            `${3 + Math.random() * 4}s`;

        piece.style.animationDelay =
            `${Math.random() * 2}s`;

        confettiContainer.appendChild(piece);
    }
}


/* =========================================================
   OPEN SURPRISE
========================================================= */

if (openButton) {

    openButton.addEventListener("click", () => {

        const welcomeScreen =
            document.getElementById("welcomeScreen");

        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }

        if (birthdayBlast) {

            birthdayBlast.classList.add(
                "show-blast"
            );

            createBlastPhotos();
            createConfetti();

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
        }

        /* Start music after user interaction */
        if (birthdayMusic) {

            birthdayMusic.currentTime = 0;

            birthdayMusic.play().catch(() => {
                console.log(
                    "Music could not autoplay."
                );
            });
        }

    });

}


/* =========================================================
   BLAST → BIRTHDAY INTRO
========================================================= */

if (blastContinue) {

    blastContinue.addEventListener("click", () => {

        if (birthdayBlast) {
            birthdayBlast.classList.remove(
                "show-blast"
            );
        }

        if (birthdayScreen) {

            birthdayScreen.classList.add(
                "show-screen"
            );

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
        }

    });

}


/* =========================================================
   BIRTHDAY INTRO → RELATIONSHIP
========================================================= */

if (continueButton) {

    continueButton.addEventListener("click", () => {

        if (relationshipSection) {

            relationshipSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}


/* =========================================================
   RELATIONSHIP → STORY
========================================================= */

if (storyNextButton) {

    storyNextButton.addEventListener("click", () => {

        if (storySection) {

            storySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}


/* =========================================================
   FINAL BUTTON
========================================================= */

if (finalButton) {

    finalButton.addEventListener("click", () => {

        if (finalSurprise) {

            finalSurprise.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}


/* =========================================================
   FLOATING HEARTS & SPARKLES
========================================================= */

const floatingContainer =
    document.querySelector(".floating-elements");

function createFloatingItem() {

    if (!floatingContainer) return;

    const item =
        document.createElement("div");

    item.className = "floating-item";

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "💫"
    ];

    item.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    item.style.left =
        `${Math.random() * 100}%`;

    item.style.fontSize =
        `${12 + Math.random() * 18}px`;

    const duration =
        5 + Math.random() * 5;

    item.style.animationDuration =
        `${duration}s`;

    floatingContainer.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

setInterval(createFloatingItem, 900);


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("active");
    });

}


/* =========================================================
   RELATIONSHIP METER
========================================================= */

if (meterFill) {

    const meterObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        meterFill.style.width =
                            "92%";

                        meterObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.5
            }
        );

    meterObserver.observe(meterFill);

}


/* =========================================================
   PHOTO LIGHTBOX
========================================================= */

const memoryPhotos =
    document.querySelectorAll(".memory-photo");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


memoryPhotos.forEach((photo) => {

    photo.addEventListener("click", () => {

        if (!lightbox || !lightboxImage) return;

        lightboxImage.src =
            photo.dataset.photo ||
            photo.src;

        lightbox.classList.add("show");

        document.body.style.overflow =
            "hidden";
    });

});


function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}


if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

}


/* =========================================================
   ESCAPE KEY FOR LIGHTBOX
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


/* =========================================================
   MYSTERY BOXES
========================================================= */

const mysteryBoxes =
    document.querySelectorAll(".mystery-box");

const mysteryMessage =
    document.getElementById("mysteryMessage");

const mysteryMessageText =
    document.getElementById(
        "mysteryMessageText"
    );


mysteryBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        /* Remove shake from other boxes */
        mysteryBoxes.forEach((item) => {
            item.classList.remove("shake");
        });

        /* Restart animation */
        void box.offsetWidth;

        box.classList.add("shake");

        setTimeout(() => {

            if (
                mysteryMessageText &&
                box.dataset.message
            ) {

                mysteryMessageText.textContent =
                    box.dataset.message;
            }

            if (mysteryMessage) {

                mysteryMessage.classList.add(
                    "show"
                );

                mysteryMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        }, 500);

    });

});


/* =========================================================
   BUTTON HEART EFFECT
========================================================= */

const allButtons =
    document.querySelectorAll("button");

allButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const heart =
            document.createElement("span");

        heart.textContent = "❤️";

        heart.style.position = "fixed";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "10000";

        const rect =
            button.getBoundingClientRect();

        heart.style.left =
            `${rect.left + rect.width / 2}px`;

        heart.style.top =
            `${rect.top}px`;

        heart.style.fontSize = "18px";

        heart.style.transition =
            "all 0.8s ease";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {

            heart.style.transform =
                "translateY(-45px) scale(1.3)";

            heart.style.opacity = "0";

        });

        setTimeout(() => {
            heart.remove();
        }, 850);

    });

});


/* =========================================================
   INITIAL STATE
========================================================= */

if (birthdayBlast) {
    birthdayBlast.classList.remove(
        "show-blast"
    );
}

if (birthdayScreen) {
    birthdayScreen.classList.remove(
        "show-screen"
    );
}

console.log(
    "🎂 Tasmiya Birthday Website Loaded ❤️"
);
