class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}   

class Stack{
    constructor(){
        this.top=null
    }
    push(data){
        let newnode=new Node(data)
        if(this.top==null){
            this.top=newnode
        }
        else{
            newnode.next=this.top
            this.top=newnode
        }
    }
    pop(){
        if(this.top==null){
            log("empty")
        }
        this.top= this.top.next
    }
    display(){
        let temp=this.top 
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next
        }
    }
}
let newstack=new Stack()
newstack.push(10)
newstack.push(70)
newstack.push(30)
newstack.pop(30)
newstack.display()



