import { DATA } from '../../API/API.js';

// DOM ELEMENT
const header = document.getElementById("info-header")
const portrait = document.getElementById("photo-header")


// AFFICHER LES TAGS
const createTags = (user) => {
  let affichageTags = ""
  const tags = user[0].tags.map(el => el)
  for(let i = 0; i < tags.length; i++) {
      affichageTags += `
            <a class="tag-link" aria-label="tag animals" href="#">
            <span class="tag">#${tags[i]}</span>
            </a>
        `
    }
    return affichageTags
}

const showPortrait = (user) => {
  portrait.innerHTML = `
  <img src="https://res.cloudinary.com/dps3eww2i/image/upload/w_350,h_350/P6-img/${user[0].portrait}" alt="${user[0].name}">
  `
}

const createHeader = (user) => {
  header.innerHTML = `
    <h1>${user[0].name}</h1>
    <p>${user[0].city}, ${user[0].country}</p>
    <p><em>${user[0].tagline}</em></p>
    <nav id="nav "aria-label="photographer categories" role="navigation">
    ${user[0].tags.map(el => el)}
    </nav>
    <button>Contacter-moi</button>
    `

    // HANDLE TAG SELECTION AND REDIRECTION TO INDEX.HTML
    const tag = document.querySelectorAll("nav a")
    tag.forEach(el => el.addEventListener("click", (e) =>{
      localStorage.setItem("tag", e.target.innerText.split("#").join("")) 
      // REDIRECTION TO INDEX.html
      window.location.replace("../../index.html");
    }))
}

// const tags = createTags(photographer())
// showPortrait(photographer())
// createHeader(photographer())

DATA()
  .then(data => {
    let params = new URLSearchParams(window.location.search)
    const id = parseInt(params.get('id'))
    const photographer = data.photographers.filter(el => el.id === id)
    createTags(photographer)
    showPortrait(photographer)
    createHeader(photographer)
  })