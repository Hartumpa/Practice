let s="1101"

let t=Number(s);
let d=0;
let b=1;
while(t>0){
    let rem=t%10;
    d+=rem*b;
    t=Math.floor(t/10);
    b=b*2
}
let c=0
while(d>0){
    if(d%2==0){
        d=d/2;
        c++;
    }else{
        d=(d+1);
        c++;
    }
}
console.log(c)