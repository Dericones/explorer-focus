export default function ({
  buttonPause,
  buttonPlay,
  buttonThree,
  buttonCloud,
  buttonCoffee,
  buttonFirePit,
  getOut
}) {

  function play () {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }

  function pause () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function three() {
    buttonCloud.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.remove('on')
    buttonThree.classList.add('on')
  }

  function cloud() {
    buttonThree.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.remove('on')
    buttonCloud.classList.add('on')
  }

  function coffee() {
    buttonThree.classList.remove('on')
    buttonCloud.classList.remove('on')
    buttonFirePit.classList.remove('on')
    buttonCoffee.classList.add('on')
  }

  function firePit() {
    buttonThree.classList.remove('on')
    buttonCloud.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.add('on')
  }

  function getOut() {
    buttonThree.classList.remove('on')
    buttonCloud.classList.remove('on')
    buttonCoffee.classList.remove('on')
    buttonFirePit.classList.remove('on')
  }

  return {
    play,
    pause,
    three,
    cloud,
    coffee,
    firePit,
    getOut
  }
}
