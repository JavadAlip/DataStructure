// stack ---------------

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


// class stack{
//     constructor(arr){
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
// let javaadli=new stack()
// javaadli.push(10)
// javaadli.push(20)
// javaadli.push(30)
// javaadli.delete()
// javaadli.display()


// class staccck{
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
// let javaadli=new staccck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javaadli.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=javaadli.pop()
// }
// console.log(rev)





// class node{
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
//         let newnode=new node(data)
//         if(this.rear==null){
//             this.rear=newnode
//             this.front=newnode
//         }
//         this.rear.next=newnode
//         this.rear=newnode

//     }
//     dequeue(){
//         if(this.front==null){
//             this.front("empty")
//             return;
//         }
//         this.front=this.front.next
//         if(this.front==null){
//             this.rear=newnode
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
// let javd=new queue()
// javd.enqueue(10)
// javd.enqueue(20)
// javd.enqueue(30)
// javd.dequeue()
// javd.display()


// function quick(arr){
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

//     return[...quick(left),pivot,...quick(right)]
 
// }
// let arr=[4,3,5,6,1]
// console.log(quick(arr))


// function insertion(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1

//         while(j>=0&&arr[j]>current){
//         arr[j+1]=arr[j]
//         j--
//         }
//         arr[j+1]=current
//     }
//     return arr
   

// }
// const arr=[4,3,76,9,1]
// console.log(insertion(arr))


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
//     get(key){
//                 let index=this.hash(key)
//                 return this.table[index]
//             }
//     remove(key){
//         let index=this.hash(key)
//         return this.table=(index)=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let jaavad=new hashtable(70)
// jaavad.set("name","javad")
// jaavad.display()



// function bubbleSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=3;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr;
// }
// let arr=[9,3,2,6,5,1,10,11,8]
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
// let arr=[4,3,2,6,5,8,1]
// console.log(selectionsort(arr))


// function insertionsort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 &&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// let arr=[43,6,5,1,8]
// console.log(insertionsort(arr))



// function quickSort(arr){
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
//     return[...quickSort(left),pivot,...quickSort(right)]
// }
// let arr=[6,5,7,4,3,31]
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
// let arr=[4,5,2,1,7,6]
// console.log(mergesort(arr))


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
//             return;
//         }else{
//             this.top=this.top.next
//         }
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
// jaavad.push(20)
// jaavad.push(30)
// jaavad.pop()
// jaavad.display()


// stack middle Element delete

// class stack{
//     constructor(arr){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//      delete(){
//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//      }
//      display(){
//         console.log(this.arr)
//      }
// }
// let javaadli=new stack()
// javaadli.push(10)
// javaadli.push(20)
// javaadli.push(30)
// javaadli.delete()
// javaadli.display()


// string reverse-----

// class stringrev{
//     constructor(arr){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//        return this.arr.pop()
//     }
// }
// let stringreverse=new stringrev()
// let string="javad"
// for(i=0;i<string.length;i++){
//     stringreverse.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=stringreverse.pop()
// }
// console.log(rev)



// queue----

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
//         }else{
//             this.rear.next=newnode
//             this.rear=newnode
//         }
//     }
//     dequeue(){
//         if(this.front==null){
//             console.log("empty")
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
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

// hashtable-------

// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     Hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         let index=this.Hash(key)
//         if(!this.table[index]){
//             this.table[index]=value
//         }else{
//             let i=(index)+1%this.size
//             while(i!=index && this.table[i]){
//                 i=(i+1)%this.size
//             }
//             return this.table[i]
//         }
      
//     }
//     get(key){
//         let index=this.Hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.Hash(key)
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
// let javaadli=new hashtable(80)
// javaadli.set("name","javad")
// javaadli.set("age","21")
// javaadli.set("agee","21")
// javaadli.display()

// console.log(javaadli.get("name"))




// stack2q

// class changetoQ{
//     constructor(){
//         this.arr1=[]
//         this.arr2=[]
//         this.size=0
//     }
//     push(data){
//         this.arr1.push(data)
//         this.size++
//     }
//     changetoQ(){
//         while(this.size>0){
//             this.arr2.push(this.arr1.pop())
//             this.size--
//         }
//     }display(){
//         console.log(this.arr1)
//     }
// }


function isParenthesesMatching(string){
    const stack=[]
    for(i=0;i<string.length;i++){
        const char=string[i]

        if(char==="("){
            stack.push(char)
        }else if(char===")"){
            if(string.length===0){
                return false
            }
            stack.pop()
        }
    }
    return stack.length===0

}