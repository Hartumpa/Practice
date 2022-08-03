let top = -1;
let size = 5;
let st = new Array(size);
let Push = (x) => {
    if (top == size - 1) {
        console.log("Stack Overflow");
        return false;
    } else {
        top = top + 1;
        st[top] = x;
        console.log(x+" pushed into stack")
        return true;
    }
}
let Pop = () => {
    let temp;
    if (top == -1) {
        console.log("Stack Underflow");
        return 0;
    } else {
        temp = st[top]
        top = top - 1;
        return temp;
    }
}

let peek = () => {
    if (top < 0) {
        console.log("Stack Underflow");
        return 0;
    } else {
        let x = st[top];
        return x;
    }
}

let isEmpty = () => {
    return (top < 0);
}

let print=()=>{
    // for(let i=top;i>-1;i--){
    //     ;
    // }
    console.log(st)
}

// Push(10);
// Push(20);
// Push(30);
// Push(40);
Push(50);
// console.log(Pop());
// console.log(peek())
print()
// console.log(isEmpty())