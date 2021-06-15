var backgroundsCount = 4;
var imagesNumber = Math.floor(Math.random() * backgroundsCount);
console.log(imagesNumber)
document.getElementById('main').style.backgroundImage = 'url(images/image' + imagesNumber + '.jpg)';