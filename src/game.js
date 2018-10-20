import Ball from './ball.js'
import Paddle from './paddle.js'
import InputHandler from './input.js'

import {buildLevel, level1} from './levels.js'

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    this.ball = new Ball(this)
    this.paddle = new Paddle(this)

    this.bricks = buildLevel(this, level1)

    this.gameObjects = [
      this.ball,
      this.paddle,
      ...this.bricks
    ]

    new InputHandler(this.paddle)
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime))

    this.gameObjects = this.gameObjects.filter(brick => !brick.markedForDeletion)
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx))
  }
}

export default Game
