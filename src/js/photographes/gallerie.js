import {getUser} from '../fatory.js'

// DOM ELEMENTS
const gallerie = document.getElementById("gallerie");
const filtreDropDownMenu = document.getElementsByClassName("filtreDropDownMenu");
const likeButton = document.getElementsByClassName("like-btn");


// FILTER BY NAME
const filterByName = (user) => {
    const sortArray = Array.from(user.getMedias());
    sortArray.sort((a, b) => {
        if(a.image) {
            return a > b ? 1 : -1;
        }else {
            return a > b ? 1 : -1;
        }
    })
    // console.log(sortArray);
    console.log(user.getMedias());
    return sortArray;
}
// FILTER BY DATE
const filterByDate = (user) => {
    const sortArray = Array.from(user.getMedias());
    sortArray.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
    })
    console.log(sortArray);
    return sortArray;
}
// FILTER BY LIKES
const filterByLikes = (user) => {
    const sortArray = Array.from(user.getMedias());
    sortArray.sort((a, b) => {
        return a.likes > b.likes ? 1 : -1;
    })
    console.log(sortArray);
    return sortArray;
}
// DISPLAY GALLERY
const showGallery = (user) => {

    const html = user.map(element => {


        if(element.hasOwnProperty("video")) {
                // POSTER ATTRIBUTE ADD THUMBNAIL WHICH DESEPPEAR WHEN VIDEO START
                return `
                <div id="card" tabindex="1">
                    <video tabindex="-1" width="450px" height="450px" poster="https://res.cloudinary.com/dps3eww2i/image/upload/w_450,h_450/P6-img/${user[5].image.split('.').slice(0, -1).join('.')}" controls>
                            <source src="https://res.cloudinary.com/dps3eww2i/video/upload/w_450,h_450/P6-img/${element["video"]}" type="video/mp4">
                    </video>
                    <div class="infoMedia">
                    <h3>${element["video"].split('_').join(' ').split('.mp4').join(' ')}</h3>
                    <div class="rightMedia">    
                            <p>${element["price"]}€</p>
                            <p class="like-count">${element["likes"]}</p>
                            <div class="like-btn">
                                <svg tabindex="1" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>`
        }else {
            return `
            <div id="card" tabindex="1">
                <img src="https://res.cloudinary.com/dps3eww2i/image/upload/w_450,h_450/P6-img/${element["image"].split('.').slice(0, -1).join('.')}">
                <div class="infoMedia">
                <h3>${element["image"].split('_').join(' ').split('.jpg').join(' ')}</h3>
                <div class="rightMedia">
                    <p>${element["price"]}€</p>
                    <p class="like-count">${element["likes"]}</p>
                    <div class="like-btn">
                        <svg tabindex="1" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                        </svg>
                    </div>
                </div>   
                </div>
            </div>`
        }
            
    });
    gallerie.innerHTML = html
}



// EVENT ON DROPDOWN ELEMENT
window.addEventListener("load", () => {
    // DROPDOWNMENU FILTER
    [...filtreDropDownMenu].forEach(el => {
        let html = "";
        el.addEventListener("click", (e) => {
            if(e.target === filtreDropDownMenu[0]){
                showGallery(filterByLikes(getUser()))
            }else if (e.target === filtreDropDownMenu[1]) {
                showGallery(filterByDate(getUser()))
            }else if (e.target === filtreDropDownMenu[2]) {
                showGallery(filterByName(getUser()))
            }
        })
    });


    // LIKE BUTTON INCREMENT
    [...likeButton].forEach(el => {
        el.addEventListener("click", (e) => {
            let count = parseInt(el.previousElementSibling.textContent);
            count++;
            let res = count.toString()
            el.previousElementSibling.innerHTML = `${res}`;
        })
    })    
})

showGallery(getUser().getMedias())