import { GAMESTATE } from './game.js'

class InputHandler {

  constructor(paddle, game) {
    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37: // left arrow
          paddle.moveLeft()
          break
        case 39: // right arrow
          paddle.moveRight()
          break
        case 27: // esc key
          if (game.gamestate !== GAMESTATE.MENU) {
            game.togglePause()
          }
          break
        case 32: // spacebar key
          game.start()
          break
        default:
          break;
      }
    })

    document.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop()
          }
          break
        case 39:
          if (paddle.speed > 0) {
            paddle.stop()
          }
          break
        default:
          break
      }
    })
  }
}

export default InputHandler