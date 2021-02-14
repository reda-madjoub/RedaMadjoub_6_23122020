import { data } from '../data.js'
import { filterFunction } from '../filter.js'
import './scrollButton.js'


// DOM ELEMENTS
const cards = document.getElementsByClassName("cards")
const tags = document.getElementsByClassName("tags")


// AFFICHER LES PHOTOGRAPHES
const fetchPhotographers = (data) => {
let result =''
const resultat = [...data.photographers].map(item => {
    return item
})
for(let i = 0; i < resultat.length; i++) {
    console.log(resultat[i].name.charAt(0).toLowerCase() + resultat[i].name.slice(1).replace(/[^0-9a-z]/gi, ''));
    result += `
    <div class="card" id="${resultat[i].id}">
        <a href="./src/pages/${resultat[i].name.charAt(0).toLowerCase() + resultat[i].name.slice(1).replace(/[^0-9a-z]/gi, '')}.html">
            <img src="https://res.cloudinary.com/dps3eww2i/image/upload/w_550,h_550/P6-img/${resultat[i].portrait}" alt="${resultat[i].name}">
            <h2>${resultat[i].name}</h2>
        </a>
        <p>${resultat[i].city}, ${resultat[i].country}</p>
        <p>${resultat[i].tagline}</p>
        <p>${resultat[i].price}€/jour</p>
        <div class="tags"></div>
    </div>
    `
}
        cards[0].innerHTML = result;
        return resultat;
}

// AFFICHER LES TAGS SOUS CHAQUE PHOTOGRAPHES
const fetchTags = (data) => {
    let affichageTags =''
    const res = [...data.photographers].map(item => {
        return item.tags
    })
    for(let i = 0; i < res.length; i++) {
        for(let j = 0; j < res[i].length; j++) {
            affichageTags += `
                <a class="tag-link" aria-label="" href="#">
                <span class="tag">#${res[i][j]}</span>
                </a>
            `
            tags[i].innerHTML = affichageTags
        }
        affichageTags = ''
    }
}

filterFunction()
fetchPhotographers(data)
fetchTags(data)
// localStorage.clear()














// // RECHERCHE PAR TAG
// const tab = []
// const filterByTags = (tag) => {
// // CHECK WHICH TAG ARE SELECTED AND PUTTING THEM INTO "tab" ARRAY
//     if(tab.length < 1) {
//         tab.push(tag)
//     }else {
//         if(tab.includes(tag)) {
//             for (let i = 0; i < tab.length; i++) {
//                 if(tab[i] === tag) {
//                     tab.splice(i,1)
//                 }
//             }
//         }else {
//             tab.push(tag)
//         }
//     }

//     // GET PHOTOGRPAHERS ID WHICH HAVE THE SAME TAGS AS SELECTED TAGS IN "tab" ARRAY
//     let res = []
//     data.photographers.map(el => {
//         el.tags.filter(elem => {
//             if(tab.includes(elem) === true) {
//                 if(!(res.includes(el.id))){
//                     return res.push(el.id)
//                 }
//             }else {
//                 return -1
//             }
//         })
//     }) 

//     // DISPLAY PHOTOGRAPHERS WHICH ID IS IN "res" ARRAY
//     if(res.length !== 0) {
//         for (let i = 0; i < card.length; i++) {
//             if(res.includes(parseInt(card[i].getAttribute('id')))) {
//                 card[i].style.display = "flex"
//             }else {
//                 card[i].style.display = "none"
//             }
//         }
//     }else {
//         for (let i = 0; i < card.length; i++) {
//             card[i].style.display = "flex"
//         }
//     }
//     console.log(tag);
//     console.log(tab);
// }

// // FILTRAGE PHOTO LORS DU CLIC SUR LE TAG
// tagFilter.forEach(item => item.addEventListener("click",(e) => {
//     if(item.classList.contains("selected")) {
//         item.classList.remove("selected")
//     }else {
//         item.classList.add("selected")
//     }
//     filterByTags(e.target.innerText.substring(1).toLowerCase())
// }))

// // EVENT DELEGATION ==> ajout d'un event pour une element n'existant pas encore 
// // Il sera rajouter dynamiquement
// cards[0].addEventListener("click",(e) => {
//     // click sur tag sous la photo d'un photographe
//     if(e.target.classList.value === 'tag') { 
//         const tagPhotographe = e.target.innerText.substring(1).toLowerCase()
//         // Tag sous la photo d'un photographe deja selectionné ? (verification dans le tab)
//         if(tab.includes(tagPhotographe) ) {
//             tagFilter.forEach(item => {
//                 // le tag a deja etait selectionné
//                 if(item.innerText.substring(1).toLowerCase() === tagPhotographe) {
//                     if(item.classList.contains("selected")) {
//                         // suppression de la class "selected"
//                         item.classList.remove("selected")
//                     }else {
//                         // ajout de la class "selected"
//                         item.classList.add("selected")
//                     }
//                 }
//             })
//         }else {
//             // le tag n'a jamais était selectionné
//             tagFilter.forEach(item => {
//                 if(item.innerText.substring(1).toLowerCase() === tagPhotographe) {
//                     if(item.classList.contains("selected")) {
//                         item.classList.remove("selected")
//                     }else {
//                         item.classList.add("selected")
//                     }
//                 }
//             })
//         }
//         filterByTags(tagPhotographe)
//     }
// })
