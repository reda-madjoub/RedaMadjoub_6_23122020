// import 'regenerator-runtime/runtime' // important babel 
import { data } from './data.js'
import './scrollButton.js'


// DOM ELEMENTS
const tagFilter = document.querySelectorAll("nav a")
const card = document.getElementsByClassName("card")
const cards = document.getElementsByClassName("cards")
const tags = document.getElementsByClassName("tags")


// AFFICHER LES PHOTOGRAPHES
const fetchPhotographers = (data) => {
let result =''
const resultat = [...data.photographers].map(item => {
    return item
})
for(let i = 0; i < resultat.length; i++) {
    result += `
    <div class="card" id="${resultat[i].id}">
        <a href="./src/pages/${resultat[i].name.replace(/\s+/g, '').toLowerCase()}.html">
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
    console.log(tag);
    console.log(tab);
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

/* debut test  ==> event delegation*/
cards[0].addEventListener("click",(e) => {
    // console.log(e.target.classList.value === 'tag-link' ||e.target.classList.value === 'tag');
    // console.log(e.target);
    // console.log(e.target.parentNode);

    
    //****** */
    // click sur tag sous la photo d'un photographe
    if(e.target.classList.value === 'tag') { 
        const tagPhotographe = e.target.innerText.substring(1).toLowerCase()
        
        // Tag sous la photo d'un photographe deja selectionné ? (verification dans le tab)
        if(tab.includes(tagPhotographe) ) {
            tagFilter.forEach(item => {
                if(item.innerText.substring(1).toLowerCase() === tagPhotographe) {
                    if(item.classList.contains("selected")) {
                        item.classList.remove("selected")
                    }else {
                        item.classList.add("selected")
                    }
                }
            })
        }else {
            tagFilter.forEach(item => {
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
})







/* fin test */




fetchPhotographers(data)
fetchTags(data)

































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
