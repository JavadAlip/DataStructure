
// function insertionSort(arr) {
//     let n = arr.length
//     for (let i = 1; i < n; i++) {
//         var key = arr[i]
//         var j = i - 1
//         while (arr[j] > key && j >= 0) {
//             arr[j + 1] = arr[j]
//             j--;
//         }
//         arr[j + 1] = key
//     }
//     return arr;
// }

// arr = [1, 4, 3, 2,5]
// console.log(insertionSort(arr))



// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         var current =arr[i]
//         var j=i-1;
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// arr=[1,2,4,34,6]
// console.log(insertionSort(arr))



// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         var current=arr[i]
//         var j=i-1
//         while(j>=0&&arr[j]>=current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// let arr=[2,3,1,47,7]
// console.log(insertionSort(arr))


// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         var current=arr[i]
//         var j=i-1
//         while(j>=0 && arr[j]>=current){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// let arr=[2,4,1,5,7]
// console.log(insertionSort(arr))


// function insertionSort(arr){
//     for (i=0; i<arr.length;i++){
//         var current=arr[i]
//         var j=i-1
//         while (j>=0 && arr[j]>=current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
// }
// let arr=[2,3,5,2,5,5,33]
// console.log(insertionSort(arr))



// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         var current=arr[i]
//         var j=i-1

//         while(j>=0 && arr[j]>current){
//         arr[j+1]=arr[j]
//         j--
//         }
//         arr[j+1]=current
//     }
//     return arr;
// }
// let arr=[2,3,4,3,5,3,2]
// console.log(insertionSort(arr))



// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         var current=arr[i]
//         var j= i-1
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
//     return arr
   
// }
// let arr=[5,1,2,8,9]

// console.log( insertionSort(arr))


// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=current
//     }
// }
// let arr=[2,6,54,1,9]
// insertionSort(arr)
// console.log(arr)

// function insertionSort(arr){
//     for(i=0;i<arr.length;i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//     }
// }
// let arr=[4,5,2,1,8]
// insertionSort(arr)
// console.log(arr)

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
//         }else{
//             if(arr[i]>pivot){
//                 right.push(arr[i])
//             }
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
// }
// const arr=[3,4,2,1,7,6]
// console.log(quickSort(arr))




// function insertionSort(arr){
//     let i=0
//     while(i<arr.length){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>current){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=current
//         i++
      
//     }
// }
// let arr=[7,6,4,9,2,6]
// insertionSort(arr)
// console.log(arr)


function insertionSort(arr){
    for(i=0;i<arr.length;i++){
        let current=arr[i]
        let j=i-1
        while(j>=0 &&arr[j]>current){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
        
    }
    return arr
   
}
let arr=[5,4,3,2,8]
console.log(insertionSort(arr))