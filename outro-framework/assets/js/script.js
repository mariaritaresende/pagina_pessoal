document.addEventListener("DOMContentLoaded", function () {
    const btnTema = document.getElementById("btn-tema");
    const htmlElement = document.documentElement;

    btnTema.addEventListener("click", function () {
        const temaAtual = htmlElement.getAttribute("data-theme");
        if (temaAtual === "light") {
            htmlElement.setAttribute("data-theme", "dark");
        } else {
            htmlElement.setAttribute("data-theme", "light");
        }
    });
});