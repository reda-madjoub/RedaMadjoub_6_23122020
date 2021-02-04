// DOM ELEMENTS
const LaunchForm = document.querySelector("#info-header")
const form = document.getElementById("formulaire");
const containerForm = document.getElementById("container")
const input = document.querySelectorAll("#formulaire input")
const message = document.querySelector("#formulaire textarea")
const buttonValidation = document.getElementById("validation")
const closeEl = document.getElementById("close")
const closeContainer = document.getElementById("close-container")
const header =  document.querySelector("header")
const main =  document.querySelector("main")
const aside =  document.querySelector("aside")

// ALL FIELDS NOT EMPTY ?
const validForm = () => {
    let i = 0
    // CHAMPS INPUT ET MESSAGE NON VIDE ?
    input.forEach( text => {
        if(text.value.length === 0) {
            i++
        }else {
            console.log(text.value);
            text.value = '';
        }
    })
    if(message.value.length === 0) {
        i++
    }else {
        console.log(message.value);
        message.value = '';
    }
    i === 4 ?  true : false
}

// LAUNCH FORM MODAL BY CLICK
LaunchForm.addEventListener("click", e => {
    if(e.target.nodeName === "BUTTON" ) {
        form.style.display = "flex";
        form.setAttribute("aria-hidden", true);
        first.focus()
    }
})

window.addEventListener("keydown", (e) => {
    // TRAP TAB AND SHIFT + TAB INSIDE MODAL
    if(e.target === closeContainer && e.key === "Tab") {
        if(e.target === closeContainer &&  e.shiftKey){
            e.preventDefault()
            buttonValidation.focus()
        }else {
            e.preventDefault()
            first.focus()
        }
    }
    if (e.target === buttonValidation && e.key === "Tab") {
        if(e.target === buttonValidation && e.shiftKey){
            e.preventDefault()
            message.focus()
        }else {
            e.preventDefault()
            closeContainer.focus()
        }
    }


    // CLOSE MODAL WITH ESC 
    if (e.key === 'Escape') {
        form.setAttribute("aria-modal", false)
        form.style.display = "none"
    }

    // LAUNCH MODAL WITH ENTER BUTTON
    if(e.key === "Enter") {
        validForm() 
    }
    // SEND FORM (HERE, JUST LOG VALUES TO CONSOLE)
    buttonValidation.addEventListener("click", (e) => {
        validForm()
    })
})


/*     closeEl MODAL     */

// closeEl FORM MODAL CLICK ON BACKGROUND
form.addEventListener("click", e => {
    if(e.target === form) {
        form.setAttribute("aria-modal", false)
        form.style.display = "none"
    }
}) 

// closeEl FORM MODAL WITH ENTER WHEN FOCUS ON CROSS
closeContainer.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && document.activeElement === closeContainer){
        form.setAttribute("aria-modal", false)
        form.style.display = "none"
    }
}, true);

// closeEl FORM MODAL CLICK ON CROSS
closeEl.addEventListener("click", e => {
    form.setAttribute("aria-modal", false)
    form.style.display = "none"
}) 
