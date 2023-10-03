// class Stack {
//     constructor() {
//       this.stack = [];
//     }
  
//     push(data) {
//       this.stack.push(data);
//     }
  
//     pop() {
//       if (this.isEmpty()) {
//         console.log("Stack is empty");
//         return;
//       }
//       return this.stack.pop();
//     }
  
//     isEmpty() {
//       return this.stack.length === 0;
//     }
  
//     display() {
//       for (let i = this.stack.length - 1; i >= 0; i--) {
//         console.log(this.stack[i]);
//       }
//     }
//   }
  
//   let newStack = new Stack();
//   newStack.push(10);
//   newStack.push(20);
//   newStack.push(30);
//   newStack.pop();
//   newStack.display();

// class stack{
//   constructor(){
//     this.arr=[]
//   }
//   push(data){
//     this.arr.push(data) 
//   }
//   pop(){
//     this.arr.pop()
//   }
//   peek(){
//     console.log(this.arr[this.arr.length-1])
//   }
//   display(){
//     console.log(this.arr)
//   }
// }
// let jaavad=new stack()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)
// jaavad.peek()
// jaavad.pop()

// jaavad.display()



function quickSort(arr) {
  quicknewSort(arr, 0, arr.length - 1);
  return arr;
}

function quicknewSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while ( left <= right &&arr[left] < arr[pivot]) {
      left++;
    }
    while (left <= right && arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  swap(arr, right,pivot);
  quicknewSort(arr, start, right - 1);
  quicknewSort(arr,end,right + 1);
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
let arr = [12,5,7,1]
console.log(quickSort(arr));
