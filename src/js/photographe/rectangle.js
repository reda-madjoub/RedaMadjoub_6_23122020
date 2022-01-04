import { DATA } from '../../API/API.js';
const counter = document.getElementsByClassName("infoMedia")

window.addEventListener("load", () => {
    DATA().then((data) =>{
        let params = new URLSearchParams(window.location.search)
            const id = parseInt(params.get('id'))
            const photographe = data.photographers.filter(el => el.id === id)
            const TJM = photographe[0].price
            data.media.map(el => {
                if(el.photographerId === id){
                    // console.log(el);
                    let counterLike = 0;
                    const test = document.querySelectorAll(".rightMedia p:nth-child(2n) ")
                    for (const item of test) {
                        counterLike += parseInt(item.innerText)
                    }
                    const aside = document.createElement("aside");
                    aside.id = "rectangle"
                    aside.innerHTML = `
                        <div id="likeCount">${counterLike} <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
                        </svg>
                        </div>
                        <div id="tarif">${TJM}€ / jour</div>
                        `
                        document.body.appendChild(aside);
                
                        const likeIncrement = document.querySelectorAll(".like-btn")

                        likeIncrement.forEach(element => {
                            element.addEventListener("keypress", (e) => {
                                if(e.key === "Enter") {
                                    counterLike++
                                    aside.innerHTML = `
                                    <div id="likeCount">${counterLike} <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
                                    </svg>
                                    </div>
                                    <div id="tarif">${TJM}€ / jour</div>
                                    `
                                   }
                            })
                            element.addEventListener("click", () => {
                                counterLike++
                               aside.innerHTML = `
                               <div id="likeCount">${counterLike} <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
                               </svg>
                               </div>
                               <div id="tarif">${TJM}€ / jour</div>
                               `
                            }) 
                        });
                }
            })
    })
})
