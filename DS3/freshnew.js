// binary tree------ 9:59

// class node{
//     constructor(data){
//         this.data=data
//         this.left=null
//         this.right=null

//     }
// }
// class binary{
//     constructor(){
//         this.roor=null
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
//     closest(target){
//         let current=this.root
//         let close=current
//         while(current!=null){
//             if(Math.abs(target-close.data)>(Math.abs(target-current.data))){
//                 close=current
//             }
//             if(target<current.data){
//                 current=current.left
//             }else if(target>current.data){
//                 current=current.right
//             }else{
//                 break;
//             }
//         }
//         return close.data
//     }
//     contains(data){
//         let current=this.root
//         while(current!=null){
//             if(data<current.data){
//                 current=current.left
//             }else if(data>current.data){
//                 current=current.right
//             }else{
//                 return true;
//             }
//         }
//         return false;
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
  
// }
// let javad=new binary()
// javad.insert(10)
// javad.insert(20)
// javad.insert(30)
// javad.preorder()
// console.log(javad.contains(10))
// console.log(javad.closest(40))



// trie----------------------10:21

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
//                 node.children.set(str[i],new trienode())
//             }
//             node=node.children.get(str[i])
//         }
//         node.children.set(this.endsymbol,null)
//     }
//     contains(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str[i]
        
//         if(!node.children.has(letter)){
//             return false

//         }
//         node=node.children.get(letter);
//     }
//     return node.children.has(this.endsymbol);
// }
// }
// let javad=new trie()
// javad.suffix("javad")
// console.log(javad.contains("vad"))


// Heap---------------10:53

class heap{
    heap=new Array()
    constructor(arr){
        this.buildheap(arr)

    }
    buildheap(arr){
        this.heap=arr
        for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
            this.shiftdown(i)
        } 
    }
    shiftdown(currentIdx){
        let end=this.heap.length-1
        let leftIdx=this.leftchild(currentIdx)
        while(leftIdx<=end){
            let rightIdx=this.rightchild(currentIdx)
            let indexToShift
            if(rightIdx<=end && this.heap[rightIdx]<this.heap[leftIdx]){
                indexToShift=rightIdx

            }else{
                indexToShift=leftIdx
            }if(this.heap[indexToShift]<this.heap[currentIdx]){
                this.swap(indexToShift,currentIdx)
                currentIdx=indexToShift
                leftIdx=this.leftchild(currentIdx)
            }else{
                return
            }
        }

    }
    shiftup(currentIdx){
        let parent=Math.floor(this.parent(currentIdx))
        while(parent>=0 && this.heap[parent]>this.heap[currentIdx]){
            this.swap(parent,currentIdx)
            currentIdx=parent
            parent=Math.floor(this.parent(currentIdx))
        }
    }
    insert(value){
        this.heap.push(value)
        this.shiftup(this.heap.length-1)
    }
    remove(){
        this.heap.pop()
        this.shiftdown(0)
        this.swap(0,this.heap.length-1)
    }
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i])
        }
    }
    leftchild(i){
        return (i*2)+1
    }
    rightchild(i){
        return (i*2)+2
    }
    parent(i){
       return Math.floor((i-1)/2)
    }
    swap(i,j){
        let temp=this.heap[i]
        this.heap[i]=this.heap[j]
        this.heap[j]=temp
    }
    large(){
        let large=this.heap[0]
        for(let i=0;i<this.heap.length;i++){
            if(this.heap[i]>large){
                large=this.heap[i]
            }
        }
        return large
    }
}
let arr=[33,202,40]
let javad=new heap(arr)
javad.insert(10)
javad.insert(20)
javad.insert(30)
console.log(javad.large())
javad.remove()
javad.display()