function selectionSort(a) {
    let smallest
    for (i = 0; i < a.length; i++) {
        for (j = i; j < a.length; j++) {
            if (a[j] < a[i]) {
                smallest = a[j]
                a[j] = a[i]
                a[i] = smallest
            }
        }
    }
    return a
}
a = [9, 1, 10, -1, 6, 8, 9]
console.log(selectionSort(a));


// function selectionSort(arr){
//     for(i=0;i<=arr.length;i++){
//         for(j=i+1;j<=arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[2,4,3,2,1,6,7,-1]
// console.log(selectionSort(arr))


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
//     return arr;
// }
// let arr=[4,3,6,5,1,9]
// console.log(selectionSort(arr))



// class Node{
//     constructor (data){
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
//             this.rear=null
//         }
//     }
//     diplay(){
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
// javad.diplay()




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
//         return this.arr.pop()
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

// let hashTable=new hashtable(50)
// hashTable.set("name","aswin")
// hashTable.set("age","21")
// hashTable.remove("age")
// hashTable.display()
// console.log(hashTable.get("name"));



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
//                 console.log(i,this.table[i]);
//             }
//         }
//     }

// }

// let hashtable=new hashTable(50)
// hashtable.set("name","aswin")
// hashtable.set("age","21")
// hashtable.remove("age")
// hashtable.display()
// console.log(hashtable.get("name"));


// function selectionSort(arr) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = i; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 let smallest = arr[j]
//                 arr[j] = arr[i]
//                 arr[i] = smallest
//             }
//         }
//     }
//     return arr
//     }
// arr = [9, 1, 10, -1, 6, 8, 0, 9]
// console.log(selectionSort(arr));