// stack

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
// jaavad.display()\


// class stack{
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
// let javaadli=new stack()
// let string="javad"
// for(i=0;i<string.length;i++){
//     javaadli.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=javaadli.pop()

// }
// console.log(rev)


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
//     dequeu(){
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
// }
// let jaavad=new queue()
// jaavad.enqueue(10)
// jaavad.enqueue(20)
// jaavad.enqueue(30)
// jaavad.dequeu()
// jaavad.display()


// mergesort
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
// arr=[5,4,3,8,7,1]
// console.log(mergesort(arr))

// qucik

// function quicksort(arr){
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
//             right.push(arr[i])
//         }
       
//     }
//     return[...quicksort(left),pivot,...quicksort(right)]
// }
// let arr=[4,6,2,1,9,8]
// console.log(quicksort(arr))


// stack2q

// class stack2q{
//     constructor(){
//         this.arr1=[]
//         this.arr2=[]
//         this.size=0
//     }
//     push(data){
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
//     pop(){
//        return this.arr1.pop()
//     }

// }
// let jaavad=new stack2q()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.display()
// jaavad.changetoq()
// jaavad.pop()
// jaavad.display()

// hashtable
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
//         if(!this.table[index]){
//             this.table[index]=value
//         }else{
//             let i=(index)+1%this.size
//             while(i!=index && this.table[i]){
//                 i=(i+1)%this.size
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
// let javd=new hashTable(70)
// javd.set("name","javad")
// javd.set("age","21")
// javd.display()
// console.log(javd.get("name"))

// insertion sort 6:25

// function insertion(arr){
//     let i=0;
//     while(i<arr.length){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//         i++
//     }
//     return arr
// }
// let arr=[6,4,2,7,7,1]
// console.log(insertion(arr))


// class staccck{
//     constructor(arr){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//         this.arr.pop()
//     }
//     display(){
//         console.log(this.arr)
//     }
    
// }
// let jaavad=new staccck()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.display()







// function bubblesort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1-i;j++){
//             while(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     return arr
// }
// arr=[5,4,7,2,1]
// console.log(bubblesort(arr))

// ------------------------------------------------

// function selectionsort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             while(arr[i]>arr[j]){
//                 let temp=arr[j]
//                 arr[j]=arr[i]
//                 arr[i]=temp
//             }
//         }
//     }
//     return arr
// }
// arr=[5,4,7,2,9]
// console.log(selectionsort(arr))

// -----------------------------------------------

// function insertionsort(arr){
//     let i=0
//     while(i<arr.length){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//         i++
//     }
//     return arr;
// }
// arr=[5,4,7,6,1,9]
// console.log(insertionsort(arr))

// --------------------------------------------------

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
//             right.push(arr[i])
//         }
//     }
//     return[...quicksort(left),pivot,...quicksort(right)]
// }
// let arr=[5,4,7,1,9,3]
// console.log(quicksort(arr))


// ----------------------------------------------

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
//     let i=0;
//     let j=0;
//     let k=0;
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
// let arr=[6,7,3,9,1]
// console.log(mergesort(arr))

// ---------------------------------------

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
//             temp=temp.next
//         }
//     }
// }
// let javaadli=new stack()
// javaadli.push(10)
// javaadli.push(20)
// javaadli.push(30)
// javaadli.pop()
// javaadli.display()

// ------------------------------------------------

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


// ---------------------------------------------

// class stack{
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
// let stringrev=new stack()
// let string="javad"
// for(i=0;i<string.length;i++){
//     stringrev.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=stringrev.pop()
// }
// console.log(rev)

// -------------------------------------------------

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


// ---------------------------------------------------

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
//     pop(){
//         return this.arr2.pop()
//     }
// }
// let javaadli=new stack2q()
// javaadli.push(10)
// javaadli.push(20)
// javaadli.push(30)
// javaadli.display()
// javaadli.changetoq()
// javaadli.pop()
// javaadli.display()

// ---------------------------------------------

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
//          return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=value
//         }else{
//             let i=(index)+1%this.size
//             while(i!=index &&this.table[i] ){
//                 i=(i+1)%this.size
//             }
//            return this.table[i]=value
//         }
//     }
//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         let index=this.hash(key)
//          this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let jaavad=new hashTable(70)
// jaavad.set("name","javad")
// jaavad.set("name","jaaaaavad")
// jaavad.set("age","21")
// jaavad.display()
// console.log(jaavad.get("name"))



// set(key,value){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         this.table[index]=[];
//     }
//     this.table[index].push({key,value})
// }

// get(key){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         return undefined
//     }
//     for(let item of this.table[index]){
//         if(item.key===key){

//         }
//     }
//     return undefined
// }

// set(key,value){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         this.table[index]=[]
//     }
//     this.table[index].push({key,value})
// }
// get(key){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         return undefined;
//     }
//     for(let item of this.table[index]){
//         if(item.key===key){
//             return item.value
//         }
//     }
//     return undefined;
// }


// class hashTable{()
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//       let total=0
//       for(let i=0;i<key.length;i++){
//         total+=key.charCodeAt(i)
//       } 
//       return total%this.size
//     }
//     set(key,value){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             this.table[index]=[];
//         }
//         this.table[index].push({key,value})
//     }
//     get(key){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             return undefined
//         }
//         for(let item of this.table[index]){
//             if(item.key===key){
//                 return item.value
//             }
//             return undefined
//         }
//     }
  
    
//     remove(key){
//         let index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let jaaaaavad=new hashTable(70)
// jaaaaavad.set("name","javad")
// jaaaaavad.set("name","21")
// jaaaaavad.display()
// console.log(jaaaaavad.get("name"))



// function quickSort(arr){
//     quickSortnew(arr,0,arr.length-1)
//     return arr
// }
// function quickSortnew(arr,start,end){
//     if(start>=end){
//         return
//     }
//     let pivot=start
//     let left=start+1
//     let right=end

//     while(left<=right){
//         while(left<=right && arr[left]<arr[pivot]){
//             left++
//         }
//         while(left<=right && arr[right]>arr[pivot]){
//             right--
//         }
//         if(left<=right){
//             swap(arr,left,right)
//                 left++
//                 right--
            
//         }

//     }
//     swap(arr,right,pivot)
//     quickSortnew(arr,start,right-1)
//     quickSortnew(arr,right+1,end)
// }
// function swap(arr,left,right){
//     let temp=arr[left]
// }


// function quickSort(arr){
//     quickSortnew(arr,0,arr.length-1)
//         return arr
//     }


// function quickSortnew(arr,start,end){
//     if(end<=start){
//         return
//     }

//     let pivot =start
//     let left=start+1
//     let right=arr.length-1
//     while(left<=right){
//         while(arr[left]<arr[pivot]){
//             left++
//         }
//         while(arr[right]>arr[pivot]){
//             right--
//         }
//         if(left<=right){
//             swap(arr,left,right)
//             left++
//             right--
//         }
//     }
//     swap(arr,right,pivot)
//     quickSortnew(arr,start,right-1)
//     quickSortnew(arr,end,right+1)
// }
// function swap(arr,left,right){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp
// }
// let arr=[5,6,3,2,9]
// console.log(quickSort(arr))


// function quciksort(arr){
//     quciksortnew(arr,0,arr.length-1)
//     return arr
// }
// function quciksortnew(arr,start,end){
//     if(end<=start){
//         return;
//     }
//     let pivot=start
//     let left=start+1
//     let right=end

//     while(left<=right){
//         while(arr[left]<arr[pivot]){
//             left++
//         }
//         while(arr[right]>arr[pivot]){
//             right--
//         }
//         if(left<=right){
//             swap(arr,left,right)
//             left++
//             right--
//         }
//     }
    
//     swap(arr,right,pivot)
//     quciksortnew(arr,right-1,start)
//     quciksortnew(arr,right+1,end)
// }
// function swap(arr,left,right){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp
// }
// let arr=[5,3,8,7,1]
// console.log(quciksort(arr))


// function quicksort(arr) {
//     quicksortnew(arr, 0, arr.length - 1);
//     return arr;
//   }
  
//   function quicksortnew(arr, start, end) {
//     if (end <= start) {
//       return;
//     }
    
//     let pivot = start;
//     let left = start + 1;
//     let right = end;
    
//     while (left <= right) {
//       while (arr[left] < arr[pivot]) {
//         left++;
//       }
//       while (arr[right] > arr[pivot]) {
//         right--;
//       }
//       if (left <= right) {
//         swap(arr, left, right);
//         left++;
//         right--;
//       }
//     }
    
//     swap(arr, right, pivot);
//     quicksortnew(arr, start, right - 1);
//     quicksortnew(arr, right + 1, end);
//   }
  
//   function swap(arr, left, right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//   }
  
//   let arr = [5, 3, 8, 7, 1];
//   console.log(quicksort(arr));
  

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
//     change2q(){
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
// let javd=new stack2q()
// javd.push(10)
// javd.push(20)
// javd.push(30)
// javd.display()
// javd.change2q()
// javd.display()



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
//             this.table[index]=[]
//         }
//         this.table[index].push({key,value})
        
//     }

//     get(key){
//         let index=this.hash(key)
//         if(!this.table[index]){
//             return undefined
//         }
//         for(let item of this.table[index]){
//             if(this.key===key){
//                 return item.value
//             }
//             return undefined
//         }
//     }
//     remove(key){
//         let index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// let hashh=new hashtable(70)
// hashh.set("naem","javaaad")
// hashh.set("name","javad")
// hashh.set("age","21")
// hashh.display()



// class stack{
//     constructor(){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//         this.arr.pop()
//     }
//     display(){
//         console.log(this.arr)
//     }
// }
// let jaavd=new stack()
// jaavd.push(10)
// jaavd.push(20)
// jaavd.push(30)
// jaavd.display()


// class staccck{
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
//     dispaly(){
//         console.log(this.arr)
//     }
// }
// let jaaaaavad=new staccck()
// jaaaaavad.push(10)
// jaaaaavad.push(20)
// jaaaaavad.push(30)
// jaaaaavad.delete()
// jaaaaavad.dispaly()


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
// let jaavad=new staccck()
// let string="javad"
// for(i=0;i<string.length;i++){
//     jaavad.push(string[i])
// }
// let rev=""
// for(i=0;i<string.length;i++){
//     rev+=jaavad.pop()

// }
// console.log(rev)


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
// let arr=[5,4,3,8,1]
// console.log(mergesort(arr))