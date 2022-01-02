import { DATA } from './../API/API.js'
// DOM ELEMENTS
const tagNavigation = document.querySelectorAll("nav a")
const card = document.getElementsByClassName("card")
const cards = document.getElementsByClassName("cards")
const tagPhoto = document.getElementsByClassName("tags")


// CHECK WHICH TAG ARE SELECTED AND PUTTING THEM INTO ARRAY
const isTagSelected = (array, selectedTag) => {
    if(array.length < 1) {
        array.push(selectedTag)
    }else {
        if(array.includes(selectedTag)) {
            for (let i = 0; i < array.length; i++) {
                if(array[i] === selectedTag) {
                    array.splice(i,1)
                }
            }
        }else {
            
            array.push(selectedTag)
        }
    }
}
// GET PHOTOGRPAHERS ID WHEN HAVE THE SAME TAGS SELECTED IN TAGARRAY
const getPhotographerIdBySelectedTag = (data, TagArray, IdArray) => {
data.photographers.map(el => {
    el.tags.filter(elem => {

        if(TagArray.includes(elem) === true) {
            if(!(IdArray.includes(el.id))){
                return IdArray.push(el.id)
            }
        }else {
            return -1
        }
    })
})
}
// DISPLAY PHOTOGRAPHERS WHEN ID IS IN IDARRAY
const showPhotographersByIds = (IdArray, domElt) => {
    if(IdArray.length !== 0) {
        for (let i = 0; i < domElt.length; i++) {
            if(IdArray.includes(parseInt(domElt[i].getAttribute('id')))) {
                domElt[i].style.display = "flex"
            }else {
                domElt[i].style.display = "none"
            }
        }
    }else {
        for (let i = 0; i < domElt.length; i++) {
            domElt[i].style.display = "flex"
        }
    }
}

const filterFunction = () => {
    const tab = []
    // RECHERCHE PAR TAG
    const filterByTags = (tag) => {
        // CHECK WHICH TAG ARE SELECTED AND PUTTING THEM INTO "tab" ARRAY
        isTagSelected(tab, tag)
        DATA()
            .then(req => {
                // ID'S PHOTOGRAPHERS MATCHING SELECTED TAG
                let res = []
                getPhotographerIdBySelectedTag(req, tab, res)               
                showPhotographersByIds(res, card)
            })
    }
    
    // FILTRAGE LORS DE LA REDIRECTION AVEC UN TAG
    window.addEventListener("load", () => {
        if(localStorage.length > 0) filterByTags(localStorage.getItem("tag"))
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
