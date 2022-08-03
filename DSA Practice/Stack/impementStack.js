class stack {
    constructor() {
        this.arr = [];
    }

    Push(ele) {
        this.arr.push(ele)
    }

    print() {
        console.log(this.arr)
    }

    Pop(){
        this.arr.pop();
    }
}

let obj = new stack();
obj.Push(10);
obj.Push(20);
obj.Push(40);
obj.Pop();
obj.Push(60);
obj.print();