import Ball from './ball.js'
import Paddle from './paddle.js'
import InputHandler from './input.js'
import Brick from './brick.js'

class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight
  }

  start() {
    this.ball = new Ball(this)
    this.paddle = new Paddle(this)

    this.bricks = []

    for (let i = 0; i < 10; i++) {
      this.bricks.push(
        new Brick(this, {x: i * 52, y: 30})
      )
    }

    this.gameObjects = [
      this.ball,
      this.paddle,
      ...this.bricks
    ]

    new InputHandler(this.paddle)
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime))
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx))
  }
}

export default Game
