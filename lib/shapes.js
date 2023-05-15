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
        return `<polygon points="250,150 200,50 300,50" fill = "${this.color}"/>`
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="50" fill = "${this.color}"/>`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="200" y="50" width="100" height="100" fill = "${this.color}"/>`
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}