import state  from "./state.js"
import * as el from "./elements.js"
import { stop } from "./actions.js"
import { kichenTimer } from "./sounds.js"

export function countdown() {


    clearTimeout(state.cauntdownId) 
    
    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0 ) {
        seconds = 59
        minutes--
    }

    if(minutes < 0 ) {
        stop()
        kichenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.cauntdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes    // nao passei nada pegar do estado-->
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0") // (padStart)prencher dois caractere e quando tiver so um cararceter que ele preencha com um 0 -->
    el.seconds.textContent = String(seconds).padStart(2, "0")
}