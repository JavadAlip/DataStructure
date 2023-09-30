// let value="hai"
// function newString(str,key){
//     let newKey=key%26
//     let charArray=[]

//     for(i=0;i<=str.length;i++){
//         let charPoss=str.charCodeAt(i)+newKey

//         if(charPoss<=122){
//             charArray.push(String.fromCharCode(charPoss))
//         }else{
//             charArray.push(String.fromCharCode(97+(charPoss%122)))
//         }
//     }
//     return charArray.join("")
// }
// console.log(newString(value,3));

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
        let newnode=new Node (data)
        if(this.head==null){
            this.head=newnode
        }
        else{
            this.tail.next=newnode
        }

        this.tail=newnode   
    }

    display(){
        if(this.head==null){
            console.log("empty")
            return;
        }
        let temp=this.head
        while(temp!==null){
            console.log(temp.data)
            temp=temp.next
        }
   
    }

    insert(next,data){
        let newnode=new Node (data)
        let current=this.head

        while(current!=null&& current.data!=next){
            current=current.next

        }if(current==null){
        return;
        }
        newnode.next=current.next
        current.next=newnode

    }
    delete(data){
        let current=this.head
        let prev=null
        if(current!=null&&current.data==data){
        this.head=current.next
        return;
        }
        while(current!=null&&current.data!=data){
            prev=current
            current=current.next;

        }
        prev.next=current.next;
    }

}
let list =new linkedList()
list.addnode(60)
list.addnode(10)

list.insert(10,68)
list.delete(10)

list.display()