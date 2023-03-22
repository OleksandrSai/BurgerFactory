document.querySelectorAll(".burgers__box__block")
.forEach(el=> el.addEventListener("click", ()=>{

el.classList.toggle("activeDetails");

el.children[2].classList.toggle("aciveIngredients");

el.children[3].textContent = el.children[2].classList
.contains('aciveIngredients') == true ? "Reduce" : "Details";
}))