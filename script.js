/*=========================================
HEADER
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.style.transform = "translateY(0)";
    header.style.opacity = "1";

});

/*=========================================
MENU MOBILE
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");

const menuLinks = document.querySelectorAll(".menu a");


menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    const menuAberto = menu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );


    if (menuAberto) {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


/* FECHAR MENU AO CLICAR EM UM LINK */

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

/*=========================================
MODAIS
=========================================*/

const projectCards = document.querySelectorAll(".project-card");

const modals = document.querySelectorAll(".modal");

const closeButtons = document.querySelectorAll(".close-modal");


projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const modalId = card.dataset.modal;

        const modal = document.getElementById(modalId);

        if (modal) {

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        }

    });

});


closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = button.closest(".modal");

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });

});


modals.forEach(modal => {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modals.forEach(modal => {

            modal.classList.remove("active");

        });

        document.body.style.overflow = "";

    }

});

/*=========================================
BOTÃO VOLTAR AO TOPO
=========================================*/

const backToTop = document.querySelector(".back-to-top");


/* MOSTRAR BOTÃO AO ROLAR */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* VOLTAR AO TOPO */

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});