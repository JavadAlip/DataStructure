// function alternateSort(arr) {
//     arr.sort(function(a, b) {
//       return a - b;
//     });
//     var i = 0;
//     var j = arr.length - 1;
//     while (i < j) {
//       console.log(arr[j--]);
//       console.log(arr[i++]);
//     }

//     if (arr.length % 2 !== 0) {
//       console.log(arr[i]);
//     }
//   }
//   var arr = [1, 12, 4, 6, 7, 10];
//   alternateSort(arr);
  



// function alternateSort(arr){
//     arr.sort(function(a,b){
//         return a-b
//     })
//     var i=0;
//     var j=arr.length-1
//     while(i<j){
//         console.log(arr[j--])
//         console.log(arr[i++])
//     }if(arr.length%2!==0){
//         console.l
//     }
// }

// function isParenthesesMatching(string){
//   const stack=[]
//   for(i=0;i<string.length;i++){
//     const char=string[i]
//     if(char==='('){
//       stack.push(char)
//     }
//     else if(char===')'){
//       if(string.length===0){
//         return false
//       }
//       stack.pop()
//     }
//   }
//   return stack.length===0

// }
// console.log(isParenthesesMatching('(('))

function alternateSort(arr){
  arr.sort(function(a,b){
    return a-b
  })
  var i=0
  var j=arr.length-1
  while(i<j){
    console.log(arr[j--])
    console.log(arr[i++])
  }if(arr.length%2!==0){
    console.log(arr[i])
  }
}