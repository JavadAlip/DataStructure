

// function mergesort(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     }

//     let middleidx = Math.floor(arr.length / 2)
//     let firsthalf = arr.slice(0, middleidx)
//     let lasthalf = arr.slice(middleidx)




//     return joinarr(mergesort(firsthalf), mergesort(lasthalf))

//     //first mergesort(firsthalf)  this function is working then after that mergesort(lasthalf)  this function is working 

//     // this is a ricresive function it is calling to itself it is know recurtion //
// }


// function joinarr(firsthalf, lasthalf) {
//     let newarr = []
//     let i = 0
//     let j = 0
//     let k = 0

//     while (i < firsthalf.length && j < lasthalf.length) {

//         if (firsthalf[i] <= lasthalf[j]) {
//             newarr[k++] = firsthalf[i++]
//         } else {
//             newarr[k++] = lasthalf[j++]
//         }
//     }

//     while (i < firsthalf.length) {
//         newarr[k++] = firsthalf[i++]
//     }

//     while (j < lasthalf.length) {

//         newarr[k++] = lasthalf[j++]
//     }

//     return newarr
// }

// let Arr = [3, 2, 5, 4]
// console.log(mergesort(Arr));



function mergesort(arr) {
    if (arr.length <2) {
        return arr
    }

    let middle = Math.floor(arr.length / 2)
    let first = arr.slice(0, middle)
    let last = arr.slice(middle)

    return joinarr(mergesort(first), mergesort(last))
}

function joinarr(first, last) {
    let newarr = []
    let i = 0
    let j = 0
    let k = 0

    while (i < first.length && j < last.length) {
        if (first[i] < last[j]) {
            newarr[k++] = first[i++]
        } else {
            newarr[k++] = last[j++]
        }
    }
    while (i < first.length) {
        newarr[k++] = first[i++]
    }
    while (j < last.length) {
        newarr[k++] = last[j++]
    }
    return newarr
}
let arr = [3, 5, 2, 9, 1]
console.log(mergesort(arr))


// let arr=[9,22,1,8,2]
// function quickSort(arr){
//     quicksortHelper(arr,0,arr.length-1)
//     return arr;
 
// }
// function quicksortHelper(arr,start,end){
//     if(start>=end){
//         return
//     }
//     let pivot=start
//     let left=start+1
//     let right=end

//     if(left<=right){
//         while(arr[left]<arr[pivot]){
//             left ++
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
//     quicksortHelper(arr,start,right-1)
//     quicksortHelper(arr,end,right+1)
// }
//     function swap(arr,left,right){
//         let temp=arr[left]
//         arr[left]=arr[right]
//         arr[right]=temp
    

// }
// console.log(quickSort(arr))