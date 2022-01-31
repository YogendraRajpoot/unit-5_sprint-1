class rectangle{
    constructor(len,bre){
        this.len = len,
        this.bre = bre
        console.log(`\nlength=${this.len} \nwidth=${this.bre}`)
    }
    area(){
        return `AREA = ${(this.len*this.bre)}`
    }
    
}
class square extends rectangle {
    constructor(len){
        super(len,len)
    }
    area(){
        return `AREA = ${(this.len*this.len)}`
    }
    perimeter(){
        return `PERIMETER = ${2*(this.len +this.len)}`
    }
}

var rectangle1 = new rectangle(2,4)
console.log(rectangle1.area())

var square1 = new square(8)
console.log(square1.area())

var square2 = new square(9)
console.log(square2.perimeter())