
const trailerVideo = document.getElementById("trailer-reproduction");
const trailerName = document.querySelector(".movie-trailer-name__container");
const trailerDescription = document.querySelector(".movie__trailer-description");
const trailerCoverImage = document.querySelector('.movie__trailer-cover');
const movieCatalogue = document.querySelector(".main__body");

const adjustTrailerInfo = ()=>{
    console.log("AJUSTANDO")
    trailerName.classList.toggle("trailer__playing-title");
    trailerDescription.classList.toggle("trailer__playing-description");
    trailerCoverImage.classList.toggle("trailer__playing-cover");
}

const initTrailerPlayer = (e)=>{
    trailerVideo.play();
    adjustTrailerInfo();
}

const stopTrailerPlayer = ()=>{
    console.log("parando a moto");
    trailerVideo.pause();
    adjustTrailerInfo();
    trailerVideo.removeEventListener('loadeddata', (e)=>{
        setTimeout(()=>initTrailerPlayer(e), 4000);
    });

}

// EVENTS

trailerVideo.addEventListener('loadeddata',(e)=>{
    setTimeout(()=>initTrailerPlayer(e), 4000);
});


trailerVideo.addEventListener('mouseover',()=>initTrailerPlayer());
movieCatalogue.addEventListener('mouseover',()=>stopTrailerPlayer());


function saludo(){
    alert('funciono');
}