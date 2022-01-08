import {drawCard} from "./drawCard.js";

const buttonAdd = document.getElementById('buttonCount');
const inputAdd = document.getElementById('inputCount');
const errorWindow = document.querySelector('.errorWindow');
const waitGif = document.querySelector('.wait');

const useRequest = () =>{
    return fetch(`https://api.unsplash.com/photos/?client_id=yow5hrhO1AKLeVLodM_s3K7fxCBnIyweRE8fx0LS-ow`)
        .then((response) => { return response.json(); })
        .then((data) => { return data })
        .catch(() => { errorWindow.style.display = "block" });
}
buttonAdd.addEventListener('click',async ()=>{
    waitGif.style.display = "block";
    for(let i = 0; i < parseInt(inputAdd.value); i++){
        const requestResult = await useRequest();

        requestResult.forEach(item=>drawCard(item.urls.regular, item.user.name, item.width, item.height))
    }
    waitGif.style.display = "none"
})