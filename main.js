const artes = []
globalThis.float = 25

for (let i = 1; i < 9; i++) {
    artes.push({
        image: `./images/${i}.jpg`,
        title: "Lorem ipsum de Lion",
        description: "1 rue de la public Lyon, France"
    })
}

const $gallery = document.querySelector("#js-gallery-pixel")
let galleryWidth = $gallery.offsetWidth
let galleryHeight = $gallery.offsetHeight

for (let i = 0; i < artes.length; i++) {
    let $div = document.createElement("div")
    let $title = document.createElement("strong")
    let $more = document.createElement("p")
    let $pop = document.createElement("div")
    let $img = document.createElement("img")
    let $imgNormal = document.createElement("img")
    $img.src = "./images/colher.png"
    $imgNormal.classList.add("pixel-pop-image")
    $imgNormal.src = `./images/${i + 1}.jpg`
    $title.classList.add("pixel-pop-title")
    $title.innerHTML = "Lorem ipsum de lyon"    
    $more.classList.add("pixel-pop-more")
    $more.innerHTML = "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit."
    $img.classList.add("pixel-colher")
    $img.classList.add(`pixel-colher-position-${i + 1}`)
    $div.classList.add(`gallery-pixel-item`)
    $div.classList.add(`gallery-pixel-area-${i + 1}`)
    $div.id = `js-p5-${i + 1}`
    $pop.appendChild($imgNormal)
    $pop.appendChild($title)
    $pop.appendChild($more)
    $pop.classList.add(`pop-box`)
    $pop.classList.add(`pop-box-${i + 1}`)
    $div.appendChild($img)
    $div.appendChild($pop)
    $gallery.appendChild($div)
}

for (let i = 0; i < artes.length; i++) {
    new p5(function (p) {
        let img = null
        pixelation_level = 15;
        p.preload = () => {
            img = p.loadImage(artes[i].image);
        }
        p.setup = function () {
            let box = document.querySelector(`#js-p5-${i + 1}`)
            let width = box.offsetWidth
            let height = box.offsetHeight
            var canvas = p.createCanvas(width, height)
            canvas.parent(`#js-p5-${i + 1}`)
            p.pixelDensity(1)
            p.image(img, 0, 0, width, height);
            p.loadPixels()
            p.noStroke()
            console.log(width)
            for (let x = 0; x < width; x += pixelation_level) {
                for (let y = 0; y < height; y += pixelation_level) {

                    let i = (x + y * width) * 4;
                    let r = p.pixels[i + 0];
                    let g = p.pixels[i + 1];
                    let b = p.pixels[i + 2];
                    let a = p.pixels[i + 3];
                    p.fill(r, g, b, a);
                    p.square(x, y, pixelation_level);
                }
            }
        }
        p.draw = function () {
            
            let box = document.querySelector(`#js-p5-${i + 1}`)
            let width = box.offsetWidth
            let height = box.offsetHeight
            
            var canvas = p.createCanvas(width, height)
            canvas.parent(`#js-p5-${i + 1}`)

            for (let x = 0; x < width; x += pixelation_level) {
                for (let y = 0; y < height; y += pixelation_level) {

                    let i = (x + y * width) * 4
                    let r = p.pixels[i + 0]
                    let g = p.pixels[i + 1]
                    let b = p.pixels[i + 2]
                    let a = p.pixels[i + 3]
                    let float =  globalThis.float

                    p.fill(
                        p.random(p.random(r - float, r + float), p.random(r - float, r + float)),
                        p.random(p.random(g - float, g + float), p.random(g - float, g + float)),
                        p.random(p.random(b - float, b + float), p.random(b - float, b + float)),
                        a
                    );
                    p.square(x, y, pixelation_level);
                }
            }
        }
    })
}


function arteGama($e) {   
    
    globalThis.float = +$e.value
}

var Height = document.querySelector("#js-gallery-pixel").clientHeight

function artePixel($e) {  
    
    globalThis.pixelation_level = +$e.value
    let $gallery = document.querySelector("#js-gallery-pixel")
    let tamanhoOneCol = parseInt( (window.innerWidth / 8) / +$e.value ) * +$e.value
    let tamanhoOneRow = parseInt( (Height / 6) / +$e.value ) * +$e.value
    
    $gallery.style.setProperty( '--box', `${tamanhoOneCol}px` )
    $gallery.style.setProperty( '--h', `${tamanhoOneRow}px` )
    let float = 5
}