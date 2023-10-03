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
//             return
//         }
//         while(true){
//             if(data<current.data){
//                 if(current.left==null){
//                   current.left=newnode
//                   break
//                 }else{
//                     current=current.left
//                 }
//             }else{
//                 if(current.right==null){
//                     current.right=newnode
//                     break
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
//             }else {
//                 return true
//             }
//         }
//         return false
//     }


//     preorder(){
//          this.preorderhelper(this.root)
//     }
//     preorderhelper(node){
//        if(node!=null){
//          console.log(node.data)
//         this.preorderhelper(node.left)
//         this.preorderhelper(node.right)        
//        }
//     }


//     postorder(){
//         this.postorderhelper(this.root)
//     }
//     postorderhelper(node){
//         if(node!=null){
//             this.postorderhelper(node.left)
//             this.postorderhelper(node.right) 
//             console.log(node.data)
//         }
//     }


//     inorder(){
//         this.inorderhelper(this.root)
//     }
//     inorderhelper(node){
//         if(node!=null){
//             this.inorderhelper(node.left)
//             console.log(node.data)
//             this.inorderhelper(node.right)
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
//             }else if (target>current.data){
//                 current=current.right
//             }else{
//                 break
//             }
//         }
//         return close.data
//     }




//     delete(data){
//                 this.root=this.deleteHelper(data,this.root)
                
//             }
//             deleteHelper(data,currentNode){
//                 if(currentNode==null){ 
//                     return currentNode
//                 }
//                 if(data<currentNode.data){
//                     currentNode.left=this.deleteHelper(data,currentNode.left)
//                 }else if(data>currentNode.data){
//                     currentNode.right=this.deleteHelper(data,currentNode.right)
//                 }
//                 else{
//                     if(!currentNode.left&&!currentNode.right){
//                         return null
//                     }
//                     if(!currentNode.left){
//                         return currentNode.right
//                     }else if(!currentNode.right){
//                         return currentNode.left
//                     }
//                     currentNode.data=this.min(currentNode.right)
//                     currentNode.right=this.deleteHelper(currentNode.right,currentNode.data)
//                 }
//                 return currentNode
//                 }

//                 min(currentNode){
//                             if(currentNode.left==null){
//                                 return currentNode.data
//                             }else{
//                                 return this.min(currentNode.left)
//                             }
//                         }

//                         remove(data){
//                           this.root=  this.removenode(this.root,data)
//                         }
//                         removenode(curr,data){
//                            if(curr==null){
//                             return "empty data"
//                            }

//                            if(data<curr.data){
//                             curr.left=this.removenode(curr.left,data)
//                            }else if(data>curr.data){
//                            curr.right= this.removenode(curr.right,data)
//                            }else{
//                             if(curr.left==null&&curr.right==null){
//                                 return null
//                             }else if(curr.left==null){
//                                 curr=curr.right
//                             }else if(curr.right==null){
//                                 curr=curr.left
//                             }else{
//                                  let min=this.min1(curr.right)
//                                  curr.data=min
//                                  return this.removenode(curr.right,curr.data)
//                             }
//                            }
//                            return curr
//                         }

//                         min1(i){
//                             if(i.left==null){
//                               return i.data
//                             }else{
//                                 return this.min1(i.left)
//                             }
//                   }

                  
//             }
    

// let tree=new binary()
// tree.insert(2)
// tree.insert(1)
// tree.insert(3)
// console.log(tree.contains(3))
// console.log("_______");
// console.log(tree.closest(10))
// console.log("_______");
// tree.preorder()
// console.log("_____");
// tree.postorder()
// tree.inorder()
// console.log("_____");
// tree.remove(1)
// tree.preorder()


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
//             }else{
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
//                 return true;
//             }

//         }
//         return false;
//     }

//     closest(target){
//         let current=this.root
//         let close=current
//         while(current!=null){
//             if(Math.abs(target-close.data)>(Math.abs(target-current.data))){
//                 close=current

//             }if(target<current.data){
//                 current=current.left
//             }else if(target>current.data){
//                 current=current.right
//             }else{
//                 break;
//             }
//         }
//         return close.data
//     }
// }


class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class binary{
    constructor(){
        this.root=null
    }
    insert(data){
        let newnode=new node(data)
        let current=this.root
        if(current==null){
            this.root=newnode
            return;
        }
        while(true){
            if(data<current.data){
                if(current.left==null){
                    current.left=newnode
                    break;
                }else{
                    current=current.left
                }
            }else{
               
                    if(current.right==null){
                        current.right=newnode
                        break;
                    }
                else{
                    current=current.right
                }
            }
        }
    }
    contains(data){
        let current=this.root
        while(current!=null){
            if(data<current.data){
                current=current.left
            }else if(data>current.data){
                current=current.right
            }else{
                return true
            }
        }
        return false;
    }
    preorder(){
        this.preorderhelper(this.root)
    }
    preorderhelper(node){
        if(node!=null){
        console.log(node.data)
        this.preorderhelper(node.left)
        this.preorderhelper(node.right)

        }
    }

    closest(target){
        let current=this.root
        let close=current
        while(current!=null){
            if(Math.abs(target-close.data)>(Math.abs(target-current.data))){
                close=current
            }
            if(target<current.data){
                current=current.left
            }else if(target>current.data){
                current=current.right
            }else{
                break;
            }
        }
        return close.data
        
    }
}
let javad=new binary()
javad.insert(10)
javad.insert(20)
console.log(javad.closest(40))
javad.preorderhelper()



// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
// class trie{
//     constructor(){
//         this.root=new trienode()
//         this.endsybol="*"
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
//         node.children.set(this.endsybol,null)
//     }

//     contains(str){
//         let node=this.root
//         for(let i=0;i<str.length;i++){
//             let letter=str[i]
//             if(!node.children.has(letter)){
//                 return false;
//             }
//             node=node.children.get(letter)
//         }
//         return node.children.has(this.endsybol)
//     }
// }
// let javad=new trie()
// javad.suffix("javad")
// console.log(javad.contains("vad"))


class heap{
    heap=new Array()
    constructor(arr){
        buildheap(arr)
    }
    buildheap(arr){
        this.heap=arr
        for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
            this.shiftdown(i)
        }
    }
    shiftdown(currentIdx){
        let end=this.heap.length-1
        let leftIndx=this.leftchild(currentIdx)
        while(leftIndx<=end){
            let rightIndx=this.rightchild(currentIdx)
            let indexToShift
                if(rightIndx<=end&&this.heap[rightIndx]<this.heap[leftIndx]){
                    indexToShift=rightIndx
                }else{
                    indexToShift=leftIndx
                }
                if(this.heap[indexToShift]<this.heap[currentIdx]){
                    this.swap(indexToShift,currentIdx)
                    currentIdx=indexToShift
                    leftIndx=this.rightchild(currentIdx)
                }else{
                    return
                }
                
            
        }
    }
    shifup(currentIdx){
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
    leftchild(i){
        return (i*2)+1
    }
    rightchild(i){
        return (i*2)+2
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    display(){
        for(i=0;i<this.heap.length;i++){
            console.log(this.heap[i])
        }
    }
    

}