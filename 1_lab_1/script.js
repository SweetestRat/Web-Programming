window.startTime = (new Date).getTime();
window.onload = function () {
    console.log((new Date).getTime() - window.startTime);
}

var PictureMap = new Map();


window.addEventListener('load',function () {

    PictureList()

    let img = document.getElementsByClassName("PictureForFree")
    console.log(img[1])
    console.log(img.length)

    let SS = fetchHandler()
    console.log(SS)

    for (let i =0; i <img.length; i++)
    {
        SS.then(( uurrll)=>{
            console.log(uurrll[i])
            img[i].src  = uurrll[i].download_url  })
    }
    let time = ((new Date).getTime() - window.startTime)/1000
    document.getElementById("foot").innerHTML= "Load time: "+time+"c";

    document.getElementById("About_US").style.color="black"

    if (document.location.href == 'http://localhost:63342/1_lab/WebLab1.html')
    {
        document.getElementById("about-us").style.textDecoration="none"
    }
    if (document.location.href == 'http://localhost:63342/1_lab/WebLab4.html')
    {
        document.getElementById("about-us").style.textDecoration="underline"
    }

},false)

function showCart()
{

    let BuyList

    if (PictureMap.get('BuyList') !== null)
        {
            BuyList = JSON.parse(localStorage.getItem('BuyList'))

            let output = ""
            let sum = 0

            for (let i=0; i < BuyList.length; i++)
            {
                output += BuyList[i].name + " - " + BuyList[i].price + "\n"
                sum += BuyList[i].price

            }
            output += "Итого: " + sum

            alert(output)


        }
        else {
            alert('Вы ничего не купили')
        }

    console.log(JSON.parse(localStorage.getItem('BuyList')))

}

function addToCart (PictureName)  //На html страницу в вызове данной функции в onclick, передавай в неё названия своих картин
{
    let BuyList
    let pos = {
        name: "",
        price: 0
    }


    if (PictureMap.get(PictureName) !== null )
        if (localStorage.getItem('BuyList') !== null)
        {
            BuyList = JSON.parse(localStorage.getItem('BuyList'))

            pos.name = PictureName
            pos.price = PictureMap.get(PictureName)
            BuyList.push(pos)

            localStorage.setItem('BuyList', JSON.stringify(BuyList))


        }
        else {
            BuyList = []
            pos.name = PictureName
            pos.price = PictureMap.get(PictureName)
            BuyList.push(pos)

            localStorage.setItem('BuyList', JSON.stringify(BuyList))
        }

    else
        alert("Не продам и не скажу почему")

    console.log(JSON.parse(localStorage.getItem('BuyList')))

}

function PictureList()
{
    let BuyList = []

    localStorage.setItem('BuyList', JSON.stringify(BuyList))



    PictureMap.set("Название картины", 1000000) // Картины храняться в Map (массив в котором значение выдаётся по ключу)
                                                // Название карины - ключ, Цена картины значение
                                                // Заполни этот массив своми значениями, чтобы поиск и покупка работали работал

    PictureMap.set("Name1", 1000)
    PictureMap.set("Name2", 2000)
    PictureMap.set("Name3", 3000)
    PictureMap.set("Name4", 4000)
    PictureMap.set("Name5", 5000)
}

function Checkis() {
    let input = document.getElementById("Check").value


    if (PictureMap.get(input) !== null )
        if (PictureMap.get(input) == 0)
            alert("Такая Картина есть ! и она бесплатна")
        else
            alert("Такая Картина есть ! и она стоит:" + PictureMap.get(input))
    else
        alert("Крысы такого не рисуют")



    return false
}

async function fetchHandler() {

    const url = "https://picsum.photos/v2/list";

    try {
        const response = await fetch(url);
        let data = await response.json()
        console.log(data)

        return data;
    } catch (error) {
        console.log(error);
    }
}