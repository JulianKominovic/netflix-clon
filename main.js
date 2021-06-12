
const navBar = document.querySelector('.nav-bar');
const trailerVideo = document.getElementById("trailer-reproduction");
const trailerName = document.querySelector(".movie-trailer-name__container");
const trailerDescription = document.querySelector(".movie__trailer-description");
const trailerCoverImage = document.querySelector('.movie__trailer-cover');
const movieCatalogue = document.querySelector(".main__body");

const toggleTrailerInfo = ()=>{
    console.log("AJUSTANDO")
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
    console.log("parando a moto");
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
    console.log(window.pageYOffset)
    if(window.pageYOffset > 30){
        stopTrailer();
    } else{
        startTrailer(); 
    } 
}

const toggleNavBar = ()=>{
    window.pageYOffset > 0 ?  navBar.setAttribute("style", "background-color: rgb(20,20,20)") : navBar.setAttribute("style", "background:linear-gradient(0deg, rgba(20, 20, 20, 0), rgba(20, 20, 20, 255))");
}

// EVENTS
window.addEventListener('scroll', ()=>{
    whenOnTop();
    toggleNavBar();
});
trailerVideo.addEventListener('loadeddata', ()=>setTimeout(whenOnTop,4000));





function saludo(){
    alert('funciono');
}