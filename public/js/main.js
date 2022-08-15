





window.addEventListener("load", (event) => {

    let path_plugin = `//${window.location.hostname}/wp-content/plugins/mosaico`

    const artes = []
    globalThis.float = 25

    for (let i = 1; i < 9; i++) {
        artes.push({
            image: `${path_plugin}/public/images/${i}.jpg`,
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
        $img.src = `${path_plugin}/public/images/colher.png`
        $imgNormal.classList.add("pixel-pop-image")
        $imgNormal.src = `${path_plugin}/public/images/${i + 1}.jpg`
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

    globalThis.config_p5 = {
        pixelate: true,
        speed: .05,
        max_move: 30,
        move: 0
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
                if (config_p5.pixelate) {
                    p.pixelDensity(1)
                }
                p.image(img, 0, 0, width, height);
                if (config_p5.pixelate) {
                    p.loadPixels()
                    p.noStroke()
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
            }
            p.draw = function () {
                p.clear();
                let box = document.querySelector(`#js-p5-${i + 1}`)
                let width = box.offsetWidth
                let height = box.offsetHeight
                config_p5.move += config_p5.speed
                var canvas = p.createCanvas(width, height)
                canvas.parent(`#js-p5-${i + 1}`)
                if (config_p5.move > config_p5.max_move) {
                    config_p5.speed = config_p5.speed * -1
                }
                if (config_p5.move < 0) {
                    config_p5.speed = config_p5.speed * -1
                }
                if (config_p5.pixelate) {
                    p.pixelDensity(1)
                }
                p.image(img, 0, 0, width + config_p5.move, height);
                if (config_p5.pixelate) {                             
                    p.loadPixels()
                    p.noStroke()
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
            }
        })
    }

});

function arteGama($e) {
    globalThis.float = +$e.value
    globalThis.config_p5.max_move=+$e.value
    console.log(config_p5.max_move)
}

var Height = document.querySelector("#js-gallery-pixel").clientHeight

function artePixel($e) {

    globalThis.pixelation_level = +$e.value
    let $gallery = document.querySelector("#js-gallery-pixel")
    let tamanhoOneCol = parseInt((window.innerWidth / 8) / +$e.value) * +$e.value
    let tamanhoOneRow = parseInt((Height / 6) / +$e.value) * +$e.value

    $gallery.style.setProperty('--box', `${tamanhoOneCol}px`)
    $gallery.style.setProperty('--h', `${tamanhoOneRow}px`)
    let float = 5
}