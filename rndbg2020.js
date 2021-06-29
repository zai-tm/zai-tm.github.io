var backgroundsCount = 6;
var imagesNumber = Math.floor(Math.random() * backgroundsCount);
console.log(imagesNumber)
document.getElementById('main').style.backgroundImage = 'url(https://zai-tm.github.io/bgimages/tm2020/image' + imagesNumber + '.jpg)';