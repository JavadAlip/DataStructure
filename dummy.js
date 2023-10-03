// let array=[3,4,5,6,7]
// function binarysearch(array,target){
//     let start=0
//     let end=array.length-1
//     while(start<=end){
//         let middle=Math.floor((start+(end-start/2)))
//         if(array[middle]==target){
//             return middle;
//         }
//         else if (array[middle]<target){
//             start=middle+1
//         }
//         else if (array[middle]>target){
//             end=middle-1
//         }

//     }
//     return "not found"

// }
// console.log(binarysearch(array,76));



               // pop----------
// var a=[1,2,3,4]
// var addd=a.push()
// console.log(addd)
// console.log(a)

                // unshift=------
// var a=[12,3,2,2,2,1]
// var neew=a.unshift()
// console.log(a)

               // reduce-----------
// var a=[1,2,3,4]
// var redd=a.reduce(function(num1,num2){
//     num3=num1+num2
//     return num3
// })
// console.log(redd)

                // forEach-----------
// var a=[1,2,3,4]
// var b=a.forEach(function(b){
//     console.log(b)
// })
                //  filter-----------
// var a=[2,3,4,1,5,7]
// var neww=a.filter(function(a){
//     return a%2==0
// })
// console.log(neww)
                // map----------------
// var a=[1,2,3,4,5]
// var mapp=a.map(function(mapp){
//     return mapp*mapp
// })
// console.log(mapp)

                // sort--------------

// var num=[1,3,5,4,2]
// num.sort();
// console.log(num)

                // slice-----------
// var a=[3,5,4,1,2]
// var slliice=a.slice(1,5)
// console.log(slliice)

               // reverse--------
// var a=[12,3,4,5,7]
// var rev=a.reverse()
// console.log(rev)



// ----------string methods-------------

// const first='JAVAD'
// const upper=first.toLowerCase()
// console.log(upper)

let text = "Hello World!           ";
let result = text.trimEnd()
console.log(result)