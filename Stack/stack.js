let top=-1;
let size=100;
let st=new Array(size);
let push=(x)=>{
    if(top==size-1){
        return "overflow"
    }else{
        top=top+1;
        st[top]=x;
    }
}
let pop=()=>{
    let temp;
    if(top==-1){
        return "Underflow";
    }else{
        temp=st[top]
        top=top-1;
    }
    return temp;
}