
class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    addnode(data){
        let newnode=new Node(data)
        if(this.head==null){
            this.head=newnode
        }
        else{
            this.tail.next=newnode
        }
        this.tail=newnode
    }
    insert(next,data){
        let newnode=new Node(data)
        let current=this.head
        if(current==null){
            return;
        }
        while(current!=null && current.data!=next){
            this.head=current.next
            return;
        }
        newnode.next=current.next
        current.next=newnode
    }
    delete(data){
        let current=this.head
        let prev=null
        if(current!=null && current.data==data){
            this.head=current.next
            return;
        }
        while(current!=null && current.data!=data){
            prev=current
            current=current.next
        }
        prev.next=current.next
    }
    replacedata(oldData,newData){
        let current=this.head
        while(current!=null){ 
            if(current.data==oldData){
                current.data=newData
            }
            current=current.next

        }
    }
    display(){
        if(this.head==null){
            console.log("empty")
        }
        let temp=this.head
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next
        }
    }

}
let list=new linkedList()
list.addnode(10)
list.addnode(80)
list.insert(10,30)
list.delete(10)
list.replacedata(30,34)
list.display()
