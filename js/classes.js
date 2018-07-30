class Avatar {
  constructor() {
    this.sprite = 'images/';
    this.x = 0;
    this.y = 0;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }
}

class Player extends Avatar {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
      /* needs stuff to update x & y
      @param {string} input - travel direction
      */
      
    handleInput(input) {

    }
  }
}
