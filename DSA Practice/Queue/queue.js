// Implement Queue;
// dequeue == O(n),enqueue ==O(1)
class Queue{
    constructor(){
        this.s1=[];
        this.s2=[];
    }

    enqueue(x){
        while(this.s1.length>0){
            this.s2.push(this.s1.pop());
        }
        this.s1.push(x);

        while(this.s2.length>0){
            this.s1.push(this.s2.pop())
        }
    }

    dequeue(){
        if(this.s1.length===0){
            console.log("Queue is Empty!");
        }else{
            let x=this.s1[this.s1.length-1];
            this.s1.pop();
            return x;
        }
    }
}

let q=new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.dequeue()
q.dequeue()
q.enqueue(40)
q.dequeue()
q.enqueue(50)
q.dequeue()
// q.dequeue()
// console.log(q.dequeue());

console.log(q)
