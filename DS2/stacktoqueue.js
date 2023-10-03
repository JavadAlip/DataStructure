// class stack{
//     constructor(){
//         this.arr1=[]
//         this.arr2=[]
//         this.size=0
//     }
//     push(data){
//         this.size++
//         this.arr1.push(data)
// }
// changetoQ(){
//     while(this.size>0){
//        this.arr2.push(this.arr1.pop())
//        this.size--
//     }
// }
// pop(){
//     return this.arr2.pop()
// }
// display(){
//     console.log(this.arr1)
//     console.log(this.arr2)
// }
// }
// let stacks=new stack()
// stacks.push(7)
// stacks.push(20)
// stacks.push(30)
// stacks.push(40)
// stacks.display()
// stacks.pop()
// stacks.changetoQ()
// stacks.display()



// class staccck{
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
//     }
//     pop(){
//         return this.arr2.pop()
//     }
//     display(){
//         console.log(this.arr1)
//         console.log(this.arr2)
//     }
    
// }
// let stacck=new staccck()
// stacck.push(1)
// stacck.push(2)
// stacck.push(3)
// stacck.push(4)
// stacck.display()
// stacck.pop()
// stacck.changetoQ()
// stacck.display()


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
//     changetoQq(){
//         while(this.size>0){
//             this.arr2.push(this.arr1.pop())
//             this.size--
//         }
//     }
//     pop(){
//         return this.arr2.pop()
//     }
//     display(){
//         console.log(this.arr1)
//         console.log(this.arr2)
//     }

// }
// let jaavad=new changetoQ()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(40)
// jaavad.display()a
// jaavad.pop()
// jaavad.changetoQq()
// jaavad.display()


// function bubblesort(arr){
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
// let arr=[3,2,4,7,1,10]
// console.log(bubblesort(arr))



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
// let arr=[6,4,3,2,10,8]
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
// let arr=[3,2,6,8,7,1]
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
//         }
//         else{
//             if(arr[i]>pivot){
//                 right.push(arr[i])
//             }
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]

// }
// let arr=[5,4,2,8,9]
// console.log(quickSort(arr))



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
//     return newarr
// }
// let arr=[5,4,3,7,6,9]
// console.log(mergesort(arr))

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]

//    for(i=0;i<arr.length;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }
//     }
//    }
//    return [...quickSort(left),pivot,...quickSort(right)]
// }
// let arr=[4,3,6,5,40]
// console.log(quickSort(arr))



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
//     while(i<firsthalf.length&& j<secondhalf.length){
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
// let arr=[2,3,4,1,7,6,9]
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
//         }
//         else{
//             newnode.next=this.top
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//             console.log("empty")
//             return
//         }
//         this.top=newnode
//     }
//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data)
//             temp.temp.next
//         }
//     }
// }

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class stack{
//     constructor(){
//         this.rear=null
//         this.front=null
//     }
//     enqueue(data){
//         let newnode=new Node (data)
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
//         if(this.rear==null){
//             this.front=null
//         }

//     }
//     display() {
//         let temp = this.front
//         while (temp != null) {
//             console.log(temp.data);
//             temp = temp.next
//         }
//     }
// }
// let queue=new Stack()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.dequeue()
// queue.display()



// class staccck{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//        return this.arr.pop()
//     }
// }
// let stack=new staccck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     stack.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=stack.pop()
// }
// console.log(rev)

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
// let jaavad=new stack()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.delete()
// jaavad.display()



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
//         if(!this.table[index]){
//             this.table[index]=value
//         }else{
//             let i=(index)+1%this.size
//             while(i!=index && this.table[i]){
//                 i=(i+i)%this.size
//             }
//             this.table[i]=value
//         }
       
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
// let javd=new hashtable(70)
// javd.set("name","javd")
// javd.set("name","javd")
// javd.display()
// console.log(javd.get("name","javad"))



class stack2q{
    constructor(){
        this.arr1=[]
        this.arr2=[]
        this.size=0
    }
    push(data){
        this.arr1.push(data)
        this.size++
    }
    changetoq(){{
        while(this.size>0){
            this.arr2.push(this.arr1.pop())
            this.size--
        }
    }}
    display(){
        console.log(this.arr1)
        console.log(this.arr2)
    }
}
let javaadli=new stack2q()
javaadli.push(10)
javaadli.push(20)
javaadli.push(30)
javaadli.display()
javaadli.changetoq()
javaadli.pop()
javaadli.display()

// class stack2q{
//     constructor(arr){
//         this.arr1=[]
//         this.arr2=[]
//         this.size=0
//     }
//     push(data){
//         this.arr1.push(data)
//         this.size++
//     }
//    changetoq(){
//     while(this.size>0){
//         this.arr2.push(this.arr1.pop())
//         this.size--
//     }
//    }
//    display(){
//     console.log(this.arr1)
//     console.log(this.arr2)
//    }
// }