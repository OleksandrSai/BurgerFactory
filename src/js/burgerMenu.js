let burgerButton = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu")
let headerOrder = document.querySelector(".header__orderNow")
let main = document.querySelector("main")



burgerButton.addEventListener("click", ()=>{
    main.classList.toggle("activeMain")
    headerOrder.classList.toggle("activeOrder")
    headerMenu.classList.toggle("active")
})

//кнопка Discover the ingredients
document.querySelector(".greetings__button").addEventListener("click", ()=>{
    window.location.assign("./#ingredients")
})




