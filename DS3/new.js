// class graph{
    //     constructor(){
    //         this.graph=new Map()
    //     }
    //     addvertex(data){
    //         this.graph.set(data,new Array())
    //     }
    //     insert(vertex,edge,isbi=false){
    //         if(!this.graph.has(vertex)){
    //             this.addvertex(vertex)
    //         }
    //         if(!this.graph.has(edge)){
    //             this.addvertex(edge)
    //         }
    //         if(!this.graph.get(vertex).includes(edge)){
    //             this.graph.get(vertex).push(edge)
    //         }
    //         if(isbi){
    //             if(!this.graph.get(edge).includes(vertex)){
    //                 this.graph.get(edge).push(vertex)
    //             }
    //         }
            
    //     }
    //     display(){
    //         console.log(this.graph);
    //     }
    // }
    // let g=new graph()
    // g.insert(2,4,true)
    // g.insert(5)
    // g.insert(9,8)
    
    // g.display()
    
    
    // class graph{
    //      constructor(){
    //         this.adjlist= new Map()
    //      }
    
    //      addVertex(vertex){
    //         this.adjlist.set(vertex,[])
    //      }
    
    //      addEdge(vertex1,vertex2){
    //         this.adjlist.get(vertex1).push(vertex2)
    //         this.adjlist.get(vertex2).push(vertex1)
    //      }
    
    //      bfs(i) {
    //         if (!this.adjlist.has(i)) {
    //           return null;
    //         }
        
    //         const visited = new Set();
    //         const queue = [];
        
    //         visited.add(i);
    //         queue.push(i);
        
    //         while (queue.length > 0) {
    //           const currentVertex = queue.shift();
    //           console.log(currentVertex);
        
    //           const neighbors = this.adjlist.get(currentVertex);
    //           for (const neighbor of neighbors) {
    //             if (!visited.has(neighbor)) {
    //               visited.add(neighbor);
    //               queue.push(neighbor);
    //             }
    //           }
    //         }
    //       }
    
    //       bfs(i){
    //         if(!this.adjlist.has(i)){
    //             return null
    //         }
    
    //         let visited=new set()
    //         let q=[]
    
    //         visited.add(i)
    //         q.push(i) 
    
    //         while(q.length>0){
    //             let currvertex= q.shift()
    //             console.log(currvertex)
    
    //         let neighbors=this.adjlist.get(currvertex)
    //         for(let n of neighbors){
    //             if(!visited.has(n)){
    //                 visited.add(n)
    //                 q.push(n)
    //             }
    //         }
    
    //         }
    
    //       }
    
    //       bfs(i){
    //          if(!this.adjlist.has(i)){
    //             return null
    //          }
    
    //          let visted=new set()
    //          let q=[]
    
    //          visted.add(i)
    //          q.push(i)
    //          while(q.length>0){
    //             let curr=q.shift()
    //             console.log(curr)
        
    //             let neighbors=this.adjlist.get(curr)
    //             for(let n of neighbors){
    //                 if(!visted.has(n)){
    //                     visted.add(n)
    //                     q.push(n)
    //                 }
    //             }
    //          }        
    //       }
    
    
    //       bfs(i){
    //         if(!this.adjlist.has(i)){
    //             return null
    //         }
    
    //         let visited=new set()
    //         q=[]
    
    //         visited.add(i)
    //         q.push(i)
    
    //         while(q.length>0){
    //             let curr=q.shift()
    //             console.log(curr);
    
    //             let neighbors=this.adjlist.get(curr)
    //             for(let n of neighbors){
    //                 if(!visited.has(n)){
    //                     visited.add(n)
    //                     q.push(n)
    //                 }
    //             }
    //         }
    //       }
    // }
    
    // let l=new graph()
    // l.addVertex("a")
    // l.addVertex("b")
    // l.addVertex("c")
    // l.addVertex("d")
    // l.addEdge("a","b")
    // l.addEdge("a","c")
    // l.addEdge("a","d")
    // l.bfs("b")
    
    
    //  console.log(l);
    
    
    
    
    // class heap{
    //     constructor(){
    //         this.heap=[]
    //     }
        
    //     buildheap(array) {
    //         this.heap = [...array];
    //         for (let i = Math.floor(this.parent(this.heap.length - 1)); i >= 0; i--) {
    //           this.shiftdown(i);
    //         }
    //       }
          
    //    parent(i){
    //     return Math.floor((i-1)/2)
    //    }
    
    //    leftchild(i){
    //     return 2*i+1
    //    }
    
    //    rightchild(i){
    //     return 2*i+2
    //    }
    
    //    swap(i,j){
    //     [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    //    }
    
    //    add(value){
    //     this.heap.push(value)
    //     this.heapup(this.heap.length-1)
    //    }
    
    //    heapup(i){
    //     let parent=this.parent(i)
    //     while(i>0&&this.heap[parent]<this.heap[i]){
    //         this.swap(i,parent)
    //         i=parent
    //         parent=this.parent(i)
    //     }
    //    }
    
    //    delete(){
    //     this.swap(0,this.heap.length-1)
    //     this.heap.pop()
    //     this.shiftdown(0)
    //    }
    
    //    shiftdown(i){
    //      let size=this.heap.length-1
    //      let left=this.leftchild(i)
    //      let right=this.rightchild(i)
    //      let smallest
    //     while(left<=size){
    //         if(right<=size&&this.heap[right]<this.heap[left]){
    //          smallest=right
    //         }else{
    //          smallest=left
    //         }
    //         if(this.heap[i]>this.heap[smallest]){
    //             this.swap(i,smallest)
    //             i=smallest
    //             left=this.leftchild(i)
    //         }else{
    //             return 
    //         }
    //     }
         
    //    }
    // }
    
    
    // let l=new heap()
    // let arry=[3,2,1,5,6,8,6]
    // l.buildheap(arry)
    // console.log(l.heap);
    // l.add(23)
    // l.add(45)
    // l.add(12)
    // l.add(89)
    // console.log(l);
    
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
    //             }else{
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
    //                         }
                    
    //             }
        
    
    // let tree=new binary()
    // tree.insert(90)
    // tree.insert(20)
    // tree.insert(35)
    // tree.insert(98)
    // tree.insert(40)
    // tree.insert(30)
    // tree.insert(25)
    // tree.insert(50)
    
    // // console.log(tree.contains(30))
    // // console.log("_______");
    // // console.log(tree.closest(45))
    // // console.log("_______");
    // tree.preorder()
    // console.log("_____");
    // tree.remove(30)
    // tree.preorder()
    
    
    //////////heap//////////////////////////////////////////////////////////////////
    class Heap{
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
        shiftdown(currentidx){
            let end=this.heap.length-1;
            let leftidx=this.leftchild(currentidx)
            while(leftidx<=end){
               let rightidx=this.rightchild(currentidx)
                let indextoshift
                if(rightidx<=end&&this.heap[rightidx]<this.heap[leftidx]){
                    indextoshift=rightidx
                }else{
                    indextoshift=leftidx
                }
                if(this.heap[indextoshift]<this.heap[currentidx]){
                    this.swap(indextoshift,currentidx)
                    currentidx=indextoshift
                    leftidx=this.leftchild(currentidx)
                }else{
                    return
                }
            }
        }
        shiftup(currentidx){
            let parent=Math.floor(this.parent(currentidx))
            while(parent>=0 && this.heap[parent]>this.heap[currentidx]){
                this.swap(parent,currentidx)
            currentidx=parent
            parent=Math.floor(this.parent(currentidx))
            }
            
        }
        remove(){
            this.swap(0,this.heap.length-1)
            this.heap.pop()
            this.shiftdown(0)
    
        }
        large(){
            let l=this.heap[0]
            for(let i=0;i<this.heap.length;i++){
                if(this.heap[i]>l){
                    l=this.heap[i]
                }
            }
            return l
        }
        display(){
            for(let i=0;i<this.heap.length;i++){
                console.log(this.heap[i])
            }
        }
        insert(value){
            this.heap.push(value)
            this.shiftup(this.heap.length-1)
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
            this.heap[i]= this.heap[j]
            this.heap[j]=temp
        }
    }
    let arr=[10,6,2,9,3,7,4]
    let h=new Heap(arr)
    h.display()
    console.log("------------------------");
    console.log(h.large());
    
    ////////////trie////////////////////////////////////////////////////////
    
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
        insert(str){
            let node=this.root
            for(let i=0;i<str.length;i++){
                if(!node.children.has(str[i])){
                    node.children.set(str[i],new trienode())
                }
                node=node.children.get(str[i])
            }
            node.children.set(this.endsymbol,null)
        }
    
    contains(str){
        let node=this.root
        for(let i=0;i<str.length;i++){
            let letter=str[i]
            if(!node.children.has(letter)){
                return false
            }
            node=node.children.get(letter)
        }
        return node.children.has(this.endsymbol)
    }
    }
    let tr=new trie()
    tr.insert("irshad")
    console.log(tr.contains("irshad"));
    
    /////////populate suffixtrie////////////////////////////////////////////////////////////
    
    class treinode{
        constructor(){
            this.children=new Map()
        }
    }
    class trie{
        constructor(){
            this.root=new treinode()
            this.endsymbol="*"
        }
    
        populateSuffixTrie(str){
            for(let i=0;i<str.length;i++){
                this.insertStringStartingAt(i,str)
            }
        }
        insertStringStartingAt(idx,str){
            let node=this.root
            for(let i=idx;i<str.length;i++){
                 if(!node.children.has(str[i])){
                    node.children.set(str[i],new treinode())
                 }
                 node=node.children.get(str[i])
            }
            node.children.set(this.endsymbol,null)
        }
        contains(str){
            let node=this.root
            for(let i=0;i<str.length;i++){
                let letter=str[i]
                if(!node.children.has(letter)){
                   return false
                }
                node=node.children.get(letter)
            }
           return node.children.has(this.endsymbol);
            
    
        }
    }
    let tr=new trie()
    tr.populateSuffixTrie("mannan")
    console.log(tr.contains("annan"))
    
    //////////graph///////////////////////////////////////////////////////////////////////////
    
    class graph{
        constructor(){
            this.graph=new Map()
        }
        addvertex(data){
            this.graph.set(data,new Array())
        }
        insert(vertex,edge,isbi=false){
            if(!this.graph.has(vertex)){
                this.addvertex(vertex)
            }
            if(!this.graph.has(edge)){
                this.addvertex(edge)
            }
            if(!this.graph.get(vertex).includes(edge)){
                this.graph.get(vertex).push(edge)
            }
            if(isbi){
                if(!this.graph.get(edge).includes(vertex)){
                    this.graph.get(edge).push(vertex)
                }
            }
            
        }
        display(){
            console.log(this.graph);
        }
    }
    let g=new graph()
    g.insert(2,4,true)
    g.insert(5,6)
    g.insert(9,8)
    g.display()
    
    
    
    
    
    
    
    class Heap {
        heap = new Array();
      
        constructor(arr) {
          this.buildHeap(arr);
        }
      
        buildHeap(arr) {
          this.heap = arr;
          for (let i = Math.floor(this.parent(this.heap.length - 1)); i >= 0; i--) {
            this.shiftDown(i);
          }
        }
      
        shiftDown(currentIdx) {
          let end = this.heap.length - 1;
          let leftIdx = this.leftChild(currentIdx);
      
          while (leftIdx <= end) {
            let rightIdx = this.rightChild(currentIdx);
            let indexToShift;
      
            if (rightIdx <= end && this.heap[rightIdx] < this.heap[leftIdx]) {
              indexToShift = rightIdx;
            } else {
              indexToShift = leftIdx;
            }
      
            if (this.heap[indexToShift] < this.heap[currentIdx]) {
              this.swap(indexToShift, currentIdx);
              currentIdx = indexToShift;
              leftIdx = this.leftChild(currentIdx);
            } else {
              return;
            }
          }
        }
      
        shiftUp(currentIdx) {
          let parent = Math.floor(this.parent(currentIdx));
      
          while (parent >= 0 && this.heap[parent] > this.heap[currentIdx]) {
            this.swap(parent, currentIdx);
            currentIdx = parent;
            parent = Math.floor(this.parent(currentIdx));
          }
        }
      
        remove() {
          this.swap(0, this.heap.length - 1);
          this.heap.pop();
          this.shiftDown(0);
        }
      
        display() {
          for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
          }
        }
      
        insert(value) {
          this.heap.push(value);
          this.shiftUp(this.heap.length - 1);
        }
      
        findKthLargest(k) {
          const heapCopy = [...this.heap];
      
          for (let i = 0; i < k - 1; i++) {
            this.swap(0, heapCopy.length - 1);
            heapCopy.pop();
            this.shiftDown(0);
          }
      
          return heapCopy[0];
        }
      
        leftChild(i) {
          return i * 2 + 1;
        }
      
        rightChild(i) {
          return i * 2 + 2;
        }
      
        parent(i) {
          return Math.floor((i - 1) / 2);
        }
      
        swap(i, j) {
          let temp = this.heap[i];
          this.heap[i] = this.heap[j];
          this.heap[j] = temp;
        }
      }
      
      let arr = [10, 6, 2, 9, 3, 7, 4]; 
      let h = new Heap(arr);
      h.display();
      const k = 8;
      console.log(`The ${k}th largest element is: ${h.findKthLargest(k)}`);