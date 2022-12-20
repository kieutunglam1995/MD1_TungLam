let canvas = document.getElementById('MyCanvas');
let ctx = canvas.getContext('2d');
let long = document.getElementById('long');
let wide = document.getElementById('wide');


class Rectangular {
    long;
    wide;
    area;
    perimeter;
    paint;
    constructor(long , wide , area , perimeter , paint) {
        this.long = long ;
        this.wide = wide ;
        this.area = area ;
        this.perimeter = perimeter;
        this.paint = paint;

    }
    getLong(){
       return  this.long;
    }
    setLong(long){
        this.long = long;
    }
    getWide(){
        return this.wide;
    }
    setWide(wide){
        this.wide = wide;
    }
    getArea(){
       return this.area = this.long * this.wide ;
    }
    getPerimeter(){
        return this.perimeter = 2 * (this.long + this.wide) ;
    }
    getPaint(){
        ctx.fillRect(100, 100, this.long, this.wide);
    }
reset(){
    ctx.clearRect(100, 100, this.long, this.wide);
}

}


let hcn = new Rectangular();
function tinh() {

    hcn.setLong(parseInt(long.value))
    hcn.setWide(parseInt(wide.value))
    console.log("diện tích là:"+ hcn.getArea())
    console.log("chu vi là:" + hcn.getPerimeter())
    hcn.getPaint()
    // long.value = "";
    // wide.value = '';
}
function reset() {
    long.value = "";
     wide.value = '';
 hcn.reset()
}