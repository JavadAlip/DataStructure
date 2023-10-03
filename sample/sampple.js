// class stack{
//     constructor(arr){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     display(){
//         console.log(this.arr)
//     }
//     pop(){
//         this.arr.pop()
//     }
// }
// let stackusearray=new stack()
// stackusearray.push(10)
// stackusearray.push(20)
// stackusearray.push(30)
// stackusearray.pop()
// stackusearray.display()



function mergesort(arr){
    let middle=Math.floor(arr.length/2)
    let firsthalf=arr.slice(0,middle)
    let secondhalf=arr.slice(middle)
    return joinarr(mergesort(firsthalf),mergesort(secondhalf))
}
function joinarr(firsthalf,secondhalf){
    let newarr=[]
    let i=0
    let j=0
    let k=0
    while(i<firsthalf.length && j<secondhalf.length){
        if()
    }

}


