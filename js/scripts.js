console.log('as')
let readMore = document.getElementById('readMore')
readMore.onclick = () => {
    document.querySelector('.content-text').classList.toggle("showAll")
    readMore.classList.toggle('shown')
    if (readMore.textContent === 'Читать далее') {
        readMore.textContent = 'Свернуть'
    } else {
        readMore.textContent = 'Читать далее'
    }
    console.log('clicked')
}