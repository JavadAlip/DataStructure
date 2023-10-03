
class graph{
    constructor(){
        this.graph=new Map()
    }
    addvertex(data){
        this.graph.set(data,new Array())
    }
    insert(vertex,edge,isbi=false){
        if(!this.graph.has(vertex)){
            this.addvertex(vertex)
        }
        if(!this.graph.has(edge)){
            this.addvertex(edge)
        }
        if(!this.graph.get(vertex).includes(edge)){
            this.graph.get(vertex).push(edge)
        }if(isbi){
            if(!this.graph.get(edge).includes(vertex)){
                this.graph.get(edge).push(vertex)
            }
        }
    }
    display(){
        console.log(this.graph)
    }
}
let java=new graph()
java.insert(3,4)
java.insert(1,4)
java.display()