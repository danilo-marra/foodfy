var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var receitas = document.querySelectorAll(".receita");

for (let receita of receitas) {
    receita.addEventListener("click", function() {
        const receitaId = receita.getAttribute("id");
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");  
    })
}

closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
});



