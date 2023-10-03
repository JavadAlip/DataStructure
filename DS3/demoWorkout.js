// preorder(){
//     this.preorderhelp(this.root)
// }
// preorderhelp(node){
//     if(node!=null){
//         console.log(node.data)
//         this.preorderhelp(node.left)
//         this.preorderhelp(node.right)
       
//     }
// }


// delete(data){
//     this.root=this.deleteHelper(this.root,data)
// }
// deleteHelper(data,currentNode){
//     if(currentNode==null){
//         return currentNode
//     }
//     if(data<currentNode.data){
//         currentNode.left=this.deleteHelper(data,currentNode.left)
//     }
//     else if(data>currentNode.data){
//         currentNode.right=this.deleteHelper(data.currentNode.right)
//     }else{
//         if(!currentNode.left&&!currentNode.right){
//             return null
//         }
//         if(currentNode.left){
//             return currentNode.right
//         }else if(currentNode.right){
//             return currentNode.left
//         }
//         currentNode.data=this.min(currentNode.right)
//         currentNode.right=this.deleteHelper(currentNode.right,currentNode.data)
//     }
//     return currentNode
    
// }

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
//         while(leftIdx<end){
//             let rightIdx=this.rightchild(currentIdx)
//             let indexToShift
//             if(rightIdx<=end && this.heap[rightIdx]<this.heap[leftIdx]){
//                 indexToShift=rightIdx

//             }else{
//                 indexToShift=leftIdx
//             }
//             if(this.heap[indexToShift]<this.heap[currentIdx]){
//                 this.swap(indexToShift,currentIdx)
//                 currentIdx=indexToShift
//                 leftIdx=this.leftchild(currentIdx)

//             }else{
//                 return
//             }
//         }
//     }
    
// }

class trienode{
    constructor(){
        this.children=new Map()
    }
}
class trie{
    constructor(){
        this.root=new trienode()
        this.endsymbol="*"
    }
    sufixtrie(str){
        for(let i=0;i<str.length;i++){
            this.insertString(i,str)
        }
    }
    insertString(idx,str){
        let node=this.root
        for(let i=idx;i<str.length;i++){
            if(!node.children.has(str[i])){
                node.children.set(str[i],new trienode())
            }
            node=node.children.get(str[i])
        }
        node.children.set(this.endsymbol,null)
    }
}

insertString(idx,str){
    let node=this.root
    for( let i=idx;i<str.length;i++){
        if(!node.children.has(str[i])){
            node.children.set(str[i],new trienode())
        }
        node=node.children.get(str[i])

    }
    node.children.set(this.endsymbol,null)
}