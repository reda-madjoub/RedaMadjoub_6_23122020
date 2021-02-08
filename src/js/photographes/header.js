import {getUser as photographer} from '../../js/fatory.js'

// DOM ELEMENT
const header = document.getElementById("info-header")
const portrait = document.getElementById("photo-header")


// AFFICHER LES TAGS
const createTags = (user) => {
  console.log(photographer().getInfos());
  let affichageTags = ""
  for(let i = 0; i < user.getInfos().tags.length; i++) {
      affichageTags += `
            <a class="tag-link" aria-label="tag animals" href="#">
            <span class="tag">#${user.getInfos().tags[i]}</span>
            </a>
        `
    }
    return affichageTags
}

const showPortrait = (user) => {
  portrait.innerHTML = `
  <img src="https://res.cloudinary.com/dps3eww2i/image/upload/w_350,h_350/P6-img/${user.getInfos().portrait}" alt="${user.getInfos().name}">
  `
}

const createHeader = (user) => {
  header.innerHTML = `
    <h1>${user.getInfos().name}</h1>
    <p>${user.getInfos().city}, ${user.getInfos().country}</p>
    <p><em>${user.getInfos().tagline}</em></p>
    <nav id="nav "aria-label="photographer categories" role="navigation">
    ${tags}
    </nav>
    <button>Contacter-moi</button>
    `

    // HANDLE TAG SELECTION AND REDIRECTION TO INDEX.HTML
    const tag = document.querySelectorAll("nav a")
    tag.forEach(el => el.addEventListener("click", (e) =>{
      localStorage.setItem("tag", e.target.innerText.split("#").join("")) 
      // REDIRECTION TO INDEX.html
      window.location.replace("../../../index.html");
    }))
}

const tags = createTags(photographer())
showPortrait(photographer())
createHeader(photographer())
