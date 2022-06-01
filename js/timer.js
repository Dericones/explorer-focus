import Sounds from "./sounds.js"

export default function Timer ({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds 
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sounds().finish()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000);
  }

  function increase() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    updateDisplay(minutes + 5, seconds)
    
  }

  function decrease () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (minutes <= 5 && seconds <= 0) {
      reset()
      return
    }
    if (minutes <= 4) {
      reset()
      resetControls()
      return
    }
    updateDisplay(minutes - 5, seconds)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    reset,
    updateDisplay,
    increase,
    decrease,
    hold
  }
  
}