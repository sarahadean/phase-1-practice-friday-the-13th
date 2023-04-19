document.addEventListener("DOMContentLoaded", getMovies)

//GET request and declare array as variable
let movieArray
let currentMovie

function getMovies() {
fetch("http://localhost:3000/movies")
  .then(resp => resp.json()) 
  .then(movies => {
    movieArray = movies
    currentMovie = movieArray[0]

    movieArray.forEach(movie => {
        navMovieImages(movie);
    })

        movieCard(currentMovie)
    })
}


//Adding movies to nav bar at top of page
function navMovieImages(movie) {
const navBar = document.getElementById("movie-list")

const imageTag = document.createElement("img")
    imageTag.src = movie.image
    navBar.appendChild(imageTag)

imageTag.addEventListener("click", () => {
    movieCard(movie)
    currentMovie = movie
})
}

const movieCard = (m) => {
    
const title = document.getElementById("title")
const featureMovie = document.getElementById('detail-image')
const year = document.getElementById("year-released")
const description = document.getElementById("description")
const watchedBtn = document.getElementById("watched")
const bloodAmt = document.getElementById("blood-amount")

featureMovie.src = m.image
title.textContent = m.title
year.textContent = m.release_year
description.textContent = m.description
watchedBtn.textContent = m.watched? "Watched" : "Unwatched"

watchedBtn.addEventListener("click", ()=> {
    m.watched = !m.watched
    watched.textContent = m.watched? "Watched": "Not Watched"
})
}

const bloodForm = document.querySelector('#blood-form')
const bloodAmount = document.querySelector('#blood-amount')

function getBloodAmount(){
    bloodAmount.addEventListener("change", (e) => {
        submitForm(e.target.value)
    }) 
}

function submitForm(bloodAmount){
    bloodForm.addEventListener("submit", (e) => {
        e.preventDefault()
        currentMovie.blood_amount += parseInt(bloodAmount)

        const data = { blood_amount: currentMovie.blood_amount}

        fetch(`http://localhost:3000/movies/${currentMovie.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(console.error)

        blood.textContent = currentMovie.blood_amount
        e.target["blood-amount"].value = ""
    })
}

getBloodAmount()

//     if(movie.watched === "true"){watched.textContent = "Watched"}
// else(movie.watched === "false"){watched.textContent = "Not Watched"}
// }




















// function handleRequest(url){
//     return fetch(url)
//     .then(resp => resp.json())
// }

// handleRequest("http://localhost:3000/movies")
// .then(movie => movie.map(makePoster))

// handleRequest("http://localhost:3000/movies")
// .then(movie => movie.map(populateMovie))

// const parentNode = document.getElementById("movie-list")

// function makePoster(movie){ 
//     const imageTag = document.createElement("img")
//     imageTag.src = movie.image
// parentNode.appendChild(imageTag)

//     imageTag.addEventListener('click', (event) => populateMovie(movie))
//      }

// //Set first image as default larger image
// function populateMovie(movie){
//     console.log('I work')
//     const largerImage = document.getElementById("detail-image")
//  
//     const title = document.getElementById('title')
//     const year = document.getElementById('year-released')
//     const des = document.getElementById('description')
    

// largerImage.src = movie.image
// title.textContent = movie.title
// year.textContent = movie.release_year
// des.textContent = movie.description
// 
// }
// const watched = document.getElementById('watched')
// watched.clickEventListener('button', (e) => {
//     if (e.target.value === false){watched.textContent = 'Watch'}
//     else watched.textContent = "Watched"
// })

