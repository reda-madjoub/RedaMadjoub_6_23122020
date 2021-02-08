// DOM ELEMENTS
const img = document.getElementsByTagName("img");
const video = document.getElementsByTagName("video");
const lightbox = document.getElementById("lightbox");
const next = document.getElementById("lightbox__next");
const prev = document.getElementById("lightbox__previous");
const closeBtn = document.getElementById("lightbox__close");
const container = document.getElementById("lightbox__container");



const trapFocus = (e) => {
        // TRAP TAB AND SHIFT + TAB INSIDE MODAL    
        if(e.target === closeBtn && e.key === "Tab") {
            if(e.target === closeBtn &&  e.shiftKey){
                e.preventDefault()
                prev.focus()
            }else {
                e.preventDefault()
                next.focus()
            }
        }
        if (e.target === prev && e.key === "Tab") {
            if(e.target === prev && e.shiftKey){
                e.preventDefault()
                next.focus()
            }else {
                e.preventDefault()
                closeBtn.focus()
            }
        }
        container.focus()

        
}

window.addEventListener("load", (e) => {    
    // LAUNCH LIGHTBOX
    const test = document.querySelectorAll("#card")
    const nbCard = test.length
    let count = 0;

    const lightboxImg = [...test].map(el => el.childNodes)
    lightboxImg.forEach(el => {
            el[1].addEventListener("click", (e) => {
                // e.stopPropagation()
                // SHOW LIGHTBOX
                lightbox.style.display = "flex";
                // MAKE CROSS FOCUS
                closeBtn.focus()
                window.addEventListener("keydown",trapFocus)
                let html = "";
                // SHOW MEDIA INSIDE LIGHTBOX
                console.log(el);
                html = el[1].tagName === "IMG" ? `<img src="${el[1].currentSrc}" alt="${el[3].innerText.replace(/[^a-z]/gi, ' ')}"/> <h3>${el[3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` : `<video width="450px" height="450px" controls="true" alt="${el[3].innerText.replace(/[^a-z]/gi, ' ')}" alt="${el[3].innerText.replace(/[^a-z]/gi, ' ')}" autoplay>
                                                                                    <source src="${el[1].currentSrc}" type="video/mp4">    
                                                                                </video> <h3>${el[3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` 
                container.innerHTML = html
            })
        
    })
    

    // CLOSE LIGHTBOX WITH WHEN CLICK ON CROSS
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none"
    })


    // SLIDE LEFT TO RIGHT
    window.addEventListener("keydown", (e) => {
        if(e.key === "ArrowRight") {
        count < (nbCard - 1) ? count++ : count = 0;
        let html = lightboxImg[count][1].tagName === "IMG" ? `<img src="${lightboxImg[count][1].currentSrc}" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}" /><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` : `<video width="450px" height="450px" controls="true" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}" autoplay>
                                                                                                                        <source src="${lightboxImg[count][1].currentSrc}" type="video/mp4">    
                                                                                                                    </video><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` 
    container.innerHTML = html;
        }
        if(e.key === "ArrowLeft") {
            count <= 0 ? count = nbCard - 1 : count--;
            let html = lightboxImg[count][1].tagName === "IMG" ? `<img src="${lightboxImg[count][1].currentSrc}" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}"/><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` : `<video width="450px" height="450px" controls="true" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}" autoplay>
                                                                                                                            <source src="${lightboxImg[count][1].currentSrc}" type="video/mp4" >    
                                                                                                                        </video><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` 
            container.innerHTML = html 
        }

    })

    next.addEventListener("click", (e) => {
        count < (nbCard - 1) ? count++ : count = 0;
        let html = lightboxImg[count][1].tagName === "IMG" ? `<img src="${lightboxImg[count][1].currentSrc}" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}"/><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` : `<video width="450px" height="450px" controls="true" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}" autoplay>
                                                                                                                        <source src="${lightboxImg[count][1].currentSrc}" type="video/mp4">    
                                                                                                                    </video><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` 
    container.innerHTML = html;
    })
    // SLIDE RIGTH TO LEFT
    prev.addEventListener("click", (e) => {
        count <= 0 ? count = nbCard - 1 : count--;
            let html = lightboxImg[count][1].tagName === "IMG" ? `<img src="${lightboxImg[count][1].currentSrc}" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}"/><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` : `<video width="450px" height="450px" alt="${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}" controls>
                                                                                                                            <source src="${lightboxImg[count][1].currentSrc}" type="video/mp4">    
                                                                                                                        </video><h3>${lightboxImg[count][3].innerText.replace(/[^a-z]/gi, ' ')}</h3>` 
            container.innerHTML = html 
        })
    })

// CLOSE LIGHTBOX WITH ESCAPE
window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") lightbox.style.display = "none"
})
    