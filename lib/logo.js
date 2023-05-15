
class Logo {
    constructor(text, shape) {
      this.shape = ""
      this.text = ""
    }
  
    setShape(shapeIns){
      this.shape = shapeIns.render();
    }
    setText(color, text){
      this.text = ` <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="72" fill="${color}">${text}</text>`
    }
    render() {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.text}
      ${this.shape}
      </svg>`;
    }
  }
  
  