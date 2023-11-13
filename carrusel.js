document.addEventListener("DOMContentLoaded", function () {
    const carrusel = new Glide("#carrusel-programadores", {
        type: "carousel",
        autoplay: 3000,
        hoverpause: true,
    });

    carrusel.mount();

    const infoCarrusel = document.getElementById("info-carrusel");
    const carruselItems = document.querySelectorAll(".carrusel-item");

    carruselItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const info = item.getAttribute("data-info");
            infoCarrusel.innerHTML = `<p>${info}</p>`;
        });

        item.addEventListener("mouseleave", () => {
            infoCarrusel.innerHTML = "";
        });
    });
});
