// let arr = [3, 9, 2, 8, 7, 6]
// function quicksort(arr) {
//     quicksorthelper(arr, 0, arr.length - 1)
// }
// function quicksorthelper(arr, start, end) {
//     if (start >= end) {
//         return
//     }
//     let pivotidx = start
//     let leftidx = start + 1
//     let rightidx = end
//     while (leftidx <= rightidx) {
//         if (arr[leftidx] > arr[pivotidx] && arr[rightidx] < arr[pivotidx]) {

//             swap(arr, leftidx, rightidx)
//             leftidx = leftidx + 1;
//             rightidx = rightidx - 1;
//         }
//         if (arr[leftidx] <= arr[pivotidx]) {

//             leftidx = leftidx + 1
//         }
//         if (arr[rightidx] >= arr[pivotidx]) {

//             rightidx = rightidx - 1;
//         }
//     }
//     swap(arr, pivotidx, rightidx)
//     quicksorthelper(arr, start, rightidx - 1)
//     quicksorthelper(arr, rightidx + 1, end)



// }


// function swap(arr, i, j) {

//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp

// }

// quicksort(arr)

// console.log(arr);



// let arr = [6, 5, 3, 222, 1];

// function quicksort(arr) {
//   quicksorthelper(arr, 0, arr.length - 1);
//   return arr; // Return the sorted array
// }

// function quicksorthelper(arr, start, end) {
//   if (start >= end) {
//     return;
//   }
//   let pivot = start;
//   let left = start + 1;
//   let right = end;

//   while (left <= right) {
//     if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
//       swap(arr, left, right);
//       left = left + 1;
//       right = right - 1;
//     }

//     if (arr[left] <= arr[pivot]) {
//       left = left + 1;
//     }
//     if (arr[right] >= arr[pivot]) {
//       right = right - 1;
//     }
//   }
//   swap(arr, pivot, right);
//   quicksorthelper(arr, start, right - 1);
//   quicksorthelper(arr, end, right + 1);
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// console.log(quicksort(arr));




// let arr=[3,47,7,1,09]
// function quickSort(arr){
// quicksortHelper(arr,0,arr.length-1)
//   return arr
// }

// function quicksortHelper(arr,start,end){
//   if(start>=end){
//     return
//   }
//   let pivot=start
//   let left=start+1
//   let right=end

//   if(left<=right){
//     while(arr[left]<arr[pivot]){
//         left++
//     }
//     while(arr[right]>arr[pivot]){
//         right--
//     }
//     if(left<=right){
//       swap(arr,left,right)
//       left++
//       right--
//     }
//   }
//   swap(arr,right,pivot)
//   quicksortHelper(arr,start,right-1)
//   quicksortHelper(arr,end,right+1)
// }

// function swap(arr,left,right){
//   let temp=arr[left]
//   arr[left]=arr[right]
//   arr[right]=temp
// }

// console.log(quickSort(arr));



// function quicksortHelper(arr,start,end){
//   if(start>=end){
//     return
//   }
//   let pivot=start
//   let left=start+1
//   let right=end

//   if(left<=right){
//     while(arr[left]<arr[pivot]){
//       left++
//     }
//     while(arr[right]>arr[pivot]){
//       right--
//     }
//     swap(arr,left,right)
//       left++
//       right--
//   }
//   }

//   swap(arr,right,pivot)
//   quicksortHelper(arr,start,right-1)
//   quicksortHelper(arr,end,right+1)
//   function swap(arr,right,left){
//     let temp=arr[left]
//     arr[left]=arr[right]
//     arr[right]=temp
//   }

// }
// console.log(quicksort(arr))




// function quicksort(arr){
//   if(arr.length<2){
//     return arr
//   }
//   let pivot=arr[arr.length-1]
//   let left=[]
//   let right=[]
//   for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return[...quicksort(left),pivot,...quicksort(right)]
// }
// const arr=[8,20,-2,4,-6]
// console.log(quicksort(arr))


// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function partition(arr, low, high) {
//   const pivot = arr[high];
//   let i = low;

//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       if (i !== j) {
//         swap(arr, i, j);
//       }
//       i++;
//     }
//   }

//   swap(arr, i, high);
//   return i;
// }

// function quicksort(arr, low, high) {
//   if (low < high) {
//     const pi = partition(arr, low, high);
//     quicksort(arr, low, pi - 1);
//     quicksort(arr, pi + 1, high);
//   }
// }

// const arr = [8, 20, -2, 4, -6];
// quicksort(arr, 0, arr.length - 1);
// console.log(arr);


// class stack{
//   constructor(arr){
//     this.arr=[]
//   }
//   push(data){
//     this.arr.push(data)
//   }
//   pop(){
//     this.arr.pop()
//   }
//   display(){
//     console.log(this.arr)
//   }
//   peek(){
//     console.log(this.arr[this.arr.length-1])
//   }


// }
// let jaavad=new stack()
// jaavad.push(10)
// jaavad.push(20)
// jaavad.push(30)

// jaavad.peek()
// jaavad.display()





// let arr = [6, 5, 42, 1, 9, 2];

// function quickSort(arr) {
//   quicknewSort(arr, 0, arr.length - 1);
//   return arr;
// }

// function quicknewSort(arr, start, end) {
//   if (start >= end) {
//     return;
//   }

//   let pivot = start;
//   let left = start + 1;
//   let right = end;

//   if (left <= right) {
//     while (left <= right && arr[left] < arr[pivot]) {
//       left++;
//     }
//     while (left <= right && arr[right] > arr[pivot]) {
//       right--;
//     }
//     if (left <= right) {
//       swap(arr, left, right);
//       left++;
//       right--;
//     }
//   }
//   swap(arr, right, pivot);
//   quicknewSort(arr, start, right - 1);
//   quicknewSort(arr, right + 1, end);
// }

// function swap(arr, left, right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
// }

// console.log(quickSort(arr));



// function quciksort(arr){
//     quciksortnew(arr,0,arr.length-1)
//     return arr
// }
// function quciksortnew(arr,start,end){
//     if(start>=end){
//         return
//     }
//     let pivot=start
//     let left=start+1
//     let right=end

//     while(left<=right){
//         while(left<=right && arr[left]<arr[pivot]){
//             left ++
//         }
//         while(left <=right && arr[right]>arr[piovt]){
//         right--
//         }
    
//     if(left<=right){
//         swap(arr,left,right)
//             left++
//             right--
//         }
//     }
//     swap(arr,left,pivot)
//     quciksortnew(arr,start,right-1)
//     quciksortnew(arr,end,right+1)
// }

// function swap(arr,left,right){
//     let temp=arr[left]
//     arr[left] = arr[right];
//   arr[right] = temp;
// }
// let arr = [6, 5, 42, 1, 9, 2];
// console.log(quicksort(arr));



function quciksort(arr){
    quicksortnew(arr,0,arr.length-1)
    return arr;
}
function quicksortnew(arr,start,end){
    if(start>=end){
        return
    }
    let pivot=start
    let left=start+1
    let right=end
    while(left<=right){
        while(arr[left]<arr[pivot]){
            left++
        }
        while(arr[right]>arr[pivot]){
            right--
        }
        if(left<=right){
            mmmmm(arr,left,right)
            left++
            right--
        }
    }
    mmmmm(arr,right,pivot)
    quicksortnew(arr,right-1,start)
    quicksortnew(arr,right+1,end)

}
function mmmmm(arr,left,right){
    let temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp

}
let arr=[5,4,7,1,6]
console.log(quciksort(arr))