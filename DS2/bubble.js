// function BubbleSort(ar) {
//     for ( i = 0; i < ar.length; i++) {
//         for (j = i; j < ar.length-1-i; j++) {
//             if (ar[i] > ar[j + 1]) {
//                 let temp = ar[i]
//                 ar[i] = ar[j + 1]
//                 ar[j + 1] = temp
//             }
//         }
//     }
//     return ar
// }   

// ar = [8, 50, 4, 6]

// console.log(BubbleSort(ar));




// function BubbleSort(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i;j<arr.length;j++){
//             if(arr[i]>arr[j+1]){
//                 let temp =arr[i]
//                 arr[i]=arr[j+1]
//                 arr[+1]=temp
//             }
//         }
//     }
//     return arr
// }
// let arr=[3,4,3,2,4,5,7]
// console.log(BubbleSort(arr))



// let arr=[3,4,2,2,7,6,4,33,2,1,]
// function BubbleSort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]= arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
// }
// BubbleSort(arr)

// console.log(arr)



// // let arr = [4, 53, 65, 34, 64, 75.43];
// // function bubbleSort(arr){
// //     for(i=0;i<arr.length-1;i++){
// //         for(j=0;j<arr.length-1-i;j++){
// //             if(arr[j]>arr[j+1]){
// //                 let temp=arr[j]
// //                 arr[j]=arr[j+1]
// //                 arr[j+1]=temp
// //             }
// //         }
// //     }
// // }
// // bubbleSort(arr)
// // console.log(arr)




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
// let arr=[4,3,2,7,6,1]
// console.log(bubblesort(arr))


// function mergesort(arr){
//     let middle=math.floor(arr.length/2)
//     let firsthalf=arr.slice(0,middle)
//     let secondhalf=arr.slice(middle)
//     return joinarr(mergesort(firsthalf),mergesort(secondhalf)                                                                                                           )

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
//     while( j<secondhalf.length){
//         newarr[k++]=secondhalf[j++]

//     }
// }

