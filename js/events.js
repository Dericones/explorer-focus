import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonUp,
  buttonDown,
  buttonThree,
  buttonCloud,
  buttonCoffee,
  buttonFirePit
} from "./elements.js"

export default function events ({
  controls,
  timer,
  sound
}) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    sound.pressButton()
    timer.reset()
    controls.pause()
  })

  buttonUp.addEventListener('click', function () {
    timer.increase()
    sound.pressButton()
  })

  buttonDown.addEventListener('click', function () {
    timer.decrease()
    sound.pressButton()
  })

  buttonThree.addEventListener('click', function() {
    controls.three()
    sound.pressThree()
  })

  buttonCloud.addEventListener('click', function () {
    controls.cloud()
    sound.pressCloud()
  })

  buttonCoffee.addEventListener('click', function () {
    controls.coffee()
    sound.pressCoffee()
  })

  buttonFirePit.addEventListener('click', function () {
    controls.firePit()
    sound.pressFire()
  })
}