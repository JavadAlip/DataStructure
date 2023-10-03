class Hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total% this.size
    }
    set(key,value){
        let index=this.hash(key)
        this.table[index]=value

    }
    get (key){
        let index=this.hash(key)
        return this.table[index]

    }
    remove(key){
        let index=this.hash(key)
        return this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }

        }
    }
}
let table=new Hashtable(50)
table.set("namejajae","javad")
table.set("age","21")
table.display()


// // class hashTable{
// //     constructor(size){
// //         this.table=new Array(size)
// //         this.size=size
// //     }
// //     hash(key){
// //         let total=0
// //         for(let i=0;i<key.length;i++){
// //             total+=key.charCodeAt(i)
// //         }
// //         return total%this.size
// //     }
// //     set(key,value){
// //         let index=this.hash(key)
// //         this.table[index]=value
// //     }
// //     get(key){
// //         let index=this.hash(key)
// //         return this.table[index]
// //     }
// //     remove(key){
// //         let index=this.hash(key)
// //         return this.table[index]=undefined
// //     }
// //     display(){
// //         for(let i=0;i<this.table.length;i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i]);
// //             }
// //         }
// //     }

// // }

// // let hashtable=new hashTable(50)
// // hashtable.set("name","aswin")
// // hashtable.set("age","21")
// // hashtable.remove("age")
// // hashtable.display()
// // console.log(hashtable.get("name"));


// // class Hashtable{
// //     constructor(size){
// //         this.size=new Array(size)
// //         this.size=size
// //     }
// //     hash(key){
// //         let total=0
// //         for(i=0;i<key.length;i++){
// //             total+= key.charCodeAt(i)
// //         }
// //         return total% this.size
// //     }
// //    set(key,value){
// //     let index=this.hash(key)
// //     this.table[index]=value

// //    }
// //    get(key){
// //     let index=this.hash(key)
// //     return this.table[index]
// //    }
// //    remove(key){
// //     let index=this.hash(key)
// //     return this.table[index]=undefined
// //    }
// //    display(){

// //    }
   
// // }

// // class Hashtable{
// //     constructor(size){
// //         this.table=new Array(size)
// //         this.size=size
// //     }
// //     hash(key){
// //         let total=0
// //         for(i=0;i<key.length;i++){
// //             total+=key.charCodeAt(i)
// //         }
// //         return total%this.size
// //     }
// //     set(key,value){
// //         let index=this.hash(key)
// //         this.table[index]=value
// //     }
// //     get(key){
// //         let index=this.hash(key)
// //         return this.table[index]
// //     }
// //     remove(key){
// //         let index=this.hash(key)
// //         return this.table[index]=undefined
// //     }
// // }

// // class Hashtable{
// //     constructor(size){
// //         this.table=new Array(size)
// //         this.size=size
// //     }
// //     hash(key){
// //         let total=0
// //         for(let i=0;i<key.length;i++){
// //             total+=key.charCodeAt(i)

// //         }
// //         return total%this.size

// //     }
// //     set(key,value){
// //         let index=this.hash(key)
// //         this.table[index]=value
// //     }
// //     get(key){
// //         let index=this.hash(key)
// //         return this.table[index]
// //     }
// //     remove(key){
// //         let index=this.hash(key)
// //         return this.table[index]=undefined
// //     }
// //     display(){
// //         for(let i=0;i<this.table.length;i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i])
// //             }
// //         }
// //     }
// // }
// // let table=new Hashtable(40)
// // table.set("name","javad")
// // table.set("age","20")

// // table.display()
// // console.log(table.get("name"))




// // class Hashtable{
// //     constructor(size){
// //         this.table=new Array(size)
// //         this.size=size
// //     }
// //     hash(key){
// //         let total=0
// //         for(let i=0;i<key.length;i++){
// //             total+=key.charCodeAt(i)
// //         }
// //         return total%this.size
// //     }
// //     set(key,value){
// //         let index=this.hash(key)
// //         this.table[index]=value
// //     }
// //     get(key){
// //         let index=this.hash(key)
// //         return this.table[index]
// //     }
// //     remove(key){
// //         let index=this.hash(key)
// //         return this.table[index]=undefined
// //     }
// //     display(){
// //         for( let i=0;i<this.table.length;i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i])
// //             }
// //         }
// //     }
// // }
// // let table=new Hashtable(30)
// // table.set("name","javad")
// // table.set("nae","javad")
// // console.log(table.get("name"))
// // table.display()



// // class Hashtable{
// //     constructor(size){
// //         this.table=new Array(size)
// //         this.size=size
// //     }
// //     Hash(key){
// //         let total=0
// //         for(let i=0;i<key.length;i++){
// //             total+=key.charCodeAt(i)
// //         }
// //         return total%this.size
// //     }
// //     set(key,value){
// //         let index=this.Hash(key)
// //         this.table[index]=value
// //     }
// //     get (key){
// //         let index=this.Hash(key)
// //         return this.table[index]
// //     }
// //     remove(key){
// //         let index=this.Hash(key)
// //         return this.table[index]=undefined
// //     }
// //     display(){
// //         for(let i=0;i<this.table.length;i++){
// //             if(this.table[i]){
// //                 console.log(i,this.table[i])
// //             }
// //         }
// //     }
// // }
// // let javad=new Hashtable(70)
// // javad.set("name","javad")
// // javad.set("age","29")
// // console.log(javad.get("name"))
// // javad.display()





// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(i=0;i<key.length;i++){
//             total+=charCodeAt(i)
//         }
//         return total%this.size

//     }
//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }
// }



// set(key,value){
//     let index=this.hash(key)
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

// set (key,value){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         this.table[index]=value
//     }else{
//         let i=(index)+1%this.size
//         while(i!=index&&this.table[i]){
//             i=(i+1)%this.size
//         }
//         this.table[i]=value
//     }
// }

// set(key,value){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         this.table[index]=value
//     }
//     else{
//         let i=(index)+1%this.size
//         while(i!=index&& this.table[i]){
//             i=(i+1)%this.size
//         }
//         this.table[i]=value
//     }
// }

// set(key,value){
//  let index=this.hash(key)
//  if(!this.table[index]){
//     this.table[index]=value
//  }
//  else{
//     let i=(index)+1%this.size
//     while(i!=index && this.table[i]){
//         i=(i+1)%this
//     }
//     this.table[i]=value
//  }
// }


// // set(key,value){
// //     let index=this.hash(key)
// //     if(!this.table[index]){
// //         this.table[index]=value
// //     }
// //     else{
// //         let i=(index)+1%this.size
// //         while(i!=index && this.table[i]){
// //             i=(i+1)%this.size
// //         }
// //         this.table[i]=value
// //     }
// // }

// set (key,value){
//     let index=this.hash(key)
//     if(!this.table[index]){
//         this.table[index]=value
//     }
//     else{
//         let i=(index)+1%this.size
//         while(i!=index && this.table[i]){
//              i=(i+1)%this.size
//         }
//         this.table[i]=value
//     }
// }


// set(key,value){
//     let index=this.table(key)
//     if(!this.table[index]){
//         this.table[index]=value
//     }
//     else{
//         let i=(index)+1%this.size
//         while(i!=index && this.table[i]){
//             i=(i+1)%this.size
//         }
//         this.table[i]=value
//     }
// }

// class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total += key.charCodeAt(i);
//       }
//       return total % this.size;
//     }
  
//     set(key, value) {
//       let index = this.hash(key);
  
//       if (!this.table[index]) {
//         this.table[index] = [];
//       }
  
//       this.table[index].push({ key, value });
//     }
  
//     get(key) {
//       let index = this.hash(key);
  
//       if (!this.table[index]) {
//         return undefined; // Key not found
//       }
  
//       for (let item of this.table[index]) {
//         if (item.key === key) {
//           return item.value; // Return the value if the key is found
//         }
//       }
  
//       return undefined; // Key not found in the array
//     }
  
//     remove(key) {
//       let index = this.hash(key);
//       this.table[index] = undefined;
//     }
  
//     display() {
//       for (let i = 0; i < this.table.length; i++) {
//         if (this.table[i]) {
//           console.log(i, this.table[i]);
//         }
//       }
//     }
//   }
  
//   let javad = new HashTable(70);
//   javad.set("name", "javad");
//   javad.set("age", "20");
//   javad.set("name", "javaali");
//   javad.display();
  
//   console.log(javad.get("name"));

  
  




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
// let hashh=new hashtable(70)
// hashh.set("namme","javad")
// hashh.set("name","javadd")
// hashh.get("age","17")
// hashh.display()
// console.log(hashh.get("namme"))


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
// let javaadli=new hashtable(80)
// javaadli.set("name","javad")
// javaadli.set("naame","javad")
// javaadli.display()
// console.log(javaadli.get("namhe","javaddddd"))



// function alternateSort(arr){
//     arr.sort(function(a,b){
//         return a-b
//     })
//     var i=0
//     var j=arr.length-1
//     while(i<j){
//         console.log(arr[j--])
//         console.log(arr[i++])
//     }
//     if(arr.length%2!==0){
//         console.log(arr[i])
//     }
// }
// var arr=[4,3,2,1,9,7]
// alternateSort(arr)


// function alternateSort(arr){
//     arr.sort(function(a,b){
//         return a-b;
//     })
//     var i=0
//     var j=arr.length-1
//     while(i<j){
//         console.log(arr[j--])
//         console.log(arr[i++])
//     }



//     if(arr.length%2!==0){
//         console.log(arr[i])
//     }
// }
// arr=[4,2,8,7,6,1]
// alternateSort(arr)


// function alternateSort(arr){
//     arr.sort(function(a,b){
//         return a-b
//     })
//     var i=0
//     var j=arr.length-1
//     while(i<j){
//         console.log(arr[j--])
//         console.log(arr[i++])
//     }
//     if(arr.length%2!==0){
//         console.log(arr[i])
//     }
// }
// let arr=[4,3,9,99,1]
// alternateSort(arr)



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
//                 console.log(this.table[i],i)
//             }
//         }
//     }
// }
// let javad= new hashTable(70)
// javad.set("name","javad")


// javad.display()
// console.log(javad.get("name"))




// // set(key,value);{
// //     let index=this.table(key)
// //     if(!this.table[index]){
// //         this.table[index]=value
// //     }
// //     else{
// //         let i=(index)+1%this.size
// //         while(i!=index&& this.table[i]){
// //             i=(i+1)%this.size
// //         }
// //         this.table[i]=value
// //     }
// // }




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

// }


// ------------------------------------------------------ seperate chaining in array-----------------------------------------------------
// separate chaining in array

// get(key) {
//     let index = this.hash(key);
  
//     if (!this.table[index]) {
//       return undefined; // Key not found
//     }
  
//     for (let item of this.table[index]) {
//       if (item.key === key) {
//         return item.value; // Return the value if the key is found
//       }
//     }
  
//     return undefined; // Key not found in the array
//   }

//   -------------------------------------------------------- seperate chaining in linkedlist-----------------------------------------------------

//   seperate chaining in linkedlist
//  get(key) {
//     let index = this.hash(key);
  
//     if (!this.table[index]) {
//       return undefined; // Key not found
//     }
  
//     let current = this.table[index].head;
//     while (current) {
//       if (current.key === key) {
//         return current.value; // Return the value if the key is found
//       }
//       current = current.next;
//     }
  
//     return undefined; // Key not found in the linked list
//   }
  



  
class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    get(key) {
      let index = this.hash(key);
      if (!this.table[index]) {
        return undefined; // Key not found
      }
      for (let item of this.table[index]) {
        if (item.key === key) {
          return item.value; // Return the value if the key is found
        }
      }
      return undefined; // Key not found in the array
    }
    
    remove(key) {
      let index = this.hash(key);
      this.table[index] = undefined;
    }
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }

  
  let javad = new HashTable(70);
  javad.set("name", "javad");
  javad.set("age", "20");
  javad.set("name", "javadali");
  javad.display();
  
  console.log(javad.get("name"));