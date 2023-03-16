const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const searchQuery = form.elements.query.value
    const config = {params: {q: searchQuery}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    showImages(res.data)
})

const showImages = (shows) => {
    const oldImgs = document.querySelectorAll('img')
    for(let oldImg of oldImgs) { 
        oldImg.remove()
    }
    for(let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('img')
            newImg.src = result.show.image.medium
            document.body.append(newImg)
        }
    }
}