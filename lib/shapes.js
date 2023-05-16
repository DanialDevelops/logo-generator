class Shape{
    constructor(color){
        this.color = ""
    }
setColor(color) {
    this.color = color
}
}

class Triangle extends Shape{
    render(){
        return `<polygon points="100,20 180,180 20,180" fill="${this.color}"/>`
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="100" cy="100" r="80" r="50" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="20" y="20" width="160" height="160" fill="${this.color}"/>`
    }
}

module.exports = {
    Shape,
    Square,
    Circle,
    Triangle,
}