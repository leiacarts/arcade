class Avatar {
  constructor() {
    this.sprite = 'images/';
    this.x = 0;
    this.y = 0;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

}



class Player extends Avatar {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 4) + 55;
    this.x = this.startX;
    this.y = this.startY;
    this.win = false;
      // needs stuff to update x & y
      // @param {string} input
      // - travel direction
  }

  handleInput(input) {
    switch(input) {
      case 'left':
        if (this.x > 0) {
          this.x -= this.step;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= this.jump;
        }
        break;
      case 'right':
        if (this.x < this.step * 4) {
          this.x += this.step;
        }
        break;
      case 'down':
        if (this.y < this.step * 3.5) {
          this.y += this.jump;
        }
        break;
    }
  }

  update() {
    for(let enemy of allEnemies) {
      if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
          this.reset();
      }
    }

    if(this.y === 55) {
      this.win = true;
    }
  }

  reset() {
      this.y = this.startY;
      this.x = this.startX;
    }
}
