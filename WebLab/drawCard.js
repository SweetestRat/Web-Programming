export function drawCard(imgSrc, artistText, dimensionsWidth, dimensionsHeight){
    const pictureList = document.querySelector('.pictures-list');

    const pictureListItem = document.createElement('li');
    pictureListItem.className = "pictures-list-item";
    pictureList.appendChild(pictureListItem);

    const pictureContainer = document.createElement('div');
    pictureContainer.className = "picture-container";
    pictureListItem.appendChild(pictureContainer);

    const picture = document.createElement('img');
    picture.className = "picture";
    picture.src = imgSrc;
    pictureContainer.appendChild(picture);

    const content = document.createElement('div');
    content.className = "content";
    pictureListItem.appendChild(content);

    const artist = document.createElement('div');
    artist.className = "artist";
    artist.textContent = artistText;
    content.appendChild(artist);

    const dimensions = document.createElement('div');
    dimensions.className = "dimensions";
    dimensions.textContent = (parseInt(dimensionsWidth) / 100).toString() + 'x' + (parseInt(dimensionsHeight) / 100).toString();
    content.appendChild(dimensions);

    const add = document.createElement('a');
    add.className = "add";
    content.appendChild(add);

    const addImg = document.createElement('img');
    addImg.src = "./img/add.png";
    addImg.style.height = "25px";
    addImg.style.width = "25px";
    content.appendChild(addImg);
}