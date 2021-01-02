// import 'regenerator-runtime/runtime' // important babel 
import { data } from './data.js'

// DOM ELEMENTS
const cards = document.getElementsByClassName("cards")
const card = document.getElementsByClassName("card")
const tags = document.getElementsByClassName("tags")
const tagFilter = document.querySelectorAll("nav a")

console.log(cards);

// AFFICHER LES PHOTOGRAPHES
const fetchPhotographers = (data) => {
let result =''
const resultat = [...data.photographers].map(item => {
    return item
})
for(let i = 0; i < resultat.length; i++) {
    result += `
    <div class="card" id="${resultat[i].id}">
        <a href="#">
            <img src="https://res.cloudinary.com/dps3eww2i/image/upload/v1609005020/P6-img/${resultat[i].portrait}" alt="${resultat[i].name}">
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
        console.log(item.tags);
        return item.tags
    })
    for(let i = 0; i < res.length; i++) {
        for(let j = 0; j < res[i].length; j++) {
            affichageTags += `
                <a class="tag-link" aria-label="tag animals" href="#">
                <span class="tag">#${res[i][j]}</span>
                </a>
            `
            tags[i].innerHTML = affichageTags
        }
        affichageTags = ''
    }
}


const showAllPhoto = (data) => {
    console.log(Object.values(data)[1].filter(elem => elem.photographerId === 82));
}

// RECHERCHE PAR TAG
const filterByTags = (tag) => {
    let res = data.photographers.map(el => el.tags.includes(tag) ? el.id : -1)
    console.log(data.photographers[0].tags)
    console.log(tag)
    for (let i = 0; i < res.length; i++) {
        if(res[i] !== -1) {
            card[i].style.display = "flex"
        } else {
            card[i].style.display = "none"
        }
    }
}

// FILTRAGE PHOTO LORS DU CLIC SUR LE TAG
tagFilter.forEach(item => item.addEventListener("click",(e) => {
    filterByTags(e.target.innerText.substring(1).toLowerCase())
}))

fetchPhotographers(data)
fetchTags(data)
// showAllPhoto(data)
// filterByTags("fashion")

































// import './data.js'

// // DOM ELEMENTS
// const cards = document.getElementsByClassName("cards")
// const tags = document.getElementsByClassName("tags")
// const tagFilter = document.querySelectorAll("nav a")


// // RESQUEST
// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };
// const requete = async() => {
//     const response = await fetch("https://cors-anywhere.herokuapp.com/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json", requestOptions)
//     const data = await response.json()
//     fetchPhotographers(data)
//     fetchTags(data)
// } 

// // AFFICHER LES PHOTOGRAPHES
// const fetchPhotographers = async(data) => {
//     let result =''
//     const resultat = await [...data.photographers].map(item => {
//         return item
//     })
//     for(let i = 0; i < resultat.length; i++) {
//         result += `
//         <div class="card">
//             <a href="#">
//                 <img src="https://res.cloudinary.com/dps3eww2i/image/upload/v1609005020/P6-img/${resultat[i].portrait}" alt="${resultat[i].name}">
//                 <h2>${resultat[i].name}</h2>
//             </a>
//             <p>${resultat[i].city}, ${resultat[i].country}</p>
//             <p>${resultat[i].tagline}</p>
//             <p>${resultat[i].price}€/jour</p>
//             <div class="tags"></div>
//         </div>
//         `
//     }
//             cards[0].innerHTML = result;
//             return resultat;
// }

//     // AFFICHER LES TAGS SOUS CHAQUE PHOTOGRAPHES
//     const fetchTags = async(data) => {
//         let affichageTags =''
//         const res = await[...data.photographers].map(item => {
//             console.log(item.tags);
//             return item.tags
//         })
//         for(let i = 0; i < res.length; i++) {
//             for(let j = 0; j < res[i].length; j++) {
//                 affichageTags += `
//                     <a class="tag-link" aria-label="tag animals" href="#">
//                     <span class="tag">#${res[i][j]}</span>
//                     </a>
//                 `
//                 tags[i].innerHTML = affichageTags
//             }
//             affichageTags = ''
//         }
//     }


// // FILTRER LES PHOTOGRAPHES AVEC TAG DANS NAVIGATION
// tagFilter.forEach(item => {
//     item.addEventListener('click', e => {
//        console.log(tags);
//     })
// })

// requete()
