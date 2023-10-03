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
let arr=[6,2,8]
let h=new Heap(arr)
h.display()
console.log("------------------------");
console.log(h.large());
h.insert(1)
h.insert(5)
h.insert(15)
h.display()
console.log("------------------------");
h.remove()
h.display()
console.log(h.large());


// class Heap {
//     heap = new Array();
    
//     constructor(arr) {
//         this.buildheap(arr);
//     }
    
//     buildheap(arr) {
//         this.heap = arr;
//         for (let i = Math.floor(this.parent(this.heap.length - 1)); i >= 0; i--) {
//             this.shiftdown(i);
//         }
//     }
    
//     shiftdown(currentidx) {
//         let end = this.heap.length - 1;
//         let leftidx = this.leftchild(currentidx);
//         while (leftidx <= end) {
//             let rightidx = this.rightchild(currentidx);
//             let indextoshift;
//             if (rightidx <= end && this.heap[rightidx] > this.heap[leftidx]) {
//                 indextoshift = rightidx;
//             } else {
//                 indextoshift = leftidx;
//             }
//             if (this.heap[indextoshift] > this.heap[currentidx]) {
//                 this.swap(indextoshift, currentidx);
//                 currentidx = indextoshift;
//                 leftidx = this.leftchild(currentidx);
//             } else {
//                 return;
//             }
//         }
//     }
    
//     shiftup(currentidx) {
//         let parent = Math.floor(this.parent(currentidx));
//         while (parent >= 0 && this.heap[parent] < this.heap[currentidx]) {
//             this.swap(parent, currentidx);
//             currentidx = parent;
//             parent = Math.floor(this.parent(currentidx));
//         }
//     }
    
//     remove() {
//         this.swap(0, this.heap.length - 1);
//         this.heap.pop();
//         this.shiftdown(0);
//     }
    
//     large() {
//         let l = this.heap[0];
//         for (let i = 0; i < this.heap.length; i++) {
//             if (this.heap[i] > l) {
//                 l = this.heap[i];
//             }
//         }
//         return l;
//     }
    
//     display() {
//         for (let i = 0; i < this.heap.length; i++) {
//             console.log(this.heap[i]);
//         }
//     }
    
//     insert(value) {
//         this.heap.push(value);
//         this.shiftup(this.heap.length - 1);
//     }
    
//     leftchild(i) {
//         return (i * 2) + 1;
//     }
    
//     rightchild(i) {
//         return (i * 2) + 2;
//     }
    
//     parent(i) {
//         return Math.floor((i - 1) / 2);
//     }
    
//     swap(i, j) {
//         let temp = this.heap[i];
//         this.heap[i] = this.heap[j];
//         this.heap[j] = temp;
//     }
// }

// let arr = [6, 2, 11,1,8,12];
// let h = new Heap(arr);
// h.display();
// console.log("------------------------");
// console.log(h.large());
// h.insert(1);
// h.insert(5);
// h.insert(15);
// h.display();
// console.log("------------------------");
// h.remove();
// h.display







// class heap{
//     heap=new Array
//     constructor(arr){
//         buildheap(arr)
//     }
//     buildheap(arr){
//         this.heap=arr
//         for(let i=Math.floor(this.parent(this.heap-length-1));i>=0;i--){
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
//             }
//             if(this.heap[indexToShift]<this.heap[currentIdx]){
//                 this.swap(indexToShift,currentIdx)
//                 currentIdx=indexToShift
//                 leftIdx=this.leftchild(currentIdx)
//             }else{
//                 return;
//             }

//         }
//     }
// }



// class heap{
//     heap=new Array
//     constructor(arr){
//         buildheap(arr)
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
//             }
//             if(this.heap[indexToShift]<this.heap[currentIdx]){
//                 this.swap(indexToShift,currentIdx)
//                 currentIdx=indexToShift
//                 leftIdx=this.leftchild(currentIdx)
//             }else{
//                 return;
//             }
//         }
//     }

//     shiftup(currentIdx){
//         let parent=Math.floor(this.parent(currentIdx))
//         while(parent>=0 && this.heap[parent]>this.heap[currentIdx]){
//             this.swap(parent,currentIdx)
//             currentIdx=parent
//             parent=Math.floor(this.parent(currentIdx))
//         }
//     }

// }


// shiftup(currentIdx){
//     let parent=Math.floor(this.parent(currentIdx))
//     while(parent>=0 && this.heap[parent]>this.heap[currentIdx]){
//         this.swap(parent,currentIdx)
//         currentIdx=parent
//         parent=Math.floor(this.parent(currentIdx))
//     }
// }

// insert(value){
//     this.heap.push(value)
//     this.shiftup(this.heap.length-1)
// }


// insert(value){
//     this.shiftup(this.heap.length-1)
//     this.heap.push(value)
 
// }

// remove(){
//     this.swap(0,this.heap.length-1)
//     this.heap.pop()
//     this.shiftdown(0)

// }



// class heap{
//     heap=new Array
//     constructor(arr){
//         buildheap(arr)
//     }
//     buildheap(arr){
//         this.heap=arr
//         for(let i=Math.floor(this.parent(this.heap.length-1));i>=0;i--){
//             shiftdown(i)
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
//             }
//         }
//     }
//     shiftup(currentIdx){
//         let parent=Math.floor(this.parent(currentIdx))
//         while(parent>=0 && this.heap[parent]>this.heap[currentIdx]){
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
//         this.swap(0,this.heap,length-1)
//         this.shiftdown(0)
//     }
//     display(){
//         for(let i=0;i<this.leap.length;i++){
//             console.log(this.heap[i])
//         }
//     }

// }