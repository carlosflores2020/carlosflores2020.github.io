document.addEventListener("DOMContentLoaded", function() {

    // Agregar interacción a los títulos
    const titles = document.querySelectorAll("h2");
    titles.forEach(title => {
        title.addEventListener("click", function() {
            this.style.color = "blue";
            this.style.transform = "translateX(10px)";
        });
    });
});

