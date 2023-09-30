class stack2q{
    constructor(){
        this.arr1=[]
        this.arr2=[]
        this.size=0
    }
    push(data){
        this.arr1.push(data)
        this.size++
    }
    changetoq(){{
        while(this.size>0){
            this.arr2.push(this.arr1.pop())
            this.size--
        }
    }}
    display(){
        console.log(this.arr1)
        console.log(this.arr2)
    }
}
let javaadli=new stack2q()
javaadli.push(10)
javaadli.push(20)
javaadli.push(30)
javaadli.display()
javaadli.changetoq()
javaadli.display()
