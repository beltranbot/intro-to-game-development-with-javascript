class Paddle {

  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;

    this.maxSpeed = 7
    this.speed = 0

    this.gameWidth = gameWidth

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#0f0'

    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
  }

  moveLeft () {
    this.speed = -this.maxSpeed
  }

  moveRight () {
    this.speed = this.maxSpeed
  }
  
  update(deltaTime) {
    if (!deltaTime) return

    this.position.x += this.speed
    
    if (this.position.x < 0) {
      this.position.x = 0
    } else if (this.position.x > (this.gameWidth - this.width)) {
      this.position.x = (this.gameWidth - this.width)
    }
  }
}

export default Paddle
