let swiper = new Swiper(".swiper", {
    slidesPerView: 3.2,
    breakpoints: {
        1380: {
            slidesPerView: 3.2,
        },
        992: {
            slidesPerView: 2,
        },
        100: {
            slidesPerView: 1,
        },
    }
})


let burger = document.querySelector(".header__menu_burger")
let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__menu_burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    body.classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if (scrollY >= 150) {
        document.querySelector(".header").classList.add("header__active")
        document.querySelector(".promo").classList.add("promo__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
        document.querySelector(".promo").classList.remove("promo__active")
    }
})


let menu = document.querySelector(".header__inner_menu_list")


menu.addEventListener("click", function(e){
    if (e.target.dataset.id) {
        let target = document.querySelector(e.target.hash)
        let pos = target.offsetTop
        e.preventDefault();
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }
})

let logo = document.querySelector(".header__menu_logo")

logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", function(){
    if (scrollY >= 200) {
        document.querySelector(".arrow").classList.add("arrow__visible")
    } else {
        document.querySelector(".arrow").classList.remove("arrow__visible")
    }
})


let arrow = document.querySelector(".arrow")


arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})