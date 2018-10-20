import Ball from './ball.js'
import Paddle from './paddle.js'
import InputHandler from './input.js'

import { buildLevel, level1 } from './levels.js'

export const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

export class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

    this.gamestate = GAMESTATE.MENU
    this.ball = new Ball(this)
    this.paddle = new Paddle(this)
    this.gameObjects = []

    new InputHandler(this.paddle, this)
  }

  start() {
    if (this.gamestate !== GAMESTATE.MENU) return
    this.gamestate = GAMESTATE.RUNNING

    this.bricks = buildLevel(this, level1)

    this.gameObjects = [
      this.ball,
      this.paddle,
      ...this.bricks
    ]
  }

  update(deltaTime) {
    if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU) return
    this.gameObjects.forEach(object => object.update(deltaTime))

    this.gameObjects = this.gameObjects.filter(brick => !brick.markedForDeletion)
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx))
    if (this.gamestate == GAMESTATE.PAUSED) {
      console.log('paused')
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate == GAMESTATE.MENU) {
      console.log('paused')
      ctx.rect(0, 0, this.gameWidth, this.gameHeight)
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fill()
      ctx.font = "30px Arial"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.fillText("Press SPACEBAR to start", this.gameWidth / 2, this.gameHeight / 2)
    }
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING
    } else {
      this.gamestate = GAMESTATE.PAUSED
    }
  }
}
