var backgroundsCount = 4;
var imagesNumber = Math.floor(Math.random() * backgroundsCount);
console.log(imagesNumber)
document.getElementById('main').style.backgroundImage = 'url(bgimages/tm2020/image' + imagesNumber + '.jpg)';