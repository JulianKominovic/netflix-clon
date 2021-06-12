
const navBar = document.querySelector('.nav-bar');
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
    setTimeout(()=>{trailerVideo.play()
        adjustTrailerInfo()}, 4000);
}

const stopTrailerPlayer = ()=>{
    console.log("parando a moto");
    trailerVideo.pause();
    adjustTrailerInfo();
    trailerVideo.removeEventListener('loadeddata', (e)=>{
        setTimeout(()=>initTrailerPlayer(e), 4000);
    });

}

const adjustNavBar = ()=>{

    if(window.scrollY!=0){
        navBar.setAttribute("style", "background-color: rgb(20,20,20)");
    } else{
        navBar.setAttribute("style", "background:linear-gradient(0deg, rgba(20, 20, 20, 0), rgba(20, 20, 20, 255))");
    } 

}

// EVENTS
window.addEventListener('scroll', ()=>adjustNavBar());
trailerVideo.addEventListener('loadeddata',()=>initTrailerPlayer());
trailerVideo.addEventListener('mouseover',()=>initTrailerPlayer());
movieCatalogue.addEventListener('mouseover',()=>stopTrailerPlayer());


function saludo(){
    alert('funciono');
}