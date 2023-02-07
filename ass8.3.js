let list = document.querySelector("#navbarTogglerDemo01");

let size = window.matchMedia('(min-width: 375px)');

if(size){
    list.style.display="flex";
    list.style.flexDirection = "column"
}