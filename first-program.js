// let arr = [6, 5, 4, 3, 8, 0]
// let target = 11
// function twonumSum(arr, target) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return [arr[i], arr[j]]

//             }

//         }
//     }
// }
// console.log(twonumSum(arr,target));








// let arr=[1,2,3,4]
// let target=3
// function twonumSum(arr,target){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return[arr[i],arr[j]]
//             }
//         }
//     }
// }
// console.log(twonumSum(arr,target));












// ---------------another method----------------

// let arr = [1, 2, 3, 5, 4]
// let target = 3


// function sumtonum(arr, target) {
//     const my = new Set()
//     for (i = 0; i < arr.length; i++) {
//         num = arr[i];
//         match = target - num;
//         if (my.has(match)) {
//             return [match, num]
//         } else {
//             my.add(num)
//         }

//     }
//     return []
// }
// console.log(sumtonum(arr, target));

//  var numbers = [1, 2, 3, 4] // sums to 10
//     var Sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         Sum += numbers[i]
//     }




                                                              // unique------------
// const arr = [1, 2, 3, 3,3, 4,9, 4, 5,5];
// const uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (uniqueArr.indexOf(arr[i]) === -1) {
//     uniqueArr.push(arr[i]);
//   }
// }

// console.log(uniqueArr);


                                        //   find larget number-----------------------------------

                                        
const numbers = [14, 2, 7, 1, 5];
let largest = numbers[0]; 

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) { 
    largest = numbers[i]; 
  }
}

console.log(largest);








                                                 // array reverse---------------------------------
// let arr=[1,2,3,4,5]
// let arrarev=[];

// for (i=arr.length;i>=0;i--){
//     arrarev.push(arr[i])
// }
// console.log(arrarev);


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }

// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(data){
//         let newnode=new Node(data)
//             if(this.head==null){
//                 this.head=newnode
//             }
//             else{
//                 this.tail.next=newnode
//             }
//             this.tail=newnode
        
//     }

//     display(){
//         if(this.head==null){
//             console.log("empty")
//             return
//         }
//         let temp=this.head
//         while(temp!==null){
//             console.log(temp.data);
//             temp=temp.next;
//         }
//     }
//     delete(data){
//         let current=this.head
//         let prev=null
//         if(current!==null&& current.data==data){
//             current=current.next
//         }
//         while(current!==null && current.data!==data){
//             prev=current
//             current=current.next
//         }
//         prev.next=current.next

//     }

//     insert(next,data){
//         let newnode=new Node (data)
//         let current=this.head

//     while(current!=null&&current.data!=next){
//         current=current.next
//     }

//     }
// }
// let list=new linkedList()
// list.addnode(12)
// list.addnode(8)
// list.display()



