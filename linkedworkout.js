class Node{
    constructor(data){
        this.data=data
        this.next=null

    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }
    addnode(data){
        let newnode=new Node(data)
        if(this.head==null){
            this.head=newnode
        }else{
            this.tail.next=newnode
        }
        this.tail=newnode


    }
    display(){
        if(this.head==null){
            console.log("empty");
            return;

        }
        let temp=this.head
        while(temp!==null){
            console.log(temp.data);
            temp=temp.next;
        }

    }
}
let list=new linkedlist()
list.addnode(7)
list.addnode(5)

list.display()
