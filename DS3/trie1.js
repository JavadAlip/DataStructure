

// class trienode{
//     constructor(){
//         this.children= new Map()
//     }
// }
// class trie{
//     constructor(){
//         this.root=new trienode()
//         this.endsybol="*"
//     }
//     suffix(str){
//         for(i=0;i<str.length;i++){
//             this.insretString(i,str)
//         }
//     }
//     insretString(idx,str){
//         let node=this.root
//         for(i=idx;i<str.length;i++){
//             if(!node.children.hash(str[i])){
//                 node.children.set(str[i],new trienode())
//             }
//             node=node.children.get(str[i])
//         }
//         node.children.set(this.endsybol,null)

//     }
// }

// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }

// class trie{
//     constructor(){
//         this.root=new trienode()
//         this.endword="*"
//     }
//     insert(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             if(!node.children.has(str[i])){
//                 node.children.set(str[i],new trienode())
//             }
//             node=node.children.get(str[i])
//         }
//         node.children.set(this.endword,null)
//     }
//     contain(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str[i]
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }
//         return node.children.has(this.endword)

//     }
// }
// let sample=new trie()
// sample.insert("jaavd")
// console.log(sample.contain("jaavd"))



// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(){
//         this.root=new trienode()
//         this.endsymbol="*"
//     }
//     suffix(str){
//         for(let i=0;i<str.length;i++){
//             this.insert(str,i)
//         }
//     }
//     insert(str,idx){
//         let node=this.root
//         for(let i=idx;i<str.length;i++){
//             if(!node.children.has(str[i])){
//                 node.children.set(str[i],new trienode)
//             }
//             node=node.children.get(str[i])
//         }
//         node.children.set(this.endsymbol,null)
//     }

//     contains(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str[i]
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }
//         return node.children.has(this.endsymbol)
//     }
// }
// let jaavd=new trie()
// jaavd.suffix("javad")
// console.log(jaavd.contains("vad"))



// class heap{
//     heap=new Array()
//     constructor(arr){
//         this.buildheap(arr)
//     }
//     buildheap(arr){
//         this.heap=arr
//         for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(currentIdx){
//         let end=this.heap.length-1
//         let leftIdx=this.leftchild(currentIdx)
//         while(leftIdx<=end){
//             let rightIdx=this.rightchild(currentIdx)
//             let indextosift
        
//         if(rightIdx<=end && this.heap[rightIdx]<this.heap[leftIdx]){
//             indextosift=rightIdx
//         }else{
//             indextosift=leftIdx
//         }if(this.heap[indextosift]<this.heap[currentIdx]){
//             this.swap(indextosift,currentIdx)
//             currentIdx=indextosift
//             leftIdx=this.leftchild(currentIdx)
//         }else{
//             return
//         }
//     }
//     }

//     shiftup(currentIdx){
//         let parent=Math.floor(this.parent(currentIdx))
//         while(parent>0 && this.heap[parent]>this.heap[currentIdx]){
//             this.swap(parent,currentIdx)
//             currentIdx=parent
//             parent=Math.floor(this.parent(currentIdx))
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftup(this.heap.length-1)

//     }
//     remove(){
//         this.heap.pop()
//         this.swap(0,this.heap.length-1)
//         this.shiftdown(0)
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i])
//         }
//     }
//     swap(i,j){
//         let temp=this.heap[i]
//         this.heap[i]=this.heap[j]
//         this.heap[j]=temp ;
//     }
//     leftchild(i){
//         return(i*2)+1
//     }
//     rightchild(i){
//         return(i*2)+2
//     }
//     parent(i){
//        return Math.floor((i-1)/2)
//     }
// }
// let arr=[4,5,2]
// let jaavd=new heap(arr)
// jaavd.display()




// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null
//     }
// }
// class binary{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let newnode=new node(data)
//         let current=this.root
//         if(current==null){
//             this.root=newnode
//             return;
//         }
//         while(true){
//             if(data<current.data){
//                 if(current.left==null){
//                     current.left=newnode
//                     break;
//                 }else{
//                     current=current.left
//                 }
//             }
//             else{
//                 if(current.right==null){
//                     current.right=newnode
//                     break;
//                 }else{
//                     current=current.right
//                 }
//             }
//         }
//     }

//     contains(data){
//         let current=this.root
//         while(current!=null){
//             if(data<current.data){
//                 current=current.left
//             }else if(data>current.data){
//                 current=current.right
//             }else{
//                 return true
//             }
//     }
//     return false
// }

// closest(target){
//     let current=this.root
//     let close=current
//     while(current!=null){
//         if(Math.abs(targrt-close.data)>(Math.abs(target=current.data)))
//         close=current
    
//     if(target<current.data){
//         current=current.left
//     }else if(target>current.data){
//         current=current.right
//     }else{
//         break;
//     }

// }
// return close.data
// }

// inorder(){
//     this.inorderhelper(this.root)
// }
// inorderorderhelper(node){
//     if(node!=null){
//         this.inorderorderhelper(node.left)
//         console.log(node.data)
//         this.inorderorderhelper(node.right)
//     }
// }

// }



// class node{
//     constructor(data){
//     this.data=data
//     this.left=null
//     this.right=null
//     }
// }
// class binary{
//     constructor(){
//         this.root=null
//     }
//     insert(data){
//         let newnode=new node(data)
//         let current=this.root
//         if(current==null){
//             this.root=newnode
//             return;
//         }
//         while(true){
//             if(data<current.data){
//                 if(current.left==null){
//                     current.left=newnode
//                     break;
//                 }else{
//                     current=current.left
//                 }
//             }
//             else{
//                 if(current.right==null){
//                     current.right=newnode
//                     break;
//                 }else{
//                     current=current.right
//                 }
//             }
//         }
//     }

//     contains(data){
//         let current=this.root
//         while(current!=null){
//             if(data<current.data){
//                 current=current.left
//             }else if(data>current.data){
//                 current=current.right
//             }else{
//                 return true
//             }
//         }
//         return false
//     }

//     closest(target){
//         let current=this.root
//         let closest=current
//         while(current!=null){
//             if(Math.floor(target-closest.data)>(Math.floor(target-current.data))){
//                 closest=current
//             } if(target<current.data){
//                 current=current.left
//             }else if(target>current.data){
//                 current=current.right
//             }else{
//                 break;
//             }
//         }
//         return closest.data
//     }

//     preorder(){
//         this.preorderhelper(this.root)
//     }
//     preorderhelper(node){
//         if(node!=null){
//             console.log(node.data)
//             this.preorderhelper(node.left)
//             this.preorderhelper(node.right)
//         }
//     }
//     postorder(){
//         this.postordrhelper(this.root)
//     }
//     postordrhelper(node){
//         if(node!=null){
//             this.postordrhelper(node.left)
//             this.postordrhelper(node.right)
//             console.log(node.data)
//         }
//     }
// }
// let javad=new binary()
// javad.insert(2)
// javad.insert(1)
// javad.insert(3)

// javad.postorder()
// console.log("---------------")
// javad.preorder()
// console.log(javad.contains(100))
// console.log(javad.closest(50))



// class heap{
//     heap=new Array
//     constructor(arr){
//         this.buildheap(arr)
//     }
//     buildheap(arr){
//         this.heap=arr
//         for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(currentIdx) {
//         let end = this.heap.length - 1;
//         let leftIdx = this.leftchild(currentIdx);
    
//         while (leftIdx <= end) {
//             let rightIdx = this.rightchild(currentIdx);
//             let indexToShift = leftIdx;
    
//             if (rightIdx <= end && this.heap[rightIdx] < this.heap[leftIdx]) {
//                 indexToShift = rightIdx;
//             }
    
//             if (this.heap[indexToShift] < this.heap[currentIdx]) {
//                 this.swap(indexToShift, currentIdx);
//                 currentIdx = indexToShift;
//                 leftIdx = this.leftchild(currentIdx);
//             } else {
//                 return;
//             }
//         }
//     }
    
//     shiftup(currentIdx){
//         let parent=Math.floor(this.parent(currentIdx))
//         while(parent>=0 && this.heap[parent]>this.heap[currentIdx]){
//         this.swap(parent,currentIdx)
//         currentIdx=parent
//         parent=Math.floor(this.parent(currentIdx))
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftdown(this.heap.length-1)
//     }
//     remove(){
//         this.heap.pop()
//         this.shiftup(0)
//         this.swap(0.,this.heap.length-1)
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i])
//         }
//     }
//     swap(i,j){
//         let temp=this.heap[i]
//         this.heap[i]=this.heap[j]
//         this.heap[j]=temp
//     }
//     leftchild(i){
//         return(i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
// }
// let arr=[5,2,6,1,4]
// let jaavd=new heap(arr)
// jaavd.display()



// class heap{
//     heap=new Array()
//     constructor(arr){
//         this.buildheap(arr)
//     }
//     buildheap(arr){
//         this.heap=arr
//         for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
//             this.shiftdown(i)
//         }
//     }
//     shiftdown(currentIdx){
//         let end=this.heap.length-1
//         let leftIdx=this.leftchild(currentIdx)
//         while(leftIdx<=end){
//             let rightIdx=this.rightchild(currentIdx)
//             let indexToShift
//             if(rightIdx<=end && this.heap[rightIdx]<this.heap[leftIdx]){
//                 indexToShift=rightIdx
//             }else{
//                 indexToShift=leftIdx
//             }if(this.heap[indexToShift]<this.heap[currentIdx]){
//                 this.swap(indexToShift,currentIdx)
//                 currentIdx=indexToShift
//                 leftIdx=this.leftchild(currentIdx)
//             }else{
//                 return
//             }
//         }
//     }
//     shiftup(currentIdx){
//         let parent=Math.floor(this.parent(currentIdx))
//         while(parent>=0 && this.heap[parent]>this.heap[parent]){
//             this.swap(parent,currentIdx)
//             currentIdx=parent
//             parent=Math.floor(this.parent(currentIdx))
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftdown(this.heap.length-1)
//     }
//     remove(){
//         this.heap.pop()
//         this.swap(0,this.heap.length-1)
//         this.shiftup(0)
//     }
//     display(){
//         for(i=0;i<this.heap.length;i++){
//             console.log(this.heap[i])
//         }
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return(i*2)+2
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     large(){
//         let large=this.heap[0]
//         for(let i=0;i<this.heap.length;i++){
//             if(this.heap[i]>large){
//                 large=this.heap[i]
//             }
//         }
//         return large
//     }
// }

class trienode{
    constructor(arr){
        this.childern=new Map()
    }
}

class trie{
    constructor(arr){
        this.root= new trienode()
        this.endsymbol="*"
    }
    suffix(str){
        for(let i=0;i<str.length;i++){
            this.insert(str,i)
        }
    }
    insert(str,idx){
        let node=this.root
        for(let i=idx;i<str.length;i++){
            if(!node.childern.has(str[i])){
                node.childern.set(str[i],new trienode())
            }
            node=node.childern.get(str[i])
        }
        node.childern.set(this.endsymbol,null)
    }
    contains(str){
        let node=this.root
        for(let i=0;i<str.length;i++){
            let letter=str[i]
            if(!node.children.has(letter)){
                return false
            }
            node=node.childern.get(letter)
        }
       return node.childern.has(this.endsymbol)
    }

}
let javad=new trie()
javad.insert("javad")
console.log(javad.contains("av"))