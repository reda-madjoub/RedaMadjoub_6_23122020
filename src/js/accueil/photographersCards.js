// import { data } from '../data.js'
import {  DATA } from '../../API/API.js'
import { filterFunction } from '../filter.js'
import './scrollButton.js'

// DOM ELEMENTS
const cards = document.getElementsByClassName("cards")
const tags = document.getElementsByClassName("tags")

// CREATE HTML CARD FOR PHOTOGRAPHERS
const cardPhotographeHTML = (photographer) => {
    return `
        <div class="card" id="${photographer.id}">
            <a href="./src/pages/${photographer.name.charAt(0).toLowerCase() + photographer.name.slice(1).replace(/[^0-9a-z]/gi, '')}.html">
                <img src="https://res.cloudinary.com/dps3eww2i/image/upload/w_550,h_550/P6-img/${photographer.portrait}" alt="${photographer.name}">
                <h2>${photographer.name}</h2>
            </a>
            <p>${photographer.city}, ${photographer.country}</p>
            <p>${photographer.tagline}</p>
            <p>${photographer.price}€/jour</p>
            <div class="tags"></div>
        </div>
    `
}
// CREATE HTML TAGS BELOW PHOTOGRAPHERS
const tagBelowPhotographersHTML = (tag) => {
    return `<a class="tag-link" aria-label="" href="#">
    <span class="tag">#${tag}</span>
    </a>`
}

// AFFICHER LES PHOTOGRAPHES
const fetchPhotographers = () => {
    let result =''
    DATA().then((data) =>{
        for(let i = 0; i < data.photographers.length; i++) {
            result += `
                ${cardPhotographeHTML(data.photographers[i])}
            `
        }
        cards[0].innerHTML = result;
    })
}

// AFFICHER LES TAGS SOUS CHAQUE PHOTOGRAPHES
const fetchTags = () => {
    let affichageTags =''
    DATA().then((data) => {
        for(let i = 0; i < data.photographers.length; i++) {
            for(let j = 0; j < data.photographers[i].tags.length; j++) {
                affichageTags += `${tagBelowPhotographersHTML(data.photographers[i].tags[j])}`
                tags[i].innerHTML = affichageTags
            }
            affichageTags = ''
        }
    })
}

filterFunction()
fetchPhotographers()
fetchTags()