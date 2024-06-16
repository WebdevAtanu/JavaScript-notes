// =============== Class===========================
class Result {
    constructor(p, r, t) {
        console.log("constructor called");
        this.prin = p;
        this.rate = r;
        this.time = t;
    }
    findsi = () => {
        let res1 = (this.prin * this.rate * this.time) / 100;
        return res1;
    }
    findamt = () => {
        let res2 = this.findsi() + this.prin;
        return res2;
    }
}

var obj = new Result(100, 200, 8);
console.log(obj.findsi());
console.log(obj.findamt());