const tituloFaq = document.querySelectorAll(".faq-lista dt");

tituloFaq.forEach(i => {
    i.addEventListener("click", () => {
        i.classList.toggle("active");
        i.nextElementSibling.classList.toggle("active");
    })
})

