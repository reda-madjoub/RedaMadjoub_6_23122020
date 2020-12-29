// import 'regenerator-runtime/runtime' // important babel 
import './test.js'


// DOM ELEMENTS
const cards = document.getElementsByClassName("cards")
const tags = document.getElementsByClassName("tags")
const tagFilter = document.querySelectorAll("nav a")

// RESQUEST
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const requete = async() => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json", requestOptions)
    const data = await response.json()
    fetchPhotographers(data)
    fetchTags(data)
} 

// AFFICHER LES PHOTOGRAPHES
const fetchPhotographers = async(data) => {
    let result =''
    const resultat = await [...data.photographers].map(item => {
        return item
    })
    for(let i = 0; i < resultat.length; i++) {
        result += `
        <div class="card">
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
    const fetchTags = async(data) => {
        let affichageTags =''
        const res = await[...data.photographers].map(item => {
            console.log(item.tags);
            return item.tags
        })
        for(let i = 0; i < res.length; i++) {
            for(let j = 0; j < res[i].length; j++) {
                affichageTags += `
                    <a class="tag-link" aria-label="tag animals" href="#">
                    <span class="tag">${res[i][j]}</span>
                    </a>
                `
                tags[i].innerHTML = affichageTags
            }
            affichageTags = ''
        }
    }
    
    // FILTRER LES PHOTOGRAPHES AVEC TAG DANS NAVIGATION
    const focusTagNav = () => {
        
    }
    tagFilter.forEach(item => {
        item.addEventListener('click', data => {
        console.log(document.querySelectorAll(".tags .tag-link .tag"));
    })
})

requete()

/*
clicker sur un tag
chercher les photographe avec le meme tags
mettre les autres display:none pour les cacher
si on reclick sur le meme tag il remet display block
*/