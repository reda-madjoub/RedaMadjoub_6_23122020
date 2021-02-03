// DOM ELEMENTS
const img = document.getElementsByTagName("img");
const video = document.getElementsByTagName("video");
const lightbox = document.getElementById("lightbox");
const next = document.getElementById("lightbox__next");
const prev = document.getElementById("lightbox__previous");
const closeBtn = document.getElementById("lightbox__close");
const container = document.getElementById("lightbox__container");









// const tab = [...section[0].children];

// AFFICHER CHAQUE ELEMENT DANS LA LIGHTBOX AU CLICK
// tab.forEach(element => {
//     // console.log(element);
//     element.addEventListener("click", (e) => {
//         console.log();
//         let i = 0
//         const dom = `
//         <div id="lightbox" id=${i++}>
//             <button id="lightbox__close">fermer</button>
//             <button id="lightbox__next">suivant</button>
//             <button id="lightbox__previous">précédent</button>
//             <div id="lightbox__container">
//                 <img src="${e.target.getAttribute("src")}" alt="animal rainbow">
//                 <p>Nom de la photo</p>
//             </div>
//         </div>`
//         main.insertAdjacentHTML("beforeend", dom);
//     })
// })


window.addEventListener("load", (e) => {
    
    // LAUNCH LIGHTBOX
    const test = document.querySelectorAll("#card")
    const lightboxImg = [...test].map(el => el.childNodes)
    console.log(lightboxImg[6][1]);
    lightboxImg.forEach(el => {
        el.forEach(item => {
            item.addEventListener("click", () => {
                lightbox.style.display = "flex";
                let html = "";
                html = el[1].tagName === "IMG" ? `<img src="${el[1].currentSrc}"/>` : `<video width="450px" height="450px" controls>
                                                                                    <source src="${el[1].currentSrc}" type="video/mp4">    
                                                                                </video>` 
                container.innerHTML = html
            })
        })
    })
    

    // CLOSE LIGHTBOX WITH WHEN CLICK ON CROSS
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none"
    })

    // SLIDE LEFT TO RIGHT
    next.addEventListener("click", (e) => {
        let limit = lightboxImg.length;
        let html = "";
        
        
    })
    // SLIDE RIGTH TO LEFT
    prev.addEventListener("click", (e) => {
        console.log("prev");
    })
})

window.addEventListener("keydown", (e) => {
    // CLOSE LIGHTBOX WITH ESCAPE
    if(e.key === "Escape") lightbox.style.display = "none"
})
    