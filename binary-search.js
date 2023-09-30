let array=[1,2,3,4,5]
function binarysearch(array,target){
    let start=0
    let end=array.length-1
    while(start<=end){
        let middle=Math.floor(start+(end-start/2))
        if(array[middle]==target){
            return middle;
        }
        else if(array[middle]<target){
            start=middle+1
        }
        else if(array[middle]>target){
            end=middle-1
        }
    }
    return"not found"
}
console.log(binarysearch(array,3))

/////////////////////////////////////  another method ///////////////////////////////////

let array1=[1,2,3,4,5,6]
function binarysearch(array1,target,start,end){
    let middle=Math.floor(start+(end=start/2))
    if(array1[middle]==target){
        return middle
    }
    else if(array1[middle]<target){
        start=middle+1
        end=array1.length-1
     return binarysearch(array1,target,start,end)
        
    }
    else if(array1[middle]>target){
        start=0
        end=middle-1
        return binarysearch(array1,target,start,end)
    }
}
console.log(binarysearch(array1,4,0,array1.length-1))