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
                        price: datas[0][i].price,
                        alt: datas[0][i].alt,
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
      case "ellieroseWilkens":
        user = ellierosewilkens
        break;
      case "tracyGalindo":
        user = tracygalindo
        break;
      case "rhodeDubois":
        user = rhodedubois
        break;
      case "nabeelBradford":
        user = nabeelbradford
        break;
      case "mimiKeel":
        user = mimikeel
        break;
      case "marcelNikolic":
        user = marcelnikolic
        break;
        default:
        console.log("name of photographe page : " + window.location.href.split("/").pop().split('.').slice(0, -1).join('.'));
        break;
    }
    return user
  };

// OBJECTS INSTANTIATION
const tracygalindo = createPhotographe(82)
const mimikeel = createPhotographe(243)
const nabeelbradford = createPhotographe(527)
const rhodedubois = createPhotographe(925)
const marcelnikolic = createPhotographe(195)
const ellierosewilkens = createPhotographe(930)

// console.log(ellierosewilkens.getInfos());
// console.log(mimikeel.getInfos());


// console.log(mimikeel.getMedias());

export {
    getUser,
    tracygalindo,
    mimikeel,
    nabeelbradford,
    rhodedubois,
    ellierosewilkens,
    marcelnikolic,
}