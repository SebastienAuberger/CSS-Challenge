const music_list = [
    {
        id : 1,
        artist: "Lesfm",
        name: "Forrest Lullaby",
        link: "Assets/music/forest-lullaby.mp3",
        cover: "Assets/cover-1.png",
    },
    {
        id : 2,
        artist: "Cosmo Sheldrake",
        name: "Lost in City Lights",
        link: "Assets/music/lost-in-city-lights.mp3",
        cover: "Assets/cover-2.png",
    }
]

const play_button = document.getElementById("player_play")
const next_button = document.getElementById("player_next")
const previous_button = document.getElementById("player_previous")
const music_artist = document.getElementById("music_artist")
const music_cover = document.getElementById("music_cover")
const music_title = document.getElementById("music_title")


let is_music_playing = false
let currentMusic = 0
let music = new Audio(music_list[0].link)

play_button.addEventListener("click", () => {
    console.log(is_music_playing)
    if(!is_music_playing){
        music.play()
        is_music_playing = true
    }
    else{
        music.pause()
        is_music_playing = false
    }
})

next_button.addEventListener("click", () => {
    if(currentMusic + 1 < music_list.length){
        currentMusic++
        music.pause()
        music.src = music_list[currentMusic].link
        music_artist.innerHTML = music_list[currentMusic].artist 
        music_cover.src = music_list[currentMusic].cover
        music_title.innerHTML = music_list[currentMusic].name
        music.play()
        is_music_playing = true
    }
    else{
        currentMusic = 0
        music.pause()
        music.src = music_list[currentMusic].link
        music_artist.innerHTML = music_list[currentMusic].artist 
        music_cover.src = music_list[currentMusic].cover
        music_title.innerHTML = music_list[currentMusic].name
        music.play()
        is_music_playing = true
    }
})

previous_button.addEventListener("click", () => {
    if(currentMusic - 1 >= 0){
        currentMusic--
        music.pause()
        music.src = music_list[currentMusic].link
        music_artist.innerHTML = music_list[currentMusic].artist 
        music_cover.src = music_list[currentMusic].cover
        music_title.innerHTML = music_list[currentMusic].name
        music.play()
        is_music_playing = true
    }
    else{
        currentMusic = music_list.length
        music.pause()
        music.src = music_list[currentMusic].link
        music_artist.innerHTML = music_list[currentMusic].artist 
        music_cover.src = music_list[currentMusic].cover
        music_title.innerHTML = music_list[currentMusic].name
        music.play()
        is_music_playing = true
    }
})