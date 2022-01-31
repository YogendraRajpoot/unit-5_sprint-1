class rectangle{
    constructor(len,bre){
        this.len = len,
        this.bre = bre
    }
    area(){
        return (this.len*this.bre)
    }
}
class square extends rectangle {
    constructor(len ,bre){
        super(len,bre)
    }
    area(){
        super.area()
    }
}

var rectangle1 = new rectangle(2,4)
console.log(rectangle1.area())