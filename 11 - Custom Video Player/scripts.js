// Get Our Elements
let player = document.querySelector('.player')
let video = player.querySelector('.viewer')
let progress = player.querySelector('.progress')
let progressbar = player.querySelector('.progress__filled')
let toggle = player.querySelector('.toggle')
let skipButtons = player.querySelectorAll("[data-skip")
let ranges = player.querySelectorAll('.player__slider')

// Build Our Functions
function toggleplay() {
    let method = video.paused ? "play" : "pause"
    video[method]()
    updatebtn()
}
function updatebtn() {
    let icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
}
function rangeUpdate(){
video[this.name]=this.value
}
function progressfunc(){    
    let prcnt=(video.currentTime/video.duration)*100
    progressbar.style.flexBasis=`${prcnt}%`
}
function scrub(e){
    let scrubtime=(e.offsetX/progress.offsetWidth)*video.duration
    video.currentTime=scrubtime
}

// Hook Event Listeners
video.addEventListener('click', toggleplay)
video.addEventListener('play', updatebtn)
video.addEventListener('pause', updatebtn)
video.addEventListener('timeupdate',progressfunc)
toggle.addEventListener('click', toggleplay)
document.addEventListener("keypress", (e) => {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        toggleplay()
    }
})
skipButtons.forEach(btn => btn.addEventListener("click", skip))
ranges.forEach(range=>range.addEventListener("change",rangeUpdate))
progress.addEventListener("click",scrub)