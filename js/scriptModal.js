const modal = document.querySelector("#modal");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const receitas = document.querySelectorAll(".receita");

for (let receita of receitas) {
    receita.addEventListener("click", function() {
        const imgId = receita.querySelector("img").getAttribute("alt");
        const titleId = receita.querySelector("h3").textContent;
        const autorId = receita.querySelector("p").textContent;
        modal.classList.toggle("active");
        modalOverlay.classList.toggle("active");  
        
        modal.querySelector("img").src = `assets/${imgId}.png`;
        modal.querySelector("h3").innerHTML = titleId;
        modal.querySelector("p").innerHTML = autorId;
    })
    
}

closeButton.addEventListener("click", function() {
    modal.classList.toggle("active");
    modalOverlay.classList.toggle("closed");
});



