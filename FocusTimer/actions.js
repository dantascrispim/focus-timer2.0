import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"
import * as el from "./elements.js"
import  { updateDisplay } from "./timer.js"

export function toggleRunning () {
   state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPress.play()
}

 

export function stop() {
    state.isRunning = false
        document.documentElement.classList.remove('running')  
        timer.updateDisplay()
        sounds.buttonPress.play() 
          
        el.minutes.setAttribute('contenteditable', true)       
        
        el.minutes.onkeypress = (event) => /\d/.test(event.key)   //--> expressaão regular selecionando apenas numeros no contador...


        el.minutes.addEventListener('blur', (event) => {
            let time = event.currentTarget.textContent
            time = time > 60 ? 60 : time

            state.minutes = time
            state.seconds = 0

            updateDisplay()
            
        })         

}



export function toAdd() {
    state.minutes += 5
    //state.seconds += 5
    timer.updateDisplay()
    sounds.buttonPress.play()
}

export function toRemove() {
    state.minutes -= 5
    //state.seconds -= 5
    timer.updateDisplay()
    sounds.buttonPress.play()
    
}
// exporta as functions dos sons !!! -->


export function toggleMusic1() {
    state.isMute = document.documentElement.classList.toggle('ph-tree')
    
    if(state.isMute) {
        sounds.floResta.play()
        return
    }

        sounds.floResta.pause()
    
}

export function toggleMusic2() {
    state.isMute = document.documentElement.classList.toggle('ph-cloud-rain')
    
    if(state.isMute) {
        sounds.somChuva.play()
        return
    }

        sounds.somChuva.pause()
}

export function toggleMusic3() {
    state.isMute = document.documentElement.classList.toggle('ph-warehouse')
    
    if(state.isMute) {
        sounds.cafeTeria.play()
        return
    }

        sounds.cafeTeria.pause()
    
}



export function toggleMusic4() {
    state.isMute = document.documentElement.classList.toggle('ph-flame')
    
    if(state.isMute) {
        sounds.lareIra.play()
        return
    }
        sounds.lareIra.pause()
    
}
