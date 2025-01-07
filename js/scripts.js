document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio chargé avec succès !");
    
    // Activer le défilement doux
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("navbar-shadow");
    } else {
        navbar.classList.remove("navbar-shadow");
    }
});

