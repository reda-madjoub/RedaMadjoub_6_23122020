const menu = document.getElementById("menu-dropdown")
const arrow = document.querySelector("#menubutton i")
const dropdown = document.getElementById("menubutton")
const container = document.getElementsByClassName("menu_button")


dropdown.addEventListener("click", e => {
    // AFFICHAGE DU MENU
   if(menu.getAttribute("aria-expanded") === "false") {
       menu.setAttribute("aria-expanded", true)
       menu.style.top = "0px"
       arrow.style.transform = "rotate(180deg)";
       container[0].style.height = "140px";
       
    }else {
        menu.setAttribute("aria-expanded", false)
        arrow.style.transform = "rotate(0deg)";
        menu.style.top = "-300px"
        container[0].style.height = "50px";
   }
})