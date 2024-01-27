const tituloFaq = document.querySelectorAll(".faq-lista dt");

tituloFaq.forEach(i => {
    i.addEventListener("click", () => {
        i.classList.toggle("active");
        i.nextElementSibling.classList.toggle("active");
    })
})

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

window.addEventListener("touchmove", () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});