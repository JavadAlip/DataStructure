// let array=[1,2,3,4,5,6,7]
// function binary(array,target,sIndex,endIndex){

//     let middle=Math.floor(sIndex+(endIndex-sIndex)/2)

//     if(array[middle]==target){
//         return middle

//     }
//     else if(array[middle]<target){
//         sIndex=middle+1
//         endIndex=array.length-1
//         return binary(array,target,sIndex,endIndex)
//     }
//     else if(array[middle]>target){
//          sIndex=0
//            endIndex=middle-1
//         return binary(array,target,sIndex,endIndex)
//     }
// }
// console.log(binary(array,4,0,array.length-1));

// ---------------------------------------------------

// let array=[1,2,3,4,5,6]
// function binarysearch(array,target,start,end){
//     let middle=Math.floor(start+(end-start/2))
//     if(array[middle]==target){
//         return middle;
//     }
//    else if(array[middle]<target){
//         start=middle+1
//         end=array.length-1
//         return binarysearch(array,target,start,end)
//     }
//     else if(array[middle]>target){
//         start=0
//         end=middle-1
//         return binarysearch(array,target,start,end)
//     }
// }
// console.log(binarysearch(array,4,0,array.length-1))

let array=[1,2,3,4,5]
function binarysearch(array,target,start,end){
    let middle=Math.floor(start+(end-start/2))
    if(array[middle]==target){
        return middle;

    }
    else if(array[middle]<target){
        start=middle+1
        end=array.length-1
        return binarysearch(array,target,start,end)
    }
    else if(array[middle]>target){
        start=0
        end=middle-1
        return binarysearch(array,target,start,end)
    }
}
console.log(binarysearch(array,4,0,array.length-1))

