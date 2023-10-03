delete(data){
            this.root=this.deleteHelper(data,this.root)
            
        }
        deleteHelper(data,currentNode){
            if(currentNode==null){
                return currentNode
            }
            if(data<currentNode.data){
                currentNode.left=this.deleteHelper(data,currentNode.left)
            }else if(data>currentNode.data){
                currentNode.right=this.deleteHelper(data,currentNode.right)
            }
            else{
                if(!currentNode.left&&!currentNode.right){
                    return null
                }
                if(!currentNode.left){
                    return currentNode.right
                }else if(!currentNode.right){
                    return currentNode.left
                }
                currentNode.data=this.min(currentNode.right)
                currentNode.right=this.deleteHelper(currentNode.right,currentNode.data)
            }
            return currentNode
            }
            
        