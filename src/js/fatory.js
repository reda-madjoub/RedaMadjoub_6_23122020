import { data } from './data.js'

const createPhotographe = (id) => {
    // Make data Object accessible like array
    const datas = Object.values(data)
    // console.log(Array.isArray(datas[1])); // true

    function getInfos() {
        let photographe = {};
        for (let i = 0; i < datas[1].length; i++) {
            if(datas[0][i].id === id){
                return photographe = {
                        name: datas[0][i].name,
                        city: datas[0][i].city,
                        country: datas[0][i].country,
                        tagline: datas[0][i].tagline,
                        portrait: datas[0][i].portrait,
                        tags : datas[0][i].tags,
                        id: datas[0][i].id,
                }
            } 
        }
        
    }

    function getMedias() {
      let media = [];
      for (let i = 0; i < datas[1].length; i++) {
        if(datas[1][i].photographerId === id)  {
          media.push(datas[1][i])
        }
      }
        return media
    } 
        return {
            getInfos,
            getMedias,
        }
}


// CHECK URL AND FILL PAGE WITH PROPER PHOTOGRAPHE
const getUser = () => {
    let user = {}
    switch (window.location.href.split("/").pop().split(".").slice(0, -1).join(".").replace("-", " ")) {
      case "ellie rosewilkens":
        user = ellierosewilkens
        break;
      case "tracygalindo":
        user = tracygalindo
        break;
      case "rhodedubois":
        user = rhodedubois
        break;
      case "nabeelbradford":
        user = nabeelbradford
        break;
      case "mimikeel":
        user = mimikeel
        break;
      case "marcelnikolic":
        user = marcelnikolic
        break;
        default:
        console.log("name of photographe page : " + window.location.href.split("/").pop().split('.').slice(0, -1).join('.'));
        break;
    }
    return user
  }

// OBJECTS INSTANTIATION
const tracygalindo = createPhotographe(82)
const mimikeel = createPhotographe(243)
const nabeelbradford = createPhotographe(527)
const rhodedubois = createPhotographe(925)
const marcelnikolic = createPhotographe(195)
const ellierosewilkens = createPhotographe(930)

// console.log(mimikeel.getMedias());
// console.log(mimikeel.getInfos());

export {
    getUser,
    tracygalindo,
    mimikeel,
    nabeelbradford,
    rhodedubois,
    ellierosewilkens,
    marcelnikolic,
}









// CLASS FACTORY FUNCTIONS

// console.log(Object.values(data));
// console.log(data["photographers"].forEach(name => console.log(name)));
// FACTORY PHOTOGRAPHES
// class photographesFactory {
//     createPhotographe(data) {
//         this.name = data.photographes.name
//         return new Photo(data.name)
//     }
// }
// console.log(typeof PhotoFactory);
// class Photo {
//     constructor(name, imageURL, alt, dscription) {
//         this.name = name
//         // ...
//     }
// }
// const Photo1 = photographesFactory.createPhotographe(data[name])
// const Photo2 = PhotoFactory.createPhoto({name: '', imageUrl: ''})
// const Photo3 = PhotoFactory.createPhoto(data)
// const Photo4 = PhotoFactory.createPhoto(data)


