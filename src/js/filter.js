import { data } from '../js/data.js'
// DOM ELEMENTS
const tagNavigation = document.querySelectorAll("nav a")
const card = document.getElementsByClassName("card")
const cards = document.getElementsByClassName("cards")
const tagPhoto = document.getElementsByClassName("tags")






const filterFunction = () => {

    const tab = []
    // ADD LOCALSTORAGE TAG TO TAB ARRAY
    // if(localStorage.length > 0) {
    //     tab.push(localStorage.getItem("tag"))
    // }

    // RECHERCHE PAR TAG
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
        // console.log(tag);
        // console.log(tab);
    }
    
    // FILTRAGE LORS DE LA REDIRECTION AVEC UN TAG
    window.addEventListener("load", () => {
        if(localStorage.length > 0) filterByTags(localStorage.getItem("tag"))
        console.log(tab);
        tagNavigation.forEach(item => { // item => tag de la nav selection
            if(tab.includes(item.innerText.substring(1).toLowerCase())) {
                item.classList.add("selected")
                console.log(item)
            }
        })
        
    })

    // FILTRAGE PHOTO LORS DU CLIC SUR LE TAG DE LA NAVIGATION
    tagNavigation.forEach(item => item.addEventListener("click",(e) => { // item => tag de la nav selectionné
        // EFFACE LE LOCAL STORAGE 
        localStorage.clear()
        if(item.classList.contains("selected")) {
            item.classList.remove("selected")
        }else {
            item.classList.add("selected")
        }
        filterByTags(e.target.innerText.substring(1).toLowerCase())
    }))


    
    const checkTagPhotographes = (e) => {
        // click sur tag sous la photo d'un photographe
        if(e.target.classList.value === 'tag') { 
            const tagPhotographe = e.target.innerText.substring(1).toLowerCase()
            // Tag sous la photo d'un photographe deja selectionné ? (verification dans le tab)
            if(tab.includes(tagPhotographe) ) {
                tagNavigation.forEach(item => {
                    // le tag a deja etait selectionné
                    if(item.innerText.substring(1).toLowerCase() === tagPhotographe) {
                        if(item.classList.contains("selected")) {
                            // suppression de la class "selected"
                            item.classList.remove("selected")
                        }else {
                            // ajout de la class "selected"
                            item.classList.add("selected")
                        }
                    }
                })
            }else {
                // le tag n'a jamais était selectionné
                tagNavigation.forEach(item => {
                    if(item.innerText.substring(1).toLowerCase() === tagPhotographe) {
                        if(item.classList.contains("selected")) {
                            item.classList.remove("selected")
                        }else {
                            item.classList.add("selected")
                        }
                    }
                })
            }
            filterByTags(tagPhotographe)
        }
    
    }
        // EVENT DELEGATION ==> ajout d'un event pour une element n'existant pas encore 
    // Il sera rajouter dynamiquement
    cards[0].addEventListener("click", (e) => checkTagPhotographes(e))
    // localStorage.clear()
}

export {filterFunction}
