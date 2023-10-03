class Node {
        constructor(data) {
            this.data = data
            this.left = null
            this.right = null
        }
    }
    
    class tree {
        constructor() {
            this.root = null
        }
        insert(data) {
            let newNode = new Node(data)
            let current = this.root
            if (this.root == null) {
                this.root = newNode
                return
            }
            while (true) {
                if (data < current.data) {
                    if (current.left == null) {
                        current.left = newNode
                        break
                    } else {
                        current = current.left
                    }
                } else {
                    if (current.right == null) {
                        current.right = newNode
                        return
                    } else {
                        current = current.right
                    }
                }
            }
        }

// ----------------------------------------------------------------------------------------------

        constains(data){
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
            return false
        }


        // min(currentNode){
        //     if(currentNode.left==null){
        //         return currentNode.data
        //     }else{
        //         return this.min(currentNode.left  )
        //     }
        // }


        // delete(data){
        //     this.root=this.deleteHelper(data,this.root)
            
        // }
        // deleteHelper(data,currentNode){
        //     if(currentNode==null){
        //         return currentNode
        //     }
        //     if(data<currentNode.data){
        //         currentNode.left=this.deleteHelper(data,currentNode.left)
        //     }else if(data>currentNode.data){
        //         currentNode.right=this.deleteHelper(data,currentNode.right)
        //     }
        //     else{
        //         if(!currentNode.left&&!currentNode.right){
        //             return null
        //         }
        //         if(!currentNode.left){
        //             return currentNode.right
        //         }else if(!currentNode.right){
        //             return currentNode.left
        //         }
        //         currentNode.data=this.min(currentNode.right)
        //         currentNode.right=this.deleteHelper(currentNode.right,currentNode.data)
        //     }
        //     return currentNode
        //     }
            
        }
    
        let trees=new tree()
        trees.insert(30)
        trees.insert(78)
        trees.insert(20)
        trees.insert(10)
      
        console.log(trees.constains(340));
    
