
const navBar = document.querySelector('.nav-bar');
const trailerVideo = document.getElementById("trailer-reproduction");
const trailerName = document.querySelector(".movie-trailer-name__container");
const trailerDescription = document.querySelector(".movie__trailer-description");
const trailerCoverImage = document.querySelector('.movie__trailer-cover');
const movieCatalogue = document.querySelector(".main__body");

//FUNCTIONS

const toggleTrailerInfo = ()=>{
    trailerName.classList.toggle("trailer__playing-title");
    trailerDescription.classList.toggle("trailer__playing-description");
    trailerCoverImage.classList.toggle("trailer__playing-cover");
}

const setOfftrailerInfo = ()=>{
    trailerName.classList.remove("trailer__playing-title");
    trailerDescription.classList.remove("trailer__playing-description");
    trailerCoverImage.classList.remove("trailer__playing-cover");
}

const setOntrailerInfo = ()=>{
    trailerName.classList.add("trailer__playing-title");
    trailerDescription.classList.add("trailer__playing-description");
    trailerCoverImage.classList.add("trailer__playing-cover");
}

const initTrailerPlayer = (e)=>{
        trailerVideo.play()
}

const stopTrailerPlayer = ()=>{
    trailerVideo.pause();
 

}

const startTrailer = ()=>{
    if(trailerVideo.paused){
        initTrailerPlayer();
        setOntrailerInfo(); 
    }
}

const stopTrailer = ()=>{
    if(!trailerVideo.paused){
        setOfftrailerInfo();
        stopTrailerPlayer();
    }
}


const whenOnTop = ()=>{
    if(window.pageYOffset > 30){
        stopTrailer();
    } else{
        startTrailer(); 
    } 
}

const toggleNavBar = ()=>{
    window.pageYOffset > 0 ?  navBar.setAttribute("style", "background-color: rgb(20,20,20)") : navBar.setAttribute("style", "background:linear-gradient(0deg, rgba(20, 20, 20, 0), rgba(20, 20, 20, 255))");
}


//-----------------------------FAKE REQUEST MOCK API (for fake movies)-------------------------
// -------- Lets build the movies section ----------
let moviesRequested = [];
let moviesHtmlContainers = [];
let fragment = new DocumentFragment();




const buildMovieCatalogue = ()=>{
    requestMovies(moviesRequested).then(
        (movies)=>{
            movies.map((e)=>{
                BuildHtmlCatalogue(e);
            })
        }
        )
    }

//some error with json request doesnt let me compare properly the html fragments id and the movie genres, so i buit this function

const isInside = (id, movieGenres)=>{
    let separador = ' ';
    let matches = 0;
    let moviesGenSplit = movieGenres.split(separador);
    moviesGenSplit.map((e)=>{
        e == id ? matches++ : null;
    });
    return matches;
}

const BuildHtmlCatalogue = (element)=>{
    let newELement = document.createElement('li');
    newELement.className = "movie__container-item";
    moviesHtmlContainers.forEach(frag => {
        if(isInside(frag.id, element.movie_genre) >= 1){
            console.log(frag);
            console.log(element.movie_title);
            //images a little bit more random
            let newSize = `https://picsum.photos/${Math.round(Math.random() * (500 - 180)+180)}/${Math.round(Math.random() * (500 - 180)+180)}`;
            newELement.innerHTML = `
                        <a href="" class="movie__container-item-clickeable">
                            <div class="movie__container-item-cover">
                                <img class="movie__container-item-img" src="${newSize}" alt="${element.movie_title}">
                            </div>
                        </a>
    `;
            frag.firstElementChild.nextElementSibling.appendChild(newELement);
        }
    });
}

    
const requestMovies = (moviesRequested)=>{
    return new Promise((resolve, reject)=>{
        let request = axios.get('https://60c6a86f19aa1e001769f896.mockapi.io/netflix-clone/movies')
        .then((res)=>{
            moviesRequested = res.data;
            resolve(moviesRequested)
        });
    })
}

buildMovieCatalogue();


//-----------------------------DINAMIC MOVIE CATALOGUE-------------------------



const genres = ['Comedy', 'Horror', 'Drama', 'Romance', 'Sci-Fi', 'Thriller'];

const createMovieContainers = (genres)=>{
    fragment.innerHTML = "";
    genres.map((elem)=>{
        fragment.innerHTML += `<div class="movie__container" id="${elem}">
        <a class="movie__container-category-name" href="#">${elem}</a>
        <ul class="movie__container-list">
        </ul>
        </div>`
    })
    movieCatalogue.innerHTML += fragment.innerHTML
    moviesHtmlContainers = document.querySelectorAll('.movie__container')
    console.log(fragment.innerHTML) //---- bien
    console.log(moviesHtmlContainers)//----bien
}



createMovieContainers(genres);

// EVENTS
window.addEventListener('scroll', ()=>{
    whenOnTop();
    toggleNavBar();
});
trailerVideo.addEventListener('loadeddata', ()=>setTimeout(whenOnTop,4000));





function saludo(){
    alert('funciono');
}