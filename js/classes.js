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
    this.x = 0;
    this.y = 0;
      // needs stuff to update x & y
      // @param {string} input
      // - travel direction
  }



  handleInput(input) {
    switch(input) {
      case 'left':
        this.x -= 20;
        break;
      case 'up':
        this.y -= 20;
        break;
      case 'right':
        this.x += 20;
        break;
      case 'down':
        this.y += 20;
        break;
    }
  }
}
