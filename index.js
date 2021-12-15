//Get our elements.
const player = document.querySelector('.player')

const video = player.querySelector('.viewer')

const progress = player.querySelector('.progress')

const progressBar = player.querySelector('.progress__filled')

const toggle = player.querySelector('.toggle')

const skipButtons = player.querySelectorAll('[data-skip]')

const ranges = player.querySelectorAll('.player__slider')

//Build out functions


     //Funcion para play video

function togglePlay(){
    //.paused propiety video.
if(video.paused){
    video.play()
}else{
    video.pause()
}
}

//Funcion para cambiar el botton de play.

function updateButton(){
const icon = this.paused ? '▶' : '❚❚'
console.log(icon)
toggle.textContent = icon
}

//Funcion para acelerar o retrodeceder el video.

function skip(){
    console.log(this.dataset.skip) //String del number data-skip
    video.currentTime += parseFloat(this.dataset.skip)

}

//Funcion para la barra de volumen y de velocidad.

function handleRangeUpdate(){

video[this.name] = this.value
console.log(this.value)
console.log(this.name)
}

//Barra

function handleProgress(){ //Tiempo y duracion.
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

//Al clickear la barra se ponga el porcentaje del video

function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime

}


// Conectar (Hook up) the event liste ners.

//video play, pause, click and button
video.addEventListener('click', togglePlay )
video.addEventListener('play', updateButton )
video.addEventListener('pause', updateButton )

//Process bar
video.addEventListener('timeupdate',handleProgress)

//video play, pause, click and button
toggle.addEventListener('click', togglePlay )

//retroceder o avanzar el video. 
skipButtons.forEach(button => button.addEventListener('click', skip))

//Volumen y velocidad.

ranges.forEach(e=>e.addEventListener('change',handleRangeUpdate))
ranges.forEach(e=>e.addEventListener('mousemove',handleRangeUpdate))

//Clickeado de progress bar.
progress.addEventListener('click', scrub)

//Arrastrar progress bar.

let mousedown = false
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e)
)
progress.addEventListener('mousedown', ()=>mousedown = true)
progress.addEventListener('mouseup', ()=>mousedown = true)
                     




