// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let fisrt=arr.slice(0,middle)
//     let last=arr.slice(middle)
//     return  joinarr(mergesort(fisrt),mergesort(last))
// }
// function joinarr(first,last){
//    let newarr=[]
//    let i=0
//    let j=0
//    let k=0

//    while(i<first.length && j<last.length){
//     if(first[i]<=last[j]){
//         newarr[k++]=first[i++]
//     }
//     else{
//         newarr[k++]=last[j++]
//     }
//    }
//    while(i<first.length){
//     newarr[k++]=first[i++]
//    }
//    while(j<last.length){
//     newarr[k++]=last[j++]
//    }
//    return newarr
// }
// let arr=[4,3,1,8,7]
// console.log(mergesort(arr))



// -----------------------------------------------
// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let first=arr.slice(0,middle)
//     let last=arr.slice(middle)

//     return joinarr (mergesort(first),mergesort(last))

// }
 

// function joinarr(first,last){
//     let newarr=[]
//     let i=0
//     let j=0
//     let k=0

//     while(i<first.length && j<last.length){
//         if(first[i]<=last[j]){
//             newarr [k++]=first[i++]
//         }
//         else{
//             newarr[k++]=last[j++]
//         }
//     }
//     while(i<first.length){
//         newarr[k++]=first[i++]
//     }
//     while(j<last.length){
//         newarr[k++]=last[j++]
//     }
//     return newarr

// }
// let arr=[9,4,3,2,7,6,9,6,4,1]
// console.log(mergesort(arr))



// ----------------------------------------------

// let arr=[4,5,4,4,1,2,3]
// function quickSort(arr){
//     quicknewSort(arr,0,arr.length-1)
//     return arr;
// }
// function quicknewSort(arr,start,end){

//     if(start>=end){
//         return
//     }

//     let pivot=start
//     let left=start+1
//     let right=end

// if(left<=right){
//     while(arr[left]<arr[pivot]){
//         left++
//     }
//     while(arr[right]>arr[pivot]){
//         right--
//     }  
//     if(left<=right){
//         swap(arr,left,right)
//         left ++
//         right --
//     }
// }
// swap (arr,right,pivot)
// quicknewSort(arr,start,right-1)
// quicknewSort(arr,end,right+1)

// }
// function swap(arr,left,right){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp

// }
// console.log(quickSort(arr))



// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null

//     }
// }
// class stack{
//     constructor(){
//         this.top=null
//     }
//     push(data){
//         let newnode=new Node(data)
//         if(this.top==null){
//             this.top=newnode
//         }
//         else{
//             newnode.next=this.top
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//             console.log("emoty")
//             return;
//         }
//        this.top=this.top.next
//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let stacck=new stack()
// stacck.push(1)
// stacck.push(2)
// stacck.push(72)
// stacck.pop(2)
// stacck.display()




// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(data){
//         let newnode=new Node(data)
//         if(this.rear==null){
//             this.rear=newnode
//             this.front=newnode
          
//         }
     
//         this.rear.next=newnode
//         this.rear=newnode

//     }
//     deqeue(){
//         if(this.front==null){
//             console.log("empty")
//             return;
//         }
//         this.front = this.front.next
//         if(this.front==null){
//             this.rear=null

//         }
//     }
//     display(){
//         let temp=this.front
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let queuue=new queue()
// queuue.enqueue(30)
// queuue.enqueue(10)
// queuue.enqueue(20)
// queuue.deqeue()
// queuue.display()



// class Node{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//       let middle=Math.floor(this.arr.length/2)
//       this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }
// }
// let javad=new Node()
// javad.push(10)
// javad.push(20)
// javad.push(30)
// javad.push(10)
// javad.push(10)
// javad.delete()
// javad.display()


// class stacck{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }

// }
// let jaavad=new stacck
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.delete()
// jaavad.display()




// class stackk{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }

// }
// let jaavad=new stackk
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.delete()
// jaavad.display()



// class stacck{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//       this.arr.push(data) 
//     }
//     pop(){
//        return this.arr.pop()
//     }
// }
// let javad=new stacck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=javad.pop()
// }
// console.log(rev)



// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class stack{
//     constructor(){
//         this.top=null
//     }
//     push(data){
//         let newnode=new Node(data)
//         if(this.top==null){
//             this.top=newnode
//         }
//         else{
//             newnode.next=this.top
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//             console.log("empty")
//             return;
//         }
//         this.top=this.top.next
//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let jaavad=new stack()
// jaavad.push(10)
// jaavad.push(40)
// jaavad.push(10)
// jaavad.push(30)
// jaavad.pop()
// jaavad.display()


// stack delete middle=====
// class stacck{
//     constructor(){
//         this.arr=[]
//         return;
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){

//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }
// }
// let jaavad=new stacck()
// jaavad.push(10)
// jaavad.push(40)
// jaavad.push(20)
// jaavad.delete()
// jaavad.display()

// string reverse=========
// class stacck{
//     constructor(){
//         this.arr=[]
      
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//        return this.arr.pop()
//     }
// }
// let javad=new stacck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//    rev+=javad.pop()
// }
// console.log(rev)




// let arr=[1,2,5,6,4,3]
// function quicksort(arr){
//     quicksortHelper(arr,0,arr.length-1)
//     return arr
// }
// function quicksortHelper(start,end){
//     if(start>=end){
//         return;
//     }
//     let pivot=start
//     let left=start+1
//     let right=end

//    if(left<=right){
//     while(arr[left]<arr[pivot]){
//         left++
//     }
//     while(arr[right]>arr[pivot]){
//         right--
//     }
//     if(left<=right){
//         swap(arr,left,right)
//         left ++
//         right--
//     }

//    }
//    swap (arr,right,pivot)
//    quicksortHelper(arr,start,right-1)
//    quicksortHelper(arr,end,right+1)

  
// }
// function swap(arr,left,right){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp

// }
// console.log(quicksort(arr));



// function quickSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }
//         else{
//             if(arr[i]>pivot){
//                 right.push(arr[i])
//             }
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
// }
// const arr=[2,1,4,3,7,5]
// console.log(quickSort(arr))


// function mergesort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     let middle=Math.floor(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondhalf=arr.slice(middle)

//     return joinarr(mergesort(firsthalf),mergesort(secondhalf))
// }
//     function joinarr(firsthalf,secondhalf){
//         let newarr=[]
//         let i=0
//         let j=0
//         let k=0
//         while(i<firsthalf.length && j<secondhalf.length){
//             if(firsthalf[i]<secondhalf[j]){
//                 newarr[k++]=firsthalf[i++]
//             }else{
//                 newarr[k++]=secondhalf[j++]
//             }
//         }
//         while(i<firsthalf.length){
//             newarr[k++]=firsthalf[i++]
//         }
//         while(j<secondhalf.length){
//             newarr[k++]=secondhalf[j++]
//         }
//         return newarr;
//     }
   
// let arr=[3,2,6,1,5,9]
// console.log(mergesort(arr))



// function insertionsort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
// }
// let arr=[2,6,5,9,1]
// insertionsort(arr)
// console.log(arr)



// function bubbleSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[3,4,2,1,7,6]
// console.log(bubbleSort(arr))

// function selectionsort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[j]<arr[i])
//         }
//     }
// }


// class Node{
//     constructor(data){
//          this.data=data
//          this.next=null
//     }
// }
// class stack{
//     constructor(){
//         this.top=null
//     }
//     push(data){
//         let newnode=new Node(data)
//         if(this.top==null){
//             this.top=newnode
//         }
//         else{
//             newnode.next=this.top  
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//             console.log("empty")
//             return;
//         }
//         this.top=this.top.next

//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let javad=new stack()
// javad.push(10)
// javad.push(20)
// javad.push(20)
// javad.pop()
// javad.display()

// class stacck{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//       return  this.arr.pop()
//     }
// }
// let javad=new stacck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=javad.pop()
// }
// console.log(rev)

// class Stack {
//     constructor() {
//       this.arr = [];
//     }
  
//     push(data) {
//       this.arr.push(data);
//     }
  
//     pop() {
//       return this.arr.pop();
//     }
//   }
  
//   let javad = new Stack();
//   let string = "javad";
  
//   for (let i = 0; i < string.length; i++) {
//     javad.push(string[i]);
//   }
  
//   let rev = "";
//   for (let i = 0; i < string.length; i++) {
//     rev += javad.pop();
//   }
  
//   console.log(rev);


//   class Node{
//     constructor(data){
//         this.data=data
//         this.next=null

//     }
//   }
//   class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(data){
//         let newnode=new Node(data)
//         if(this.rear==null){
//             this.rear=newnode
//             this.front=newnode
//         }
//         this.rear.next=newnode
//         this.rear=newnode
//     }
//     dequeue(){
//         if(this.front==null){
//             console.log("empty")
//         }
//         this.front=this.front.next
//         if(this.front==null){
//             this.rear=null
//         }
//     }
//     display(){
//         let temp=this.front
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
//   }
//   let jaavad=new queue()
//   jaavad.enqueue(10)
//   jaavad.enqueue(20)
//   jaavad.enqueue(30)
//   jaavad.dequeue()
//   jaavad.display()







// bubble sort-------------------
// function bubbleSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[2,4,1,6,3,9]
// console.log(bubbleSort(arr))


// Selection sort------------------------
// function selectionsort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr;
// }
// let arr=[5,4,3,7,1,10]
// console.log(selectionsort(arr))


// insertion sort------------------
// function insertionsort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 &&  arr[j]>current){
//             arr[j+1]=arr[j]
//         }
//         arr[j+1]=current
//     }
//     return arr;
// }
// let arr=[3,2,6,5,1,9]
// console.log(insertionsort)
// console.log(arr)

// mergesort-----------------
    // function mergesort(arr){
    //     if(arr.length<2){
    //         return arr
    //     }
    //     let middle=Math.floor(arr.length/2)
    //     let firsthalf=arr.slice(0,middle)
    //     let secondhalf=arr.slice(middle)

    //     return joinarr(mergesort(firsthalf),mergesort(secondhalf))

    // }
    // function joinarr(firsthalf,secondhalf){
    //     let newarr=[]
    //     let i=0
    //     let j=0
    //     let k=0
    //     while(i<firsthalf.length && j<secondhalf.length){
    //         if(firsthalf[i]<secondhalf[j]){
    //             newarr[k++]=firsthalf[i++]
    //         }else{
    //             newarr[k++]=secondhalf[j++]

    //         }
    //     }
    //     while(i<firsthalf.length){
    //         newarr[k++]=firsthalf[i++]
    //     }
    //     while(j<secondhalf.length){
    //         newarr[k++]=secondhalf[j++]
    //     }
    //     return newarr
    // }
    // let arr=[3,4,1,7,6,5]
    // console.log(mergesort(arr))

    // quick sort----------------
    // function quicksort(arr){
    //     if(arr.length<2){
    //         return arr
    //     }
    //     let pivot=arr[arr.length-1]
    //     let left=[]
    //     let right=[]
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i]<pivot){
    //             left.push(arr[i])
    //         }
    //         else{
    //             right.push(arr[i])
    //         }

    //     }
    //     return[...quicksort(left),pivot,...quicksort(right)]
    // }
    // const arr=[3,6,5,1,9]
    // console.log(quicksort(arr))


    // stack----------------------------
    // class Node{
    //     constructor(data){
    //         this.data=data
    //         this.next=null
    //     }
    // }
    // class stack{
    //     constructor(){
    //         this.top=null
    //     }
    //     push(data){
    //         let newnode=new Node(data)
    //         if(this.top==null){
    //             this.top=newnode
    //         }
    //         else{
    //             newnode.next=this.top
    //             this.top=newnode
    //         }
    //     }
    //     pop(){
    //         if(this.top==null){
    //             console.log("empty")
    //             return;
    //         }
    //         this.top=this.top.next
    //     }
    //     display(){
    //         let temp=this.top
    //         while(temp!=null){
    //             console.log(temp.data)
    //             temp=temp.next
    //         }
    //     }
    // }
    // let javad=new stack()
    // javad.push(10)
    // javad.push(20)
    // javad.push(30)
    // javad.pop()
    // javad.display()

    // stack middle element delete------------------


    // class stack{
    // constructor(arr){
    //     this.arr=[]
    // }
    // push(data){
    //     this.arr.push(data)
    // }
    // delete(){
    //     let middle=Math.floor(this.arr.length/2)
    //     this.arr.splice(middle,1)
    // }
    // display(){
    //     console.log(this.arr)
    // }

    // }
    // let javad=new stack()
    // javad.push(10)
    // javad.push(20)
    // javad.push(30)
    // javad.delete()
    // javad.display()


// string reverse in stack------
// class queue{
//     constructor(arr){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//      pop(){
//        return this.arr.pop()
//     }
// }
// let javad=new queue()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javad.push(string[i])

// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=javad.pop()
// }
// console.log(rev)

// queue--------------------------
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(data){
//         let newnode=new Node(data)
//         if(this.rear==null){
//             this.rear=newnode
//             this.front=newnode
//         }
//         this.rear.next=newnode
//         this.rear=newnode
//     }
//     dequeue(){
//         if(this.front==null){
//             console.log("empty")
//         }
//         this.front=this.front.next
//         if(this.front==null){
//             this.rear==null
//         }
//     }
//     display(){
//         let temp=this.front
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let javad=new queue()
// javad.enqueue(10)
// javad.enqueue(20)
// javad.enqueue(30)
// javad.dequeue()
// javad.display()

// hashtable------------------
// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for( let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//         return this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let javad=new hashtable(50)
// javad.set("name","javad")
// javad.set("age","21")
// console.log(javad.get("name"))
// javad.display()



// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size

//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get (key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//         return this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let javad=new hashtable(70)
// javad.set("name","javad")
// javad.set("age","21")
// console.log(javad.get("naem"))
// javad.display()


// class hashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//         return this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let javad=new hashTable(80)
// javad.set("name","javad")
// javad.set("age","21")
// javad.set("nem")
// console.log(javad.get("aeg"))
// javad.display()


// function bubbleSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j+1]
//                 arr[j+1]=arr[j]
//                 arr[j]=temp
//             }   
//         }
//     }
//     return arr;
// }
// let arr=[2,6,5,1,9]
// console.log(bubbleSort(arr))


// function selectionsort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr;
// }
// let arr=[4,3,6,5,1]
// console.log(selectionsort(arr))



// function insertionsort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current

//     }
//     return arr
// }
// let arr=[4,3,6,8,1]
// console.log(insertionsort(arr))


// function mergesort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondhalf=arr.slice(middle)

//     return joinarr(mergesort(firsthalf),mergesort(secondhalf))
// }
// function joinarr(firsthalf,secondhalf){
//     let newarr=[]
//     let i=0
//     let j=0
//     let k=0
//     while(i<firsthalf.length && j<secondhalf.length){
//         if(firsthalf[i]<secondhalf[j]){
//             newarr[k++]=firsthalf[i++]
//         }
//         else{
//             newarr[k++]=secondhalf[j++]
//         }
//     }
//     while(i<firsthalf.length){
//         newarr[k++]=firsthalf[i++]
//     }
//     while(j<secondhalf.length){
//         newarr[k++]=secondhalf[j++]
//     }
//     return newarr;
// }
// let arr=[4,3,6,5,7,8,1]
// console.log(mergesort(arr))


// function quicksort(arr){

//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//            right.push(arr[i])
//         }
//     }
//     return[...quicksort(left),pivot,...quicksort(right)]
// }
// let arr=[3,2,7,6,1,9]
// console.log(quicksort(arr))



// stack -------------
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class stacck{
//     constructor(){
//         this.top=null
//     }
//     push(data){
//         let newnode=new Node(data)
//         if(this.top==null){
//             this.top=newnode
//         }else{
//             newnode.next=this.top
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//             console.log("empty")
//             return;
//         }
//         this.top=this.top.next

//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let jaavad=new stacck()
// jaavad.push(20)
// jaavad.push(30)
// jaavad.push(40)
// jaavad.pop()
// jaavad.display()




// class stacck{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }

// }
// let jaavad=new stacck()
// jaavad.push(20)
// jaavad.push(22)
// jaavad.push(24)
// jaavad.delete()
// jaavad.display()


// class stacck{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }

// }
// let jaavad=new stacck()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.delete()
// jaavad.display()


// class stacck{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//        return this.arr.pop()
//     } 
// }
// let jaavad=new stacck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     jaavad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=jaavad.pop()
// }
// console.log(rev)



// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(data){
//         let newnode=new Node(data)
//         if(this.rear==null){
//             this.rear=newnode
//             this.front=newnode
//             return;
//         }
//         this.rear.next=newnode
//         this.rear=newnode
//     }
//     dequeue(){
//         if(this.front==null){
//             console.log("empty")
//             return;
//         }
//         this.front=this.front.next
//         if(this.front==null){
//             this.rear=null
//         }
//     }
//     display(){
//         let temp=this.front
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let javad=new queue()
// javad.enqueue(10)
// javad.enqueue(20)
// javad.enqueue(220)
// javad.dequeue()
// javad.display()



// sorting------

// function bubbleSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[2,3,1,6,5,4]
// console.log(bubbleSort(arr))


// function selectionsort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr
// }
// arr=[3,3,1,9,7,0]
// console.log(selectionsort(arr))

// function insertionsort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>current ){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
//  arr=[5,4,7,2,10]
//  console.log(insertionsort(arr))



// function insertionsort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr;
// }
// let arr=[3,2,6,5,9,7]
// console.log(insertionsort(arr))


// function insertionsort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1] 
//     let left=[]
//     let right=[]
//     for( i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...insertionsort(left),pivot,...insertionsort(right)]
    
// }
// let arr=[3,4,2,1,6,5,3]
// console.log(insertionsort(arr))



// function mergesort (arr){
//     if(arr.length<2){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondhalf=arr.slice(middle)

//     return joinarr(mergesort(firsthalf),mergesort(secondhalf))

// }
// function joinarr(firsthalf,secondhalf){
//     let newarr=[]
//     let i=0
//     let j=0
//     let k=0
//     while(i<firsthalf.length && j<secondhalf.length){
//         if(firsthalf[i]<secondhalf[j]){
//             newarr[k++]=firsthalf[i++]
//         }else{
//             newarr[k++]=secondhalf[j++]
//         }
//     }
//     while(i<firsthalf.length){
//         newarr[k++]=firsthalf[i++]
//     }
//     while(j<secondhalf.length){
//         newarr[k++]=secondhalf[j++]
//     }
//     return newarr
// }
// let arr=[4,3,65,1,9]
// console.log(mergesort(arr))





// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

// Hash(key){
//     let total=0
//     for(let i=0;i<key.length;i++){
//         total+=key.charCodeAt(i)
//     }
//     return total%this.size
// }
// set(key,value){
//     let index=this.Hash(key)
//     if(!this.table[index]){
//         this.table[index]=value
//     }
//     else{
//         let i=(index)+1%this.size
//         while(i!=index&&this.table[i]){
//             i=(i+1)%this.size
//         }
//         this.table[i]=value
//     }
// }
// get(key){
//     let index=this.Hash(key)
//     return this.table[index]
// }
// remove(key){
//     let index=this.Hash(key)
//     return this.table[index]=undefined
// }
// display(){
//     for(let i=0;i<this.table.length;i++){
//         if(this.table[i]){
//             console.log(i,this.table[i])
//         }
//     }
// }

// }
// let javad=new hashtable(80)
// javad.set("name","javad")
// javad.set("age","20")
// javad.set("nema","javaali")
// console.log(javad.get("age"))
// javad.display()



// class stack2q{
//     constructor(){
//         this.arr1=[]
//         this.arr2=[]
//         this.size=0

//     }push(data){
//         this.arr1.push(data)
//         this.size++
//     }
//     changetoq(){
//         while(this.size>0){
//             this.arr2.push(this.arr1.pop())
//             this.size--
//         }

//     }
   
//     display(){
//         console.log(this.arr1)
//         console.log(this.arr2)
//     }
// }
// let javaadli=new stack2q()
// javaadli.push(10)
// javaadli.push(20)
// javaadli.push(30)
// javaadli.display()
// javaadli.changetoq()
// javaadli.display()


// function isParenthesesMatching(string){
//     const stack=[]
//     for(i=0;i<string.length;i++){
//         const char=string[i]
//         if(char==="("){
//             stack.push(char)
//         }else if(char===")"){
//             if(string.length===0){
//                 return false
//             }
//             stack.pop()
//         }
//     }
//     return stack.length===0
// }



// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             if(arr[i]>pivot){
//                 right.push(arr[i])
//             }
//         }
//     }
//     return[...quicksort(left),pivot,...quicksort(right)]
// }
// let arr=[4,5,2,1,8]
// console.log(quicksort(arr))



// function mergesort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let middle=Math.floor(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondhalf=arr.slice(middle)
//     return joinarr(mergesort(firsthalf),mergesort(secondhalf))

// }
// function joinarr(firsthalf,secondhalf){
//     let newarr=[]
//     let i=0
//     let j=0
//     let k=0
//     while(i<firsthalf.length &&j<secondhalf.length){
//         if(firsthalf[i]<secondhalf[j]){
//             newarr[k++]=firsthalf[i++]
//         }else{
//             newarr[k++]=secondhalf[j++]
//         }
//     }
//     while(i<firsthalf.length){
//         newarr[k++]=firsthalf[i++]
//     }
//     while(j<secondhalf.length){
//         newarr[k++]=secondhalf[j++]
//     }
//     return newarr
// }
// let arr=[6,5,4,3,8,1]
// console.log(mergesort(arr))


// function bubbleSort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=1;i<arr.length;j++){
//             if(arr[j]>arr[i]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
// }
// let arr=[5,5,4,7,2,9]
// bubbleSort(arr)
// console.log(arr)



// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
   
// }
// class stack{
//     constructor(){
//         this.top=null
//     }
//     push(data){
//         let newnode=new Node(data)
//         if(this.top==null){
//             this.top=newnode
//         }else{
//             newnode.next=this.top
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//             console.log("empty")
//         }else{
//             this.top=this.top.next
//         }

//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//                 temp=temp.next
            
//         }
//     }
// }
// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(30)
// newstack.pop(30)
// newstack.display()


// class stacck{
//     constructor(arr){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//         let middle=Math.floor(this.arr/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console.log(this.arr)
//     }
// }
// let jaavad=new stacck()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.delete()
// jaavad.display()



// class stacck{
//     constructor(arr){
//         this.arr=[] 
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//         return this.arr.pop()
//     }
// }
// let javad=new stacck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//      rev+=javad.pop()
// }
// console.log(rev)


// stack to q

class stacck2q{
    constructor(){
        this.arr1=[]
        this.arr2=[]
        this.size=0
    }
    push(data){
        this.arr1.push(data)
        this.size++
    }
    changeq(){
        while(this.size>0){
            this.arr2.push(this.arr1.pop())
            this.size--
        }
    }
    display(){
        console.log(this.arr1)
        console.log(this.arr2)
    }
}
let javaadli=new stacck2q()
javaadli.push(10)
javaadli.push(20)
javaadli.push(30)
javaadli.display()
javaadli.changeq()
javaadli.display()


