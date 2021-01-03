import { data } from './data.js'



// DOM ELEMENTS
const tagFilter = document.querySelectorAll("nav a")
const card = document.getElementsByClassName("card")





// RECHERCHE PAR TAG
const tab = []
const filterByTags = (tag) => {
// CHECK WHICH TAG ARE SELECTED AND PUTTING THEM INTO "tab" ARRAY
    if(tab.length < 1) {
        tab.push(tag)
    }else {
        if(tab.includes(tag)) {
            for (let i = 0; i < tab.length; i++) {
                if(tab[i] === tag) {
                    tab.splice(i,1)
                }
            }
        }else {
            tab.push(tag)
        }
    }

    // GET PHOTOGRPAHERS ID WHICH HAVE THE SAME TAGS AS SELECTED TAGS IN "tab" ARRAY
    let res = []
    data.photographers.map(el => {
        el.tags.filter(elem => {
            if(tab.includes(elem) === true) {
                if(!(res.includes(el.id))){
                    return res.push(el.id)
                }
            }else {
                return -1
            }
        })
    }) 

    // DISPLAY PHOTOGRAPHERS WHICH ID IS IN "res" ARRAY
    if(res.length !== 0) {
        for (let i = 0; i < card.length; i++) {
            if(res.includes(parseInt(card[i].getAttribute('id')))) {
                card[i].style.display = "flex"
            }else {
                card[i].style.display = "none"
            }
        }
    }else {
        for (let i = 0; i < card.length; i++) {
            card[i].style.display = "flex"
        }
    }
}

// FILTRAGE PHOTO LORS DU CLIC SUR LE TAG
tagFilter.forEach(item => item.addEventListener("click",(e) => {
    if(item.classList.contains("selected")) {
        item.classList.remove("selected")
    }else {
        item.classList.add("selected")
    }
    filterByTags(e.target.innerText.substring(1).toLowerCase())
}))

export default all;