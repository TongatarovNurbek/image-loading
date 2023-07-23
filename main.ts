
const button:HTMLButtonElement = document.querySelector("button")!;
const boxAll:HTMLDivElement = document.querySelector(".boxAll")!
const firstLoading:NodeListOf<HTMLDivElement> = document.querySelectorAll(".loading")!;
const imgs:NodeListOf<HTMLImageElement> = document.querySelectorAll(".imageCity")!

let loadingArray:number[] = []
let counter:number = 0
let lastLoading:any[] = []
let lastCityImage:any[] = []
let tekshir:boolean = false
let counterImg:number = 0

button.addEventListener("click",function() {result()})

function fnLoading():void {
    for (let i = 0; i < firstLoading.length; i++) {
        let random:number = Math.ceil(Math.random() * 2+3)
        loadingArray.push(random)
        firstLoading[i].style.animationDuration = `${random}s`
    }
}
fnLoading()

let time:any = setInterval(function():void {
    counter++
    loadingStop()
    
    console.log(counter);
    if (counter === 5) {
        clearInterval(time)
    }
}, 1000);



function loadingStop():void {
    for (let i = 0; i < loadingArray.length; i++) {
        if (loadingArray[i] == counter) {
            console.log(lastCityImage[i]);
            if (lastCityImage.length <= 0) {
                imgs[i].style.opacity = "1"
                firstLoading[i].style.display = "none"
            }

            if (tekshir) {
                lastLoading[i].style.display = "none"
                lastCityImage[i].style.opacity = "1"
            }
            
            if (counter === 5) {
                clearInterval(time)
            }
        }
    }
}


function result():void {

    if (counter >= 5) {
        console.log(counter);
        
        counter = 0
        if (counter <= 0) {
            tekshir = true
            let time:any = setInterval(function():void {
                counter++
                loadingStop()
                
                console.log(counter);
                if (counter === 5) {
                    clearInterval(time)
                }
            }, 1000);
        }
    }
    let section:HTMLElement = document.createElement("section")

    let boxAll:HTMLDivElement = document.createElement("div")
    boxAll.classList.add("boxAll")

    for (let i = 0; i < 8; i++) {
        let loading:HTMLImageElement = document.createElement("img")
        lastLoading.push(loading)
        loading.classList.add("loading")
        loading.src = "loading (1).png"
        loading.style.animationDuration = `${loadingRandom()}s`
        let img:HTMLImageElement = document.createElement("img")
        let box:HTMLDivElement = document.createElement("div")
        img.src = `${randomImg()}`
        lastCityImage.push(img)
        box.appendChild(loading)
        box.appendChild(img)
        boxAll.appendChild(box)
    }
    section.appendChild(boxAll)
    document.body.appendChild(section)

    console.log(boxAll);

}

function randomImg():string {
    if (counterImg >= 10) {
        return `https://picsum.photos/3000/30${counterImg++}`
    } 
    return `https://picsum.photos/3000/300${counterImg++}`
}

function loadingRandom():number {
    let random = Math.ceil(Math.random() * 2+3)
    loadingArray.push(random)
    return random
}