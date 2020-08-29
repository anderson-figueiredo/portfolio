


buildArticles = () => {
    let cardContainer = document.querySelector('.main__posts__highlight')

    fetch('/api/articles')
        .then((resp) => resp.json())
        .then((data) => {
            data.posts.forEach(element => {
                let article = document.createElement("article")
                article.classList.add('main__posts__highlight__card-content')
                
                let title = document.createElement("h2")
                title.classList.add('main__posts__highlight__card-content-title')
                title.innerText = `${element.title}`
                article.appendChild(title)

                let author = document.createElement("span")
                author.classList.add('main__posts__highlight__card-content-author')
                author.innerText = `${element.author}`
                article.appendChild(author)

                let paragraph = document.createElement("p")
                paragraph.classList.add('main__posts__highlight__card-content-text')
                paragraph.innerText = `${element.content}`
                article.appendChild(paragraph)

                let seeMore = document.createElement("a")
                seeMore.classList.add('main__posts__highlight__card-content-seeMore')
                seeMore.innerText = 'ver mais'
                seeMore.setAttribute('href', `/articles/${element.slug}`)
                article.appendChild(seeMore)

                cardContainer.appendChild(article)
            });
            
        })
    .catch((error)=>{
        console.log('An error occoured during cards build: ' + error)
    })
}

window.addEventListener('load', buildArticles)