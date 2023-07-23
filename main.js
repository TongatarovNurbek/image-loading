"use strict";
const button = document.querySelector("button");
const boxAll = document.querySelector(".boxAll");
const firstLoading = document.querySelectorAll(".loading");
const imgs = document.querySelectorAll(".imageCity");
let loadingArray = [];
let counter = 0;
let lastLoading = [];
let lastCityImage = [];
let tekshir = false;
let counterImg = 0;
button.addEventListener("click", function () { result(); });
function fnLoading() {
    for (let i = 0; i < firstLoading.length; i++) {
        let random = Math.ceil(Math.random() * 2 + 3);
        loadingArray.push(random);
        firstLoading[i].style.animationDuration = `${random}s`;
    }
}
fnLoading();
let time = setInterval(function () {
    counter++;
    loadingStop();
    console.log(counter);
    if (counter === 5) {
        clearInterval(time);
    }
}, 1000);
function loadingStop() {
    for (let i = 0; i < loadingArray.length; i++) {
        if (loadingArray[i] == counter) {
            console.log(lastCityImage[i]);
            if (lastCityImage.length <= 0) {
                imgs[i].style.opacity = "1";
                firstLoading[i].style.display = "none";
            }
            if (tekshir) {
                lastLoading[i].style.display = "none";
                lastCityImage[i].style.opacity = "1";
            }
            if (counter === 5) {
                clearInterval(time);
            }
        }
    }
}
function result() {
    if (counter >= 5) {
        console.log(counter);
        counter = 0;
        if (counter <= 0) {
            tekshir = true;
            let time = setInterval(function () {
                counter++;
                loadingStop();
                console.log(counter);
                if (counter === 5) {
                    clearInterval(time);
                }
            }, 1000);
        }
    }
    let section = document.createElement("section");
    let boxAll = document.createElement("div");
    boxAll.classList.add("boxAll");
    for (let i = 0; i < 8; i++) {
        let loading = document.createElement("img");
        lastLoading.push(loading);
        loading.classList.add("loading");
        loading.src = "loading (1).png";
        loading.style.animationDuration = `${loadingRandom()}s`;
        let img = document.createElement("img");
        let box = document.createElement("div");
        img.src = `${randomImg()}`;
        lastCityImage.push(img);
        box.appendChild(loading);
        box.appendChild(img);
        boxAll.appendChild(box);
    }
    section.appendChild(boxAll);
    document.body.appendChild(section);
    console.log(boxAll);
}
function randomImg() {
    if (counterImg >= 10) {
        return `https://picsum.photos/3000/30${counterImg++}`;
    }
    return `https://picsum.photos/3000/300${counterImg++}`;
}
function loadingRandom() {
    let random = Math.ceil(Math.random() * 2 + 3);
    loadingArray.push(random);
    return random;
}
//# sourceMappingURL=main.js.map