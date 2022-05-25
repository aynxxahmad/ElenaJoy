const burger = document.querySelector(`.burger`);
const nav = document.querySelector(`.nav-links`)
const navLi = document.querySelectorAll(`.nav-links li`);
burger.addEventListener(`click`,navOpen)




function navOpen(){
    nav.classList.toggle(`nav-active`);
}

navLi.forEach(link=>{
    link.addEventListener(`click`,()=>{
        nav.classList.remove(`nav-active`);
    });

 })     