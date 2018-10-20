import { detectCollision } from './collisionDetection.js'

class Ball {
  constructor(game) {
    this.image = document.getElementById('img_ball')
    this.speed = { x: 6, y: 6 }
    this.position = { x: 300, y: 300 }
    this.size = 16

    this.gameWidth = game.gameWidth
    this.gameHeight = game.gameHeight

    this.game = game
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size,
    )
  }

  update(deltaTime) {
    this.position.x += this.speed.x
    this.position.y += this.speed.y

    if (this.position.x > (this.gameWidth - this.size) || this.position.x < 0) {
      this.speed.x = -this.speed.x
    }

    if ((this.position.y + this.size) > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y
      this.position.y = this.game.paddle.position.y - this.size
    }
  }
}

export default Ball