// Buttons
var nowPlaying = document.getElementById("nowPlaying")
var topRated = document.getElementById("topRated")
var upComing = document.getElementById("upComing")
var popular = document.getElementById("popular")

// Movies List
var movies = document.getElementById("movies")

// header
var header = document.getElementById("myh1")

// My options
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmYxMzliNzE2ZmMzZjVhZTMyNjc5M2QwODM1MjczNCIsInN1YiI6IjY1ODJlMWM0MDgzNTQ3NDQ2ZjNlODYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GhzCJHhAx6PUZscC0X2GYfJ9fT-lQmnwMk9fUbuXS8E'
    }
  };

// Default function to show movies 
function callApi(keyword)
{
    fetch(`https://api.themoviedb.org/3/movie/${keyword}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => response.results)
    .then((res)=>{ 
        res.forEach(el => {
            movies.innerHTML += `
            <div class="film">
    <img  src="https://image.tmdb.org/t/p/w500/${el.poster_path}" alt="">
    <div class="cover">
    <h2>${el.original_title}</h2>
    <p class="info-p">${el.overview}</p>
    <p class="rate">Rate: ${el.vote_average}</p>
    <p class="date">Date: ${el.release_date}</p>
    </div> 
    </div>
     `
        });
     })
    .catch(err => console.error(err));
}
 
// Default view
callApi("now_playing")

// now playing view
nowPlaying.addEventListener("click" , ()=> 
{
    movies.innerHTML=""
    header.innerHTML = nowPlaying.innerHTML + " Movies"
    callApi('now_playing')
})

// top rated view
topRated.addEventListener("click" , ()=> 
{
   movies.innerHTML=""
   header.innerHTML = topRated.innerHTML + " Movies"
   callApi("top_rated")
})

// upcoming view
upComing.addEventListener("click" , ()=> {
    movies.innerHTML=""
    header.innerHTML = upComing.innerHTML + " Movies"
    callApi("upcoming")
})

// popular view
popular.addEventListener("click" , ()=> 
{
    movies.innerHTML=""
    header.innerHTML = popular.innerHTML + " Movies"
    callApi("popular")
})


