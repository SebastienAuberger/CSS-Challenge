let play_menu = document.getElementById("menu_sound_play")
let stop_play_menu = document.getElementById("menu_sound_quit")

let mw2_menu_sound = new Audio("Assets/mw2.mp3")
let is_sound_playing = false

play_menu.addEventListener("click", () => {
    if(!is_sound_playing){
        mw2_menu_sound.currentTime = 0
        mw2_menu_sound.play()
        is_sound_playing = true
    }
})

stop_play_menu.addEventListener("click", () => {
    if(is_sound_playing){
        mw2_menu_sound.pause()
        is_sound_playing = false
    }
})