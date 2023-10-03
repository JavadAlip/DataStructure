// function isParenthesesMatching(str) {
//     const stack = [];
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
  
//       if (char === '(') {
//         stack.push(char);
//       } else if (char === ')') {
//         if (stack.length === 0) {
//           return false;
//         }
//         stack.pop();
//       }
//     }
  
//     return stack.length === 0;
//   }
  
//   // Testing the function
//   console.log(isParenthesesMatching('(())')); 
//   console.log(isParenthesesMatching('(()')); 
//   console.log(isParenthesesMatching(')(')); 
//   console.log(isParenthesesMatching('))((')); 
  



  // function isParenthesesMatching(string){
  //   const stack=[];
  //   for(let i=0;i<string.length;i++){
  //     const char=string[i];

  //     if(char==='('){
  //       stack.push(char)
  //     }else if(char===')'){
  //       if(stack.length===0){
  //         return false;
  //       }
  //       stack.pop()
  //     }
  //   }
  //   return stack.length===0;
  // }
  // console.log(isParenthesesMatching('(())')); 
  // console.log(isParenthesesMatching('(()')); 


// function isParenthesesMatching(string){
//   const stack=[]
//   for(i=0;i<string.length;i++){
//     const char=string[i]
//     if(char==='('){
//       stack.push(char)

//     }else if(char===')'){
//       if(stack.length===0){
//         return false;
//       }
//       stack.pop()
//     }
//   }
//   return stack.length===0;
// }
// console.log(isParenthesesMatching('((())'))



// function isParenthesesMatching(string){
//   const stack=[]
//   for(i=0;i<string.length;i++){
//     const char=string[i]

//     if(char==='('){
//       stack.push(char)
//     }
//     else if(char===')'){
//       if(string===0){
//         return false
//       }
//       stack.pop()

//     }
//   }
//   return stack.length===0;
// }

// function isParenthesesMatching(string){
//   const stack=[]
//   for(i=0;i<string.length;i++){
//     const char=string[i]
//     if(char===''){
//       stack.push(char)

//     }else if(char===')'){
//       if(stack.length===0){
//         return false
//       }
//       stack.pop()
//     }
//   }
//   return stack.length===0

// }
// console.log(isParenthesesMatching('(())'))



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
// console.log(isParenthesesMatching('(())'))



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
var arr=[4,3,6,5,1,7]
alternateSort(arr)