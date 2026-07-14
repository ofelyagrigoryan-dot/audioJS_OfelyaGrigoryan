var data = {
    title: [
        "Call_Out_my_name",
        "Do_I_wanna_know",
        "Freaked_out",
        "Gladiator",
        "Mala_ft_Anuel_AA",
        "São_Paulo",
        "Secret",
        "Swim",
        "The_Walls",
        "Timeless"

    ],
    //
    song: [     
        "music/Call_Out_my_name.mp3",
        "music/Do_I_wanna_know.mp3",
        "music/Freaked_out.mp3",
        "music/Gladiator.mp3",
        "music/Mala_ft_Anuel_AA.mp3",
        "music/São_Paulo.mp3",
        "music/Secret.mp3",
        "music/Swim.mp3",
        "music/The_Walls.mp3",
        "music/Timeless.mp3"
    ],
    
    poster: [
        "https://i.pinimg.com/1200x/c6/b2/33/c6b2339d79aa7bf4ad318235d19b618f.jpg",
        "https://i.pinimg.com/1200x/fc/2e/22/fc2e22b867d7ccf7158aeb7b56ec9a40.jpg",
        "https://i.pinimg.com/1200x/71/65/b5/7165b53977fb6cbb554ec8c64459ccc1.jpg",
        "https://i.pinimg.com/1200x/bb/48/fc/bb48fc0e9cafa092726bd66293a3dcba.jpg",
        "https://i.pinimg.com/1200x/36/c5/4e/36c54e42ce212d7c3b756dfbacd18461.jpg",
        "https://i.pinimg.com/736x/8e/ea/84/8eea8490e04f679f73a90bb54bb7a7a3.jpg",
        "https://i.pinimg.com/1200x/5f/51/1c/5f511ce336e77c530fbf45633e72cf76.jpg",
        "https://i.pinimg.com/736x/58/05/dc/5805dc720619a9b82733a02e73009670.jpg",
        "https://i.pinimg.com/736x/d6/88/a7/d688a74eeb21e7ac30feb2589b92c184.jpg",
        "https://i.pinimg.com/736x/b1/71/37/b171374154470dd6b024bf3b29bc9479.jpg"
    
    ]

    
}

let song = new Audio()
let currentSong = 0
window.onload = function () {
    playSong()

}

function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementById("row1")
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    song.play
   
}

function playOrPauseSong(){
    let play = document.getElementById("play") 
    if(song.paused){
        song.play()
       play.src = "images/pause.png"

    }else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    
    }

}

song.addEventListener("timeupdate",function(){
    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration
    fill.style.width = position * 100 + "%"
    convertTime(song.currentTime)

    if(song.ended){
        next()

    }
    
})


function convertTime(seconds){
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime.textContent = min + ":" + sec 
    totalTime(Math.round(song.duration))
}

function totalTime(seconds){
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime.textContent += "/" + min + ":" + sec 
   

}

function next(){
    currentSong++
    if(currentSong >= data.song.length){
        currentSong = 0

    }
    playSong()
    play.src = "images/pause.png"

}

function pre(){
    currentSong--
    if(currentSong <= 0){
        currentSong = data.song.length-1
    }
    playSong()
     play.src = "images/pause.png"


}

function muted (){
    let mute = document.getElementById("mute")
    if(song.muted){
        song.muted = false 
        mute.src = "images/volume.png"        
    }else{
        song.muted = true 
        song.src = "images/volume-mute.png"
    }
}

