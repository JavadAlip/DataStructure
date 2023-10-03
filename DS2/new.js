// // Stack

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
//         }
//         this.top=this.top.next
//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//             temp.next=temp
//             return;
//         }
//     }
// }
// let javad=new stack()
// javad.push(10)
// javad.push(20)
// javad.display()

// ----------------------------------------------------------------

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
// javad.pop(20)
// javad.display()

// ----------------------------------------------------------------
// queue

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
//             return;
//         }
//       this.front=this.front.next
//       if(this.front==null){
//         this.rear==null
//       }
//     }
//     display(){
//         let temp=this.front
//         while(temp!=null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
// }
// let javad =new queue()
// javad.enqueue(10)
// javad.enqueue(20)
// javad.enqueue(30)
// javad.enqueue(40)
// javad.dequeue(40)

// javad.display()

// -------------------------------------------------------------

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
// javad.dequeue(20)
// javad.display()

// --------------------------------------------------

// class stack{
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
// let javad=new stack()
// javad.push(10)
// javad.push(20)
// javad.push(30)
// javad.delete()
// javad.display()

// ---------------------------------------------------

// class stacck{
//     constructor(){
//         this.arr=[]
//         return;
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
//     rev+=javad.pop()
// }
// console.log(rev)


// class stacck{
//     constructor(){
//         this.arr=[]
//         return;
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//         return this.arr.pop()
//     }
// }
// let jaavad=new stacck
// let string="jvd"
// for(i=0;i<string.length;i++){
//     jaavad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=jaavad.pop()
// }
// // console.log(rev)
// -------------------------------------------------------
// bubbleSort

// let arr=[3,4,2,4,2,1]
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
// }
// bubbleSort(arr)
// console.log(arr)



// let arr=[6,4,3,1,09,7,100,23]
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
// }
// bubbleSort(arr)
// console.log(arr)

// --------------------------------------------------

// function selectionSort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp

//             }
//         }

//     }
//     return arr
// }
// let arr=[2,3,25,4,1]
// console.log(selectionSort(arr))


// function selectionSort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<=arr.length;j++){
//             if(arr[i]>arr[j]){

//             }

//         }
//     }
// }

// ---------------------------------------------

// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         var current=arr[i]
//         var j=i-1

//         while(j>=0&&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--

//         }
//         arr[j+1]=current
//     }
//     return arr;
// }

// let arr=[5,1,2,8,5,9]
// console.log(insertionSort(arr))


// function bubbleSort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[2,3,2,1,9,8]
// console.log(bubbleSort(arr))

// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         var current=arr[i]
//         var j=i-1
//         while(j>=0&&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current

//     }
//     return arr
// }



// ----------------------------------------------

// let arr=[2,3,1,8,7, 6,5,2,1,50,3]
// for(i=5;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)



// function quickSort(arr){
//     if (arr.length<2){
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
//     return[...quickSort(left),pivot,...quickSort(right)]
// }
// const arr=[3,4,1,9,7,6]
// console.log(quickSort(arr))




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
//             if(arr[i]>pivot){
//                 right.push(arr[i])
//             }
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }
// const arr=[2,1,5,4,3,6]
// console.log(quicksort(arr))



// function quickSort(arr){
//     if(arr.length<1){
//         return arr;
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else
//         {
//             if(arr[i]>pivot){
//                 right.push(arr[i])
//             }
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
// }
// const arr=[5,4,32,8,1]
// console.log(quickSort(arr))




// function quickSort(arr){
//     if(arr.length<1){
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
// const arr=[1,53,3,7,2]
// console.log(quickSort(arr))
