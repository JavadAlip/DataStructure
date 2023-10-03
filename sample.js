// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addnode(data){
//         let newnode=new Node (data)
//         if(this.head==null){
//             this.head=newnode
//         }
//         else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }


//     insert(next,data){
//         let newnode=new Node(data)
//         let current=this.head
//         if(current!=null && current.data!=next){
//             current=current.next
//         }
//         newnode.next=current
//         current.next=newnode
//     }
//     display(){
//         if(this.head==null){
//             console.log("empty")
//             return;
//         }

//         let temp=this.head
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
//     delete(data){

//         let current=this.head
//         let prev= null

//         if(current!=null && current.data!=data){
//             this.head=current.next;
//             return;
//         }
//         while(current!=null && current.data==data){
//             prev=current
//             current=current.next
//         }
//         prev.next=current.next
//     }


// }
// let list=new linkedList()
// list.addnode(12)
// list.addnode(33)
// list.delete(12)

// list.display()






// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(data){
//         let newnode=new Node (data)
//         if(this.head==null){
//             this.head=newnode
//         }else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }
//     display(){
//         if(this.head==null){
//             console.log("empty")
//             return;
//         }
//         let temp=this.head
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }

//     insert(next,data){
//         let newnode=new Node (data)
//         let current=this.head
//         if(current==null){
//             return
//         }
//         while(current!=null && current.data!=next){
//             current=current.next;
//             return;
//         }
//         newnode.next=current.next
//         current.next=newnode
//     }

//     delete(data){
//         let current=this.head
//         let prev=null
//         if(current!=null&& current.data==data){
//             this.head=current.next
//             return;
//         }
//         while(current!=null && current.data!=data){
//             prev=current
//             current=prev.next
//         }
//         prev.next=current.next

//     }

// }
// let  list=new linkedList()
// list.addnode(12)
// list.addnode(35)
// // list.insert(12,13)
// list.delete(12)
// list.display()






// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(data){
//         let newnode=new Node (data)
//         if(this.head==null){
//             this.head=newnode
//         }else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }

//     insert(next,data){
//         let newnode=new Node(data)
//         let current=this.head
//         if(this.head==null){
//             return;
//         }
//         while(current!=null && current.data!=next){
//             current=current.next;
//             return;

//         }
//         newnode.next=current.next
//         current.next=newnode
//     }

//     delete(data){
//         let current=this.head
//         let prev=null
//         if(current!=null && current.data==data){
//             this.head=current.next
//             return;
//         }
//         while(current!=null && current.data!=data){
//             prev=current
//             current=current.next
//         }
//         prev.next=current.next
//     }

//     display(){
//         if(this.head==null){
//             console.log("empty")
//             return;
//         }
//         let temp=this.head
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }

// }
// let list=new linkedList()
// list.addnode(10)
// list.addnode(20)
// list.addnode(30)
// list.delete(10)
// list.insert(30,40)
// list.display()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }

// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

// addnewnode(data){
//     let newnode=new Node(data)
//     if(this.head==null){
//         this.head=newnode
//     }else{
//         this.tail.next=newnode
//     }
//     this.tail=newnode
// }




// insert(next,data){
//     let newnode=new Node(data)
//     let current=this.head
//     if(this.head==null){
//         return;
//     }
//     while(current!=null && current.data!=next){
//         current=current.next;
//         return;


//     }
//     newnode.next=current.next
//         current.next=newnode
// }



// delete(data){
//    let current=this.head
//    let prev=null
//    if(current!=null && current.data==data){
//     this.head=current.next;
//     return;
//    }
//    while(current!=null && current.data!= data){
//     prev=current
//     current=current.next
//    }
//    prev.next=current.next

// }
// display(){
//     if(this.head==null){
//         console.log("empty")
//         return;
//     }
//     let temp=this.head
//     while(temp!=null){
//         console.log(temp.data)
//         temp=temp.next
//     }
// }
// }
// let list=new linkedList()
// list.addnewnode(12)
// list.addnewnode(10)
// list.addnewnode(90)
// list.insert(10,20)
// list.delete(12)
// list.display()





// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(data){
//         let newnode=new Node(data)
//         if(this.head==null){
//             this.head=newnode
//         }
//         else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }

//     insert(next,data){
//         let newnode=new Node(data)
//         let current=this.head
//         if(this.head==null){
//             return;
//         }
//         while(current!=null && current.data!=next){
//             current=current.next
//             return;

//         }
//         newnode.next=current.next
//         current.next=newnode
//     }

//     display(){
//         if(this.head==null){
//             console.log("empty")
//             return;

//         }
//         let temp=this.head
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
//     delete(data){
//         let current=this.head
//         let prev=null
//         if(current!=null && current.data==data){
//             this.head=current.next;
//             return;
//         }
//         while(current!=null && current.data!=data){
//             prev=current
//             current=current.next
//         }
//         prev.next=current.next
//     }
// }
// let list=new linkedList()
// list.addnode(12)
// list.addnode(20)
// list.addnode(30)
// list.insert(12,10)
// list.delete(10)
// list.display()






// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(data){
//         let newnode=new Node(data)
//         if(this.head==null){
//             this.head=newnode
//         }else{
//             this.tail.next =newnode
//         }
//         this.tail=newnode
//     }
//   insert(next,data){
//     let newnode=new Node(data)
//     let current=this.head
//     if(current==null){
//         return;
//     }
//     while(current!=null && current.data!==next){
//         current=current.next;
//         return;
//     }
//     newnode.next=current.next
//     current.next=newnode
//   }
//   delete(data){
//     let current=this.head
//     let prev = null
//     if(current!=null && current.data==data){
//         this.head=current.next;
//         return;
//     }
//     while(current!==null && current.data!=data){
//         prev=current
//         current=current.next
//     }
//     prev.next=current.next
//   }
//   display(){
//     if(this.head==null){
//         console.log("empty")
//         return;
//     }
//     let temp=this.head
//     while(temp!=null){
//         console.log(temp.data)
//         temp=temp.next
//     }
//   }
// }
// let list=new linkedList()
// list.addnode(10)
// list.addnode(20)
// list.addnode(30)
// list.insert(10,40)
// list.delete(10)
// list.display()




// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }
//     addnode(data) {
//         let newnode = new Node(data)
//         if (this.head == null) {
//             this.head = newnode
//         }
//         else {
//             this.tail.next = newnode
//         }
//         this.tail = newnode
//     }

//     insert(next, data) {
//         let newnode = new Node(data)
//         let current = this.head
//         if (current == null) {
//             return;
//         } while (current != null && current.data != next) {
//             current = current.next
//             return;
//         }
//         newnode.next = current.next
//         current.next = newnode
//     }
//     delete(data) {
//         let current = this.head
//         let prev = null
//         if (current != null && current.data == data) {
//             this.head = current.next
//             return;
//         }
//         while (current != null && current.dtat != data) {
//             prev = current
//             current = current.next

//         }
//         prev.next = current.next
//     }


//     replaceData(oldData, newData) {
//         let current = this.head
//         while (current != null) {
//           if (current.data == oldData) {
//             current.data = newData;
//           }
//           current = current.next;
//         }
//       }



//     display() {
//         if (this.head == null) {
//             console.log("empty")
//             return;
//         }
//         let temp = this.head
//         while (temp != null) {
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }
// }
// let list = new linkedList()
// list.addnode(10)
// list.addnode(20)
// list.addnode(30)
// list.addnode(40)
// list.addnode(50)

// list.insert(10,34)
// list.replaceData(20,60)
// list.display()


// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }
//     addnode(data) {
//         let newnode = new Node(data)
//         if (this.head == null) {
//             this.head = newnode
//         }
//         else {
//             this.tail.next = newnode
//         }
//         this.tail = newnode
//     }

//     insert(next, data) {
//         let newnode = new Node(data)
//         let current = this.head
//         if (current == null) {
//             return;
//         }
//         while (current != null && current.data != next) {
//             current = current.next;
//             return;
//         }
//         newnode.next = current.next
//         current.next = newnode
//     }
    
//     delete(data) {
//         let current = this.head
//         let prev = null
//         if (current != null && current.data == data) {
//             this.head = current.next;
//             return;
//         }
//         while (current != null && current.data != data) {
//             prev = current
//             current = current.next
//         }
//         prev.next = current.next
//     }
//     display() {
//         if (this.head == null) {
//             console.log("empty")
//             return;
//         }
//         let temp = this.head
//         while (temp != null) {
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }
//     replaceData(oldData,newData){
//         let current=this.head
//         while(current!=null){
//             if(current.data==oldData){
//                 current.data=newData
//             }
//             current=current.next
//         }
//     }
// }

// let list = new linkedList()
// list.addnode(10)
// list.addnode(20)
// list.addnode(30)
// list.insert(20,50)
// list.replaceData(10,11)


// list.display()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(data){
//         let newnode=new Node(data)
//         if(this.head==null){
//             this.head=newnode
//         }
//         else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }
//     display(){
//         if(this.head==null){
//             console.log("empty")
//         }
//         let temp=this.head
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
//     insert(next,data){
//         let newnode=new Node(data)
//         let current=this.head
//         if(current==null){
//             return;
//         }
//         while(current!=null && current.data!=next){
//             current=current.next;
//             return;
//         }
//         newnode.next=current.next
//         current.next=newnode
//     }

//     delete(data){
//         let current=this.head
//         let prev=null
//         if(current!=null && current.data==data){
//             this.head=current.next
//             return;
//         }
//         while(current!=null && current.data!=data){
//             prev=current
//             current=current.next
//         }
//         prev.next=current.next
//     }
//     replaceData(oldData,newData){
//         let current=this.head
//         while(current!=null){
//             if(current.data==oldData){
//                 current.data=newData
//             }
//             current=current.next
//         }
//     }

// }
// let list=new linkedList()
// list.addnode(10)
// list.addnode(20)
// list.addnode(30)
// list.insert(10,40)
// list.delete(10)
// list.replaceData(10,23)
// list.display()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addnode(data){
//         let newnode=new Node(data)
//         if(this.head==null){
//             this.head=newnode
//         }
//         else{
//             this.tail.next=newnode
//         }
//         this.tail=newnode
//     }
//     insert(next,data){
//         let newnode=new Node(data)
//         let current=this.head
//         if(current==null){
//             return;

//         }
//         while(current!=null && current.data!=next){
//             current=current.next
//             return;
//         }
//         newnode.next=current.next
//         current.next=newnode
//     }
//     delete(data){
//         let current=this.head
//         let prev=null
//         if(current!=null && current.data==data){
//             this.head=current.data
//             return;
//         }
//         while(current!=null && current.data!=data){
//             prev=current
//             current=current.next
//         }
//         prev.next=current.next
//     }
//     replaceData(oldData,newData){
//         let current=this.head
//         while(current!=null){
//             if(current.data==oldData){
//                 current.data=newData
//             }
//             current=current.next
//         }

//     }


//     display(){
//         if(this.head==null){
//             console.log("empty")
//             return;
//         }
//         let temp=this.head
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }

// }
// let list=new linkedList()
// list.addnode(10)
// list.addnode(20)
// list.insert(10,30)
// list.delete(20)
// list.replaceData(10,40)

// list.display()

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
            current=current.next
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
list.insert(10,20)
list.delete(10)
list.display()